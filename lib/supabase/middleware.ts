import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Rafraîchir la session si expirée
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Routes protégées - rediriger vers login si non connecté
  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Routes onboarding (accessibles uniquement si connecté)
  const onboardingRoutes = ['/onboarding'];
  const isOnboardingRoute = onboardingRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (isOnboardingRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Si l'utilisateur est connecté et accède au dashboard,
  // vérifier s'il a complété l'onboarding
  if (isProtectedRoute && user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('has_completed_onboarding')
      .eq('id', user.id)
      .single();

    // Si l'onboarding n'est pas complété, rediriger vers le quiz
    if (profile && !profile.has_completed_onboarding) {
      const url = request.nextUrl.clone();
      url.pathname = '/onboarding/quiz';
      return NextResponse.redirect(url);
    }
  }

  // Rediriger vers dashboard si déjà connecté et sur login/signup
  const authRoutes = ['/login', '/signup'];
  const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);

  if (isAuthRoute && user) {
    // Vérifier si l'onboarding est complété
    const { data: profile } = await supabase
      .from('profiles')
      .select('has_completed_onboarding')
      .eq('id', user.id)
      .single();

    const url = request.nextUrl.clone();
    
    if (profile && !profile.has_completed_onboarding) {
      url.pathname = '/onboarding/quiz';
    } else {
      url.pathname = '/dashboard';
    }
    
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

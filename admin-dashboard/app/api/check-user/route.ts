import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email') || 'najem.helmi.shop@outlook.com';
  
  try {
    const supabase = createAdminClient();
    
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('id, email, first_name, last_name, is_premium, subscription_status, subscription_tier, stripe_customer_id, created_at, updated_at')
      .eq('email', email)
      .single();
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    // Récupérer aussi les achats de cet utilisateur
    const { data: achats, error: achatsError } = await supabase
      .from('achats')
      .select('*')
      .eq('user_id', profile?.id)
      .order('created_at', { ascending: false });
    
    return NextResponse.json({
      profile,
      achats: achats || [],
      achatsError: achatsError?.message
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

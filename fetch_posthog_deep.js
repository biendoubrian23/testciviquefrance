process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const fs = require('fs');

async function fetchFromPostHog(endpoint) {
    const res = await fetch(`https://eu.posthog.com/api/projects/112119${endpoint}`, {
        headers: {
            'Authorization': 'Bearer phx_OjDDVnKLsGVfBOfrBpMSrERZlwEccmP5CLEEfKUlLOLWCkR'
        }
    });
    if (!res.ok) {
        console.error(`Error fetching ${endpoint}: ${res.statusText}`);
        return null;
    }
    return res.json();
}

async function deepDiveAnalyze() {
    console.log("=== POSTHOG DEEP DIVE ANALYSIS ===");

    // 1. All Unique Events Types over the last 30 days
    console.log("\n1. Fetching Top Events (Last 30 Days)");
    const eventsQuery = await fetchFromPostHog('/events/values/?key=event');
    console.log("Top Custom Events tracked:", eventsQuery?.map(e => e.name).filter(n => !n.startsWith('$')).join(', '));

    // 2. Fetch specific Funnel Data: Signup Flow
    // We will pull the raw events and simulate a funnel locally for speed, or pull events to see where drop-offs happen.
    console.log("\n2. Fetching recent events to trace user journeys...");
    const recentEvents = await fetchFromPostHog('/events/?limit=1000');
    
    let signupStarts = 0;
    let signupSubmits = 0;
    let signupCompletes = 0;
    
    let loginFails = 0;
    let loginSubmits = 0;
    
    let quizStarts = 0;
    let quizQuestions = 0;
    let quizCompletes = 0;
    let trainingCompletes = 0;
    let quizResults = 0;
    
    let activePersons = new Set();
    
    // Page views analysis
    const pageViews = {};

    if (recentEvents && recentEvents.results) {
        recentEvents.results.forEach(e => {
            activePersons.add(e.distinct_id);
            
            // Funnel Metrics
            if (e.event === 'signup_form_started') signupStarts++;
            if (e.event === 'signup_submitted') signupSubmits++;
            if (e.event === 'signup_completed') signupCompletes++;
            
            if (e.event === 'login_failed') loginFails++;
            if (e.event === 'login_submitted') loginSubmits++;
            
            if (e.event === 'quiz_started') quizStarts++;
            if (e.event === 'quiz_question_answered') quizQuestions++;
            if (e.event === 'quiz_completed') quizCompletes++;
            if (e.event === 'training_quiz_completed') trainingCompletes++;
            if (e.event === 'quiz_results_viewed') quizResults++;
            
            // Page Views (to see what is most popular)
            if (e.event === '$pageview' && e.properties && e.properties.$current_url) {
                try {
                    const url = new URL(e.properties.$current_url);
                    const path = url.pathname;
                    pageViews[path] = (pageViews[path] || 0) + 1;
                } catch (err) {}
            }
        });
    }

    console.log("\n--- USER JOURNEY METRICS (From last 1000 events) ---");
    console.log(`Unique Active Users in sample: ${activePersons.size}`);
    
    console.log("\nAuthentication Funnel:");
    console.log(`  Signup Starts: ${signupStarts}`);
    console.log(`  Signup Submits: ${signupSubmits}`);
    console.log(`  Signup Completes: ${signupCompletes}`);
    let signupConversionRate = signupStarts > 0 ? ((signupCompletes / signupStarts) * 100).toFixed(1) : 0;
    console.log(`  * Conversion Rate (Start -> Complete): ${signupConversionRate}%`);
    console.log(`  Logins Attempted: ${loginSubmits}`);
    console.log(`  Login Fails: ${loginFails}`);

    console.log("\nQuiz Engagement Funnel:");
    console.log(`  Quiz Started: ${quizStarts}`);
    console.log(`  Questions Answered: ${quizQuestions} (Avg ${(quizQuestions / (quizStarts || 1)).toFixed(1)} per start)`);
    console.log(`  Training Quiz Completed: ${trainingCompletes}`);
    console.log(`  Exam Quiz Completed: ${quizCompletes}`);
    console.log(`  Results Viewed: ${quizResults}`);

    console.log("\nTop Pages Visited:");
    Object.entries(pageViews)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .forEach(([path, count]) => console.log(`  ${path}: ${count} views`));
        
    // 3. User Demographics / OS / Browser (from recent events properties)
    const browsers = {};
    const devices = {};
    const os = {};

    if (recentEvents && recentEvents.results) {
        recentEvents.results.forEach(e => {
            if (e.properties) {
                if (e.properties.$browser) browsers[e.properties.$browser] = (browsers[e.properties.$browser] || 0) + 1;
                if (e.properties.$device_type) devices[e.properties.$device_type] = (devices[e.properties.$device_type] || 0) + 1;
                if (e.properties.$os) os[e.properties.$os] = (os[e.properties.$os] || 0) + 1;
            }
        });
    }
    
    console.log("\n--- TECHNOLOGY USAGE ---");
    console.log("Top Browsers:", Object.entries(browsers).sort((a,b)=>b[1]-a[1]).slice(0,3).map(x=>`${x[0]}`).join(', '));
    console.log("Top OS:", Object.entries(os).sort((a,b)=>b[1]-a[1]).slice(0,3).map(x=>`${x[0]}`).join(', '));
    console.log("Device Types:", Object.entries(devices).sort((a,b)=>b[1]-a[1]).map(x=>`${x[0]}`).join(', ') || "Desktop dominant (implied)");

    console.log("\nDone gathering deep metrics.");
}

deepDiveAnalyze().catch(console.error);

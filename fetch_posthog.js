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

async function analyze() {
    console.log("=== POSTHOG DATA ANALYSIS ===");

    console.log("\n1. Dashboards");
    const dashboards = await fetchFromPostHog('/dashboards/');
    console.log(`   Total dashboards found: ${dashboards?.results?.length || 0}`);
    if (dashboards && dashboards.results) {
        dashboards.results.forEach(d => {
            console.log(`   - ${d.name} (ID: ${d.id})`);
        });
    }
    
    console.log("\n2. Insights");
    const insights = await fetchFromPostHog('/insights/?limit=20');
    console.log(`   Total insights found: ${insights?.results?.length || 0}`);
    if (insights && insights.results) {
        insights.results.forEach(i => {
            console.log(`   - ${i.name || i.derived_name || 'Unnamed Insight'} (Type: ${i.filters?.insight || 'N/A'})`);
        });
    }

    console.log("\n3. Events Overview (Last 500)");
    const events = await fetchFromPostHog('/events/?limit=500');
    console.log(`   Events retrieved: ${events?.results?.length || 0}`);
    const eventCounts = {};
    const customEventCounts = {};
    let firstEventTime = null;
    let lastEventTime = null;

    if (events && events.results && events.results.length > 0) {
        firstEventTime = events.results[events.results.length - 1].timestamp;
        lastEventTime = events.results[0].timestamp;
        
        events.results.forEach(e => {
            eventCounts[e.event] = (eventCounts[e.event] || 0) + 1;
            if (!e.event.startsWith('$')) {
                customEventCounts[e.event] = (customEventCounts[e.event] || 0) + 1;
            }
        });

        console.log(`   Timeframe: ${firstEventTime} to ${lastEventTime}`);
        console.log("\n   Top Events:");
        Object.entries(eventCounts).sort((a,b) => b[1] - a[1]).slice(0, 15).forEach(([event, count]) => {
            console.log(`     ${event}: ${count}`);
        });
        
        console.log("\n   Top Custom Events (specific app actions):");
        Object.entries(customEventCounts).sort((a,b) => b[1] - a[1]).forEach(([event, count]) => {
            console.log(`     ${event}: ${count}`);
        });
    }

    console.log("\n4. Persons / Users (sample of last 100)");
    const persons = await fetchFromPostHog('/persons/?limit=100');
    console.log(`   Persons retrieved: ${persons?.results?.length || 0}`);
    if (persons && persons.results) {
        let identifiedUsers = 0;
        let anonymousUsers = 0;
        persons.results.forEach(p => {
            if (p.is_identified) {
                identifiedUsers++;
            } else {
                anonymousUsers++;
            }
        });
        console.log(`   Identified Users: ${identifiedUsers}`);
        console.log(`   Anonymous Users: ${anonymousUsers}`);
    }
    
    // Save full JSON to be read later
    fs.writeFileSync('posthog_insights.json', JSON.stringify({
        dashboards: dashboards?.results,
        insights: insights?.results,
        events: events?.results?.slice(0, 10), // save a few sample events to inspect properties
    }, null, 2));
    
    console.log("\nData saved to posthog_insights.json for deeper inspection.");
}

analyze().catch(console.error);

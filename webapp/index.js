function sendClickedEvent() {
    console.log("Clicked");

    fetch('http://localhost:4000/ingest/ClickedActivity/0.0', {
        mode: "no-cors",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {"eventId": "test-value0","timestamp": new Date(Date.now())}
        )
    });
}
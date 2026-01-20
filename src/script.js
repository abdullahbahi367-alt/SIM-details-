document.getElementById('searchBtn').addEventListener('click', function() {
    const number = document.getElementById('phoneInput').value;
    const resultDiv = document.getElementById('result');

    if (number === "") {
        alert("Please enter a mobile number!");
        return;
    }

    // Processing message
    resultDiv.innerHTML = "Searching data...";
    resultDiv.style.display = "block";

    // Demo data for testing
    setTimeout(() => {
        const demoData = {
            name: "Rahul Kumar",
            provider: "Jio/Airtel",
            state: "Punjab",
            status: "Active"
        };

        resultDiv.innerHTML = `
            <div style="border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 10px;">
                <strong>Name:</strong> ${demoData.name}
            </div>
            <div style="border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 10px;">
                <strong>Operator:</strong> ${demoData.provider}
            </div>
            <div style="border-bottom: 1px solid #ddd; padding-bottom: 10px; margin-bottom: 10px;">
                <strong>State:</strong> ${demoData.state}
            </div>
            <div>
                <strong>Status:</strong> <span style="color: green;">${demoData.status}</span>
            </div>
        `;
    }, 1500);
});

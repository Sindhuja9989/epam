function calculateProfit() {
    let amount = parseFloat(document.getElementById("amount").value);
    let years = parseFloat(document.getElementById("years").value);
    let rate = 5; // Fixed interest rate of 5% per year

    if (isNaN(amount) || isNaN(years) || amount <= 0 || years <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    let profit = (amount * rate * years) / 100;
    document.getElementById("result").innerText = `Profit: ₹${profit.toFixed(2)}`;
}

function printPage() {
    window.print();
}

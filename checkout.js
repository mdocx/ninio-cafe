const itemPrices = {
    espresso: 3.00,
    latte: 4.00,
    cappuccino: 4.00,
    americano: 3.50,
    mocha: 4.50,
    pastry: 2.00
};

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderSummary = document.getElementById('orderSummary');
    const totalAmountElem = document.getElementById('totalAmount');
    let totalAmount = 0;

    // Loop through URL parameters and create order summary
    urlParams.forEach((value, key) => {
        if (key === 'item') {
            const quantity = parseInt(urlParams.get('quantity'));
            const price = itemPrices[value];
            const itemTotal = price * quantity;

            // Create list item for the order summary
            const listItem = document.createElement('li');
            listItem.textContent = `${value.charAt(0).toUpperCase() + value.slice(1)} (x${quantity}) - $${itemTotal.toFixed(2)}`;
            orderSummary.appendChild(listItem);

            // Add to total amount
            totalAmount += itemTotal;
        }
    });

    // Update total amount in the UI
    totalAmountElem.textContent = totalAmount.toFixed(2);

    // Handle form submission
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.onsubmit = function(event) {
        event.preventDefault();
        const paymentMethod = paymentForm.paymentMethod.value;
        alert(`Order Confirmed!\nTotal: $${totalAmount.toFixed(2)}\nPayment Method: ${paymentMethod}`);
    };
}

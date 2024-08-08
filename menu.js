const itemPrices = {
    espresso: 3.00,
    latte: 4.00,
    cappuccino: 4.00,
    americano: 3.50,
    mocha: 4.50,
    pastry: 2.00
};

function changeQuantity(item, change) {
    const quantityInput = document.getElementById(item + 'Qty');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity = Math.max(0, currentQuantity + change);
    quantityInput.value = currentQuantity;
}

function proceedToCheckout() {
    const selectedItems = [];
    for (const item in itemPrices) {
        const quantity = parseInt(document.getElementById(item + 'Qty').value);
        if (quantity > 0) {
            selectedItems.push({ name: item, quantity: quantity });
        }
    }

    if (selectedItems.length > 0) {
        const queryString = selectedItems.map(item => `item=${encodeURIComponent(item.name)}&quantity=${item.quantity}`).join('&');
        window.location.href = `checkout.html?${queryString}`;
    } else {
        alert('Please select at least one item.');
    }
}

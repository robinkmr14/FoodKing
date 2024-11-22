document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addbutton');
    const cartBillingSection = document.querySelector('.cart-billing');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemDetail = this.parentElement;
            const clonedItem = itemDetail.cloneNode(true);
            cartBillingSection.appendChild(clonedItem);
        });
    });





    // bill function 

    const cartItems = document.querySelectorAll('.cart-item');

    // Create a container for bill items
    const billItemsContainer = document.querySelector('.bill-items');

    // Iterate through each cart item and extract name and price
    cartItems.forEach((cartItem) => {
        const itemName = cartItem.querySelector('.item-title').textContent.trim();
        const itemPrice = cartItem.querySelector('.item-price').textContent.trim();

        // Create a div for each item's details
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('bill-item');

        // Populate the item's details
        itemDetails.innerHTML = `
        <div class="itemName">${itemName}</div>
        <div class="itemPrice">${itemPrice}</div>
    `;

        // Append the item's details to the bill items container
        billItemsContainer.appendChild(itemDetails);
    });


    

    // ========================================================


});

document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderform');
    const orderFeedback = document.getElementById('order-feedback');
    const totalAmountElement = document.getElementById('total-amount');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Extract form data
        const formData = {
            appetizer: {
                name: document.getElementById('appetizer').value,
                price: parseFloat(document.getElementById('appetizer').selectedOptions[0].getAttribute('data-price')),
                quantity: parseInt(document.getElementById('appetizer-quantity').value)
            },
            mainCourse: {
                name: document.getElementById('main-course').value,
                price: parseFloat(document.getElementById('main-course').selectedOptions[0].getAttribute('data-price')),
                quantity: parseInt(document.getElementById('main-course-quantity').value)
            },
            dessert: {
                name: document.getElementById('dessert').value,
                price: parseFloat(document.getElementById('dessert').selectedOptions[0].getAttribute('data-price')),
                quantity: parseInt(document.getElementById('dessert-quantity').value)
            },
            drink: {
                name: document.getElementById('drink').value,
                price: parseFloat(document.getElementById('drink').selectedOptions[0].getAttribute('data-price')),
                quantity: parseInt(document.getElementById('drink-quantity').value)
            }
        };

        // Calculate subtotal for each item
        const subtotalAppetizer = formData.appetizer.price * formData.appetizer.quantity;
        const subtotalMainCourse = formData.mainCourse.price * formData.mainCourse.quantity;
        const subtotalDessert = formData.dessert.price * formData.dessert.quantity;
        const subtotalDrink = formData.drink.price * formData.drink.quantity;

        // Calculate total order amount
        const totalAmount = subtotalAppetizer + subtotalMainCourse + subtotalDessert + subtotalDrink;

        // Display subtotal for each item
        document.getElementById('appetizer-subtotal').textContent = `Subtotal: $${subtotalAppetizer.toFixed(2)}`;
        document.getElementById('main-course-subtotal').textContent = `Subtotal: $${subtotalMainCourse.toFixed(2)}`;
        document.getElementById('dessert-subtotal').textContent = `Subtotal: $${subtotalDessert.toFixed(2)}`;
        document.getElementById('drink-subtotal').textContent = `Subtotal: $${subtotalDrink.toFixed(2)}`;

        // Display total order amount
        totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;

        // Send form data to the server
        fetch('/submit-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.text(); // Return response text if successful
            }
            throw new Error('Network response was not ok.');
        })
        .then(message => {
            // Display success message to the user
            orderFeedback.textContent = 'Order successful! ';
            // Clear the form fields
            orderForm.reset();
        })
        .catch(error => {
            // Display error message to the user
            orderFeedback.textContent = 'Error: ' + error.message;
        });
    });
});

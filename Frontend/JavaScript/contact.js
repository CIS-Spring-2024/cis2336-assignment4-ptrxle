document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Extract form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send form data to the server
        fetch('/submit-contact', {
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
            contactFeedback.textContent = 'Message sent successfully!';
            // Clear the form fields
            contactForm.reset();
        })
        .catch(error => {
            // Display error message to the user
            contactFeedback.textContent = 'Error: ' + error.message;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons
    const buttons = document.querySelectorAll('button');

    // Add click event listeners to each button
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Navigate to the page specified in the form action
            const form = this.closest('form');
            if (form && form.action) {
                window.location.href = form.action;
            }
        });
    });
});

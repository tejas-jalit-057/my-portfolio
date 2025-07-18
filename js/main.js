// JavaScript for contact form validation and interactivity

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous error messages
        const errorElements = form.querySelectorAll('.error');
        errorElements.forEach(el => el.style.display = 'none');

        let isValid = true;

        // Validate first name
        const firstName = form.firstName.value.trim();
        if (!firstName) {
            document.getElementById('firstNameError').style.display = 'block';
            isValid = false;
        }

        // Validate last name
        const lastName = form.lastName.value.trim();
        if (!lastName) {
            document.getElementById('lastNameError').style.display = 'block';
            isValid = false;
        }

        // Validate mobile number (10-15 digits)
        const mobile = form.mobile.value.trim();
        const mobilePattern = /^[0-9]{10,15}$/;
        if (!mobilePattern.test(mobile)) {
            document.getElementById('mobileError').style.display = 'block';
            isValid = false;
        }

        // Validate email
        const email = form.email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        // Validate message
        const message = form.message.value.trim();
        if (!message) {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Show success message
            successMessage.style.display = 'block';

            // Optionally clear the form
            form.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            successMessage.style.display = 'none';
        }
    });
});





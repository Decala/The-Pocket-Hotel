document.addEventListener('DOMContentLoaded', function () {
    // Form Validation
    const form = document.querySelector('.booking-form');
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Check for required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
                // Display an error message if needed
            } else {
                field.style.borderColor = '';
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all required fields.');
        } else {
            event.preventDefault();
            // Redirect to confirmation page
            window.location.href = 'roomconfirmation.html';
        }
    });

    // Date Validation
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');

    checkout.addEventListener('change', function () {
        if (checkout.value <= checkin.value) {
            alert('Check-out date must be after check-in date.');
            checkout.value = '';
        }
    });

    checkin.addEventListener('change', function () {
        if (checkout.value && checkout.value <= checkin.value) {
            alert('Check-out date must be after check-in date.');
            checkout.value = '';
        }
    });

    // Phone Number Validation
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^\+\d{1,3}\d{1,14}$/;

    phoneInput.addEventListener('input', function () {
        if (!/^\d+$/.test(phoneValue)) {
            errorMessage.textContent = 'Phone number must be number only.';
            phoneInput.classList.add('error');
        } else {
            errorMessage.textContent = '';
            phoneInput.classList.remove('error');
        }
    });


    // Confirmation Before Form Submission
    form.addEventListener('submit', function (event) {
        const confirmed = confirm('Are you sure you want to submit the form?');
        if (!confirmed) {
            event.preventDefault();
        }
    });

    form.addEventListener('submit', function (event) {
        const phoneValue = phoneInput.value;
        if (!/^\d+$/.test(phoneValue)) {
            event.preventDefault();
            errorMessage.textContent = 'Phone number must be numeric.';
            phoneInput.classList.add('error');
        } else if (phoneValue.length < 10) {
            event.preventDefault();
            errorMessage.textContent = 'Phone number must be at least 10 digits long.';
            phoneInput.classList.add('error');
        }
    });
});
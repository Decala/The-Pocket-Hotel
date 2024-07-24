document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.booking-form');
    const paymentmethod = document.getElementById('payment');
    const cardDetails = document.getElementById('cardDetails');

    // Display card details based on payment method
    paymentmethod.addEventListener('change', function() {
        if (paymentmethod.value === 'credit' || paymentmethod.value === 'debit') {
            cardDetails.classList.remove('hidden');
        } else {
            cardDetails.classList.add('hidden');
        }
    });

    // Real-time validation for form fields
    function validateField(input, pattern, errorElement, errorMessage) {
        input.addEventListener('input', function () {
            if (!pattern.test(input.value)) {
                errorElement.textContent = errorMessage;
                input.classList.add('error');
            } else {
                errorElement.textContent = '';
                input.classList.remove('error');
            }
        });
    }

    // Phone number validation
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phonePattern = /^\+\d{1,3}\d{8,}$/;
    validateField(phoneInput, phonePattern, phoneError, 'Phone number must include a country code and be at least 8 digits long.');

    // Card number validation
    const cardnumberInput = document.getElementById('cardnumber');
    const cardnumberError = document.getElementById('cardnumber-error');
    const cardnumberPattern = /^\d{13,19}$/;
    validateField(cardnumberInput, cardnumberPattern, cardnumberError, 'Card number must be between 13 and 19 digits long.');

    // Expiry date validation
    const expiryInput = document.getElementById('expiry');
    const expiryError = document.getElementById('expiry-error');
    const expiryPattern = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    validateField(expiryInput, expiryPattern, expiryError, 'Expiry date must be in MM/YY format.');

    // CVV validation
    const cvvInput = document.getElementById('cvv');
    const cvvError = document.getElementById('cvv-error');
    const cvvPattern = /^\d{3,4}$/;
    validateField(cvvInput, cvvPattern, cvvError, 'CVV must be 3 or 4 digits long.');

    // Check-in/out date validation
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');

    function validateDates() {
        let isValid = true;

        if (checkout.value <= checkin.value) {
            alert('Check-out date must be after check-in date.');
            checkout.value = '';
            isValid = false;
        }

        if (checkin.value && checkout.value <= checkin.value) {
            alert('Check-out date must be after check-in date.');
            checkin.value = '';
            isValid = false;
        }

        return isValid;
    }

    // Form submission validation
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Check for required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        // Additional validation
        if (!validateDates()) {
            isValid = false;
        }

        // Check card details if payment method is credit or debit
        if (paymentmethod.value === 'credit' || paymentmethod.value === 'debit') {
            if (cardnumberError.textContent || expiryError.textContent || cvvError.textContent) {
                isValid = false;
            }
        }

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all required fields correctly.');
        } else {
            // Redirect to confirmation page
            window.location.href = 'roomconfirmation.html';
        }
    });
});


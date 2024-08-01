// DONE BY SHIN THANT AUNG (243816M)

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

    // Name validation
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const namePattern = /^[a-zA-Z\s]{5,}$/;
    validateField(nameInput, namePattern, nameError, 'Name must be at least 5 letters long and contains only letter and spaces.')

    // Passport/NRIC validation
    const nricInput = document.getElementById('nric');
    const nricError = document.getElementById('nric-error');
    const nricPattern = /^(?=.*[A-Za-z])[A-Za-z0-9]{7,}$/;
    validateField(nricInput, nricPattern,nricError, 'Please enter a valid passport or NRIC number.')

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    validateField(emailInput, emailPattern,emailError, 'Please enter a valid Email address.')

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
    const expiryPattern = /^\d{2}\/\d{2}$/;
    validateField(expiryInput, expiryPattern, expiryError, 'Expiry date must be in MM/YY format.');

    // CVV validation
    const cvvInput = document.getElementById('cvv');
    const cvvError = document.getElementById('cvv-error');
    const cvvPattern = /^\d{3,4}$/;
    validateField(cvvInput, cvvPattern, cvvError, 'CVV must be 3 or 4 digits long.');

    // Check-in/out date validation
    const checkin = document.getElementById('checkin');
    const checkout = document.getElementById('checkout');
    const checkinError = document.getElementById('checkin-error');
    const checkoutError = document.getElementById('checkout-error');

    function validateDates() {
        let isValid = true;

        if (checkout.value && checkout.value <= checkin.value) {
            checkoutError.textContent = 'Check-out date must be after check-in date.';
            checkout.classList.add('error');
            isValid = false;
        } else {
            checkoutError.textContent = '';
            checkout.classList.remove('error');
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
            // In case, invalid check in/out date error
            event.preventDefault();
            alert('Please fill out all the required fields correctly.');
        } else {
            // Direct to confirmation
            form.action = 'roomconfirmation.html';
        }
    });
});

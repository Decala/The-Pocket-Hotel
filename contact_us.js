var patterns = [/[a-e]+[0-9]{3}/, /^\+\d{2,}(?:\s?\d){8,}$/]
var error_messages = ["Invalid Room Number", "Invalid phone number (Example +6561234567)"]
var fields = ["room_no", "contact_way"]
var fields_error = ["room_error", "contact_error"]

function get_contact(){
    var via = document.getElementById("contact").value;
    if (via == "Mobile Number"){
        document.getElementById("contact_way").placeholder = "Please include country code"
        patterns[1] = /^\+\d{2,}(?:\s?\d){8,}$/
        error_messages[1] = "Invalid phone number (Example +6561234567)"
    }
    else {
        document.getElementById("contact_way").placeholder="Please enter your email"
        patterns[1] = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/
        error_messages[1] = "Invalid Email (Example p0ck3th0t3l@gmail.com)"
    }
}

document.addEventListener('DOMContentLoaded', function () {
    function validateField(id, pattern, error_id, error_message) {
      const input = document.getElementById(id)
      const error_element = document.getElementById(error_id)

      if (!pattern.test(input.value.trim())) {
        error_element.textContent = error_message;
        input.setCustomValidity(error_message);
        error_element.style.color = 'red';
        error_element.style.fontSize = '1em';
      } else {
        error_element.textContent = '';
        input.setCustomValidity('');
      };
    };

    function blankCheck(){
        var all_inputs = document.querySelectorAll("[required]")
        var all_errors = document.querySelectorAll("span")

        for (let i = 0; i < all_inputs.length; i++){
            if (all_inputs[i].value.trim() == "") {
                all_errors[i].textContent = "This field is required";
                all_inputs[i].setCustomValidity("This field is required");
                all_errors[i].style.color = 'red';
                all_errors[i].style.fontSize = '1em';
            } else {
                all_errors[i].textContent = '';
                all_inputs[i].setCustomValidity('');
            }
        }
    }
    for (let i = 0; i < patterns.length; i++) {
           document.getElementById(fields[i]).addEventListener("input", () => validateField(fields[i],  patterns[i], fields_error[i], error_messages[i]));
         }
    document.getElementById("submit").addEventListener("click", () => blankCheck() );
});

//By Declan Chua 240598B
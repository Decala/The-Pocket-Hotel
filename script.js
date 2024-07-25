function get_contact(){
    var via = document.getElementById("contact").value;
    if (via == "Mobile Number"){
        document.getElementById("contact_way").pattern = "[+]+[0-9]{1,3}+[8-9]+[0-9]{7}";
        document.getElementById("contact_way").placeholder = "Please include country code"
    }
    else {
        document.getElementById("contact_way").pattern = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
        document.getElementById("contact_way").placeholder = "Please enter your email"
    }
}
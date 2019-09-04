var user = document.getElementById("name"),
    phone = document.getElementById("phone"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    confirmPass = document.getElementById("cPassword");

//firing errors for username, phone and email
if (user != null && phone != null && email != null) {
    user.addEventListener("blur", function () {
        validateFields(event, "User Name", document.getElementById("name").value, "name");
    });
    phone.addEventListener("blur", function () {
        validateFields(event, "Phone Number", document.getElementById("phone").value, "phone");
    });
    email.addEventListener("blur", function () {
        validateFields(event, "Email", document.getElementById("email").value, "email");
    });
}

//firing errors for password and confirm password
if (password != null && confirmPass != null) {
    password.addEventListener("blur", function () {
        validateFields(event, "Password", document.getElementById("password").value, "password");
    });
    confirmPass.addEventListener("blur", function () {
        validateFields(event, "Confirm Password", document.getElementById("cPassword").value, "password");
        if (password.value != "" && confirmPass.value != "") {
            if (password.value !== confirmPass.value) {
                confirmPass.parentElement.previousElementSibling.innerHTML = "Please enter same password";
            }
        }
    });
}
//this code for only regex function validation 
function regexUseForAllConditions(param, value) {
    var pattern = "", result = "";
    if (param == "name") {
        pattern = /^(?=[a-zA-Z])([A-Za-z .]*)+$/;
    }
    else if (param == "phone") {
        pattern = /^(?!-)(?!.*--)(?!.*\+-)(?!.*\s\s)[\+\d]?(?:[\d-\s()]*)[0-9]$/;
    }
    else if (param == "password") {
        pattern = /^((?=.*[a-z])(?=.*\d)(?!.* )(?=.*[A-Z])(?=.*[@#$%!]).{8,15})/;
    }
    else if (param == "email") {
        pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,4}))$/);
    }
    else {
        //this for all accepted
    }
    result = pattern.test(value);
    return result;
}

// this for validating input fields
function validateFields(e, type, value, from) {
    var el = e.target, input = el.value.replace(/\s+/, "");
    if (input == "") {
        el.parentElement.previousElementSibling.innerHTML = type + " required"; // if empty or contains whitespaces
    }
    else if (input != "") {
        var result;
        if (from == "email") {
            result = regexUseForAllConditions("email", value);
        }
        else if (from == "password") {
            result = regexUseForAllConditions("password", value);
        }
        else if (from == "phone") {
            result = regexUseForAllConditions("phone", value);
        }
        else {
            result = regexUseForAllConditions("name", value);
        }
        if (result) {
            if (from == "phone") {
                if (value.length < 10) {
                    el.parentElement.previousElementSibling.innerHTML = "Please enter atleast 10 characters";
                }
                else el.parentElement.previousElementSibling.innerHTML = " ";
            }
            else el.parentElement.previousElementSibling.innerHTML = " ";
        }
        else {
            el.parentElement.previousElementSibling.innerHTML = "Invalid " + type;
            if (from == "password") {
                el.parentElement.previousElementSibling.innerHTML = "Password should contain 8-15 characters with atleast one uppercase, one lowercase, one number and one special character."
            }
        }
    }
}

const submit = document.getElementById('submitBtn');
submit.addEventListener("click", submitform);
function submitform(e) {
    e.preventDefault();
    //if all fields are empty and submit button is clicked
    if (user.value == "" && phone.value == "" && email.value == "" && password.value == "" && confirmPass.value == "") {
        user.parentElement.previousElementSibling.innerHTML = "User Name required";
        phone.parentElement.previousElementSibling.innerHTML = "Phone Number required";
        email.parentElement.previousElementSibling.innerHTML = "Email required";
        password.parentElement.previousElementSibling.innerHTML = "Password required";
        confirmPass.parentElement.previousElementSibling.innerHTML = "Confirm Password required";
    }
    //if all fields are filled and submit button is clicked
    else if (user.value != "" && phone.value != "" && email.value != "" && password.value != "" && confirmPass.value != "") {
        document.location.href = "thankyou.html";
    }
    //if any of the field is empty and submit button is clicked
    else {
        focusCheck();
    }
}

function focusCheck() {
    if (user.value == "") {
        user.focus();
        user.parentElement.previousElementSibling.innerHTML = "User Name required";
    }
    else if (phone.value == "") {
        phone.focus();
        phone.parentElement.previousElementSibling.innerHTML = "Phone Number required";
    }
    else if (email.value == "") {
        email.focus();
        email.parentElement.previousElementSibling.innerHTML = "Email required";
    }
    else if (password.value == "") {
        password.focus();
        password.parentElement.previousElementSibling.innerHTML = "Password required";
    }
    else if (confirmPass.value == "") {
        confirmPass.focus();
        confirmPass.parentElement.previousElementSibling.innerHTML = "Confirm Password required";
    }
}

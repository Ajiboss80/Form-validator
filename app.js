var firstName = document.querySelector(".first-name");
var  firstNameError = document.querySelector(".error-1");
var  lastName = document.querySelector(".last-name");
var  lastNameError = document.querySelector(".error-2");
var  email = document.querySelector(".email");
var  emailError = document.querySelector(".error-3");
var  password = document.querySelector(".password");
var  passwordError = document.querySelector(".error-4");
var  confirmPassword = document.querySelector(".confirm-password");
var  confirmPasswordError = document.querySelector(".error-5");
var  signUp = document.querySelector(".sign-up");

signUp.addEventListener("click", function() {
    checkFirstName();
    checkFirstNameLength();
    checkLastName();
    checkLastNameLength();
    checkEmail();
    checkEmailLength();
    checkPassword();
    checkConfirmPassword();
});

//CHECKING FOR AVAILABILITY AND LENGTH OF FIRST NAME
function checkFirstName() {
    if (firstName.value === "") {
        firstName.classList.add("error");
        firstName.classList.remove("success");
        firstNameError.innerText = "First Name is unavailabe.";
    }
    else {
        firstName.classList.add("success");
        firstNameError.innerText = "";
    }
}
function checkFirstNameLength() {
    if (firstName.value.length > 0 && firstName.value.length < 4 || firstName.value.length > 20) {
        firstName.classList.add("error");
        firstName.classList.remove("success");
        firstNameError.innerText = "First Name should not be less than 4 characters or greater than 20 characters.";
    }
}

//CHECKING FOR AVAILABILITY AND LENGTH OF LAST NAME
function checkLastName() {
    if (lastName.value === "") {
        lastName.classList.add("error");
        lastNameError.innerText = "Last Name is unavailabe.";
    }
    else {
        lastName.classList.add("success");
        lastNameError.innerText = "";
    }
}
function checkLastNameLength() {
    if (lastName.value.length > 0 && lastName.value.length < 4 || firstName.value.length > 20) {
        lastName.classList.add("error");
        lastName.classList.remove("success");
        lastNameError.innerText = "Last Name should not be less than 4 characters or greater than 20 characters.";
    }
}

//CHECKING FOR AVAILABILITY AND CONTENT OF EMAIL
function checkEmail() {
    if (email.value == "") {
        email.classList.add("error");
        emailError.innerText = "Email is unavailabe.";
    } 
    else {
        email.classList.add("success");
        emailError.innerText = '';
    }
}
function checkEmailLength() {
    if (email.value.length > 0 && email.value.length < 2) {
        email.classList.add("error");
        email.classList.remove("success");
        emailError.innerText = "Email is not valid.";
    }
}

//CHECKING FOR AVAILABILITY AND CONTENT OF PASSWORD
function checkPassword() {
    if (password.value.length > 7 && password.value.length < 14) {
        password.classList.add("success");
        password.classList.remove("error");
        passwordError.innerText = "";
    }
    else {
        password.classList.add("error");
        password.classList.remove("success");
        passwordError.innerText = "*Password must include at least one uppercase letter, a number and a special character. \n*Password must be between 7 to 15 characters";
    }
}

//CHECKING IF PASSWORD AND CONFIRM PASSWORD ARE THE SAME
function checkConfirmPassword() {
    if (confirmPassword.value == "" || confirmPassword.value !== password.value) {
        confirmPassword.classList.remove("success")
        confirmPassword.classList.add("error");
        confirmPasswordError.innerText = "Password is incorrect.";
    }
    else {
        confirmPassword.classList.add("success");
        confirmPasswordError.innerText = "";
    }
}
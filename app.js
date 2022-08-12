// PICKING TAGS FROM THE HTML PAGE
const container = document.querySelector('.container');
const firstName = document.querySelector(".first-name");
const  firstNameError = document.querySelector(".error-1");
const  lastName = document.querySelector(".last-name");
const  lastNameError = document.querySelector(".error-2");
const  email = document.querySelector(".email");
const  emailError = document.querySelector(".error-3");
const  password = document.querySelector(".password");
const  passwordError = document.querySelector(".error-4");
const  confirmPassword = document.querySelector(".confirm-password");
const  confirmPasswordError = document.querySelector(".error-5");
const  signUp = document.querySelector(".sign-up");

// EVENT LISTENER TO CARRY OUT THE CHECKING FUNCTION ON CLICK OF THE SIGN UP BUTTON
signUp.addEventListener("click", () => {
    checkAll();
});

//CHECKING FOR VALIDITY OF ALL INPUTS
function checkAll(e) {
    e.preventDefault();
    if (firstName.value == "") {
        firstName.style.border = '1px solid red';
        lastName.style.border = 'none';
        firstNameError.innerText = "First Name is unavailabe.";
        lastName.style.border = 'none';
        lastNameError.innerText = "";
        confirmPassword.style.border = 'none';
    }
    if (firstName.value !== '') {
        firstName.style.border = '1px solid green';
        firstNameError.innerText = "";
        lastName.style.border = '1px solid red'
        lastNameError.innerText = 'Last Name is unavailabe.';
    }
    if (lastName.value !== "") {
        lastName.style.border = '1px solid green';
        lastNameError.innerText = "";
        email.style.border = '1px solid red';
        emailError.innerText = "Email is unavailabe.";
    }
    if (email.value !== "") {
        email.style.border = '1px solid green';
        emailError.innerText = "";
        password.style.border = '1px solid red';
        passwordError.innerText = 'Password must be at least 8 and not more than 16 characters';
    }
    if (password.value.length > 7 && password.value.length < 15 ) {
        password.style.border = '1px solid green';
        passwordError.innerText = '';
    }
    if (password.value.length >= 0 && password.value.length < 7 && password.value.length > 15) {
        password.style.border = '1px solid red';
    }
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = '1px solid red';
        confirmPasswordError.innerText = 'Password is incorrect';
    }
    if (confirmPassword.value == password.value) {
        confirmPassword.style.border = 'none';
        confirmPasswordError.innerText = '';
    }
}
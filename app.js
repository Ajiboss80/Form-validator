// SELECTING THE HTML TAGS
const container = document.querySelector(".container");
const contentContainer = document.querySelector(".content-container");
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

// PERFORM FUNCTION ON CLICK OF SIGN UP BUTTON
signUp.addEventListener("click", () => {
    checkAll();
});

//MOVE TO NEXT ITEM ON PRESS OF ENTER KEY
firstName.addEventListener('keyup', (a) =>{
    if (a.keyCode === 13) {
        signUp.click();
        lastName.focus();
    }
});
lastName.addEventListener('keyup', (b) =>{
    if (b.keyCode === 13) {
        signUp.click();
        email.focus();
    }
});
email.addEventListener('keyup', (c) =>{
    if (c.keyCode === 13) {
        signUp.click();
        password.focus();
    }
});
password.addEventListener('keyup', (d) =>{
    if (d.keyCode === 13) {
        signUp.click();
        confirmPassword.focus();
    }
});
confirmPassword.addEventListener('keyup', (e) =>{
    if (e.keyCode === 13) {
        signUp.click();
    }
});

//CHECKING FOR VALIDITY OF ALL INPUTS
function checkAll() {

    // FIRST NAME INPUT CONDITIONS
    if (firstName.value == '' ) {
        firstName.classList.add('error');
        firstName.classList.remove('success');
        firstNameError.innerText = "Please input your First Name.";
        lastName.classList.remove('error');
        lastNameError.innerText = '';
    }
    if (firstName.value !== '') {
        firstName.classList.add('success');
        firstName.classList.remove('error');
        firstNameError.innerText = '';
    }
    if (firstName.value !== '' && lastName.value == '') {
        firstName.classList.add('success');
        firstName.classList.remove('error');
        firstNameError.innerText = '';
        lastName.classList.add('error');
        lastName.classList.remove('success');
        lastNameError.innerText = 'Please input your Last Name.';
    }

    // LAST NAME INPUT CONDITIONS
    if (lastName.value == '') {
        lastName.classList.remove('success');
        email.classList.remove('error');
        emailError.innerText = '';
    }
    if (lastName.value !== '') {
        lastName.classList.add('success');
        lastName.classList.remove('error');
        lastNameError.innerText = '';
    }
    if (lastName.value !== '' && email.value == '') {
        lastName.classList.add('success');
        lastName.classList.remove('error');
        lastNameError.innerText = '';
        email.classList.add('error');
        email.classList.remove('success');
        emailError.innerText = 'Please input your Email.';
    }

    // EMAIL INPUT CONDITIONS
    if (email.value == '') {
        email.classList.remove('success');
    }
    if (email.value !== '') {
        email.classList.add('success');
        email.classList.remove('error');
        emailError.innerHTML = '';
    }
    if (email.value !== '' && password.value == '') {
        email.classList.add('success');
        email.classList.remove('error');
        emailError.innerHTML = '';
        password.classList.add('error');
        password.classList.remove('success');
        passwordError.innerText = 'Password length must be up to 8 characters and not more than 16 characters.';
    }

    // PASSWORD INPUT CONDITIONS
    if (password.value == '') {
        password.classList.remove('success');
    }
    if (password.value.length > 7 && password.value.length < 15 ) {
        password.classList.add('success');
        password.classList.remove('error');
        passwordError.innerText = '';
    }
    if (password.value.length >= 0 && password.value.length < 7 && password.value.length > 15) {
        password.classList.add('error');
        password.classList.remove('success');
    }

    // CONFIRM PASSWORD INPUT CONDITIONS
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('success');
        confirmPasswordError.innerText = 'Passwords do not match.';
    }
    if (confirmPassword.value == password.value) {
        confirmPassword.classList.remove('error');
        confirmPassword.classList.remove('success');
        confirmPasswordError.innerText = '';
    }

    // SIGN UP
    if (!firstName.classList.contains('error') && !lastName.classList.contains('error') && !email.classList.contains('error') && !password.classList.contains('error') && !confirmPassword.classList.contains('error')) {
        alert('Sign Up successful!');
    }
};

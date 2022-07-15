const form = document.querySelector('.form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmm = document.getElementById('confirm');
const emailError = document.getElementById('emailerror');
const countryError = document.getElementById('countryerror');
const zipError = document.getElementById('ziperror');
const passwordError = document.getElementById('passworderror');
const confirmError = document.getElementById('confirmerror');
const countryList = [
	"Example country 1", 
    "Example country 2", 
    "Example country 3",
]

const validation = (() => {
    const checkEmail = () => {
        if (email.value.length < 8) {
            email.setCustomValidity('Invalid Field.');
            emailError.textContent = 'Email must be more than 8 characters';
            return false;
        }
        email.setCustomValidity('');
        emailError.textContent = '';
        return true;
    }
    const checkZip = () => {
        if (zip.value.length !== 4 || !/\d{4}/.test(zip.value)) {
            zip.setCustomValidity('Invalid Field.');
            zipError.textContent = 'Zip must be 4 digits';
            return false;
        }
        zip.setCustomValidity('');
        zipError.textContent = '';
        return true;
    }
    const checkPassword = () => {   
            if (!/.{8,}/.test(password.value)) {
                password.setCustomValidity('Invalid Field.');
                passwordError.textContent = 'Password must be at least 8 characters';
                return false;
            } else if (!/(?=.*\d)/.test(password.value)) {
                password.setCustomValidity('Invalid Field.');
                passwordError.textContent = 'Password must contain a number';
                return false;
            } else {
                confirmPassword(); 
                password.setCustomValidity('');
                passwordError.textContent = '';
                return true;
            }
    }
    const confirmPassword = () => {
        if (password.value !== confirmm.value) {
            confirmm.setCustomValidity('Invalid Field.');
            confirmError.textContent = 'Passwords do not match';
            return false;
        } else {
            confirmm.setCustomValidity('');
            confirmError.textContent = '';
            return true;
        }
    }
    return {checkEmail, checkZip, checkPassword, confirmPassword};
})();

(() => {
    for (let i = 0; i < countryList.length; i++) {
        let newCountry = document.createElement('option');
        newCountry.setAttribute('value', countryList[i]);
        newCountry.textContent = countryList[i];
        country.appendChild(newCountry);
    }
    zip.addEventListener('input', validation.checkZip);
    email.addEventListener('input', validation.checkEmail);
    password.addEventListener('input', validation.checkPassword);
    confirmm.addEventListener('input', validation.confirmPassword);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let message = document.getElementById('submitmessage');
        if (!validation.checkZip() || !validation.checkEmail() || !country.value || !validation.checkPassword() || !validation.confirmPassword()) {
            message.classList.remove('success');
            message.textContent = 'Please fill out all fields correctly';
        } else {
            message.classList.add('success');
            message.textContent = 'Congratulations! Clap Clap';
        }
    })
})();
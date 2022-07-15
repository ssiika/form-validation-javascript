const form = document.querySelector('.form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
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
    return {checkEmail, checkZip};
})();

(() => {
    for (let i = 0; i < countryList.length; i++) {
        let newCountry = document.createElement('option');
        newCountry.setAttribute('value', countryList[i]);
        newCountry.textContent = countryList[i];
        country.appendChild(newCountry);
    }
    zip.addEventListener('input', validation.checkZip);
    // email.setCustomValidity('Invalid Field.');
})();
import {login} from "../admin.js";

export function loginValidation() {

    const name = document.querySelector("#name");
    let nameValue = name.value.trim();
    const nameError = document.querySelector("#name-error")

    if(nameValue.length < 2) {

        nameError.style.display = "block";

    } 

    const password = document.querySelector("#password");
    let passwordValue = password.value.trim();
    const passwordError = document.querySelector("#password-error");

    if(passwordValue.length < 2) {
        passwordError.style.display = "block";
    }
    
    if(nameValue < 2 || passwordValue < 2) {
        login(nameValue, passwordValue);
    }

}
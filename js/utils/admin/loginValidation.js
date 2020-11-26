import {login} from "../../admin.js";

export function loginValidation() {

    const name = document.querySelector("#name");
    let nameValue = name.value.trim();
    const nameError = document.querySelector("#name-error")

    if(nameValue.length < 1) {

        nameError.style.display = "block";

    } else {
        nameError.style.display = "none";
    }

    const password = document.querySelector("#password");
    let passwordValue = password.value.trim();
    const passwordError = document.querySelector("#password-error");

    if(passwordValue.length < 1) {
        passwordError.style.display = "block";
    }
    else {
        passwordError.style.display = "none";
    }
    
    if(nameValue.length > 1 && passwordValue.length > 1) {
        login(nameValue, passwordValue);
    }

}
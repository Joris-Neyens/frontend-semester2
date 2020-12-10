import {getExistingStorage} from "./localStorage.js";

export function checkLogin() {

    const token = getExistingStorage("key");
    const name = getExistingStorage("name");
    
    const welcome = document.querySelector(".welcome-message")

    if(token.length === 0) {
        location.href = "/admin.html"
    } else{
        welcome.innerHTML += `<p>Welcome ${name}</p>`
    }

}
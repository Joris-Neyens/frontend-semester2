import {baseUrl} from "./common/baseUrl.js";
import {loginValidation} from "./utils/admin/loginValidation.js";
import {message} from "./common/message.js";
import {storeItem} from "./common/localStorage.js";


const form = document.querySelector("form");
const loginButton = document.querySelector(".login-button");

form.addEventListener("keyup", function(event){

    if(event.key === "Enter") {
        loginButton.click();
    }
})



loginButton.addEventListener("click", loginValidation) ;



export async function login(name, password) {

    const url = baseUrl + "/auth/local";
    const loginData = JSON.stringify({identifier: name, password: password});

    const post = {
        method: "POST",
        body: loginData,
        headers: {
            "content-type": "application/json",
        },
    };

    try{
        const response = await fetch(url, post);
        const json = await response.json();

        if(json.user) {
            
            storeItem("key", json.jwt);
            storeItem("name", json.user.username);
            location.href = "/dashboard.html";
        } if(json.error) {
            message(".message", "error", "username password combination unknown");
        }
    
    } catch(error) {
        console.log(error);
    }

}
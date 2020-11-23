import {baseUrl} from "../common/baseUrl.js";
import {loginValidation} from "./utils/loginValidation.js";


const loginButton = document.querySelector(".login-button");

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

        console.log(json)

        if(json.user) {
            console.log("you are logged inn now")
        } if(json.error) {
            console.log("login failed");
        }
    
    
    } catch(error) {
        console.log(error, "error");
    }

}
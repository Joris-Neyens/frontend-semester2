import {baseUrl} from "../../common/baseUrl.js";
import {getExistingStorage} from "../../common/localStorage.js";


export async function postProduct(newObject) {

    const token = getExistingStorage("key");
    const url = baseUrl + "/products/";

    const newProduct = {
        method: "POST",
        body: newObject,
        headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
    }

    try{
        const response = await fetch(url, newProduct);
        const json = await response.json();

        console.log(json);
    } catch(error){
        console.log("error", error);   
    }

}
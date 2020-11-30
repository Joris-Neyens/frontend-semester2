import {baseUrl} from "../../common/baseUrl.js";
import {makeEditHtml} from "./makeEditHtml.js";


export function getEditApi() {
    const url = baseUrl + "/products";
    
        (async function() {
            try{
            const response = await fetch(url);
            const json = await response.json();
    
            makeEditHtml(json)
                 
            } catch(error) {
                console.log(error);
            }
    
        })();
    };
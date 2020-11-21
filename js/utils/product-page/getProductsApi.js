import {baseUrl} from "../../common/baseUrl.js"
import {productHtml} from "../../productPage.js"


export function getProductsApi() {
    const url = baseUrl + "/products";
    
        (async function() {
            try{
            const response = await fetch(url);
            const json = await response.json();
    
            productHtml(json)
        
            } catch(error) {
                console.log(error);
            }
    
        })();
    };
import {baseUrl} from "./baseUrl.js";
import {makeHtml} from "../index.js";
import {makeProductsHtml} from "../pages/products.js"


export function getProductsApi() {

    const url = baseUrl + "/products";

    (async function() {
        try{
        const response = await fetch(url);
        const json = await response.json();


    
        makeHtml(json)
        makeProductsHtml(json)

    } catch(error) {
        console.log(error);
    }

})();
}

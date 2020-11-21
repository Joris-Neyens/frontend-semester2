import {baseUrl} from "../../common/baseUrl.js";
import {makeProductsHtml} from "../../products.js";
import {searchProducts} from "../../utils/products/searchProducts.js";

export function getProductsApi() {
    const url = baseUrl + "/products";
    
        (async function() {
            try{
            const response = await fetch(url);
            const json = await response.json();
    
            makeProductsHtml(json)
            searchProducts(json)
        
            } catch(error) {
                console.log(error);
            }
    
        })();
    };
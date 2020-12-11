import {baseUrl} from "../../common/baseUrl.js";
import {makeDashboardHtml} from "../../dashboard.js";
import {searchDashboardProducts} from "./searchDashboardProducts.js";

export function getDashboardApi() {

    const url = baseUrl + "/products";
    
        (async function() {
            try{
            const response = await fetch(url);
            const json = await response.json();
    
            makeDashboardHtml(json)
            searchDashboardProducts(json)
        
            } catch(error) {
                console.log(error);
            }
    
        })();
    };
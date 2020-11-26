import {baseUrl} from "../../common/baseUrl.js";
import {makeDashboardHtml} from "../../dashboard.js";

export function getDashboardApi() {

    const url = baseUrl + "/products";
    
        (async function() {
            try{
            const response = await fetch(url);
            const json = await response.json();
    
            makeDashboardHtml(json)
        
            } catch(error) {
                console.log(error);
            }
    
        })();
    };
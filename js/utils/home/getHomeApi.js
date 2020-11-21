import {baseUrl} from "../../common/baseUrl.js";
import {headerImageHtml} from "../../index.js";

export function getHomeApi() {

    const url = baseUrl + "/home";

    (async function() {
        try{
        const response = await fetch(url);
        const json = await response.json();

        headerImageHtml(json)

    } catch(error) {
        console.log(error);
    }

    })();
}
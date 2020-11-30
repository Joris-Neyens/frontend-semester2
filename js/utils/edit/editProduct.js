import {baseUrl} from "../../common/baseUrl.js";
import {getExistingStorage} from "../../common/localStorage.js";

export async function editProduct(id, productObject) {

    const url = baseUrl + "/products/" + id;
    const token = getExistingStorage("key");

    const editData = {
        method: "PUT",
        body: productObject,
        headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
        },
    };

    try {
        const response = await fetch(url, editData);
        const json = await response.json();
        
        if(json.updated_at) {
            location.href= "/dashboard.html"
        }
    } catch(error) {
        console.log("error", error)
    }




};



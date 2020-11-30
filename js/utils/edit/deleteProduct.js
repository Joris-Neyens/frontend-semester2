import {productId} from "../../edit.js";
import {baseUrl} from "../../common/baseUrl.js";
import {getExistingStorage} from "../../common/localStorage.js";

export async function deleteProduct() {

    const remove = confirm("ready to delete?");

    if(remove) {
        const url = baseUrl + "/products/" + productId;

        const token = getExistingStorage("key");

        const removeProduct = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        try{
            const response = await fetch(url, removeProduct);
            const json = await response.json()

            location.href = "/dashboard.html";

        } catch(error) {
            console.log("error", error)
        }

    }
}
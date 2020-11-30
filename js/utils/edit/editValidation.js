import {productId} from "../../edit.js";
import {message} from "../../common/message.js";
import {editProduct} from "./editProduct.js";

export function editValidation() {
    
    const imageUrl = document.querySelector("#image-url");
    const title = document.querySelector("#name");
    const price = document.querySelector("#price");
    const description  = document.querySelector("#description");
    const featured = document.querySelector("#switch");

    const idValue = productId;
    const imageValue = imageUrl.value.trim();
    const titleValue = title.value.trim();
    const priceValue = price.value.trim();
    const descriptionValue = description.value.trim();
    const featuredValue = featured.checked;

    const newObject = JSON.stringify({
        image_url: imageValue,
        title: titleValue,
        price: priceValue,
        description: descriptionValue,
        featured: featuredValue,
    })

    if(
        isNaN(priceValue)
    ) {
         message(".price-error", "error", "use a number for the price")
    } else if(
        imageValue.length === 0 ||
        titleValue.length === 0 ||
        priceValue.length === 0 ||
        descriptionValue.length === 0
    ){
        return message(".edit-message", "error", "please full out all fields") 
    } else {
        editProduct(idValue, newObject);
    }

}
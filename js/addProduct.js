import {message} from "./common/message.js";
import {postProduct} from "./utils/add-product/postProduct.js";
import {checkLogin} from "./common/checkLogin.js";

checkLogin();

const addButton = document.querySelector("#edit");
addButton.addEventListener("click", formValidation);


function formValidation() {

    const imageUrl = document.querySelector("#image-url");
    const title = document.querySelector("#name");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const featured = document.querySelector("#switch");

    const imageValue = imageUrl.value.trim();
    const titleValue = title.value.trim();
    const priceValue = price.value.trim();
    const descriptionValue = description.value.trim();
    const featuredValue = featured.checked;

    const newProduct = JSON.stringify({

        image_url: imageValue,
        title: titleValue,
        price: priceValue,
        description: descriptionValue,
        featured: featuredValue,

    });


    if(
        isNaN(priceValue)
    ){
        message(".price-error", "error", "use a number for price")
    } else if(
        imageValue.length === 0 ||
        titleValue.length === 0 ||
        priceValue.length === 0 ||
        descriptionValue.length === 0 
    ){
        message(".add-message", "error", "please fill out all fields")
    } else {
        postProduct(newProduct);
    }

    


}
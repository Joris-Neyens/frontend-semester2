import {getEditApi} from "./utils/edit/getEditApi.js";
import {baseUrl} from "./common/baseUrl.js";

getEditApi();

const querystring = document.location.search;
const params = new URLSearchParams(querystring);

let id = "";

if (params.has("id")) {
    id = params.get("id");
} else {
    document.href = "dashboard.html";
}

let productId = JSON.parse(id)


export function makeEditHtml(products) {

    const image = document.querySelector(".edit-image");
    const imageUrl = document.querySelector("#image-url");
    const title = document.querySelector("#name");
    const price = document.querySelector("#price");
    const description  = document.querySelector("#description");
    const featured = document.querySelector("#switch");

    let imageHtml = ""
    let imageUrlHtml = ""
    let titleHtml = ""
    let priceHtml = ""
    let descriptionHtml = ""
    let featuredHtml = ""

    products.forEach(function(product) {
        if(product.id === productId) {
       
            imageHtml += `<img src="${baseUrl + product.image.url}" class="col-4 offset-4" alt="bicycle image of ${product.title}">`
            imageUrlHtml += `${product.image.name}`
            titleHtml += `${product.title}`
            priceHtml += `${product.price}`
            descriptionHtml += `${product.description}`
            featuredHtml += `${product.featured}` 
        
        }
    })

    image.innerHTML = imageHtml
    imageUrl.value = imageUrlHtml
    title.value = titleHtml
    price.value = priceHtml
    description.value = descriptionHtml

    if(featuredHtml === "true") {
        featured.checked = true;
    } 

}


//    const featureSwitch = document.querySelectorAll(".custom-control-input");
//                 featureSwitch.forEach(function(fSwitch) {
//                 fSwitch.addEventListener("click", flipSwitch)
//                 })

//                 function flipSwitch(event) {
//                     console.log(event)
//                 }

import {productId} from "../../edit.js";


export function makeEditHtml(products) {

    const image = document.querySelector(".edit-image");
    const imageUrl = document.querySelector("#image-url");
    const title = document.querySelector("#name");
    const price = document.querySelector("#price");
    const description  = document.querySelector("#description");
    const featured = document.querySelector("#switch");
    const id = document.querySelector("#id");

    let imageHtml = "";
    let imageUrlHtml = "";
    let titleHtml = "";
    let priceHtml = "";
    let descriptionHtml = "";
    let featuredHtml = "";

    products.forEach(function(product) {
        if(product.id === productId) {
       
            imageHtml += `<img src="${product.image_url}" class="col-4 offset-4" alt="bicycle image of ${product.title}">`
            imageUrlHtml += `${product.image_url}`
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
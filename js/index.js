import {baseUrl} from "./common/baseUrl.js";
import {getHomeApi} from "./utils/home/getHomeApi.js";
import {getProductsApi} from "./common/getProductsApi.js";


//header image
getHomeApi();
export function headerImageHtml(homeApi) {

    const headerContainer = document.querySelector(".header-container");

    const alt = homeApi.hero_banner.caption
    
    const image = homeApi.hero_banner.url
    const imageUrl = baseUrl + image;
    let newHtml = "";

    newHtml += `<div class="opacity"></div><div class="header-container_image" style="background-image: url(${imageUrl})">
                <h1>bicycle.co</h1></div>`

    headerContainer.innerHTML = newHtml;

}

//cards
getProductsApi()
export function makeHtml(products) {

    console.log(products)

    const cardContainer = document.querySelector("#card-container");

    let html= "";

    products.forEach(function(product) {

        html += `<div class="col-4 card shadow-sm" style="width: 18rem;">
                    <div class="card_image">
                        <img src="${baseUrl + product.image.url}" class="card-img-top" alt="${product.image.caption}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center">${product.title}</h5>
                        <p class="card-text text-center">Starting at $${product.price}</p>
                    </div>
                </div>`
    });

    cardContainer.innerHTML = html;
    


}
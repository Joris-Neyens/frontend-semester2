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

    newHtml += `<div class="header-container_image" style="background-image: url(${imageUrl})"><h4>bicycle.co</h4></div>`

    headerContainer.innerHTML = newHtml;

}

//cards
getProductsApi()
export function makeHtml(products) {

    console.log(products)

    const cardContainer = document.querySelector("#card-container");

    let html= "";

    products.forEach(function(product) {

        html += `<div class="col-4 offset-1 card" style="width: 18rem;">
                    <div class="card_image">
                        <img src="${baseUrl + product.image.url}" class="card-img-top" alt="${product.image.caption}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <a href="#" class="btn btn-primary">check it out</a>
                    </div>
                </div>`

    });

    cardContainer.innerHTML = html;
    


}

import {baseUrl} from "../common/baseUrl.js";
import {getProductsApi} from "../common/getProductsApi.js";


//cards
getProductsApi()

export function makeProductsHtml(products) {



    const cardContainer = document.querySelector("#card-container");

    let cardHtml= "";

    products.forEach(function(product) {

        cardHtml += `<div class="card shadow-sm col-12 col-sm-5 offset-sm-0 col-md-5 col-lg-3" style="width: 18rem;">
                    <div class="card_image">
                        <img src="${baseUrl + product.image.url}" class="card-img-top" alt="${product.image.caption}">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title text-center">${product.title}</h3>
                        <p class="card-text text-center">Starting at: <span class="price">$${product.price}</span></p>
                    </div>
                </div>`


    });

    cardContainer.innerHTML = cardHtml;
                
}
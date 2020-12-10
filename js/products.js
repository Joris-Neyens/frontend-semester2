import {baseUrl} from "./common/baseUrl.js";
import {getProductsApi} from "./utils/products/getProductsApi.js"
import {selectFavorites} from "./utils/products/addFav.js"; 
import {checkHeart} from "./common/checkHeart.js";
import {checkBasket} from "./common/checkBasket.js";

getProductsApi()

checkBasket();
checkHeart();

//make html
export function makeProductsHtml(products) {

    const spinner = document.querySelector(".spinner")
    spinner.style.display="none";

    const cardContainer = document.querySelector("#card-container");
    
    let productsHtml = "";

    products.forEach(function(product) {

        productsHtml += `<div class="card col-12 col-sm-6 offset-sm-0 col-md-4 col-lg-4 px-sm-2 px-xl-4" style="width: 18rem;">
                            <div class="shadow">
                                <a href="product-page.html?id=${product.id}">
                                <div class="card_image">
                                    <img src="${product.image_url}" class="card-img-top" alt="${product.description}">
                                    <i class="col-2 far fa-heart card-heart" data-id="${product.id}" data-title="${product.title}"
                                        data-price="${product.price}" data-image="${product.image_url}" ></i>
                                </div>
                                </a>
                                <div class="card-body">
                                    <div class="row">
                                        <h3 class="col-12 card-title text-center">${product.title}</h3>
                                    </div>
                                    <p class="card-text text-center">Starting at: <span class="price">$${product.price}</span></p>
                                </div> 
                            </div>  
                        </div>`

    });


    cardContainer.innerHTML = productsHtml;

    //selectFav

    let favorites = document.querySelectorAll(".card-body i");
    favorites.forEach(function(fav) {
        fav.addEventListener("click", selectFavorites)
    });


}














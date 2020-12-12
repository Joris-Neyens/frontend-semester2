
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
                                
                                    <div class="card_image">
                                    <a class="col-12 h-100 w-100 d-flex justify-content-center" href="product-page.html?id=${product.id}">
                                        <img src="${product.image_url}" class="card-img-top" alt="bicycle ${product.title}">
                                    </a>
                                        <i class="card-heart far fa-heart col-2 offset-9 position-absolute pb-2" data-id="${product.id}" data-title="${product.title}"
                                            data-price="${product.price}" data-image="${product.image_url}" ></i>
                                    </div>
                                    <a class="" href="product-page.html?id=${product.id}">
                                <div class="card-body">
                                        <h3 class="col-12 card-title text-center">${product.title}</h3>
                                    <p class="card-text text-center">Starting at: <span class="price">$${product.price}</span></p>
                                </div> 
                                </a>
                            </div>  
                        </div>`;

    });


    cardContainer.innerHTML = productsHtml;

    
    selectFavorites()
    
    
}


















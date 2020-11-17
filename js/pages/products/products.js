import {baseUrl} from "../../common/baseUrl.js";
import {selectFavorites} from "./addFav.js"; 
import {checkHeart} from "../../utils/checkHeart.js";


checkHeart();


//getAPI
(function getProductsApi() {
const url = baseUrl + "/products";

    (async function() {
        try{
        const response = await fetch(url);
        const json = await response.json();

        makeProductsHtml(json)
    
        } catch(error) {
            console.log(error);
        }

    })();
})();


//make html
function makeProductsHtml(products) {
    console.log(products)

    const cardContainer = document.querySelector("#card-container");
    
    let productsHtml = "";

    products.forEach(function(product) {


        productsHtml += `<div class="card shadow-sm col-12 col-sm-5 offset-sm-0 col-md-5 col-lg-3" style="width: 18rem;">
                        <a href="product-page.html?id=${product.id}">
                        <div class="card_image">
                            <img src="${baseUrl + product.image.url}" class="card-img-top" alt="${product.image.caption}">
                            <button type="submit" id="form-button" class="btn btn-secondary">See more</button>
                        </div>
                        </a>
                        <div class="card-body">
                            <div class="row">
                                <h3 class="col-8 offset-2 card-title text-center">${product.title}</h3>
                                <i class="col-2 far fa-heart" data-id="${product.id}" data-title="${product.title}"
                                data-price="${product.price}" data-image="${product.image.url}" ></i>
                            </div>
                            <p class="card-text text-center">Starting at: <span class="price">$${product.price}</span></p>
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






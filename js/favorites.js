import { checkHeart } from "./common/checkHeart.js";
import {removeAllFavorites} from "./utils/favorites/removeFavorites.js"
import {checkBasket} from "./common/checkBasket.js";
import {searchFavorites} from "./utils/favorites/searchFavorites.js";

checkHeart();
checkBasket();

export function makeFavoriteHtml(products) {

    const favCardContainer = document.querySelector("#favorites-card-container");
   
    let html = "";

    if (products.length === 0) {
        html += `<div class="col-12"><p class="col-12 text-center">You have no selected favorites</p></div>`;
    }

    products.forEach(function(product) {

        html += `<div class="card col-12 col-sm-6 offset-sm-0 col-md-4 col-lg-4 px-sm-2 px-xl-4" style="width: 18rem;">
                    <div class="shadow">
                        <a href="product-page.html?id=${product.id}">
                        <div class="card_image">
                            <img src="${product.image}" class="card-img-top" alt="bicycle ${product.title}">
                            <button type="submit" id="form-button" class="btn btn-secondary">See more</button>
                        </div>
                        </a>
                        <div class="card-body">
                                <h3 class="col-12 card-title text-center">${product.title}</h3>         
                            <p class="card-text text-center">Starting at: <span class="price">$${product.price}</span></p>
                        </div>
                    </div>
                </div>`;
                    
    });

    favCardContainer.innerHTML = html;

}

removeAllFavorites()
searchFavorites()

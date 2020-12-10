import { checkHeart } from "./common/checkHeart.js";
import { getExistingStorage } from "./common/localStorage.js";
import {baseUrl} from "./common/baseUrl.js";
import {removeAllFavorites, removeFromStorage} from "./utils/favorites/removeFavorites.js"
import {checkBasket} from "./common/checkBasket.js";


checkHeart();
checkBasket();

const storedFavorites = getExistingStorage("favorites");

export function makeFavoriteHtml() {
    const favCardContainer = document.querySelector("#favorites-card-container");
   



    let html = "";

    if (storedFavorites.length === 0) {
        html += `<div class="col-12"><p class="col-12 text-center">You have no selected favorites</p></div>`;
    }

    storedFavorites.forEach(function(product) {

        html += `<div class="card col-12 col-sm-6 offset-sm-0 col-md-4 col-lg-4 px-sm-2 px-xl-4" style="width: 18rem;">
                    <div class="shadow">
                        <a href="product-page.html?id=${product.id}">
                        <div class="card_image">
                            <img src="${product.image}" class="card-img-top" alt="${product.title}">
                            <button type="submit" id="form-button" class="btn btn-secondary">See more</button>
                        </div>
                        </a>
                        <div class="card-body">
                            <div class="row">
                                <h3 class="col-8 offset-2 card-title text-center">${product.title}</h3>
                                <i class="col-2 fas fa-heart card-heart" data-id="${product.id}"></i>        
                            </div>
                            <p class="card-text text-center">Starting at: <span class="price">$${product.price}</span></p>
                        </div>
                    </div>
                    
                </div>`;
                    
    });

    favCardContainer.innerHTML = html;

    removeFromStorage("favorites", ".card-body i")

    

}


makeFavoriteHtml();

removeAllFavorites()

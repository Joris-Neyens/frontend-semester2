import {baseUrl} from "./common/baseUrl.js";
import {getHomeApi} from "./utils/home/getHomeApi.js";
import {getProductsApi} from "./utils/home/getProductsApi.js";
import {checkHeart} from "./common/checkHeart.js";
import {checkBasket} from "./common/checkBasket.js";

checkHeart();
checkBasket();


//header image
getHomeApi();
export function headerImageHtml(homeApi) {

    const headerContainer = document.querySelector("#home-header-container");

    const alt = homeApi.hero_banner_alt_text;
    
    let newHtml = "";

    newHtml += `<div class="opacity"></div>
                <div id="home-container_image" class="header-container_image" style="background-image: url(${baseUrl + homeApi.hero_banner.url})" alt="${alt}">
                    <div class="header-logo col-6 col-sm-5 col-md-4 col-lg-3 pt-5 pt-sm-0 mt-5 mt-sm-0 "><img src="../images/logo-white.svg" alt="bicycle nation logo"></div>
                </div>`

    headerContainer.innerHTML = newHtml;

}

//cards

export function makeHtml(featured) {

    const spinner = document.querySelector(".spinner")
    spinner.style.display="none";

    const homeCardContainer = document.querySelector("#home-card-container");

    let homeCardHtml= "";

    featured.forEach(function(product) {

        if(product.featured === true) {
            
            homeCardHtml += `<div class="card shadow-sm col-12 col-sm-12 mx-sm-2 mx-auto col-lg-3" style="width: 18rem;">
                                <a href="./product-page.html?id=${product.id}">
                                <div class="card_image">
                                    <img src="${product.image_url}" class="card-img-top" alt="image of bicycle ${product.title}">
                                </div>
                                <div class="card-body">
                                    <h3 class="card-title text-center">${product.title}</h3>
                                    <p class="card-text text-center">Starting at: <span class="price">$${product.price}</span></p>
                                </div>
                                </a>
                            </div>`


        }


    });

    homeCardContainer.innerHTML = homeCardHtml;
                
}


import {getProductPageApi} from "./utils/product-page/getProductPageApi.js";
import {addToWishlist} from "./utils/product-page/addToWishlist.js";
import {checkBasket} from "./common/checkBasket.js"
import {checkHeart} from "./common/checkHeart.js"
import {modalBody} from "./utils/product-page/modalBody.js";


checkBasket()
checkHeart()
getProductPageApi()

const querystring = document.location.search;
const params = new URLSearchParams(querystring);

let id = "";

if(params.has("id")) {
    id = params.get("id");
} else {
    document.href = "products.html";
}

const productId = parseInt(id);


export function productHtml(products) {

    const details = document.querySelector(".details");
    const productInfoText = document.querySelector(".product-info_text");
    const breadcrumbActive = document.querySelector("#breadcrumb-active")

    let detailHtml = ""
    let productInfoHtml = "";
    let breadcrumbHtml = "";


    products.forEach(function(product) {

        if(product.id === productId) {
        
            detailHtml += `

            <div class="details_image shadow col-12 col-lg-6">
                    <div class="col-12 d-flex p-0 justify-content-center">
                        <div class="detail_image-container">
                            <img src="${product.image_url}">
                        </div>
                    </div>
                </div>
                <div class="details_info col-12 col-lg-4">
                    <div class="details_info-top">
                        <h1>${product.title}</h1>
                        <h2>$${product.price}</h2>
                    </div>
                    <div class="details_info-bottom">
                        <p>Here should come a short product description.
                        A little summary not more than three or four lines.</p>
                        <button id="basket-button" type="button" class="btn btn-secondary" 
                        data-toggle="modal" data-target="#add-to-card"
                        data-id="${product.id}"  data-title="${product.title}"
                        data-price="${product.price}" data-image="${product.image_url}">Add to card<i class="fas fa-shopping-basket"></i></button>
                    </div>
                </div>`
                                



            productInfoHtml += `<p>${product.description}</p>`

            breadcrumbHtml += `${product.title}`

            document.title = product.title

        }
   

    })
    details.innerHTML = detailHtml
    productInfoText.innerHTML = productInfoHtml
    breadcrumbActive.innerHTML = breadcrumbHtml

 
    addToWishlist()
    modalBody()

}


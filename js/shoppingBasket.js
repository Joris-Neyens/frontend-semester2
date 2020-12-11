
import {getExistingStorage} from "./common/localStorage.js";
import {checkBasket} from "./common/checkBasket.js";
import {checkHeart} from "./common/checkHeart.js";
import {removeFromStorage} from "./utils/shoppingBasket/removeFromBasket.js";
import {getSumOfBasket} from "./utils/shoppingBasket/getSumOfBasket.js";

checkBasket()
checkHeart()

//product html


export function shoppingBasketHtml() {

    const storage = getExistingStorage("basket");
    
    const image = document.querySelector(".basket_product-info");

    let imageHtml = ""   

    if(storage.length === 0) {
        imageHtml += `<p class="text-center">Your shopping card is empty</p>`
    }

    storage.forEach(function(product) {

        imageHtml += `<div class="row">
                        <div class="col-3 basket-image">
                            <a href="product-page.html?id=${product.id}">
                            <img src="${product.image}"></a>
                        </div>
                        <div class="col-8 image-info">
                            <h2>${product.title}</h2>
                            <p class="product-price">$ ${product.price}</p>
                            <p data-id="${product.id}" class="remove">remove</p>
                        </div> 
                    </div>`
    })

    image.innerHTML = imageHtml

     removeFromStorage("basket", ".image-info .remove")

}
shoppingBasketHtml()

getSumOfBasket()




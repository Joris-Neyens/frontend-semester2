
import {getExistingStorage} from "./common/localStorage.js";
import {baseUrl} from "./common/baseUrl.js";
import {checkBasket} from "./common/checkBasket.js";
import {checkHeart} from "./common/checkHeart.js";
import {removeFromStorage} from "./utils/favorites/removeFavorites.js";

checkBasket()
checkHeart()

//product html
const storage = getExistingStorage("basket");

export function shoppingBasketHtml() {
    
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


//total amount shopping basket
function getTotal() {

    const total = document.querySelector(".basket_checkout");

    let prices = [];
    
    storage.forEach(function(product) {
        prices.push(parseFloat(product.price))
    })

    const add = (a, b) => a + b;

    const sum = prices.reduce(add);

    total.innerHTML = ` 
                            <h2>Total</h2>
                            <div class="row">
                                <p class="col-5 text-left">Subtotal</p>
                                <p class="col-6 text-right">$ ${sum}</p>
                            </div>
                            <div class="row">
                                <p class="col-5 text-left">Delivery</p>
                                <p class="col-6 text-right">Free</p>
                            </div>
                            <div class="total row">
                                <p class="col-5 text-left">Total</p>
                                <p class="col-6 text-right">$ ${sum}</p>
                            </div>
                            <button type="submit" id="form-button" class="btn btn-secondary">Go to checkout</button>`
                    
}

getTotal()
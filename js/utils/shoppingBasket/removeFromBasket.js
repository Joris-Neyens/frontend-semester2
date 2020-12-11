import {getExistingStorage} from "../../common/localStorage.js";
import {storeItem} from "../../common/localStorage.js";
import {shoppingBasketHtml} from "../../shoppingBasket.js";
import {checkBasket} from "../../common/checkBasket.js";
import {getSumOfBasket} from "./getSumOfBasket.js";

export function removeFromStorage(key, target) {

    let products = document.querySelectorAll(target);
    
    products.forEach(function(product) {
        product.addEventListener("click", removeItem)

    })

    function removeItem() {

        const id = this.dataset.id;

        const currentProducts = getExistingStorage(key)
        const filteredProducts = currentProducts.filter(function(product) {

            if(product.id !== id) {
                return true
            }
        });

        storeItem(key, filteredProducts);
        shoppingBasketHtml()   
        checkBasket()
        getSumOfBasket()

    }
    
}


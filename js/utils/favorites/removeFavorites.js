import {getExistingStorage} from "../../common/localStorage.js";
import {storeItem} from "../../common/localStorage.js";
// import {makeFavoriteHtml} from "../../favorites.js";
import {checkHeart} from "../../common/checkHeart.js";
// import {shoppingBasketHtml} from "../../shoppingBasket.js";


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
    
    checkHeart()

    }

    // if(key === ".basket") {
    //     shoppingBasketHtml()
    // } else {
    //     makeFavoriteHtml()
    // }
    
}

export function removeAllFavorites() {

    const removeButton = document.querySelector(".remove-button");
    
    removeButton.addEventListener("click", clearFavorites);

    function clearFavorites() {
        
        window.confirm("accept to remove all favorites");

        localStorage.removeItem("favorites");

        makeFavoriteHtml()

        checkHeart()

    }


}

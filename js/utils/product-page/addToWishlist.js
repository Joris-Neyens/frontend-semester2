import { getExistingStorage, storeItem } from "../../common/localStorage.js";
import {checkBasket} from "../../common/checkBasket.js";


export function addToWishlist() {
    
    const basketButton = document.querySelector("#basket-button");

    basketButton.addEventListener("click", addProduct)

    function addProduct() {


        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;
        const image = this.dataset.image;

        console.log(id, title, price)

        const currentBasket = getExistingStorage("basket");

        const currentProducts = currentBasket.find(function(product) {
            return product === id;
        });

        if(!currentProducts) {
            const newProduct = {
                id: id,
                title: title,
                price: price,
                image: image,
            }

            currentBasket.push(newProduct)

            storeItem("basket", currentBasket)
        } else {
            const updatedBasket = currentBasket.filter(function(products) {
                return products.id !== id;
            })

            storeItem("basket", updatedBasket)
        } 
            
        checkBasket()
    }

    
}


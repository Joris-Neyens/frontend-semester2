import {getExistingStorage} from './localStorage.js'


export function checkBasket() {

    
    //add number to basket
    const basketNumber = document.querySelectorAll(".basket-number");
    const getExistingProducts = getExistingStorage("basket");

    if(getExistingProducts.length === 0) {
        basketNumber.forEach(function(basket) {

            basket.style.display = "none"
        })
    } else {

    basketNumber.forEach(function(basket){

        basket.style.display = "inline-block"
        const basketAmound = getExistingProducts.length;
        basket.innerHTML = `<p>${basketAmound}</p>`

    });   

    }

    // change basket color
    const shoppingBasket = document.querySelectorAll(".navbar .fa-shopping-basket");
    const basketExists = getExistingProducts.find(function(product) {
        return product.id
    })

    if(basketExists) {
        shoppingBasket.forEach(function(html) {
            html.style.color = "#EB505D";
        })

        
    } else {
        shoppingBasket.forEach(function(html) {
            html.style.color = "#3B5070";
        })
    }
}
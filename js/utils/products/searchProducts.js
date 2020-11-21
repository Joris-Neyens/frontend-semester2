import {makeProductsHtml} from "../../products.js";

export function searchProducts(products) {


    //search product title
    const categoriesInput = document.querySelector(".categories input");

    categoriesInput.onkeyup = function(input) {

        const searchInput = input.target.value.toLowerCase().trim();

        const filteredProducts = products.filter(function(product) {
            const title = product.title.toLowerCase();

            if(title.includes(searchInput)) {

                return true;
            }
        })
        makeProductsHtml(filteredProducts)

    }

    const lowHeigh = document.querySelector("#low-heigh")
    const heighLow = document.querySelector("#heigh-low")


    lowHeigh.addEventListener("click", function() {

        products.sort((a, b) => (a.price > b.price ? 1 : -1));
        makeProductsHtml(products)

    })

    heighLow.addEventListener("click", function() {

        products.sort((a, b) => (a.price < b.price ? 1 : -1));
        makeProductsHtml(products)

    })

    
    

    
    

}

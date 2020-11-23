import {makeFavoriteHtml} from "../../favorites.js";
import {getExistingStorage} from "../../common/localStorage.js";


const products = getExistingStorage();

searchFavorites(products)

    export function searchFavorites(products) {

        //search product title
        const categoriesInput = document.querySelector(".product_navigation-content input");

        categoriesInput.onkeyup = function(input) {

            const searchInput = input.target.value.toLowerCase().trim();

            const filteredProducts = products.filter(function(product) {
                const title = product.title.toLowerCase();

                if(title.includes(searchInput)) {

                    return true;
                }
            })
            makeFavoriteHtml(filteredProducts)

        }

        const lowHeigh = document.querySelector("#low-heigh")
        const heighLow = document.querySelector("#heigh-low")


        lowHeigh.addEventListener("click", function() {

            products.sort((a, b) => (a.price > b.price ? 1 : -1));
            makeFavoriteHtml(products)

        })

        heighLow.addEventListener("click", function() {

            products.sort((a, b) => (a.price < b.price ? 1 : -1));
            makeFavoriteHtml(products)

        })
        

    }
import {makeFavoriteHtml} from "../../favorites.js";
import {getExistingStorage} from "../../common/localStorage.js";


let storedFavorites = getExistingStorage("favorites");

makeFavoriteHtml(storedFavorites)


    export function searchFavorites() {

        const products = getExistingStorage("favorites");

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

            console.log(filteredProducts)
            makeFavoriteHtml(filteredProducts)

        }

    }
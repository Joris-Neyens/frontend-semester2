
import {getExistingFavorites} from "../pages/products/addFav.js";

export function checkHeart() {

    const existingFavorites = getExistingFavorites();

    let navbarI = document.querySelectorAll(".navbar #heart")

    const favoriteExists = existingFavorites.find(function(favorites) {
        return favorites.id
    })

        if (favoriteExists) {

            navbarI.forEach(function (navbarHeart) {
                
                navbarHeart.classList.add("fas");
                navbarHeart.classList.remove("far")
            })
    
        } else {
            navbarI.forEach(function (navbarHeart) {
                navbarHeart.classList.add("far")
                navbarHeart.classList.remove("fas");
            })
        }
    
}   

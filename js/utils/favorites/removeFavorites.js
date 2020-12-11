import {makeFavoriteHtml} from "../../favorites.js";
import {checkHeart} from "../../common/checkHeart.js";


export function removeAllFavorites() {

    const removeButton = document.querySelector(".remove-button");
    
    removeButton.addEventListener("click", clearFavorites);

    function clearFavorites() {

        localStorage.removeItem("favorites");
        makeFavoriteHtml()

        checkHeart()

    }


}

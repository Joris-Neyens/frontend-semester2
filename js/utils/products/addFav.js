import {checkHeart} from "../../common/checkHeart.js";
import {getExistingStorage, storeItem} from "../../common/localStorage.js";

export function selectFavorites() {

    let favorites = document.querySelectorAll(".card-heart");
    favorites.forEach(function(fav) {
        fav.addEventListener("click", addFavorite)
    });

    function addFavorite() {

    //toggle heart
    this.classList.toggle("far");
    this.classList.toggle("fas");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;


    //checkstorage
    const existingFavorites = getExistingStorage("favorites");

    const favoriteExists = existingFavorites.find(function(favorites) {
        return favorites.id === id;
    })

    //add or remove if id exists or not
    if(!favoriteExists) {
    const newFavorite = {
        id: id,
        title: title,
        price: price,
        image: image,
    }

    existingFavorites.push(newFavorite)

    storeItem("favorites", existingFavorites)

    } else {
        const newFavorites = existingFavorites.filter(function(favorites) {
            return favorites.id !== id; 
            })

            storeItem("favorites", newFavorites)
        
    } 

    checkHeart()

    }
}




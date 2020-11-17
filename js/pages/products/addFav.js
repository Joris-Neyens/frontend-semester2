import {checkHeart} from "../../utils/checkHeart.js"


export function selectFavorites() {

    //toggle heart
    this.classList.toggle("far");
    this.classList.toggle("fas");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;


    //checkstorage
    const existingFavorites = getExistingFavorites();

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

    setFavorites(existingFavorites)

    } else {
        const newFavorites = existingFavorites.filter((favorites) => favorites.id !== id) 
            {
            setFavorites(newFavorites)
        }
    } 

    checkHeart()
}

//check local storage & return it
export function getExistingFavorites() {
    const favorites = localStorage.getItem("favorites")

    if(!favorites) {

        return[];
       
    } else {
        return JSON.parse(favorites);
    }
}


//add to localstorage
function setFavorites(favorite) {
    localStorage.setItem("favorites", JSON.stringify(favorite))
}


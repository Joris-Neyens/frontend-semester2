//check local storage & return it
export function getExistingStorage(key) {
    const items = localStorage.getItem(key)

    if(!items) {

        return[];
       
    } else {
        return JSON.parse(items);
    }
}

//add to localstorage
export function storeItem(key, array) {
    localStorage.setItem(key, JSON.stringify(array))
}
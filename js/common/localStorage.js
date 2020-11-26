export function getToken() {
    return getFromStorage("token")
}

export function getUser() {
    const name = getFromStorage("name");

    if(name) {
        return name;
    } else {
        return null;
    }
}

//check local storage & return it
export function getExistingStorage(key) {
    const items = localStorage.getItem(key)

    if(!items) {

        return[];
       
    } else {
        return JSON.parse(items);
    }
}

//add product to localstorage
export function storeItem(key, array) {
    localStorage.setItem(key, JSON.stringify(array))
}
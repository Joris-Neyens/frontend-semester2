import {getEditApi} from "./utils/edit/getEditApi.js";
import {logout} from "./common/logout.js";
import {editValidation} from "./utils/edit/editValidation.js";
import {deleteProduct} from "./utils/edit/deleteProduct.js";
import {checkLogin} from "./common/checkLogin.js";
import {imagePreview} from "./common/imagePreview.js";


logout();
checkLogin();
getEditApi();

const querystring = document.location.search;
const params = new URLSearchParams(querystring);

let id = "";

if (params.has("id")) {
    id = params.get("id");
} else {
    document.href = "dashboard.html";
}

export const productId = id;


const editButton = document.querySelector("#edit");
const deletebutton = document.querySelector("#remove");

editButton.addEventListener("click", editValidation);
deletebutton.addEventListener("click", deleteProduct)

imagePreview()
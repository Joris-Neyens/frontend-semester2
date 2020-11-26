import {getDashboardApi} from "./utils/dashboard/getDashboardApi.js";
import {baseUrl} from "./common/baseUrl.js";

getDashboardApi()

export function makeDashboardHtml(products) {

    const cardContainer = document.querySelector("#dashboard-card-container");

    
    let dashboardHtml = "";

    products.forEach(function(product) {

        dashboardHtml += `<div class="card col-12 col-sm-5 offset-sm-0 col-md-5 col-lg-4 px-4" style="width: 18rem;">
                                <div class="shadow">
                                <a class="edit-link" href="edit.html?id=${product.id}">
                                        <div class="card_image">
                                            <img src="${baseUrl + product.image.url}" class="card-img-top" alt="${product.image.caption}">
                                            <i class="far fa-edit"></i>     
                                        </div>
                                        </a>
                                        <div class="card-body">
                                            <div class="row">
                                                <h3 class="col-8 offset-2 card-title text-center">${product.title}</h3>
                                            </div>
                                            <p class="card-text text-center"><span class="price">$${product.price}</span></p>
                                            </div>
                                        </div> 
                                </div>  
                            </div>`

    });

    

    cardContainer.innerHTML = dashboardHtml;

    editLink()


}



           
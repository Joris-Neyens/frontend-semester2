import {getDashboardApi} from "./utils/dashboard/getDashboardApi.js";
import {logout} from "./common/logout.js";
import {checkLogin} from "./common/checkLogin.js";

checkLogin();
logout();

getDashboardApi()

export function makeDashboardHtml(products) {

    const spinner = document.querySelector(".spinner")
    spinner.style.display="none";

    const cardContainer = document.querySelector("#dashboard-card-container");
    
    let dashboardHtml = "";
    let featured = ""

    products.forEach(function(product) {

        if(product.featured === true) {
            featured = `featured`
        } else {
            featured = ``
        }

        dashboardHtml += `<div class="card col-12 col-sm-6 offset-sm-0 col-md-4 col-lg-4 px-sm-2 px-xl-4" style="width: 18rem;">
                            <div class="shadow">
                                <a class="edit-link" href="edit.html?id=${product.id}">
                                        <div class="card_image">
                                            <img src="${product.image_url}" class="card-img-top" alt="${product.description}">
                                            <i class="far fa-edit"></i>     
                                        </div>
                                        <div class="card-body">
                                                <h3 class="col-12 card-title text-center">${product.title}</h3>
                                                <p class="card-text text-center col-12 m-0"><span class="price">$${product.price}</span></p>
                                                <p class="card-featured col-12 text-center p-0">${featured}</p>
                                        </div>
                                    </a>
                                </div> 
                                        
                                </div>  
                            </div>`

    });

    

    cardContainer.innerHTML = dashboardHtml;

}




           
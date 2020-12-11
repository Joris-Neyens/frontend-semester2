import {makeDashboardHtml} from "../../dashboard.js";

export function searchDashboardProducts(products) {


        //search product title
        const categoriesInput = document.querySelector(".dashboard-nav_content input");
    
        categoriesInput.onkeyup = function(input) {
    
            const searchInput = input.target.value.toLowerCase().trim();
    
            const filteredProducts = products.filter(function(product) {
                const title = product.title.toLowerCase();
    
                if(title.includes(searchInput)) {
    
                    return true;
                }
            })
            makeDashboardHtml(filteredProducts)
        }

}
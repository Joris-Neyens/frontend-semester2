import {getExistingStorage} from "../../common/localStorage.js";

export function getSumOfBasket() {

    const storage = getExistingStorage("basket");
    const total = document.querySelector(".basket_checkout");

        let sum = ""

        if(storage.length === 0) {
            sum = "00.00"
        } else {
            let prices = [];
    
            storage.forEach(function(product) {
                prices.push(parseFloat(product.price))
            })
        
            const add = (a, b) => a + b;
        
            sum = prices.reduce(add);
        }
  

    total.innerHTML = ` 
                            <h2>Total</h2>
                            <div class="row">
                                <p class="col-5 text-left">Subtotal</p>
                                <p class="col-6 text-right">$ ${sum}</p>
                            </div>
                            <div class="row">
                                <p class="col-5 text-left">Delivery</p>
                                <p class="col-6 text-right">Free</p>
                            </div>
                            <div class="total row">
                                <p class="col-5 text-left">Total</p>
                                <p class="col-6 text-right">$ ${sum}</p>
                            </div>
                            <button type="submit" id="form-button" class="btn btn-secondary">Go to checkout</button>`
                    
}
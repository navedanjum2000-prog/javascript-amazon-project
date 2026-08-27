import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"; // // HW-15


Promise.all([    // PROMISE.ALL RUNS MULTIPLE PROMISES !!!!!!!!!!!!!!!!! 
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('2ND_VALUE');
        });
    })

]).then((values) => {
    console.log(values);

    renderCheckoutHeader(); // // HW-15
    renderOrderSummary();
    renderPaymentSummary();
});











/*
new Promise((resolve) => {// promised are desined to take a function only! IT WILL RUN FIRST BEFORE ANYTHING, RESOLVE LETS US CONTROL WHEN TO GOTO THE NXT STEP
    loadProducts(() => {
        resolve('1st_value');      // first we wait for the loadProducts to finish then resolve will let us go to the next step
    });                            // THE RESOLVE CAN HAVE VALUES WHICH IS SAVED IN A PARAMETER IN THE 'then'

}).then((value) => {    // this will tell Promise that THIS IS THE NEXT STEP AS IT still runs the code in multithreds shit
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
    
}).then(() => {
    renderCheckoutHeader(); // // HW-15
    renderOrderSummary();
    renderPaymentSummary();
});
*/








/*
loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader(); // // HW-15
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
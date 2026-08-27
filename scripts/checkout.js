import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";

import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"; // // HW-15

loadProducts(() => {
    renderCheckoutHeader(); // // HW-15
    renderOrderSummary();
    renderPaymentSummary();
});
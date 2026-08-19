import { products } from "./products.js";

export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];


export function addToCart(productId, quantity) {
// checking if the products already exists or not, then we will increase the quantity
  let matchingItem; // we made this var bcz of scope problems (undefined)

  cart.forEach((cartItem) => { // "item" will have product name and quantity
      if (productId === cartItem.productId) {
          matchingItem = cartItem;
      }
  });
  // if we find the matching item, aka the matchingItem has a value
  if (matchingItem) {
      matchingItem.quantity += quantity;
  } else {
      cart.push({
          productId: productId,
          quantity: quantity
      });
  }
};


export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
};
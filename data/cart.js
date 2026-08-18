export const cart = [];


function addToCart(productId, quantity) {
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
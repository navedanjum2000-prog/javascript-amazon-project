function Cart(localStorageKey) {
    const cart = {
    cartItems: undefined,

    // loadFromStorage: function() {       // SHORT HAND NOTATION WRITTEN BELOW (2nd object)
    loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey))

        if (!this.cartItems) {                         // NOTE this GIVES US THE OUTER OBJECT WHICH IS cart, IT DOESNT MATTER WHAT THE VARIABLE NAME IS
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        };
    },


    saveToStorage() {                            // (3rd object)
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },


    addToCart(productId, quantity) {               // (4th obj)
    // checking if the products already exists or not, then we will increase the quantity
    let matchingItem; // we made this var bcz of scope problems (undefined)

    this.cartItems.forEach((cartItem) => { // "item" will have product name and quantity
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    // if we find the matching item, aka the matchingItem has a value
    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        this.cartItems.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionsId: '1'
        });
    }

    this.saveToStorage();
    },


    removeFromCart(productId) {                     // (5th obj)
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    this.cartItems = newCart;

    this.saveToStorage();
    },


    updateDeliveryOption(productId, deliveryOptionId) {    // (6th obj)
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        };
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();  
    },


    calculateCartQuantity() {          // (7th obj which is HW)
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
    },


    updateQuantity(productId, newQuantity) {      // (8th obj which is also HW)
    let matchingItem;
    
    this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
        matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    this.saveToStorage();   
    }
    };

    return cart;
};


const cart = Cart('cart-oop');
const buisnessCart = Cart('cart-buisness');


cart.loadFromStorage();
buisnessCart.loadFromStorage();

console.log(cart);
console.log(buisnessCart);
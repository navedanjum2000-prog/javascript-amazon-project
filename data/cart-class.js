class Cart {
    cartItems;  // same thing as witing out cartitems = undefined;     // THIS IS publicpropery & CAN BE ACCESSED ANYWHERE!!!
    #localStorageKey;//THIS IS CALLED privateproperty// # MAKES THE PROPERTY PIRVATE SO IT CANT BE ACCESSED FROM OUT OF THE CLASS TO CHANGE IT OR DO SUS STUFF


    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    };


    #loadFromStorage() {     // THIS METHORD IS ALSO PRIVATE NOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey))

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
    }




    saveToStorage() {                            // (3rd object)
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId, quantity) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => { // "item" will have product name and quantity
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

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
    }


    removeFromCart(productId) {                     // (5th obj)
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    this.cartItems = newCart;

    this.saveToStorage();
    }


    updateDeliveryOption(productId, deliveryOptionId) {    // (6th obj)
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        };
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();  
    }


    calculateCartQuantity() {          // (7th obj which is HW)
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
    }


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


const cart = new Cart('cart-oop');    // each of this is an instance of the class
const buisnessCart = new Cart('cart-buisness');       // this is also an instance of the class


console.log(cart);
console.log(buisnessCart);

console.log(buisnessCart instanceof Cart);
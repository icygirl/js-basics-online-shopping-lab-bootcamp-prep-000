var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice =  Math.floor(Math.random() * 100);
cart.push({ [itemName]: itemPrice });
console.log(`${itemName} has been added to your cart.`)
return cart;
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var items = []
  for(let i = 0; i < cart.length; i++) {
    let nameAndPrice = cart[i]
    var name = Object.keys(nameAndPrice);
    var price = nameAndPrice[name];
    items.push(`${name} at \$${price}`)
  }
switch(items.length) {
  case 1:
    break;
  case 2:
    items = items.join(" and ");
    break;
  default:
    items = items.join(", ");
}
    console.log(`In your cart, you have ${items}.`)
}

function total() {
  for(let i = 0; i < cart.length; i++) {
    let nameAndPrice = cart[i]
    var name = Object.keys(nameAndPrice);
    var sum = 0
    sum += parseInt(nameAndPrice[name]);
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

// Fetching an item from the local storage
// window.localStorage.getItem("name");
// remember to store in a variable:
const myName = window.localStorage.getItem("name");
console.log("myName: ",myName);

//
// reversing a string
const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// Parse - it back to be js
// Only method to do it.
const myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);

//
// Task:
// 1.
let soda = window.localStorage.getItem("sodaType");
console.log(soda);

// 2.
let coffeeInfo = window.localStorage.getItem("coffee");
let coffeeInfoParsed = JSON.parse(coffeeInfo);
console.log(coffeeInfoParsed);

// // 3.
let myShoppingList = window.localStorage.getItem("shoppingList");
let myShoppingListParsed = JSON.parse(myShoppingList);
console.log(myShoppingListParsed);

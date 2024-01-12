// Local Storage
// Say you fill in your info on a site, but don't click register,
// yet it retains the input when you refresh the page.
// Local storage and session storage.
// These are temporary storages in your browser. Refreshing doesn't delete,
// but closing the browser completely, removes it.

const myVariable = "Some text";

window.localStorage.setItem("variableOne", myVariable);
// Still there if: you open a new tab or just refresh
// Not there if: you open incognito or hard refresh.
// Check by opening index2 and inspecting.

window.localStorage.setItem("name", "erica");

//
//
//
// Saving objects or arrays.
// To do it you have to use json x
// convert the item to a string
let car = {
    make : "bmw",
    model : 1990,
    price : 2000
}

window.localStorage.setItem("myCar", JSON.stringify(car));
// saved as string in local storage

// Now to use it as not a string you have to reverse
// Do it in scriptTwo

// Session storage:
// Only access to the single html file.
// The data is not accessible on the other pages.

window.sessionStorage.setItem("fav","bmw");
// This will show only on index.HTML, while the localStorage is also
// visible on about.html (even though it's not linked to any javascript)

// TASK:
// Use local storage, create three items there.
// First one is a variable string one,
// Second is an object,
// Third is an array

let sodaType = "coke zero";

let coffee = {
    origin : "South Africa",
    intensity : "medium 7"
}

let shoppingList = ["Coffee", "Cheese", "Tea"];

// 1.
window.localStorage.setItem("sodaType: ",sodaType);

// 2.
window.localStorage.setItem("myCoffee: ", JSON.stringify(coffee));

// 3.
window.localStorage.setItem("shoppingList: ", shoppingList);

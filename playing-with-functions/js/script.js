const showPetName = function (name){
    console.log("The pet name is: " + name);
}
showPetName("Whatever you put here");
// Anonymous function / variable functions / functions you assign
// Function alone can be used even when written before the function
// A function assigned to a variable cannot.

// Fat arrow function:
const showPetNameTwo = (name) => {
    console.log("The pet name is: " + name);
}
// -- Can be used as a substitute for writing "function"
// Has to be assigned to a variable first.

const sum = (num1, num2) => {
    console.log("Sum of numbers declared below: ", num1 + num2);
}
sum(20,30);

// Also works:
// const sum = (num1, num2) => console.log("Sum of numbers declared below: ", num1 + num2);
//
// sum(20,30);

// CRUD - Create, Read, Update, Delete
// Create: Hesh is adding his jacket on Finn
// Read: Jonas is searching for a jacket
// Update: Trulus is updating his ad on Finn because he added something wrong
// Delete: Trulus doesn't like the post after all and decides to delete it.
//
// JSON data (JavaScript Object Notation), key in string
// An array of data
//
// Clicking on a ticket to order = Create (You're posting something to the server.)
// Looking at your data in the server: a read
//
// API = Application Programming Interface
// Mostly backend, just gives you a link
// Data with no programming
// Any software with a distinct function,
// see catfact.ninja/facts - Api with JSON data


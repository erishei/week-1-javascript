// Var is not a block scope, and can be redefined outside curly brackets
// Let cannot be assigned outside the block scope (block scope = brackets)
// However without curly brackets, Let can be a global scope and changed
// ex: Var example = "something"
// outside brackets: var example = "another"
// Not a go
// Const is a constant variable and cannot be changed or reassigned either.

// let name = "Kenneth";
// let teacherName = "Hesh";
// let teacherFriendName = "Monde";
//
// name = "Erica";
// console.log(name);
//
// name = "Jonas";
// console.log(name);

//Bad practice to keep changing the value of a variable.

// When do we use uppercase?
// Hesh likes us to always define consts in capital letters
// But it is only strictly necessary when something is crucial.
// It is telling other developers that this is _not to be changed.
// const API_URL = "https://api.example.com/data";
// const PORT = 8080;
// const MAX_CONNECTIONS = 4;

// readability - this makes it clearer what is changeable and what is not

// ARRAYS:
// Storage for multiple things inside.
// Arrays can be modified.
                        // 0        1           2
const fruits = ["Apple", "Blueberry", "Oranges"];
console.log(fruits.length); // Shows 3 = total items in this array
// How to add another item to the array:
fruits.push("Mango");
// with this method, the new item will be added to the end of the array
// .push is a built-in function
console.log(fruits);
// How to put something new in the beginning of the array
// .unshift is another built-in function
fruits.unshift("Grapes");
console.log(fruits);

// How to remove the last item in an array:
fruits.pop();
console.log(fruits);

// How to remove the first item in the array:
fruits.shift();
console.log(fruits);
console.log("Using shift:" ,fruits);

// How to sort an array:
// Many ways to do it, this is the easiest one.
const numbers = [3, 4, 100, 88, 54, 5];
numbers.sort();
console.log(numbers);
// Didn't work properly

let animal = "dog";
// JS sees this string as an array. So the letters are indexed.
// in this case d = 0 o = 1 g = 2
console.log(animal.length);
// will show you the number of letters in the word


// Index of bmw is 0, vW 1 and Toyota 2
// But what if you have a large number of items in the array?
// .indexOf
const cars = ["bmw", "volkswagen", "toyota"];
console.log(cars.indexOf("volkswagen"));

// FIND:
// How to find an item in an array
//.find
const user = {
    name : "Monde",
    age : 30,
    job : "Software Engineer",
    wealth : 123456789
}
console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user.wealth + " " + user.job);
console.log(user.name, user.age);

// Hello, my name is Monde and I am 30 years old. I own
// 123456789 dollars and I work as a Software Engineer

const someText = "Hello my name is " + user.name;
console.log(someText);

const someTextTwo = `Hello my name is ${user.name}`;
console.log(someTextTwo);

const mondeText = `Hello my name is ${user.name} and I am ${user.age} years old. I own ${user.wealth} dollars and I work as a ${user.job}.`;
console.log("This is a lesson task text: ", mondeText);
// Good practice to use labels for your console logs.

const books = [
    {
        title : "The Hobbit",
        author : "JRR Tolkien",
        pages : 300
    },
    {
        title : "Drive with me in my car",
        author : "Hesham",
        pages : 1000
    },
    {
        title : "1000 and 1 Nights",
        author : "Some Guy",
        pages : 3000
    }
]

// console.log("My first book: ", books[0]);
// console.log("My first book: ", books[1]);
// console.log("My first book: ", books[2]);
// Not a good way to do it with a large amount of books.

// Better way to do it:
const searchBook = books.find(function (book) {
    // return book.title === "The Hobbit";
    // return book.title.toLowerCase() === ("drive with me in my car").toLowerCase();
    // TASK: find the book with more than 300 pages
    return book.pages > 300;
    // Ignores anything other than the first result that fits the search.
    // For loop is preferred or .filter instead of ".find" for this reason.
});
// anonymous function inside the round brackets above
// .find function expects boolean/either true or false
console.log("searchBook: ",searchBook);
// My title is The Hobbit, is it equal to the string put in function?
// True, this title exists.
// So for ex if there is a typo in the title it won't return your search
// correctly. It will read as false. Returns "undefined."



// What is a function?
// A set of actions or code run when we call the function name.
function doorRing(withCamera) {
    console.log("I will go open the door.");
    console.log("I will go open the door. " + withCamera);
};

doorRing("Monde is shown on camera."); // Will do what the console.log says.
            // If it was attached to a button, that would control the action
function logWord(theWord) {
    console.log(theWord);
}
logWord("Hesham");
logWord("Line");
// (The logword can be reused as many times as you like.)

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(10, 20);
console.log("Sum: ", sum);
// Rule: any function will return something. Logging shouldn't be needed.
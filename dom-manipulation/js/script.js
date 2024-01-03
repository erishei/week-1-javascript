// 1. Select the h2 heading:
// There are different ways of doing this.
// getElementById is one, however this heading has a class not id.
// querySelector is another one. and this one gets both ids and classes
// querySelectorAll chooses anything and everything with the h2 class (articles, divs etc)

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Selecting an element by id #list using querySelector.
const list =  document.querySelector("#list");
console.log(list);

// 4. You can also use .getElementById (with gEBI you dont use . or #
// However with querySelector you have to define it
const list2 = document.getElementById("list");
console.log(list2);

// 5. Selecting a single list item:
const listItem = document.querySelector("li");
console.log(listItem);

// 6. What if you want to select all the listed items on your page.
const listItems =  document.querySelectorAll("li");
console.log(listItems);

// 7. Select the H1 and change the color to be red:
const heading1 = document.querySelector("h1");
console.log("before I make my change");
console.log("first heading: ",heading1);
heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";

// Always console log as you go to debug and be sure you have everything you need.
// after you're done, go through your document and remove all the console.logs

// TASK: change background of the heading1 variable:
heading1.style.backgroundColor = "cornflowerblue";

// Assigning a class to a div with JS:
const myDiv = document.querySelector("div");
console.dir("myDiv: ",myDiv);
myDiv.classList.add("container");
// You can also use className, but it will only select a single class.
// classList is better for multiple selections.

// Change the heading text:
heading1.innerText = "Hei Ingrid og Line";
//innerHTML can change the h1 to a p
//You can use innerText if you're only changing the text.
heading2.innerHTML = `<span class="green">Hei Line og Ingrid</span>`;

const myArrayOfNames = ["hesh", "kjetil", "jonas", "johnny", "marius"];
console.log(myArrayOfNames[0]);
console.log(myArrayOfNames[1]);

//You can use for loop to select multiples instead of logging every single item
for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

// first i = 0
// 0 < total number of items in the array.
// = if 0 is less than 4
// if so add 1
// i = 0 + 1 = 1
// console.log(myArrayOfNames[1]); is what it's continuously doing

// Say you want it to count from 1 - 100:
for(let i = 1; i <= 100; i++){
    console.log(i);
}

// Arithmetic Operators
// = + ++ meanings

// Additions:
// 10 + 5 = 15
// In JS:
let sum = 10 + 5;
console.log(sum);
// = means put everything after, the sum of it, in the variable
// in this case "sum"

// Subtraction:
// 10 - 5 = 5
let difference = 10 - 5;
console.log(difference);

// Multiplication:
// 10 * 5 = 50
let product = 10 * 5;
console.log(product);

// Division: (Uses / not :)
// 10 / 5 = 2
let result = 10 / 5;
console.log(result);

// modulus - the remainder. as in 10/4, how many fours are in 10?
let remainder = 10 % 4; //remainder should be 2
console.log(remainder);

// Google remainder later
// There is also exponent (**) decrement and increment

// Simple Operators:
let a = 5; //a is 5
console.log(a);

// addition assignment (+=)
let b = 10;
b += 5; // b is now 15
b = b + 5;

// subtraction assignment (-=)
let c = 15;
c -= 5; // 10
c = c - 5; // the above line is doing what you see down here. = 10

// comparison operators:
// equal to (==)
let  isEqual = (5 == "5");
console.log(isEqual); // = true
// it looks past the data type to see if the two are the same.
// in this case a string and a number.

// strict equal (===)
let strictEqual = (5 === "5"); // false
console.log(strictEqual);
// This one takes data tyoe into account when comparing and deems a number and a string unequal.

// not equal (!=)
// 5 != 5 // true
let isNotEqual = (5 != "6");
// This is not comparing data type
// use another = for strict comparison
console.log(isNotEqual); // true

// greater than: (>)
// 10 > 5 // true
let isGreaterThan = (10 > 5);
console.log(isGreaterThan);
// opposite:
let isNotGreaterThan = (5 > 10);
console.log(isNotGreaterThan); //false

// <
// 10 <= 10 // true
// >=
// <=

// AND // OR
// And = &&
// Or = || (option + 7)

let andResult = (5 > 4 && 10 > 5);
console.log(andResult);
// true + true = true
// if one is false the end result in log will be false
// basically ++ = + , +- = -

// in OR if either one is true, it will tell you it's true
let orResult = (5 > 10 || 10 > 5);
console.log(orResult);

// NOT :
// (5 > 10) // false
// !(5 > 10) // true bcs ! = not
//
// (true && true) // true
//     (false && false && true) // false
//     (true && false) // false
//
//     (true || false || false) // true

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(4));

// const someRandomNumber


// TASK:

heading1.innerHTML = "Welcome to JS class"
heading1.style.color = "blue";
heading1.style.fontSize = "3rem";

// let itemButton = document.querySelector("button");
// console.log(itemButton);

const listButton = document.getElementById("listButton");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
listButton.addEventListener("click", function () {
    let someRandomNumber = getRandomInt(44);
    list.innerHTML += `<li>New Item ${someRandomNumber}</li>`;
});


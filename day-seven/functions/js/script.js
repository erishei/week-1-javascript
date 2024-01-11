// Creating a function in my calculator app to sum three numbers

function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// console.log(addThreeNumbers(10, 2, 30)); will log correct result, but
// that's not the aim here. This is:
addThreeNumbers(10, 2, 30);
let resultOfSummation = addThreeNumbers(10, 20, 50);
console.log("result: ", resultOfSummation);

function multiplyThreeNumbers (num4, num5, num6) {
    return num4 * num5 * num6;
}
// function doesn't need to be closed with semi-colon
multiplyThreeNumbers(2, 4, 8);
let resultOfMultiplication = multiplyThreeNumbers(4, 8, 16);
console.log("productResult: ", resultOfMultiplication);

//
//
// 1. Select the heading h1 and make it so when you click it,
// the text changes to "It's a god idag"
//
// 2. When I click on the btn "change colours" I would like to change
// the background color of the body to be blue and the heading h1
// to be green.

let heading = document.querySelector("h1");
// console.log(heading);
let firstBtn = document.querySelector("button");
// console.log(firstBtn);
let coloursBtn = document.querySelector(".colours");
// console.log(coloursBtn);
let body = document.querySelector("body");
// console.log(body);

function changeHeading() {
    heading.innerHTML = "It's a god idag";
}

// if you have round brackets after function name, it will run
// immediately when the page loads, bypassing the button.
// The brackets "call the function" straight away, no waiting for the
// .onClick
firstBtn.onclick = changeHeading;

function changeColours() {
    heading.style.color = "green";
    body.style.backgroundColor = "blue";
}

coloursBtn.onclick = changeColours;

//
//
// Functions inside objects:
const catButton = document.querySelector(".catSounds");

const pet = {
    type : "cat",
    name : "Titi",
    age : 10,
    isFriendly : false,
    meowMeow : function () {
        console.log("The sound of the cat. Meow");
    }
}
console.log("type: ",pet.type);
console.log("Friendly? ",pet.isFriendly);

pet.meowMeow() //Brackets bc you want to fire it

// Task: Create a button that's called MeowMeow
// When you click this button, I want to run the function inside
// the object, which is meowMeow

// let catButton = document.querySelector(".catSounds");
// function meowMeow () {
//     catButton.innerHTML = "meowMeow";
// }

// const catButton = document.querySelector(".catSounds");
//
// const pet = {
//     type : "cat",
//     name : "Titi",
//     age : 10,
//     isFriendly : false,
//     meowMeow : function () {
//         console.log("The sound of the cat. Meow");
//     }
// }
// console.log("type: ",pet.type);
// console.log("Friendly? ",pet.isFriendly);
//
// catButton.onclick = pet.meowMeow;
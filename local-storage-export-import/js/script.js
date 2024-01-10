// 1. Variables

// Ecmascript 5

// ES 5
// var name = "Anniken";
// name = "hesh";
//
// // ES 6
// let secondName = "Tom";
// secondName = "Alex"
//
// const thirdName = "Marius";
// // thirdName = "Julie";

// 2. console.log -- console.dir console.info // yellow // console.error
// 3. >= <= = ==
// == means "H" == "h" : true (not strict equality)
// "H" === "h" : false. They're not strictly the same
// "1" == 1 : true ---- "1" === 1 : false

// 4. Conditions
// if() {}

// Switch case
// 5. Objects

//  Key:  Value:
let car = {
    color : "red",
    model : "bmw",
    year : "1991",
    VIN : 343434
}

console.log(car);
console.log(car.year);
// console.log([])

// 6. For loops

// Starting point // Condition // Increment
for(let i = 1; i < 11; i++){
    console.log(i);
}

// you have node.js in your terminal

// 7. Arrays

let myBigBox = [
    "String",
    44,
    "Something"
];
console.log(myBigBox.length);

// console.log(myBigBox[3]); Will show you the specific object in the array

const lastItemIndex = myBigBox.length - 1;
console.log("lastItemIndex: ",lastItemIndex);
console.log(myBigBox[lastItemIndex]);

// 8. Looping over an array

for(let i = 0; i < myBigBox.length; i++){
    console.log(myBigBox[i])
}

// 9. Concatenation
let firstName = "Anniken";
let secondName = "Hesh";
let thirdName = "Patrick";

let myParagraph = "Hello " + firstName + " and hello " + secondName + " and hello my friend " + thirdName;
console.log("Using quotes: myParagraph: ", myParagraph)
myParagraph = `Hello ${firstName} and hello ${secondName}`;
console.log("Using backticks: ",myParagraph);

// 10. Functions - wrapper for some code, call a function and it will act.
function logWord (){
    console.log("Hello, Christian");
    if(name !== undefined) {
        console.log("Hello" + name + "Something");
    } else {
        console.log("Sorryy");
    }
}
logWord(); // All you need for it to work is to write the name, brackets and ;
logWord();
logWord(); // Can be reused as many times as you want.
// Example: on instagram, clicking like, the button is connected to a function like this

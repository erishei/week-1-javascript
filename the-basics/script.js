//Variables
//A box to save something in and give it a name
var myName = "Ingrid";
console.log(myName);
//Console logs what is between the quotation marks in myName
//String is text between quotation marks

let age = 31;
//No quotaion marks as this is a number, not text
console.log(age);

const MAKE = "BMW";
console.log(MAKE)

//These are the way to define variables

//Data Types: What the variable is holding. Is it a number? String? Decimal?

let greeting = "Hello, World!";
console.log(typeof greeting);

let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy);
//output type boolean means something is either true or false.

let someVar;
//Browser will read output as undefined
console.log(typeof someVar);

let emptyValue = null;
console.log(typeof emptyValue); //Output : null

//Object : like a manifest. For ex object of name. A variable that
//can group a elements in it
let person = {
    firstName: "Erica",
    lastName: "Sheidai",
    age: 31
};
console.log(person);
console.log(typeof person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//My car is a Volvo, 1992 model and condition used.
//Price is 10k
let car = {
  carMake: "Volvo",
  carYear: 1992, //You can have quotation marks on a year
  carCondition: "Used",
  carPrice: 10000
};
//the blue words are keys and the orange values

console.log(car["car.Make"]); //Output: Volvo

console.log(car.carMake);
console.log(car.carYear);
console.log(car.carCondition);
console.log(car.carPrice);

// console.log("My car is a Volvo 1992 model it is used and the price is 10k.");
// console.log("My car is a "car.carMake + " it is " + car.carYear + " and it's used ");
console.log(`I have a ${car.carMake} and it is ${car.carYear} and it is used`);

//Array:
//An Array is for bigger things. You can have multiple objects, variables and boxes inside.
//It can even contain other arrays.
//The Array is everything in the square brackets.
//We start counting items in an Array from 0 not 1. So in this example
//The 1234 entity is number 0
let colors = ["Red", "Green", "Blue"];
let random = [
    1234, // 0
    "Pink", // 1
    {name: "Erica", age: 31} // 2
    ["boy", "girl", "whatever"] // 3
];

console.log(random[0]);
console.log(random[1]);

//Type conversion:
//Say you have a number and want to make it a string, how?
let year = "1992"; //string = can't multiply etc
console.log(year);
//From string to number
let convertedYear = parseInt(year);
console.log(convertedYear);

console.log(typeof year);
console.log(typeof convertedYear);

//other way around
let num = 2424;
console.log(num.toString());

let convertedNum = num.toString();
console.log(convertedNum);

// Task 1:
var city = "Oslo";
let taskAge = 31;
const birthYear = 1992;

console.log(city);
console.log(typeof city);
console.log(taskAge);
console.log(typeof taskAge);
console.log(birthYear);
console.log(typeof birthYear);

//Task 2:
let greeting2 = "This is my greeting message."
let quantity = 374;
let isJavaScriptFun = true;
let thisIsUndefined;
let emptyValue2 = null;

console.log(greeting2);
console.log(typeof greeting2);
console.log(quantity);
console.log(typeof quantity);
console.log(isJavaScriptFun);
console.log(typeof isJavaScriptFun);
console.log(thisIsUndefined);
console.log(typeof thisIsUndefined);
console.log(emptyValue2);
console.log(typeof emptyValue2);

//Task 3:
let numString = "25";
console.log(typeof numString);
let numConverted = parseInt(numString);
console.log(numConverted);
console.log(typeof numConverted);

let num2 = 50;
console.log(num2.toString())
console.log(typeof num2);
let convertedNum2 = num2.toString();
console.log(convertedNum2);
console.log(typeof convertedNum2);


console.log(num2 + numConverted);

console.log(numString + convertedNum2);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//looping or iteration:

// i here is 1
// it will read that i is less than 5 = true
// add i = i+1 with "i++" at the end
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// i 1
// 1 <= 5 is true
// it will console.log(1)

// i 2
// 2 <= 5 is also true

// there will be added one to i
// i = 3
// 3 <= 5 still true
// console.log(4) etc

// i = 6
// 6 <= 5 FALSE
// Now it wont console.log it.

// Change the 5 in the variable to a higher number and it will count that far


// LOOPS - for repeating

// for(initialization; condition; increment;) {
//
// }
// usually your initialization is a variable, usually "i"
for(let i = 0; i < 5; i++) {
    console.log("Hello!");
    // console.log(i);
}
// Basically it console.logs from the value you have assigned the variable,
// loops back, reads the i++ so it adds one, and repeats the process
// until it reaches the condition, which in this case is "< 5"
// or less than five. So it won't loop past 4.

for(let numberPrinter = 1; numberPrinter < 11; numberPrinter++) {
    console.log(numberPrinter);
}
                        // 0    1       2       3
const cars = ["Tesla", "BMW", "Volvo", "Wolksvagen"];
// Array length to count items
console.log(cars.length); // shows you total number in log
console.log(cars[0]);
console.log(cars[3]);

const totalNumberOfCars = cars.length;
for (let i = 0; i < totalNumberOfCars; i++) {
    console.log(cars[i])
}
// for (let i = 0; i < cars.length; i++) {
//
// } -- Can be written like this, but the above version with variable name
// totalNumberOfCars is better code.

const fruits = ["Apple", "Banana", "Cherry", "Grapes"];
console.log(fruits.length);

const totalNumberOfFruits = fruits.length;
for (let i = 0; i < totalNumberOfFruits; i++); {

}
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

for (let x = 0; x < fruits.length; x++) {
    console.log(fruits[x]);
}

// How to get the last item in the array:
console.log(fruits.length - 1);

const lastItemInArray = fruits.length - 1;
console.log(fruits[lastItemInArray]);

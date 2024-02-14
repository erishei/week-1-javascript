function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 6));

function sumWithThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumWithThree(1, 6, 6));

// Better way:
function sumRight(...numbers) {
    console.log(numbers);
    let total = 0
    for (const number of numbers) {
        total += number;
    }
    return total;
}

console.log(sumRight(1, 2, 3, 4, 5, 6));
// console.log(sumRight(1, 2, 3, 4, 5, 6,"uh-oh")); Remember:
// Giving js anything will have it trying to work with it.
// So in the second console.log here it will just add it together and turn it
// into a string.

// let newNumbersArray = [...numbers,7,8,9];
// console.log(newNumbersArray);

let duck = {
    id: 1,
    name: "Tim",
    habitat: "Swamp",
    height : 25,
    diet : "Greens",
};

let newDuck = {
    ...duck,
    dangerous: false
}
console.log(duck);

// Take this object, spread it out,
// if any original values match ones, here: change/update them.

duck = {
    ...duck,
    id : 4
}

// let numbers = [1,2,3,4,5,6]
//
// let copyOfNumbers = numbers;
//
// // numbers.push(9);
// console.log(numbers);
// console.log(copyOfNumbers);
//
// copyOfNumbers.push(1000);
// console.log(numbers);
// console.log(copyOfNumbers);


let numbers = [1,2,3,4,5,6]

let copyOfNumbers = [...numbers];

// numbers.push(9);
console.log(numbers);
console.log(copyOfNumbers);

copyOfNumbers.push(1000);
console.log(numbers);
console.log(copyOfNumbers);

//
// The "spread" version of things just refer to the insides of an object
// or array
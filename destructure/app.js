// Destructuring an object

let duck = {
    id: 1,
    name: "Tim",
    habitat: "Swamp",
    height : 25,
    diet : "Greens",
};

let duckName = duck.name;
console.log("The duck was named " + duckName);
let duckHabitat = duck.habitat;
let duckHeight = duck.height;
// Unnecessarily long-winded method.

let {name,habitat,height} = duck
console.log(name);
console.log(habitat);
console.log(height);
// Does the same thing

let {name : duckNameNew,diet : dietNameNew} = duck;
console.log(duckNameNew);
console.log(dietNameNew);
// If you want to call it something else

//
// Destructuring an Array - not commonly used as you'll have fundtions etc
// to make use of in an array.

let array = [2,5,6,8];
let num1 = array[0];
let num2 = array[1];

let [num1DeStructured,num2Destructured] = array;
console.log(num1DeStructured);

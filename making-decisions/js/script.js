// Boolean is used for if this then this, if not something else
// Something is either true or false
console.log("here");

// If and else statements:
let temp = 21;

if (temp > 30) {
    console.log("It is very warm!")
    // This isnt correct, so the log won't show
} else if (temp > 20) {
    console.log("The weather is nice.")
} else {
    console.log("The weather is very cold!")
}
// Change temp number to see the different messages in console

// if(){
//
// } else {
//
// }

// At school my students had an exam. Some students
// got a high and low score. I want to write an if/else statement
// to check if their score is high or low.
// If the score iss less than 50, then the student fails.
// If the score is more than or equal to 50 then the student passes.
// Make it with the variable "score"

let score = 60;

if(score >= 50) { //Greater than or equal to
    console.log("You've passed!")
} else {
    console.log("You have failed.")
}

// With string instead of number

let grade = "A";

if(grade === "A"){
    console.log("Very Good!" + " You got a score of: " + grade);
    //Remember spaces count in the log.
} else if(grade === "B") {
    console.log("Good!");
} else if(grade === "C"){
    console.log("Average.");
} else if(grade === "D") {
    console.log("This may not be for you.");
} else {
    console.log("Failed miserably.");
}
// You can assign numbers and change the message to a letter as well.


// `your text here.
//  osfnosnfosrgousrbg` will split up ur sentence
// /n between will also start a new line

const sentences = `First sentence.
Second sentence.`
console.log(sentences);

const sentences2 = "First sentence.\nSecond sentence."
console.log(sentences2);

// Another way to make a decision. Used in larger issues say from a-z
// Not just a-f.
// Switch case:

let color = "not a color";

switch (color){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get ready.");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("No lights, have a killing spree! Apparently.");
}

// Remember JS is case sensitive.
// You can do: case || case
// However toUpperCase() or toLowerCase() is better to use.
// grade.toUpperCase();
// grade = grade.toUpperCase()
// console.log("grade: ",grade);
// console.log(grade.toUpperCase));

let gradeTask = "B";

switch (gradeTask){
    case "A":
        console.log("Outstanding!");
        break;
    case "B":
        console.log("Very Good!");
        break;
    case "C":
        console.log("Good effort!");
        break;
    case "D":
        console.log("Needs improvement.");
        break;
    case "F":
        console.log("Failed. Must retake exam.")
        break;
    default:
        console.log("Invalid grade.")
}

// SCOPE:

// var myName = "a name"
// let myName = "a name"
// before, there was only "var"

let myName = "Erica"; // function scope
var yourName = "Erica"; // global scope

var greeting = "hello!";

if(true){
    var greeting = "Hi"; // redeclared my variable
    console.log(greeting); // will show hi instead of hello
}
console.log(greeting); //hi

let message = "Hello!";

if(true) {
    let message = "Hi!";
    console.log(message);
}

console.log(message);

//Var is a global scope.
//Let works only inside the scope eg. inside the curly brackets.
//Meaning the first console.log inside the curly brackets is only
//valid inside the scope/brackets. However it will read outside of it.
//Var should not be used, it can cause issues.

//const (constants) once u declare it you can't redeclare, and you cannot change
// for ex with let you can add message=aklbfeiufb inside scope and change
// with const you can't

// const GRADE = "A";
// GRADE = "b";
// console.log(GRADE); --ERROR

let GRADE = "A";
GRADE = "b";
console.log(GRADE); //--Will change in log

//const can function as both a global or function scope

// const test = 12;
// console.log(test);
// test = 24;
// Doesn't work

let testTwo = 12;
console.log(testTwo);
testTwo = 24;
console.log(testTwo);
// Works

// Asynchronous code
// Functions
// Breaking your work into small modules helps you keep it neat and debug
// Four ways to create a function:
// You can store it in a variable, declarations over expressions
function doSomething(someParam){
    console.log("I just do something - > void");
    console.log("I just do something - > void");


    console.log(someParam);


    console.log("I just do something - > void");
    console.log("I just do something - > void");

}

doSomething("Hello");
doSomething(function(){console.log(
    "I am a callback.",//A callback is just a function that you apply as a parameter
    "I am a callback."
)})
//Higher something function, because it uses another function within
doSomething(function(){console.log(
    "I am also a callback."
)});

//uncomment
// doSomething() // How do I know when to use? Depends on what you're trying
// // to achieve. What you're trying to do should dictate what method to use,
// // not the other way around.
//
// function doSomethingWithData(someData){ // You could declare all kinds of
//     // parameters in stead of or in addition to "someData"
//     console.log("I just do something with someData, here it is " + someData)
// }
// // void some parameters, void doesn't return anything
// doSomethingWithData("The data: Some sweet string");
//
// function doSomethingThatReturnsAString(){
//     console.log("I just did something, here is something for you.");
//     return "This is easy"
// }
// // let result = doSomethingThatReturnsAString() //Anywhere you call this function will return function call
// let result = doSomethingThatReturnsAString() + doSomethingThatReturnsAString();
// console.log(result);
//
// function doSomethingThatReturnsSomething(someData){
//     return "This is simple " + someData
// }
// let result2 =
//     doSomethingThatReturnsSomething("Ikke sant?");
// console.log(result2);
//
// // Linter to clean your code: can be installed on vscode
//uncomment


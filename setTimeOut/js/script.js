// console.log("here");

//
// SET TIME OUT:
// A method or function used to execute after a specific period of time.
// (Execute an anonymous function inside it.)
// Say you want to show something while loading, and then after a few
// seconds you want it to go away.
// Or the other way around, you want something to show up at a certain time.

// 1.
// Say after 5 secs you want to console.log "Hello someone"
// write the function, and then an anonymous function.
// It will later be changed.
setTimeout(function (){
    console.log("Hello Ingrid");
}, 5000);

// Another way to do it:
// setTimeout(logHello, 5000);
//
// function logHello (){
//     console.log("Hello Jack");
// }
// The below line won't be necessary
// logHello();

// 1. Select the loader element with class .loader
const loading = document.querySelector(".loader");
console.log("The loader element: ", loading);

// 2. Use the setTimeout
setTimeout(function (){
    // 3. change the inner HTML of the loading
    loading.innerHTML = "Finished loading.";
}, 4000);

// Counter :
const countDownContainer = document.querySelector(".counter");
let timeLeft = 10;
// Every 1 second reduce by 1 sec
// Change the inner HTML
// reduce timeLeft by 1 timeLeft
// Condition
// else :
// countDownContainer innerHTML to say counter finished.



// addEventListener
// onClick

// 1. Select the body first:
const body = document.querySelector("body");
// 2. Select the button:
const darkModeBtn = document.querySelector(".modeBtn");
// 3. Check for mistakes:
console.log(body);
console.log(darkModeBtn);

function init() {
    // it will get for me the dark mode state
    // once it does it will change the body color for me
   const darkMode = window.localStorage.getItem("darkMode");
   console.log("current mode", darkMode);
   if(darkMode){
       body.style.backgroundColor = "darkblue";
   } else {
       body.style.backgroundColor = "cornflowerblue";
   }
}

init();

// 4. Declare a value for true/false
let isDarkMode = false;
console.log("Before I click the btn; ",isDarkMode);
// 5. create the function
function toggleMode (){
    isDarkMode = !isDarkMode; // true
    // false
    window.localStorage.setItem("darkMode", isDarkMode);

    if(isDarkMode){
        body.style.backgroundColor = "darkblue";
        darkModeBtn.style.backgroundColor = "darkblue"
    }
    else {
        body.style.backgroundColor = "cornflowerblue";
        darkModeBtn.style.backgroundColor = "pink";
    }
    console.log("After I clicked on darkModeBtn", isDarkMode);
}
// 6. Create the button task
darkModeBtn.addEventListener("click", toggleMode);
// 7.
// add if-condition in the function

// 8. Use localstorage inside function to save dark mode


console.log("here");
// 1. Select my dropdown

const dropdown = document.querySelector("#circles");
console.log("dropdown");

const circlesContainer = document.querySelector(".circles-container");
console.log(circlesContainer);

dropdown.onchange = function (event) {
    // console.log("I am changed!");
    // console.log("event: ", event);
    // console.log("event: ", event.target);
    // console.log("event: ", event.target.value); // Gives you the value from input
    // console.log(this.value);
    circlesContainer.innerHTML = ""; // ! Remember to add this, so it starts fresh every time you
    // choose a number, instead of adding continuously, so it resets
    for (let i = 1; i <= this.value; i++) {
        console.log(i);
        //TODO add elements in the circlesContainer
        let value = dropdown.value;
        circlesContainer.innerHTML += `
            <div class="circles-container">
                <li class="circle">${i}</li>
            </div>
        `;
    }
} // You can see the onchange event is working on the dropdown.

for (let i = 1; i <= 10; i++) {
    console.log(i); // Bc the first i is inside curly brackets (block scope)
    // this i is completely different and therefore is not affected.
}

// Always remember to delete unnecessary comments before submitting work

const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class
const petContainer = document.querySelector(".pet-container");
console.log("petContainer: ",petContainer);

// Create a html variable to hold our html in it when we use the loop.
let html = "";

// Loop over the array
const totalItemsOfPets = pets.length;
console.log("totalItemOfPets ",totalItemsOfPets);

for (let i = 0; i < totalItemsOfPets; i++) {
    console.log(pets[i]);
    console.log(pets[i].colour);

    html += `
            <div>
                <p>Colour : ${pets[i].colour}</p>
                <h2>Age : ${pets[i].age}</h2>
                <p>Friendly : ${pets[i].friendly ? "Yes, it is. " : "No, it's not."}</p>
            </div>
            `
    ;
    console.log(html);
}

petContainer.innerHTML = html;
// change the innerHTML of the .pet-container class div
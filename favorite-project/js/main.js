import productsData from "./data/products.js";

console.log("products", productsData);

// 1. Select the products container
const productsContainer = document.querySelector(".products-container");

// 2. Fill the container of the products with products
// ( Just cmd x from the index.html file.)
for (let i = 0; i < productsData.length; i++) {
    console.log(productsData[i]);
    productsContainer.innerHTML += `
        <div class="product">
            <img src="https://picsum.photos/200" alt="Random image from picsum.">
            <h3>
                ${productsData[i].name}
            </h3>
            <h4>
                NOK ${productsData[i].price}
            </h4>
            <span class="heart-container">
              <svg class="heart"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </span>
        </div>
    `;
}

// 3. Check if any of the fav button hearts click
// 4. I want to make >>>>this<<<< heart red

const favourites = document.querySelectorAll(".heart");
console.log("Favourites:", favourites);

// loop on the dom elements I selected, so all the hearts class.
for (let x = 0; x < favourites.length; x++) {
    console.log(favourites[x]);
    favourites[x].addEventListener("click", function () {
        console.log("You clicked me!", favourites[x]);

        this.classList.toggle("active-heart");
        console.log(this.classList);
    })
}

// TODO I want to move my clicking event of the fav button
//  to it's own function instead of the anonymous function

let favs = [];

favs.push({
    name : "Product One",
    id : 2,
    price: 10000
});

window.localStorage.setItem("favourites", JSON.stringify(someRandomArray));

// Data attribute is a way to pass data from the HTML elements
// to the JS
// for ex you have a <p> onClick={someFunction} Hello I am some line
// </p>
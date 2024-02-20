// Rainydays task

// let productContainer = document.getElementById("#product-container");

// let rainyDays =
//     fetch("https://v2.api.noroff.dev/rainy-days")
//     .then(function (getResponse) {
//         return getResponse.json();
//     })
//     .then(result => {
//         let jackets = result;
//         for(let i = 0; i < jackets.length; i++){
//             productContainer.innerHTML += `
//             <div>
//             <img src="${jackets[i].image}"/>
//             <h2 id="jacketName">${jackets[i].title}</h2>
//             <span>${jackets[i].description}</span>
//             <span>${jackets[i].price}</span>
// </div>`
//         }
//     });
// console.log(rainyDays);

// const productContainer = document.getElementById("#product-container");
// let rainyDays = [];
// fetch ("https://v2.api.noroff.dev/rainy-days")
// .then(response => response.json())
// .then(result => console.log(result))
//

// Fetch book data
//
// const productContainer = document.getElementById('product-container');
// let jackets = []
//
// // bookData.push("somebook");
// // Use Const when you can, use let when you have to.
// // Const should be default. How do we use it if we can't change it?
// // You can still interact with the array, put stuff inside etc.
// // What you can't do is for ex. change it from an array to an object.
// // Less chance of messing up a whole array when using const.
// // IE: const object = {"a Name} and you can still do: object.name = {"other name"}
// fetch('https://v2.api.noroff.dev/rainy-days')
//     .then((response) => response.json())
//     .then((jacketsResultData) => {
//         jackets = jacketsResultData
//         displayJacket(jackets[0])
//         displayJacket(jackets[1])
//         // const bookDiv = document.createElement('div')
//         // const bookTitlePara = document.createElement('p')
//         // bookTitlePara.innerText = bookData[0].title
//         // bookDiv.appendChild(bookTitlePara)
//         // bookListDiv.appendChild(bookDiv)
//         for (const jacket of jackets){
//             console.log(jacket.title)
//             // This will log out book title for each book within bookData
//             displayJacket(jacket)
//         }
//         // bookData.forEach(book => {
//         //         console.log(book.title)
//         //         // does the same
//         // });
//     });
//
// // Cliff-notes on loops: for loops are good when you know exactly how many
// // times you're going to repeat that code.
// // When you don't know how many times it's needed you use do while or while loop
// // That will keep looping until the condition changes.
// // Last one is a for each loop. That is used for collections
// // "For each thing in this collection, use this loop."
// // Could be 100 books in this array, you're not sure but need to access everything in the
// // array.
// // For each is syntactic sugar?
//
// function displayJacket(jacket){
//     const jacketDiv = document.createElement('div');
//     const jacketTitlePara = document.createElement('p');
//     jacketTitlePara.innerText = jacket.title;
//     const jacketImg = document.createElement("img");
//     jacketImg.src = `http://localhost:3000/assets/images/${jacket.img}`;
//     jacketImg.alt = "A picture of a book" //book.title or anything
//     jacketDiv.appendChild(bookImg);
//     jacketDiv.appendChild(bookTitlePara);
//     jacketDiv.appendChild(jacketDiv);
// }
//
// // Take the data, make DOM elements to place the data in
// // go back up, make a variable

// let jackets = [];
// const productContainer = document.getElementById('product-container')
//
// fetch("https://v2.api.noroff.dev/rainy-days")
//     .then((response) => {
//         return response.json();
//     })
//     .then((result) => {
//         jackets = result;
//     })
// .then (()=>console.log(jackets));

let filterBtn = document.getElementById("filter-btn");
let resetBtn = document.getElementById("reset-btn");
let sizeList = document.getElementById("filter-list");
let jacketsContainer = document.getElementById("product-container");
const pageButtons = document.getElementById("page-buttons");
const loadingDiv = document.getElementById("loader-div");

filterBtn.addEventListener("click", () => {
    let confirmFilter = confirm("Filter by size?");
    if(confirmFilter === true){
        filterBySize(sizeList.value);
    }

});
resetButton.addEventListener("click", () => {
    jacketsContainer.innerHTML = "";

    for (const jacket of jacketData) {
        displayJackets(jacket);
    }
});

let jacketData = [];

let rainyDays = fetch("https://api.noroff.dev/api/v1/rainy-days")
    .then(function (getResponse) {
        return getResponse.json();
    })
    .then(result => {
        let jackets = result;
        for(let i = 0; i < jackets.length; i++){
            jacketsContainer.innerHTML += `
            <div class="single-jacket"> 
            <img src="${jackets[i].image}">
            <h2 id="jacketsTitle">${jackets[i].title}</h2>
            <span>${jackets[i].description}</span>
            <span>${jackets[i].price}</span>
            </div>`
        }
    });


// In HTML, a data-attribute is a way to store custom data on standard HTML elements
// The * in data-* can be replaced with any name you choose to create an attribute.
// This feature introduced in HTML5, allows web developers to store extra information on an HTML
// element without using non-standard attributes or extra properties in the DOM.
//
// How data-* attributes work:
// Syntax: The attribute name should not contain any uppercase letters,
// and must be at least one character long after the prefix data-*
// Access in HTML: Appears as a regular attribute on an HTML element.
// Access in JavaScript: Can be accessed via the dataset property on the DOM element.

const article = document.querySelector("#post");
const showPostDetails = document.querySelector("#details-btn");
const postImage = document.querySelector("img");
console.log(postImage);
// console.log(showPostDetails);
// console.log("Article: ", article);
// console.dir(article);
// console.log(article.dataset);
// console.log(article.dataset.author);
// console.log(article.dataset.category);

postImage.addEventListener("click", function (){
   window.open(postImage.dataset.fullsize, "_self");
}); //Opens in a new tab



// 1. I have a BTN in my HTML, when I click it I want to show an alert with
// the author and the category // Const is on top

// const button = document.querySelector("#details-btn");
// console.log(button);
//
// function myFunction() {
//     alert(article.dataset.author);
// }
//
// button.onclick()

showPostDetails.addEventListener("click", function () {
    alert(`The author is: ${article.dataset.author} 
    and the category is: ${article.dataset.category}`)
})

showPostDetails.onclick = function () {
    alert(`The author is: ${article.dataset.author} 
    and the category is: ${article.dataset.category}`)
};

function showBookDetails (author, category) {
    alert(`The author is: ${author} 
    and the category is: ${category}`)
}



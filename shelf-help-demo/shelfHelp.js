// Fetch book data

const bookListDiv = document.getElementById('book-list');
let bookData = []

// bookData.push("somebook");
// Use Const when you can, use let when you have to.
// Const should be default. How do we use it if we can't change it?
// You can still interact with the array, put stuff inside etc.
// What you can't do is for ex. change it from an array to an object.
// Less chance of messing up a whole array when using const.
// IE: const object = {"a Name} and you can still do: object.name = {"other name"}
fetch('http://localhost:3000/books')
    .then((response) => response.json())
    .then((bookResultData) => {
        bookData = bookResultData
            displayBook(bookData[0])
            displayBook(bookData[1])
            // const bookDiv = document.createElement('div')
            // const bookTitlePara = document.createElement('p')
            // bookTitlePara.innerText = bookData[0].title
            // bookDiv.appendChild(bookTitlePara)
            // bookListDiv.appendChild(bookDiv)
            for (const book of bookData){
                    console.log(book.title)
                    // This will log out book title for each book within bookData
                    displayBook(book)
            }
            // bookData.forEach(book => {
            //         console.log(book.title)
            //         // does the same
            // });
});

// Cliff-notes on loops: for loops are good when you know exactly how many
// times you're going to repeat that code.
// When you don't know how many times it's needed you use do while or while loop
// That will keep looping until the condition changes.
// Last one is a for each loop. That is used for collections
// "For each thing in this collection, use this loop."
// Could be 100 books in this array, you're not sure but need to access everything in the
// array.
// For each is syntactic sugar?

function displayBook(book){
    const bookDiv = document.createElement('div');
        const bookTitlePara = document.createElement('p');
        bookTitlePara.innerText = book.title;
        const bookImg = document.createElement("img");
        bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`;
        bookImg.alt = "A picture of a book" //book.title or anything
        bookDiv.appendChild(bookImg);
        bookDiv.appendChild(bookTitlePara);
        bookListDiv.appendChild(bookDiv);
}

// Take the data, make DOM elements to place the data in
// go back up, make a variable

// JWT - what is it?
// - Authentication
// - You protect your data by saying:
// "Any http request coming in to grab your data must be authenticated."
// Entirely other program. Encrypted, secret, not meant to be understood and
// read by everyone.


const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const bookContainer = document.querySelector(".book-container");
console.log("Book Container: ",bookContainer);

let html = "";

const totalItemOfBooks = books.length;
console.log("totalItemOfPets ",totalItemOfBooks);

for(let i = 0; i < totalItemOfBooks; i++){
    console.log(books);

    html +=
        `
        <div class="book">
            <h2>${books[i].title}</h2>
            <p>Author : ${books[i].author}</p>
            <p>Availability: ${books[i].available ? "Available!" : "Not Available."}</p>
        </div>
         `
    console.log(html);
}

bookContainer.innerHTML = html;
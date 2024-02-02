// Rainydays task

let productContainer = document.querySelector(".product-container");

let rainyDays =
    fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then(function (getResponse) {
        return getResponse.json();
    })
    .then(result => {
        let jackets = result;
        for(let i = 0; i < movies.length; i++){
            productContainer.innerHTML += `
            <div>
            <img src="${jackets[i].image}"/>
            <h2 id="jacketName">${jackets[i].title}</h2>
            <span>${jackets[i].description}</span>
            <span>${jackets[i].price}</span>
</div>`
        }
    });
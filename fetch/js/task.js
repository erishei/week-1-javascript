let cats = [];

let cat = fetch(
    "https://catfact.ninja/facts")
    .then(function (response){
        return response.json();
    })
    .then(catResults => {
        cats = catResults;
        console.log(catResults);
    });

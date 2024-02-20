let beerData = [];
fetch("https://api.punkapi.com/v2/beers")
.then((response) => response.json())
.then((result) => {
    beerData = result;
});
 let searchForm = ("#search");
searchForm.addEventListener("input", (event) => {
    event.preventDefault();

    const searchWordFromUser = searchForm.searchWord.value;
    let resultsOfSearch = [];

    // for (const beer of beerData){
    //     if(beer.name.toLowerCase() === searchWordFromUser.toLowerCase()){
    //         resultsOfSearch.push(beer)
    //     }
    // }
    for (const beer of beerData){
        if(beer.name.toLowerCase().includes(searchWordFromUser.toLowerCase())) {
            resultsOfSearch.push(beer)
        }
    }
    // for (const beer of beerData){
    //     let nameOFBeer = beer.name;
    //     let lowerCaseVersion = nameOfBeer.toLowerCase();
    //     let lowerCaseVersionSearch = searchWordFromUser.toLowerCase();
    //     let doesItExistInThisString = lowerCaseVersion.includes(lowerCaseVersionSearch);
    // }
    // if (doesItExistInThisString === true) {
    //      resultOfSearch.push.(beer);
    //      }
    //
    // This is basically the breakdown of what's been done in the prev. for.

    renderBeers(resultsOfSearch);
});

function debounce(func, delay){
    let timer;
    // return
}

function renderBeers(beers) {
    console.clear();
    for (const beer of beers) {
        console.log(beer);
    }
}

let news = [
    {
        headline: "Watch Hesh land on the moon",
        summary: "He landed with his superjet",
    },
    {
        headline: "Watch Wonka with Ingrid and Erica",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        headline: "What did SG tell TS at the Golden Globes?",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

console.log(news);

let newsContainer = document.querySelector(".news");
console.log("newsContainer: ", newsContainer);

const totalNumberOfNews = news.length;

// let generatedHTML = ""; // Ved bruk erstatter den newsContainer i for()loop

for (let i = 0; i < totalNumberOfNews; i++) {
    console.log(news[i]);

    newsContainer.innerHTML += `
    <div> 
        <h2>
            ${news[i].headline}
        </h2> 
        <p>
            ${news[i].summary}
        </p>
    </div>
    `;
    console.log(newsContainer);
}

// newsContainer.innerHTML = generatedHTML;

function createNews(newsArray){
    let newsItems = "";
    for (let i = 0; i < totalNumberOfNews; i++) {
        console.log(news[i]);

        newsContainer.innerHTML += `
    <div> 
        <h2>
            ${news[i].headline}
        </h2> 
        <p>
            ${news[i].summary}
        </p>
    </div>
    `;
        console.log(newsContainer);
    }
    return newsItems;
}
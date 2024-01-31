// data - stored in objects for simplicity
// Don't overthink things, if there are two good ways of doing something
// just pick one.
let todo1 = {
    name:"Learn JS functions",
    done: true,
    date: "Tuesday"
}

let todos = [];

console.log(todo1.name);

// getting it from an api instead of hardcoding it

// parameter for the function can be anything, response is just most
// commonly used in this context
let todo = fetch (
    'https://jsonplaceholder.typicode.com/users')
    .then(function(httpResponse){
        // console.log(httpResponse)
        // extract the data
        return httpResponse.json();
    })
    .then( todoResult => {
        todos = todoResult;
        console.log(todoResult); //
    });

console.log("This will be higher up than the fetch, because that takes longer");


// Show it to the user

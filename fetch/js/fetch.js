// // data - stored in objects for simplicity
// // Don't overthink things, if there are two good ways of doing something
// // just pick one.
// let todo1 = {
//     name:"Learn JS functions",
//     done: true,
//     date: "Tuesday"
// }
//
// let todos = [];
//
// console.log(todo1.name);
//
// // getting it from an api instead of hard coding it
//
// // parameter for the function can be anything, response is just most
// // commonly used in this context
// let todo = fetch (
//     'https://jsonplaceholder.typicode.com/users')
//     .then(function(httpResponse){
//         // console.log(httpResponse)
//         // extract the data
//         return httpResponse.json();
//     })
//     .then( todoResult => {
//         todos = todoResult;
//         console.log(todoResult); //
//     });
//
// console.log("This will be higher up than the fetch, because that takes longer");
//
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// Show it to the user

// --- go fetch I promise to forward to .then

// ---> await going to fetch on this line of code,
// ---> forward to the next line

async function getTodos(){
    let httpResponse = await fetch(
        'https://jsonplaceholder.typicode.com/todos')
    let data = await httpResponse.json()
    console.log(data)
}
getTodos();

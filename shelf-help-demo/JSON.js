let jsonBook = `{
    "id":"1",
    "isbn":"1982137274",
    "title":"The 7 Habits of Highly Effective People",
    "author":"Stephen R Covey",
    "coverImg":"1.jpg",
    "blurb":"The 7 Habits have become famous and are integrated into everyday thinking by millions and millions of people. Why? Because they work! With Sean Covey’s added takeaways on how the habits can be used in our modern age, the wisdom of the 7 Habits will be refreshed for a new generation of leaders. This beloved classic presents a principle-centered approach for solving both personal and professional problems. With penetrating insights and practical anecdotes, Stephen R. Covey reveals a step-by-step pathway for living with fairness, integrity, honesty, and human dignity—principles that give us the security to adapt to change and the wisdom and power to take advantage of the opportunities that change creates."
}`

console.log(jsonBook);
let bookJSObject = JSON.parse(jsonBook);
console.log(bookJSObject);
// Reversed would be JSON.stringify (no backticks on object)

// Object-oriented programming, not initially what JScript was made for,
// but
// Difference between a function and a method.
// A function is defined and used when needed.
// A method is a function that is attached to an object.
// Chair is an object, there's data on it. The chair can do stuff like swivel
// Method

let chair = {
    colour: "grey",
    height: 58,
    swivel(){
        console.log("Swivelling chair!") // Still a function, but belongs to this specific object.
    }
}
chair.swivel();

//
JSON.parse() // Exact same thing. Function attached to object = method.
// So inside JS automatically JSON is like the "let chair" object here.
// Has lots of different functions attached to it that you can call on.

let someRandomFantasyThing = {
    item: "Something",
    item2: "Something more",
}

// "This" keyword
// Refers to the object that is invoking/running it.
// IE: let chair = {
//     colour: "grey",
//     height: 58,
//     swivel(){
//         console.log("The ${this.colour} swivelling chair!");
//                      == "The grey swivelling chair!"
//     }
// }


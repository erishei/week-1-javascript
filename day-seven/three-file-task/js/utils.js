// Usable functions and actions. Variables we will use.

// Import the full user greeting.

export function greetUser (user){
    console.log(`Welcome to our website: ${user}`)
}

// export default function greetUser (user) etc.
// is a default (not named export.)
// default is usually used for a single export.
// Named export lets you export multiples, with a different function name
// i.e. export function signUpUser (user)..
// Why is this important?
// In the future when importing packages, some of them will require the
// use of default and some of named exports. (These files are bits of
// others code.)
// Curly brackets vs not using curly brackets. Also when naming the directory
// (./utils.js for ex. the dot means absolute vs relative.)
// . root of the folder, / starting up top and looking down
// Don't use absolute links, it will work on your computer, but then not
// on the server. Always start with ./ so it works everywhere.
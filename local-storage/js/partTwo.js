localStorage.setItem("Message", "I just stored this in localstorage.");
localStorage.setItem("User", "I just stored this in localstorage.");
console.log(localStorage.getItem("Message"));

localStorage.clear();

// Like an array, just storing data. And remembers it in the browser.
// Not good for sensitive information as it is visible to anyone looking
// Has to be manually cleared out

sessionStorage.setItem("Message", "This will clear itself out if you close the window.");
console.log(sessionStorage);

// Both are methods: built-in functions.
// sessionStorage is a made-up object.
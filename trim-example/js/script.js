console.log("Helloo");

const carName = "   B   M   W   ";
console.log("Before:", carName);
// How do we remove the unnecessary spacing?
// trim() will remove the spaces for you and show you a beautiful string
// Expected result = "BMW" (in this case)
// Actually no, bc trim only removes the excess at the _ends of the string.
// const trimmedCarName = carName.trim();
// this will do it:
const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g, '');
// const trimmedCarName = carName.replace(/[^a-zA-Z0-9]/g, ''); will also work

console.log("After: ", trimmedCarName);

// Create the function find(arr, value),
// which looks for the value inside the array
// "arr" and returns a number,
// if found, or -1 if not found

// [1, 2, 3]
//
// 3

// const arr = [1, 2, 3];
// console.log(arr);

function find(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
        return -1;
}
// arr here is just a parameter/argument

const myArray = [1, 2, 3, 18, 1000];
const valueToSearchFor = 1000; // change this to something not in the array
// to get -1 in console.
let isNumber = find(myArray, valueToSearchFor);

console.log(isNumber);

// test cases:
// ["hesh", ]
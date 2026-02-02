/*
Objective: Use an anonymous function inside filter .

Task:
    1. Create an array [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50] .
    2. Use filter with an anonymous function to keep only numbers greater than 10 .
*/

// !!! What does this mean? We are basically writing a function without a name that is used directly where it's written...

// Creating the array:
const arr = [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50];

// Adding the filter:
const filtered = arr.filter(function (number) {
  return number > 10; // No need for an if statement since we don't return false...
});

console.log(filtered);

// Shortened version:
// const filtered = arr.filter(number => number > 10);

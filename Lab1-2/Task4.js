/*
Objective: Use arrow functions inside functions like map .

Task:
  1. Create an array [1, 2, 3, 4] .
  2. Use map with an arrow function to create a new array where each number is multiplied by 2.
*/

// Creating the array:
const arr = [1, 2, 3, 4];

// Writing the map:
const doubled = arr.map((number) => {
  return number * 2;
});

console.log(doubled); // Returns: A new array where each number is x2

// The map part can be shortened to this:
// const doubled = arr.map((number) => number * 2);

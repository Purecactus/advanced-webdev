/*
Objective: Understand how to pass and use a callback function.

Task:
    1. Write a function process that takes a number and a callback function.
    2. The callback function should multiply the number by 2 .
    3. Test the function with process(5, callback) .
*/

/* 
    - Functions can be passed as values
    - One function can call another function
    - The "passed" function is called a "callback"
*/

// Process function: Takes a number, or a callback function... Either uses the callback on the number, or returns the result
// Callback function: Takes a number... Multiplies it by 2... Returns the result

// Writing the callback function: Passing 5, should return: 10

// The whole thing:
function callback(number) {
  return number * 2;
}

function process(number, callback) {
  return callback(number);
}

console.log(process(5, callback)); // Returns: 10

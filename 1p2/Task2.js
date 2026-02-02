/* 
Objective: Understand how to use arrow functions with one parameter.

Task: 
  Write an arrow function that takes a name as input and returns "Hello, <name>"
  arrow function to the variable greet and call that variable with the parameter value . Assign the
  "Alice"
*/

// If the input is "Alice", the function should return: "Hello, Alice"
// This is the functuin way:

// function greet(name) {
//   return "Hello, " + name;
// }

// This is the arrow:
const greet = (name) => {
  return "Hello " + name;
};

console.log(greet("Alice"));

// A potential imporvement is to write the return part like this:
// return `Hello ${name}`;
// It is called a template literal, which is a cleaner

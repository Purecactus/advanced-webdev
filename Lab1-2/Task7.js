/*
Objective: Use reduce to count occurrences of items in an array.

Task:
    1. Create an array of strings: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']. 
    2. Use reduce to count the occurrences of each string.
    3. Log the result as an object: { apple: 3, banana: 2, cherry: 1 } .
*/

// Creating the array of fruits:
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// !!! The shape of the reduce fucntion is important

/*
    - With map      ->  I build a new array
    - With filter   ->  I build a smaller array
    - With reduce   ->  I build anything (number, object, array string, ..., you name it)
*/

/*
    In this assignment, I am building: { apple: 3, banana: 2, cherry: 1 }
    An object... Which is my "accumulator"
*/

// Reducing the array:
const result = fruits.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});

console.log(result);

/* 
Now for some explaining: 
    1. fruits.reduce(...)

    
*/

/*
Objective: Use reduce to count occurrences of items in an array.

Task:
    1. Create an array of strings: ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']. 
    2. Use reduce to count the occurrences of each string.
    3. Log the result as an object: { apple: 3, banana: 2, cherry: 1 } .
*/

// Creating the array of fruits:
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// !!! The shape of the reduce function is very important !!!

/*
    - With map      ->  I build a new array
    - With filter   ->  I build a smaller array
    - With reduce   ->  I build anything (number, object, array, string, ... , you name it)
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
        This goes through the "fruits" array from left to right, one item at a time

    2. (accumulator, fruit) => { ... }
        This is the callback function that runs once per item...
            - The accumulator = the object that we are building up over time
            - The fruit = the current element from the array

    3. accumulator[fruit] = (accumulator[fruit] || 0) + 1;
        This is called a dynamic property access:
            - if: fruit === "apple"
            - then: accumulator[fruit] === accumulator["apple"]
            - so: accumulator["apple"]

        But what does (accumulator[fruit] || 0) mean?
            - If accumulator[fruit] exists -> use it
            - If it doesn't exist (undefined) -> use 0
        
    4. return accumulator; 
        "Pass the updated object into the next iteration"
        if you don't return it, the "reduce" breaks, and the accumulator becomes "undefined"

    5. The {} at the end?
        Basically, it tells the program to start the accumulator as an empty object...

        Without it, the first fruit would incorrectly become the accumulator
*/

/*
Objective: Learn how to use reduce to aggregate values in an array.

Task:
    1. Create an array of numbers: [10, 20, 30, 40] .
    2. Use reduce to calculate the sum of all numbers in the array.
    3. Log the result to the console.
*/

const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, current) => {
  return acc + current;
}, 0);

console.log(sum);

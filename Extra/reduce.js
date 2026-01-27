/* Creating a reduce function */

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function (total, current) {
  return total + current;
}, 0);

console.log(sum);

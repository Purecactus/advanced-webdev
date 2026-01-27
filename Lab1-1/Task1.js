/* Task: Create variables of different data types as well as array, set and objectand log them to the
console. */

let myString = "Hello";
let myNumber = 4;
let myBoolean = true;
let myNull = null;

let myArray = [1, 2, 3];
console.log(myArray);

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // This one will be ignored since it is a duplicate
console.log(mySet);

let myObject = {
  name: "Hampus",
  age: "22",
  isStudent: true,
};
console.log(myObject);

/* Task: Write a function mergeObjects(obj1, obj2) that merges the properties of obj2 into obj1 . If
a property already exists in obj1 , it should be overwritten by the corresponding property in obj2 .
Return the merged object. */

let obj1 = {
  name: "Alice",
  age: 25,
  city: "London",
};

let obj2 = {
  age: 30,
  country: "UK",
};

function mergeObjects(obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
}
let merged = mergeObjects(obj1, obj2);
console.log(merged);

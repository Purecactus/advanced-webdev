/* Using sets to store values */

// This is used when uniqueness matters, bascially the only reason that sets exist

let fruits = new Set();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple"); // This will be ignored

for (let fruit of fruits) {
  console.log(fruit);
}

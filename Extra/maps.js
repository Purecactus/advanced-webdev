/* Using maps to store values */

/* Objects converts everything to strings, but maps can store objects as keys
 since keys are not strings
 
 If you frequently add or remove entries to your data storer, maps is very handy
 
 The API is very clean (set, get, has, size) much easier to use */

let scores = new Map();

scores.set("Alice", 90);
scores.set("Bob", 85);
scores.set("Charlie", 92);

/*
console.log(scores.get("Alice")); // 90
console.log(scores.has("Bob")); // True
console.log(scores.size); // 3
*/

console.log(`Size: ${scores.size}`);

for (let [key, value] of scores) {
  console.log(`${key}: ${value}`);
}

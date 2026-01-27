/*
Objective: Learn how to extract specific properties from objects using map .

Task:
    1. Create an array of user objects:
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    2. Use map to create a new array of user names.
    3. Log the result to the console.
*/

/* !!! We are learning:
    - Arrays of objects
    - Accesing object properties
    - Using map to extract stuff
    - Map can return a new array
*/

// Creating the array of objects:
const users = [
  { id: 1, name: "Hampus" },
  { id: 2, name: "Oliwia" },
  { id: 3, name: "Goofy" },
];

// Writing the map: Basically returning only the "name" property...
const names = users.map((user) => {
  return user.name;
});

console.log(names); // Returns only the usernames

// !!! Assignment 1. !!!

/*
Objective: Use parentElement to navigate up the DOM tree.

Task:
    1. Create a <section> containing a <div> and a <p> .
    2. Write JavaScript to select the <p> and log its parent <div> to the console.
*/
let p = document.getElementById("myParagraph");
console.log(p);

let parentDiv = p.parentElement;
console.log(parentDiv);

// !!! Assignment 2. !!!
/*
Objective: Use children to get child elements.

Task:
    1. Create a <div> with three <span> elements as children.
    2. Write JavaScript to log the <span> elements as an HTMLCollection.
*/

let container = document.getElementById("mySpan");
let spans = container.children;
console.log(spans);

// !!! Assignment 3. !!!
/*
Objective: Use nextElementSibling and previousElementSibling .

Task:
    1. Create a <ul> with three <li> items.
    2. Select the second <li> and log its previous and next siblings.
*/

let middleItem = document.getElementById("middle");
console.log(middleItem);

let previous = middleItem.previousElementSibling;
console.log(previous);

let next = middleItem.nextElementSibling;
console.log(next);

// !!! Assignment 4. !!!
/*
Objective: Use childNodes to retrieve all child nodes, including text nodes.

Task:
    1. Create a <div> with the id container for a <p> and some text. 
    2. Write JavaScript to log all child nodes of the <div> .
*/

let container2 = document.getElementById("container2");
let nodes = container2.childNodes;
console.log(nodes);

// !!! Assignment 5. !!!
/*

*/

// !!! Assignment 6. !!!
/*

*/

// !!! Assignment 7. !!!
/*

*/

// !!! Assignment 8. !!!
/*

*/

// !!! Assignment 9. !!!
/*

*/

// !!! Assignment 10. !!!
/*

*/

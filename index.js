// 2p1 Starts here: ===============================================================
//=================================================================================
//=================================================================================

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
Objective: Use firstElementChild and lastElementChild .

Task:
    1. Create a <div> containing multiple <p> elements.
    2. Write JavaScript to log the first and last <p> .
*/

let container3 = document.getElementById("container3");
console.log(container3.firstElementChild);
console.log(container3.lastElementChild);

// !!! Assignment 6. !!!
/*
Objective: Combine parent and child traversal.

Task:
    1. Create a nested structure with a <div> inside a <section> .
    2. Select the <p> inside the <div> and log the <section> parent.
*/

let innerP = document.getElementById("innerParagraph");
let outerDiv = innerP.parentElement;
let outerSection = outerDiv.parentElement;

console.log(outerSection);

// !!! Assignment 7. !!!
/*
Objective: Use children.length to count children.

Task:
    1. Create a <ul> with five <li> elements with different ids.
    2. Write JavaScript to count and log the number of <li> elements as well as all the ids.
*/

let myList = document.getElementById("myList");
let listLength = myList.children.length;
console.log(listLength);

let items = myList.children;
for (let i = 0; i < items.length; i++) {
  console.log(items[i].id);
}

// !!! Assignment 8. !!!
/*
Objective: Navigate multiple levels up the DOM tree.

Task:
    1. Create a structure with a <div> inside a <section> inside a <body> .
    2. Select the <div> and log the <body> element.
*/

let container4 = document.getElementById("container4");
let outerSection2 = container4.parentElement;
let outerBody = outerSection2.parentElement;

console.log(outerBody);

// !!! Assignment 9. !!!
/*
Objective: Use children to access a specific child.

Task:
    1. Create a <div> with three <p> elements inside.
    2. Write JavaScript to log the second <p> .
*/

let myDiv2 = document.getElementById("myDiv2");
let children2 = myDiv2.children;

console.log(children2[1]);

// !!! Assignment 10. !!!
/*
Objective: Use nextElementSibling in a loop to traverse all siblings.

Task:
    1. Create a <ul> with multiple <li> elements.
    2. Select the first <li> and traverse through all siblings, logging each one.
*/

let startItem = document.getElementById("startItem");
let current = startItem;

while (current) {
  console.log(current);
  current = current.nextElementSibling;
}

// 2p2 Starts here: ===============================================================
//=================================================================================
//=================================================================================

// !!! Assignment 1. !!!
/*
Objective: Learn how to select and change an element's content.

Task:
    1. Create an HTML page with a <p> element with the ID paragraph .
    2. Write JavaScript to change the content of the paragraph to: "DOM Manipulation is fun!"
*/

// !!! Assignment 2. !!!
/*
Objective: Learn how to modify element styles dynamically.

Task:
    1. Create a <button> and a <div> with some placeholder text.
    2. Write JavaScript to change the <div> 's text color to blue when the button is clicked.
*/

// !!! Assignment 3. !!!
/*
Objective: Create and append new elements dynamically.

Task:
    1. Create an empty <ul> in your HTML file.
    2. Use JavaScript to add 3 <li> elements dynamically, each with unique text.
*/

// !!! Assignment 4. !!!
/*
Objective: Learn how to remove an element from the DOM.

Task:
    1. Add a button and a <div> with an ID of removeMe .
    2. Write JavaScript to remove the <div> when the button is clicked.
*/

// !!! Assignment 5. !!!
/*
Objective: Work with input fields and update content dynamically.

Task:
    1. Create an input field and a <div> for displaying the input text.
    2. When the user types in the input field, display the typed text in real-time in the <div> .
*/

// !!! Assignment 6. !!!
/*
Objective: Learn how to hide and show elements.

Task:
    1. Add a button and a <p> with some text.
    2. Write JavaScript to toggle the visibility of the <p> when the button is clicked.
*/

// !!! Assignment 7. !!!
/*
Objective: Use classList to manipulate CSS classes.

Task:
    1. Create a <div> with the class box .
    2. Add JavaScript to toggle a class highlight on the <div> when clicked.
*/

// !!! Assignment 8. !!!
/*
Objective: Track user interactions.

Task:
    1. Add a button and a <p> that displays the number of times the button is clicked.
    2. Update the <p> dynamically with each click.
*/

// !!! Assignment 9. !!!
/*
Objective: Work with <select> and update content based on selection.

Task:
    1. Create a <select> dropdown with three options.
    2. Display the selected option in a <p> when the user makes a selection.
*/

// !!! Assignment 10. !!!
/*
Objective: Combine multiple DOM manipulation techniques.

Task:
    1. Create an input field, a button, and an empty <ul> .
    2. Add items to the <ul> when the button is clicked, using the input value.
    3. Clear the input after adding an item.
*/

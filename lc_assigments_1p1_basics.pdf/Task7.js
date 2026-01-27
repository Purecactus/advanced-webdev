/* Task: Write a function capitalizeWords(sentence) that takes a sentence as an input and
capitalizes the first letter of each word in the sentence. Return the modified sentence. */

function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);

    result.push(capitalized);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world from hampus"));

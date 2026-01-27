/* Task: Write a function charFrequency(str) that takes a string and returns an object where the keys
are characters and the values are the frequency of those characters in the string. */

function charFrequency(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

console.log(charFrequency("hello"));

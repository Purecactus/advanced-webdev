/* Task: Write a JavaScript function findLargestNumber(numbers) that takes an array of numbers and
returns the largest number in that array */

const arr = [1, 3, 6, 19, 5, 15, 77, 10, 2];

function findLargestNumber(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

console.log(findLargestNumber(arr));

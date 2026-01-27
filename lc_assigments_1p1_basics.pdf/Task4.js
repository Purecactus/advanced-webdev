/* Task: Write a function to calculate the factorial of a number */

/*
function factorial(num) {
  if (num === 0) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(6));
*/

// Same thing, but chooses a random number and explains the math step by step
let randomNumber = Math.floor(Math.random() * 11);
console.log("Random number chosen:", randomNumber);

explainFactorial(randomNumber);

function explainFactorial(num) {
  if (num === 0) {
    console.log("0! = 1");
    return 1;
  }

  let result = 1;
  let explanation = "";

  for (let i = num; i >= 1; i--) {
    result *= i;
    explanation += i;
    if (i > 1) {
      explanation += " x ";
    }
  }

  console.log(`${num}! = ${explanation} = ${result}`);
  return result;
}

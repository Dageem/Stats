// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

function getLength(numbers) {
  return numbers.length;
}

function getSum(number) {
  return numbers.reduce((a, b) => a + b, 0);
}

function getMean(number) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function getMin(number) {
  return Math.min(...numbers);
}

function getMax(number) {
  return Math.max(...numbers);
}

function getRange(number) {
  return Math.max(...numbers) - Math.min(...numbers);
}

function getEvens(number) {
  return numbers.filter((num) => num % 2 === 0);
}

function getOdds(number) {
  return numbers.filter((num) => num % 2 !== 0);
}

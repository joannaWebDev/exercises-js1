// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//ECMA 6
let multipliedNum = numbers.map(number => number * 100);

//OLD_WAYS
// function multiply(number) {
//     return number *100;
// }
// let multipliedNum = numbers.map(multiply)

console.log(multipliedNum);
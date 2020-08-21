/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

function daysToString(arr) {
  let dayLetter = '';
  for (let i = 0; i <= arr.length; i++) {
    dayLetter = arr[i];
    return dayLetter;
  }
  
}

console.log(daysToString(daysOfWeek));
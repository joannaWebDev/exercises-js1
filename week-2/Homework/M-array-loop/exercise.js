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
  "Sunday",
];

function daysToString() {
  const d = new Date(dateString);
  const dayName = daysOfWeek[d.getDay()];
  return dayName;

}

console.log(daysOfWeek[new Date().getDay()].startsWith(`T`));
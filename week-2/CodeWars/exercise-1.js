//Complete the solution so that it reverses the string passed into it.
// Test.assertEquals(solution('world'), 'dlrow')
// Test.assertEquals(solution('hello'), 'olleh')
// Test.assertEquals(solution(''), '')
// Test.assertEquals(solution('h'), 'h')

//OPCION 1
// function solution(str) {
//     let strReverse = ``;//initial value empty
//     for (let i = str.length - 1; i >= 0; i--) {//need to start from the end of the string and go back until the 1st index
//         strReverse += str[i];
//     }
//     return strReverse; 
//   }

// console.log(solution(`world`));
// console.log(solution(`hello`));

//OPCION 2
function solution(str) {
  return str.split(``).reverse().join(``);
}
/*split => divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array
reverse => reverses an array in place
.join   => joins all elements of an array into a string*/


//OPCION 3
// const solution = str =>split(``).reverse().join(``);


//OPCION 4
// const solution = str => [...str].reverse().join``;

// Test Passed: Value == 'dlrow'
// Test Passed: Value == 'olleh'
// Test Passed: Value == ''
// Test Passed: Value == 'h'
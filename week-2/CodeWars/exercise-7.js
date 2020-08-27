/*Stats: Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

//OPCION 1 a compass solution using arrow function
const squareSum = numbers => numbers.reduce((a, x) => a + (x * x), 0);


//OPCION 2
// function squareSum(numbers) {
//     return numbers.reduce((accumulator, currentEl) => accumulator + (currentEl * currentEl), 0);
// }


//OPCION 3
// function squareSum(numbers){
//     let result = 0;
//     let array = numbers.map(x => x*x);
//     array.forEach(x => result +=x)
//         return result;
// }
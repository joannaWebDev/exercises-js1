/*Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/

//OPCION 1
// function positiveSum(arr) {
//     const number = (x, y) => x + (y > 0 ? y : 0)
//     return arr.reduce(number, 0)
// }

//OPCION 2
const positiveSum = arr => arr.filter(n=> n> 0).reduce((a, b) => a + b, 0)

/*filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

The reduce() method executes the callback once for each assigned value present in the array, taking four arguments:

accumulator
currentValue
currentIndex
array*/


//OPCION 3
// function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) 
//         sum += arr[i];
//     }
//     return sum;
// }

//OPCION 4
// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach(num => num > 0 && (sum += num))
//         return sum
//     };


console.log(positiveSum([1, -4, 7, 12]));


/*Sum of positive
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.*/
function positiveSum(arr) {
    const number = (x, y) => x + (y > 0 ? y : 0)
    return arr.reduce(number, 0)
}

// const positiveSum = arr => arr.filter(n=> n> 0).reduce((a, b) => a + b, 0)

// function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) 
//         sum += arr[i];
//     }
//     return sum;
// }

// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach(num => num > 0 && (sum += num))
//         return sum
//     };


console.log(positiveSum([1, -4, 7, 12]));


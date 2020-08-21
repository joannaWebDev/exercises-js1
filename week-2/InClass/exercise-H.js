/*Calculate the exponential of the even numbers from 5 to 20 Using a for loop and the helper functions provided.
Expected output

The exponential of 6 is 36
The exponential of 8 is 64
The exponential of 10 is 100
The exponential of 12 is 144
The exponential of 14 is 196
The exponential of 16 is 256
The exponential of 18 is 324*/
let numList = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


function exponential(number) {
  for (let i = 0; i <numList.length; i++) {
    let numberArray = [];
    if (number >=5 && number <=20 && number % 2 === 0) {
      numberArray.push[number];
    } 
    return number * number;
  }
}
 console.log(exponential(numList));

/*Calculate the exponential of the even numbers from 5 to 20 Using a for loop and the helper functions provided.
Expected output

The exponential of 6 is 36
The exponential of 8 is 64
The exponential of 10 is 100
The exponential of 12 is 144
The exponential of 14 is 196
The exponential of 16 is 256
The exponential of 18 is 324*/


function exponential(number) {
  for (let i = 5; i < 20; i++) {
    if (number % 2 === 0 && number < 20) {
      console.log("The exponential of " + number + " is " + number * number);
      number += 2
    }
  }
}
exponential(6)
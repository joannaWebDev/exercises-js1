/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 10;
/*
function sumTillNum(num){
	for (let n = 0; n < n.length; n++) {
		return sumTillNum + n;
		
	}
}
*/
function sumTillNum(N) {
	let total = 0;
	  for(var i = 1; i <= N; i++){
		total += i;
	  }
	  return total;
  }

console.log("Sum from 0 and " + n + " is: " + sumTillNum(5));

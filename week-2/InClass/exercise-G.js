/*Log the Apollo 11 countdown, use the message provided as the last output. It starts from 8 till 0!

var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8;

console.log(apolloCountdownMessage);
Expected output

8
7
6
5
4
3
2
1
0
all engine running... LIFT-OFF!
for loop
The for loop is similar to a while loop, but with a more specialized syntax. Programmers invented the for loop when they realized they were always doing the same three things: creating loop counter variables (like i above), incrementing them by some amount, and checking that they're less than a value.

The for loop syntax has special places for each of those three things. Here's the same loop as the first while loop above, as a for loop:

for (initialization; condition; final-expression) { //... }
For loop

for (let i = 0; i < 100; i++) {
  console.log("The count is: " + counter);
}
The initialization is let i = 0, the condition is i < 100 and the final-expression is i++. Those blocks can be seen inside the parentheses after the for keyword and separated by semicolons ;, in the following order (initialization; condition; final-expression).

Notice the line i++ - this is the same as saying i = i + 1 It does exactly the same thing but it is just more convenient to write.*/

var apolloCountdownMessage = "all engine running... LIFT-OFF!";
var countdown = 8;

console.log(apolloCountdownMessage);
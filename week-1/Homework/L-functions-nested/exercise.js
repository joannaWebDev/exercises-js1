/*
- In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
- Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
- Log each greeting to the console.
## Expected result
```
HELLO DANIEL
HELLO IRINA
HELLO MIMI
HELLO ROB
HELLO YOHANNES
```*/

let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";

function capitalizeLetters(name) {
    return name.toUpperCase();
}

function greetingOne(name) {
    const greetingName = capitalizeLetters(name);
    return `Hello ${greetingName}`;
}

console.log(greetingOne(mentor1));
console.log(greetingOne(mentor2));
console.log(greetingOne(mentor3));
console.log(greetingOne(mentor4));
console.log(greetingOne(mentor5));
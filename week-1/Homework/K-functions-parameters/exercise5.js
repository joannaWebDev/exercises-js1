/*
* Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

## Expected result

```
Hello, my name is Daniel and I'm 30 years old
```*/

const greeting = createLongGreeting("Daniel", 30);

function createLongGreeting(greeting) {
    return `Hello, my name is ${} and I'm ${} years old`
}

console.log(greeting);

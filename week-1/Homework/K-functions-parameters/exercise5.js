/* Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

## Expected result

```
Hello, my name is Daniel and I'm 30 years old
```*/
/*
function createLongGreeting(name, age) {
    const mainName = "Daniel";
    const mainAge = 30;
    return `Hello, my name is ${mainName} and I'm ${mainAge} years old`//este es el resultado de mi operacion
}

console.log(createLongGreeting("Joanna", 35));
*/

function createLongGreeting(name, age) {
    return "Hello, my name is " + name + "and I'm " + age + " years old";
}

console.log(createLongGreeting("Jay ", 30));

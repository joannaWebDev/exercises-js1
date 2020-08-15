/*
Design and create a function that:
takes in more than one input
uses string concatenation
this means adding two strings together
performs some form of operation on a number
uses return to return a string
Add a comment above your function to explain what it does
Call your function and run your script
What's the difference between a return and console.log?
When would you choose to use functions over the way we have been scripting so far?*/

function findCorrectAnswer(question, numericData) {
    const result =  numericData * 3;
    return question + result;//el return tiene que ser siempre la ultima linea de la funcion
}

console.log(findCorrectAnswer("What`s my real age? " , 10)); //solo sirve para imprimir en la consola
console.log(findCorrectAnswer("How much money doI have now? " , 0));

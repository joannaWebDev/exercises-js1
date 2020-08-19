/*Create a function that gives you a message depending on your mood! It should:

take one input
return "Good job, you're doing great!" if you pass in "happy"
return "Every cloud has a silver lining" if you pass in "sad"
return "Beep beep boop" if you pass in a number
return "I'm sorry, I'm still learning about feelings!" if you pass in anything else*/ 
let stateOfMind =  function (val) {
    if (val === "happy" ) {
        return `Good job, you're doing great!`;
    } else if ( val === "sad") {
        return `Every cloud has a silver lining`;    
    } else if (typeof val === "number"){
        return `Beep beep boop`;
    } else 
        return `I'm sorry, I'm still learning about feelings!`;
}

console.log(stateOfMind(10));

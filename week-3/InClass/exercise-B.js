/*Use the array of the people from your class
Combine it with another array filled with the names from another class
console.log the names in alphabetical order
Create a function that takes a name and an array of names and returns a string. If the name is not in an array, it should return <name> is not at the class with <people in the array>. If the name is in the array, it should return <name> is at the class with <people in the array>.*/
const alumnosEsp = [`Alfonso`, `Jorge`, `Melina`, `Ricardo`];
const alumnosEng = [`Ben`, `Annabelle`, `Xavier`, `James`];

const class2020 = alumnosEsp.concat(alumnosEng).sort();

console.log(class2020) ;


function findTheName( name) {
    
    if (class2020.includes(name)) {
        return `${name} is in the class.`;
    } 

    return `${name} not at the class.`
}

console.log(findTheName(`James`));
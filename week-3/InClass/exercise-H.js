/*Create a function which:
1-Takes an array of names
2-Looks to see if your name is in the array
3-If it is, return Found me!; if not, return Haven't found me :(*/

//ECMA6
let names = [`Mary`, `James`, `Porky`, `Irina`];

function isTheName(name) {
    return names.includes(name)
}



console.log(isTheName(`Mary`))

//OLD WAYS
// function checkIfNameExists(arr, val) {   
//      if (arr.some(arrVal => val === arrVal)) {
//          return `Found me!`
//      } return `Haven't found me :(*`
//   }

// console.log(checkIfNameExists(names, `Maryanne`));










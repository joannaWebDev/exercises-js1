/*Complete this function so that, if the second index in the array contains the name "Amy", it returns "Second index matched!"

function secondMatchesAmy(array) {
  if ( ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}*/
const miArray = ['Clara', 'Neo', 'Amy'];

function secondMatchesAmy(miArray) {
  if (miArray[2] === "Amy" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(miArray));
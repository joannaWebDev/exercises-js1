/*Modify your callback function from the previous exercise so that it also:
Sorts abracaArray in alphabetical order*/
//I have a function defined below as:

function abracaFunction(yourFunc) {

    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
  
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }

  console.log(abracaFunction(newArray => newArray.sort()));
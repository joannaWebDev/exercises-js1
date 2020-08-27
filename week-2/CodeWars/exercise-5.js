/*Counting sheep…
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]*/


//OPCION 1
  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((item) => item === true).length; 
  }

 //OPCION 2 
 const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((x) => x === true).length;

 //OPCION 3
 //const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;
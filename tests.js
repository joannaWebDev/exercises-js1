// let numero=[2,5,78,3,4];
// // function suma(num){
// //   return num+2;
// // }
// console.log("Los numeros son: ", numero.map(suma));

/** */
// let num=[1,3,4];
// let num01 =num.map((sum)=>sum+2);
// console.log(num01);

/** */
function nuevoNombre(seteoNombre){
    let nombre=["Anni","Pedro","Juan"];
    return seteoNombre(nombre);
  }
  console.log(nuevoNombre(array=>array.map((nuevaCadena)=>nuevaCadena+"!")));
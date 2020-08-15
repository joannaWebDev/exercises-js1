/*Write a function that returns the year someone is born given their age as input  OK*/

let  nombre,edad, anyoActual, resultado;
nombre = "Jay"
edad = 19;
anyoActual = 2020;
resultado = anyoActual - edad;
/*
    function getYearBirth () {    
        return resultado;      
    }

    console.log(`El año en el que naciste es el: `+ resultado);

/*Using the answer from step 1, write a function that takes someone's name and age as input and returns a string that states the person's name and year they were born in a sentence*/
   /* function greating () {
        return nombre + resultado;        
    }

    console.log(`Tu nombre es ` + nombre + ` y naciste en al anyo ` + resultado);

    */

  function getBornYear(age) {
      return 2020- age;
  }  

    function getPersoneInfo(name, age) {
        return name + " - " + getBornYear(age);
    }

    console.log(getPersoneInfo("Jay", 30));
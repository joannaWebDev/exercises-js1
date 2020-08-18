//Can you explain what this function does line by line? What happens when you pass in a string?

function numberChecker(num) {//funccion, nombre de la función, parámetro
  if (num > 20) {//si el parámetro es mayor a 20
    return `${num} is greater than 20`;//devuelve mensaje "tal número  es mayor que 20"
  } else if (num === 20) {//si el parámetro es estrictamente igual a 20
    return `${num} is equal to 20`;//devuelve mensaje "tal número  es igual que 20"
  } else if (num < 20) {//si el parámetro es menor que 20
    return `${num} is less than 20`;//devuelve mensaje "tal número  es menor que 20"
  } else {//si todo lo demás no se cumple
    return `${num} isn't even a number ( ˘︹˘ )`;//devuelve mensaje "tal número  nisiquiera es un número"
  }
}

console.log(numberChecker('casa'));//imprime en la consola
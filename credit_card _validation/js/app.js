//Solicitando un número de tarjeta
var cardNumber = prompt('Ingrese número de tarjeta:');

//Pasando los caracteres a un nuevo array en orden inverso, conviertiendo de cadena a número
var reverseArray = function(string) {
  //Creando array vacio para agregar los caracteres en orden inverso
  var array = [];
  //Iterando los elementos del array
  for (var i=0; i<string.length; i++) {
    //Agregando elementos uno delante de otro
    array.unshift(parseInt(string[i]));
  }
  //Agregando 0 como elemento
  array.splice(0,0,0);
  return array;
}

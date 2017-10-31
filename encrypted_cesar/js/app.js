var insertWord = prompt("¡Escribe tu frase secreta!")
//Crear una funcion para cifrar la frase
function cipher(message, n){

 //Variable frase original ingresada por el usuario
  var word = 0;
  //Variable para la frase cifrada
  var newWord = 0;
  //Variable para el valor de la frase final
  var newCipher =" " ;

  //Recorrer la palabra por medio de un for
  for (var i = 0; message.length; i++) {
  //decifrar con el metodo charCodeAt
  word = message.charCodeAt(i);

  //Si son  mayusculas Dentro del codigo ASCII se encuentran entre el 65 y 90
  if (word >= 65 && word <=90){
    newWord = (word - 65+ n) % 26 + 65;
    newCipher = String.fromCharCode(newWord);


    //Si son  mayusculas Dentro del codigo ASCII se encuentran entre el 97 y 122
  } else if (word >= 97 && word <= 122){
    newWord = (word - 97 + n) % 26 + 97;
    newCipher = String.fromCharCode(newWord);
  }
  }

  function decipher =(message, n){
    //crear variale para el codigo cifrado
    var newWord = 0
  }

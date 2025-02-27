// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var resultado= [];
  
  for (let clave in objeto){
    var array = [];
  array.push(clave);
  array.push(objeto[clave]);
    resultado.push(array);
     }
     return resultado;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var resultado= {};
string.split('').forEach(elemento => resultado[elemento] = +0);

for (var i=0; i<string.length; i++){
  var letra = string[i];
  resultado[letra] = resultado[letra] + 1;
}

return resultado;
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array = '';
  var string = s.split('');
  var mayuscula = s.toUpperCase();
  var mayuscula2= mayuscula.split('');
  var array2 = '';
  for (var i=0; i<s.length; i++){
   
    if (string[i] === mayuscula2[i]){
array = array +  s[i];
}
else 
array2 = array2 + s[i];
  }

  return array + array2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevo= "";
  var arrayTotal = str.split('');
  arrayTotal.push(' ');
  var array = [];
  for (var i=0; i < arrayTotal.length; i++){
    if (arrayTotal[i] == " "){
    nuevo = nuevo + array.join('') + ' ' ;
    array = [];
    
  }
  else
    array.unshift(arrayTotal[i]);
  
}
  return nuevo.trimEnd();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izq uierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var resultado = '';
  var numTemp = [];
  var arrayNum= Array.from(String(numero));
  arrayNum.forEach(clave => numTemp.unshift(clave));
  if (numTemp.toString() == arrayNum.toString()){
    return 'Es capicua';
  }
  else
    return 'No es capicua';

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var string = cadena.replaceAll('a', '').replaceAll('b', '').replaceAll('c', '');

  return string;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
arr.sort((a, b) => (a.length-b.length));
return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interArr = [];
 // for (elemento in arreglo1){
  for (var i=0; i<arreglo1.length; i++){
   var inter = arreglo2.find(key => key == arreglo1[i]);

   if (inter != undefined){
   interArr.push(inter); 
   }
   
  }
  return interArr;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


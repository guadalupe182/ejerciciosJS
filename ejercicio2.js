/**5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
 *  devolverá "odnuM aloH". */

// String.prototype.reverse = function(){
//     let cuentaCaracter = this.length;
//     let cadena = '';
//     while(cuentaCaracter >= 0){
//         cadena = cadena + this.charAt(cuentaCaracter)
//         cuentaCaracter--;
//     }
//     return cadena;
// }
// let palabra = new String('hola mundo');
// console.log(`la cadena "${palabra}" de forma invertida es: "${palabra.reverse()}"`);


/**6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 * pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

// function cuantaPalabras(cadena, palabra) {
//   return cadena.match(new RegExp("(\\w*" + palabra + "\\w*)", "gi"));
// }

// let cuenta = cuantaPalabras("hola mundo soy adrian adrian soy hola", "adrian");
// console.log(cuenta);


/**7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 * (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

/*function texto() {
  var palabra = prompt("Escribe una palabra").toLowerCase(); //promp solcita datos por ventana emergente

  // eliminamos los espacios en blanco
  palabra = palabra.replace(/ /g, "");

  for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] != palabra[palabra.length - i - 1]) {
      return false;
    }
  }
  return true;
}

if (texto()) {
  alert("Esto es palíndromo");
} else {
  alert("Esto no es palíndromo");
}*/

/**8) Programa una función que elimine cierto patrón de caracteres de un texto
 * dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */





/**-------------------CORRECCION DE EJECICIOS----------------------- */

/**Ejercicio 5  */

const invertirCadena = (cadena="") => //usando arrow function implicita
(!cadena)
  ?console.warn('No ingresaste una cadena de caracteres')
  :console.info(cadena.split("").reverse().join(""));
 
  //invertirCadena("hola mundo");

  /**Ejercicio 6 

  const textoEnCadena = (cadena= "", texto = "") => {

    if(!cadena) return console.warn('No ingresaste el texto largo');
    if(!texto) return console.info('No ingresaste la palabra para evaluar');

    let i = 0,
      contador = 0;
    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if(i !== -1){
          i++;
          contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
  }

  //textoEnCadena('Hola mundo adios mundo','mundo'); */


  /**Ejercicio 7 */

 const palindromo = (palabra = "") => {
  if(!palabra) return console.warn('No ingresaste una palabra o frase');

  palabra = palabra.toLowerCase();
  let invertida = palabra.split("").reverse().join("");

  return (palabra === invertida)
    ? console.info(`Si es palindromo, Palabra original ${palabra}. Palabra invertida ${invertida}`)
    : console.info(`No es palindromo, Palabra original ${palabra}. Palabra invertida ${invertida}`)
 }

 //palindromo('salas');



 /**Ejercicio 8 */

 const eliminarCaracteres = (texto = "", patron = "") =>
 (!texto)
  ?console.warn('No ingresaste texto')
  :(!patron)
   ? console.warn('No ingresaste un patron de caracteres')
   : console.info(texto.replace(new RegExp(patron, "ig"),""));

eliminarCaracteres();
eliminarCaracteres("x,y,z");
eliminarCaracteres("xyz1,xyz2,xyz3,xyz4,xyz5", "xyz" );   
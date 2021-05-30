/**Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

function cuentaPalabras(){
    let saludo = 'Hola Mundo'.length;
    console.log('El numero de caracteres son ' + saludo);
}

//cuentaPalabras();   


/**Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

function textoRecortado(){
    let texto = 'Hola Mundo'.substring(0,4);
    console.log('La palabra recortada es: ' + texto);
}

//textoRecortado();


/**Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function stringArray(){
    const  nombre = 'hola mi nombre es adrian'.split(' ');//sin espacio en el split devuelve letra por letra con espacio devuelve palabra por palabra
    console.log(nombre);
}

//stringArray();



/**Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

function textRepeat(){
    const text = 'hola '.repeat(3);
    console.log(text);
}
 //textRepeat();







/*********Correcion de ejercicios por (jonmircha)********************/

//ejercicio 1 

const cuentaCaracteres = (cadena = '')=> 
  (!cadena) 
    ? console.warn('No ingresaste ninguna cadena') //usando op ternario      when true
    :console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);  //when false

//cuentaCaracteres('hola mundo');

//ejercicio 2

const recortarTexto = (cadena = '', longitud = undefined) =>
    (!cadena)
    ? console.warn('No ingresaste una cadena de texto')
    :(longitud === undefined)
      ? console.warn('No ingresaste la longitud para recortar el texto')
      :console.info(cadena.slice(0,longitud));

//recortarTexto('hola mundo',4);


//ejercicio 3 

const cadenaAArreglo = (cadena = '', separador = undefined)=>
(!cadena)
    ? console.warn('No ingresaste una cadena de texto')
    :(separador === undefined)
        ? console.warn('No ingresaste el caracter separador')
        : console.info(cadena.split(separador));

//cadenaAArreglo('Lorem ipsum dolor sit amet consectetur adipiscing elit ligula tempus varius, sagittis cursus sed augue mi a duis aptent ornare eleifend, at bibendum mauris pellentesque mus tempor etiam aliquam facilisis. Augue curae molestie iaculis sed rhoncus pretium laoreet velit integer phasellus lacinia cubilia, sagittis nostra lobortis ridiculus cursus convallis aptent nisl primis imperdiet. Laoreet interdum placerat accumsan magnis potenti, maecenas nisl enim dui eros aliquam, integer tristique mattis volutpat.', ',');        


//ejercico4

const repetirTexto = (texto = '', veces = undefined) =>{  //validar mas de una opcion
    if(!texto) return console.warn('No ingreaste texto');

    if(veces === undefined) return console.warn('No ingresaste el numero de veces a repetir el texto');

    if(veces === 0) return console.error('El numero de veces no puede ser 0');

    if(Math.sign(veces) === -1) return console.error('El numero de veces no puede ser nevativo');   

    for(let i = 1; i<= veces; i++){
        console.info(`${texto}, ${i}`);
    }
  }

//repetirTexto('hola mundo', 3);  

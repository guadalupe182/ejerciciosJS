//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (numero) => {
   
    if(numero === undefined) return console.warn('No ingresaste un numero');

    if(typeof numero !== 'number') return console.error(`El valor ${numero} ingresado no es un numero`);

    if(numero === 0) return console.error('El numero no puede ser cero');

    if(numero < 0) return console.error(`El numero no puede ser negativo`);

    if(numero % 2 !== 0) return console.info(`true`);
        else{
            console.info('false');
        }
}

//esPrimo(3);


//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = (numero) => {
    if(numero === undefined) return console.warn('No ingresaste un numero');

    if(typeof numero !== 'number') return console.error(`El valor ${numero} ingresado no es un numero`);

    if(numero === 0) return console.error('El numero no puede ser cero');

    if(numero < 0) return console.error(`El numero no puede ser negativo`);

    if(numero % 2 === 0) return console.info(`El numero ${numero} es par`);
        else{
            console.info(`El numero ${numero} es impar`);
        }
}

//esPar(2);



//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convierteGrados = (grados = undefined, unidad = undefined) => {   
    if(grados === undefined) return console.warn('No ingresaste grados');
    
    if(unidad === undefined) return console.warn('No ingresaste la unidad de medida');
    
    if(typeof unidad !== 'string') return console.error(`El valor ${unidad} ingresado no es una cadena de texto`);
    
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de medida no reconocido');

    if(unidad === "C") return console.info(`${grados} Centigrados = ${grados} Fahrenheit`);


}

convierteGrados(0,'C');
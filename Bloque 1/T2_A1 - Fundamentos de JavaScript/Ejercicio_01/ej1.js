'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

function longitudString(string1, string2) {
    if (typeof string1 !== "string") 
        { console.log(`El primer parámetro con valor: [${string1}] no es un string, es tipo {${typeof string1}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof string2 !== "string") 
        { console.log(`El segundo parámetro con valor: [${string2}] no es un string, es tipo {${typeof string2}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof string1 === "string" && typeof string2 === "string") {
        string1.length == string2.length ? 
            console.log(`Ambos parámetros [${string1}] y [${string2}] son igual de largos con: ${string1.length} y ${string2.length} letras ambos`) : 
            string1.length > string2.length ? 
                console.log(`El primer parámetro: [${string1}] es el más largo con: ${string1.length} letras`) :
                console.log(`El segundo parámetro: [${string2}] es el más largo con: ${string2.length} letras`) ;
    } 
}

longitudString("Alegría", "Alegría");
longitudString("Juan", "Alegría");
longitudString("María", "Sol");
longitudString("MarcoPolo", "Sebastián");
longitudString("Marisol", 3);
longitudString([], "Albaricoque");
longitudString(true, {});

console.log('--------------------------------------------');

/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muestra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');

function numeroEncadenado(num1, num2) {
    if (typeof Number(num1) !== "number" || isNaN(num1)) 
        { console.log(`El primer parámetro con valor: [${num1}] no es un número, es tipo {${typeof(num1) === "number" && isNaN(num1) ? "Not A Number" : typeof(num1)}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof Number(num2) !== "number" || isNaN(num2)) 
        { console.log(`El segundo parámetro con valor: [${num2}] no es un número, es tipo {${typeof(num2) === "number" && isNaN(num2)? "Not A Number" : typeof(num2)}}, reviselo antes de ejecutarlo de nuevo`); }
    if (( typeof Number(num1) === "number" && !isNaN(num1) ) && ( typeof Number(num2) === "number" && !isNaN(num2) )) {
        let chain = "";
        for (let i = 0; i < num1; i++) {
            chain += `${String(num2)} `;
            num2 = num2 * 2;
        }
        console.log(chain)
    } 
}

numeroEncadenado(3, 3);
numeroEncadenado(4, 6);
numeroEncadenado(1, 8);
numeroEncadenado(16, 1);
numeroEncadenado(9, 10);
numeroEncadenado(5, '5');
numeroEncadenado(6, 0);
numeroEncadenado("6", 6);
numeroEncadenado("8", '2');
numeroEncadenado("Marisol", 3);
numeroEncadenado(true, "Albaricoque");
numeroEncadenado(8, "7J");
numeroEncadenado(NaN, {});
numeroEncadenado(12, NaN);

console.log('--------------------------------------------');

/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemplo: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');

function letrasRepetidas(palabra, letra) {
    if (typeof palabra !== "string") 
        { console.log(`El primer parámetro con valor: [${palabra}] no es un string, es tipo {${typeof(palabra) === "number" && isNaN(palabra) ? "Not A Number" : typeof(palabra)}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof letra !== "string") 
        { console.log(`El segundo parámetro con valor: [${letra}] no es un string, es tipo {${typeof(letra) === "number" && isNaN(letra) ? "Not A Number" : typeof(letra)}}, reviselo antes de ejecutarlo de nuevo`); }
    else if (letra.length < 1 || letra.length > 1) 
        { console.log(`El segundo parámetro {${letra}} tiene un tamaño inadecuado: [${letra.length} caracteres], revise que sea solo 1 caracter`); }
    if (typeof palabra === "string" && typeof letra === "string" && letra.length == 1) {
        let repetidas = 0;
        for (let i = 0; i < palabra.length; i++) {
            palabra.charAt(i) === letra ? repetidas++ : '';
        }
        console.log(repetidas === 1 ? 
            `La letra {${letra}} aparece repetida {${repetidas}} vez en la palabra [${palabra}]` : 
            `La letra {${letra}} aparece repetida {${repetidas}} veces en la palabra [${palabra}]`);
    } 
}

letrasRepetidas("Carcasa", 'a');
letrasRepetidas("Albaricoque", 'b');
letrasRepetidas("Mariscada", 'a');
letrasRepetidas("Mariscada", 'e');
letrasRepetidas("Albaricoque", 2);
letrasRepetidas(NaN, "Mariano");
letrasRepetidas("Mariano", '');
letrasRepetidas("Girasol", 'Tulipán');

console.log('--------------------------------------------');

/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   números válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no numérico en el precio o impuesto.
 */

console.log('--------------- APARTADO 4 -----------------');

function calculaPrecioProducto(nombre = "Producto genérico", precio = 100, impuesto = 21) {
    if (typeof nombre !== "string") 
        { console.log(`El primer parámetro con valor: [${nombre}] no es un string, es tipo {${typeof(nombre)}}, reviselo antes de ejecutarlo de nuevo`); }
    else if (nombre.length <= 0)
        { console.log(`El primer parámetro con valor: [${nombre}] es un string vacío, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof precio !== "number" || Number.isNaN(precio)) 
        { console.log(`El segundo parámetro con valor: [${precio}] no es un numero, es tipo {${typeof(precio) === "number" && isNaN(precio) ? "Not A Number" : typeof(precio)}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof impuesto !== "number" || Number.isNaN(impuesto))  
        { console.log(`El segundo parámetro con valor: [${impuesto}] no es un numero, es tipo {${typeof(impuesto) === "number" && isNaN(impuesto) ? "Not A Number" : typeof(impuesto)}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof nombre === "string" && (typeof precio === "number" && !Number.isNaN(precio)) && (typeof impuesto === "number" && !Number.isNaN(impuesto)) ) {
        console.log(`El precio del producto [${String(nombre)}] con IVA del ${impuesto}% es: \n\tPrecio bruto: ${precio.toFixed(2)}\n\tPrecio neto: ${(precio+((precio*impuesto)/100)).toFixed(2)}`);
    }
}

calculaPrecioProducto("Pepino", 1.89, 4);
calculaPrecioProducto("Harina", 0.90, 4);
calculaPrecioProducto("Aceite de girasol", 6.50, 10);
calculaPrecioProducto("Televisor", 120);
calculaPrecioProducto("Gasolina");
calculaPrecioProducto(undefined, 80, 10);
calculaPrecioProducto();
calculaPrecioProducto(undefined, 50, undefined);
calculaPrecioProducto("Libro de mates", undefined, 4);
calculaPrecioProducto("", null, 4);
calculaPrecioProducto("Libro de sociales", true, {});
calculaPrecioProducto([], NaN, '7J');

console.log('--------------------------------------------');

/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');

const buscaTexto = (textoCompleto, textoBuscar) => {
    if (typeof textoCompleto !== "string") 
        { console.log(`El primer parámetro con valor: [${textoCompleto}] no es un string, es tipo {${typeof(textoCompleto)}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof textoBuscar !== "string") 
        { console.log(`El segundo parámetro con valor: [${textoBuscar}] no es un string, es tipo {${typeof(textoBuscar)}}, reviselo antes de ejecutarlo de nuevo`); }
    if (typeof textoCompleto === "string" && textoCompleto.length > 0 && typeof textoBuscar === "string" && textoBuscar.length > 0) {
        textoCompleto.toLocaleUpperCase().includes(textoBuscar.toLocaleUpperCase()) ?
            console.log(`El texto [${textoBuscar.toLocaleUpperCase()}] si se encuentra dentro del texto [${textoCompleto.toLocaleUpperCase()}]`) :
            console.log(`El texto [${textoBuscar.toLocaleUpperCase()}] no se encuentra dentro del texto [${textoCompleto.toLocaleUpperCase()}]`);
    } 
}

buscaTexto("Santiago de Compostela", "compo");
buscaTexto("Margaritas a los cerdos", "Rita");
buscaTexto("Marisol", "Josefina");
buscaTexto(3, "Albaricoque");
buscaTexto("Erase una vez", true);

console.log('--------------------------------------------');



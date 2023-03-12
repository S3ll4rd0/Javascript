'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (ambas incluidas)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */

console.log('--------------- APARTADO 1 -----------------');
const muestraArray = array => array.forEach((element, index) => {
    console.log(`Elemento en posición *${index+1}* tiene el valor [${element}] de un total de {${array.length}} elementos en el array.`)
});

let array = [2, 3, 4, 5]
console.log(`-> Creado Array con ${array.length} elementos.`)
muestraArray(array)
array.unshift(0, 1)
array.push(6, 7)
console.log(`-> Añadidos 2 elementos al inicio y 2 al final del array.`)
console.log(`-> Array actual con ${array.length} elementos.`)
muestraArray(array)
console.log(`-> Eliminamos las posiciones de la 3 a la 5 del array.`)
console.log(`-> Array actual con ${array.length} elementos.`)
array = array.slice(0, 3).concat(array.slice(6))
muestraArray(array)
array.splice(array.length-1, 0, 8, 9)
console.log(`-> Añadidos 2 elementos más entre el último y el penúltimo del array.`)
console.log(`-> Array actual con ${array.length} elementos.`)
muestraArray(array)
console.log(`-> Mostramos el array final de ${array.length} elementos.`)
console.log(array.join(" ==> "))


console.log('--------------------------------------------');


/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa spread para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> printMedia("Pepe", 4.25, 6, 8.5, 9)
 */

console.log('--------------- APARTADO 2 -----------------');

function printMedia(nombre, ...notas) {
    let allNumbers = true;
    if (typeof nombre !== "string")
        { console.log(`El nombre del alumno: [${nombre}] no es un string, es tipo {${typeof nombre}}, reviselo antes de ejecutarlo de nuevo`); }
    else if (nombre.length <= 0)
        { console.log(`El nombre del alumno no puede ser un string vacío: [${nombre}], reviselo antes de ejecutarlo de nuevo`); }
    if (!Array.isArray(notas))
        { console.log(`Las notas del alumno son incorrectas, reviselo antes de ejecutarlo de nuevo`); }
    else if (notas.length <= 0)
        { console.log(`No ha indicado ninguna nota, reviselo antes de ejecutarlo de nuevo`); }
    else 
        { notas.forEach(element => { 
            if (typeof element !== "number") { allNumbers = false; console.log(`Valor incorrecto en las notas: [${element}] => [No es numérico]`) }
        })}
    if ((typeof nombre === "string" && nombre.length > 0) && (Array.isArray(notas) && notas.length > 0) && allNumbers) {
        console.log(`El\\la alumn@ ${nombre} tiene las siguientes notas: [${notas.join(' - ')}] y una nota media final de: {${((notas.reduce((accumulator, currentValue) => accumulator + currentValue)) / notas.length).toFixed(2)}}`);
    }
}

printMedia("Pepe", 4.25, 6, 8.5, 9)
printMedia("Juan", 6, 7, 9.5, 9)
printMedia("Rosa", 2, 5, 5, 7, 6)
printMedia("Pepe")
printMedia("Pepe", 4.25, 6, true, '7J', 9)
printMedia(undefined, 4.25, 6, 8.5, 9)
printMedia('', 4.25, 6, 8.5, 9)

console.log('--------------------------------------------');

/**
 * Apartado 3
 * Crea un array de cadenas y ordénalo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado
 */

console.log('--------------- APARTADO 3 -----------------');




console.log('--------------------------------------------');

/**
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número. No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) la transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado
 */

console.log('--------------- APARTADO 4 -----------------');




console.log('--------------------------------------------');
/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 5 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos'],
    ['Mesa', 'ERROR: El stock no puede ser negativo']
];




console.log('--------------------------------------------');

/**
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log('--------------- APARTADO 6 -----------------');


/**
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 7 -----------------');


'use strict';

/******************************************
 * TIPOS DE VARIABLES
 * (Ver lo quen imprime cada console.log)
 ******************************************/

let a = 15;
console.log(a); 

console.log(typeof a); //Imprimirá "number"

a = "Cadena";
console.log(typeof a); //Imprimirá "string"

a = [12, 23, 4];
console.log(typeof a); //Imprimirá "object"
console.log(a instanceof Array); //Imprimirá "true"

let b;
console.log(typeof b); //Imprimirá "undefined"
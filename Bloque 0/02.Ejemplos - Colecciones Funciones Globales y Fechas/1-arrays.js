'use strict';

/****************************
 * Operaciones con arrays
 ****************************/
let a = [3, 21, 15, 61, 9, 15];
console.log(a.indexOf(15)); // 2
console.log(a.indexOf(56)); // -1 (no encontrado)
console.log(a.lastIndexOf(15)); // 5

let a2 = ["uno", "dos", "tres", "cuatro"];
console.log(a2.indexOf("tres")); // 2

// Array de objetos
let p1 = { id : 1, name: "Peter"};
let p2 = { id : 2, name: "John"};
let p3 = { id : 3, name: "Mary"};
let p4 = { id : 4, name: "Ann"};
let a3 = [p1, p2, p3, p4];
console.log(a3.indexOf(p3)); // 2

// Devuelve un array con los nombres de las personas (strings)
let nombres = a3.map(elem => elem.name);
console.log(a3);
console.log(nombres);

let a4 = [24, 56, 2, 34, 66];
let result = a4.every(elem => elem % 2 === 0); // ¿Todos son pares?
console.log(result);

let a5 = [24, 53, 2, 35, 66];
let result2 = a5.some(elem => elem % 2 === 1);  // Alguno es par?
console.log(result2);

// Recorre el array mostrando posición y elemento
let a6 = ["a", "b", "c", "d"];
a6.forEach((elem, index) => {
    console.log("Index: " + index + ", value: " + elem);
}); 

// Array con los elementos pares de a5 multiplicados por 2
let a7 = a5.map(elem => {
    if(elem % 2 === 0)
        return elem * 2;
    else 
        return 1;
}); 
console.log(a7);

// Array que contiene sólo los elementos pares de a5
let a8 = a5.filter(elem => elem % 2 === 0); 
console.log(a8);

// Suma todos los elementos de a5
let sum = a5.reduce((total, elem) => total + elem, 0); 
console.log(sum);

// Devuelve el número máximo en a5
let max = a5.reduce(function(max, elem) {
    if(elem > max) return elem;
    return max;
}, 0); 
console.log(max);
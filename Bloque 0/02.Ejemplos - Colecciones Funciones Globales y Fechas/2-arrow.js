'use strict';

/****************************
 * Funciones anónimas y lambdas (arrow)
 * Filtrado de array con objetos
 ****************************/

// Función anónima
let sum = function(a, b) {
    return a + b;
};

console.log(sum(23, 15)); // 38

// Lo mismo con lambda
let sum2 = (a, b) => a + b;
console.log(sum2(23, 15)); // 38

// Si la función tiene más de una línea, se deben poner las llaves
// y la instrucción return si devuelve algo
let getDiscount = (price, percent) => {
    let discPer = price * percent / 100;
    return price - discPer;
};

console.log(getDiscount(150, 20)); // 120

let persons = [
    {
        name: 'Peter',
        age: '19'
    },
    {
        name: 'Mary',
        age: '26'
    },
    {
        name: 'John',
        age: '16'
    },
    {
        name: 'Allison',
        age: '35'
    },
    {
        name: 'Eva',
        age: '27'
    }
];

let names = persons
    .filter(p => p.age >= 18) // Filtra las personas (edad >= 18)
    .sort((p1, p2) => p2.age - p1.age) // Ordena por edad descendente
    .map(p => p.name); // Saca un array sólo con los nombres de las personas

console.log(names);

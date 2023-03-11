'use strict';

/****************************
 * REST y SPREAD
 ****************************/

function sum(...nums) { // REST (nums es un array con los parámetros recibidos)
    return nums.reduce((total,val) => total + val, 0); // Devolvemos la suma de valores
}

console.log(sum()); // 0
console.log(sum(12)); // 12
console.log(sum(12, 35, 7)); // 54
console.log(sum(12, 35, 6, 13, 5)); // 71

function showSubjects(name = "Nobody", ...subjects) { 
    console.log("Name: " + name);
    console.log("Subjects: " + (subjects.length?subjects.sort().join(" - "):"None"));
}

showSubjects();
showSubjects("Peter", "Programming", "Databases", "Web design");

let a = [12, 32, 54, 56];
console.log(a);
console.log(...a); // SPREAD

console.log(Math.max(a)); // NaN (Math.max no admite un array)
console.log(Math.max(...a)); // SPREAD -> Imprime 56 (parámetros por seaparado ok)

'use strict';

/****************************
 * Desestructuración de arrays (parte 2)
 ****************************/

let data = [['Peter', 'John'], [17, 32]];
let [[name1, name2], [age1, age2]] = data; // Desestructuración anidada
console.log(`${name1} tiene ${age1} años`);
console.log(`${name2} tiene ${age2} años`);

// Desestructuración en parámetros (se recibe un único parámetro -> array)
function sum3Nums([num1, num2, num3]) {
    return num1 + num2 + num3;
}

let nums = [34, 23, 54, 56, 76, 4, 6, 7, 8];
console.log(sum3Nums(nums)); // 34 + 23 + 54 = 111

/* Esto equivale a lo de arriba:
    function sum3Nums(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    let nums = [34, 23, 54, 56, 76, 4, 6, 7, 8];
    console.log(sum3Nums(...nums)); // 34 + 23 + 54 = 111 
*/

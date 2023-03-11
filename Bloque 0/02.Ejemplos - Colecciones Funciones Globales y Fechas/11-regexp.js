'use strict';

// 2 formas de crear la expresión regular más simple (letra "a")
let r = new RegExp("a","gi"); // gi -> búsqueda global y no sensible mayús/minús
let r2 = /a/gi;

console.log(r instanceof RegExp);
console.log(r2 instanceof RegExp);

console.log("-------------");

let str  = "34634R";
let str2 = "12345467T";
let regDni = /^\d{8}[a-z]$/i; // Expresión regular DNI

console.log(regDni.test(str)); // false, no es correcto
console.log(regDni.test(str2)); // true, DNI con formato correcto

console.log("------------");

let str3 = "I am amazed in America";
let reg = /am/gi;

// Comprobamos las veces que está la expresión "am"
console.log(reg.test(str3)); // true -> I "am"
console.log(reg.test(str3)); // true -> "am"azed
console.log(reg.test(str3)); // true -> "Am"erica
console.log(reg.test(str3)); // false

console.log("------------");

// Otra forma de localizar coincidencias
let match;
while(match = reg.exec(str3)) {
    console.log("Index: " + match["index"] 
        + ", Palabra: " + match[0]);
}

console.log("------------");

// Otra forma de obtener las coincidencias de la expresión
console.log(str3.match(reg));

console.log("------------");

// Reemplazamos las coincidencias (una vocal) por "X"
let reg2 = /[aeiou]/gi;
let str4 = str3.replace(reg2, "X");
console.log(str4); // X Xm XmXzXd Xn XmXrXcX

console.log("------------");

// Aplicamos una transformación a cada coincidencia -> mayúsculas
let str5 = str3.replace(reg2, match => match.toLocaleUpperCase());
console.log(str5); // I Am AmAzEd In AmErIcA
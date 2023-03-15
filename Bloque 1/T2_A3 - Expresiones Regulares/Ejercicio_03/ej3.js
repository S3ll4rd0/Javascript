'use strict';

// Ej 1 - Crear las expresiones regulares necesarias para resolver los siguientes puntos: 

let regex;

// • Valida si una cadena introducida es un número entero. 
console.log('---------- Cadena = número entero -------------')
function checkNumero(regex, text) {
    if (regex.test(String(text))) 
        { console.log(`OK  -> La expresión ${regex} es correcta: ${text}`); }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
}
regex = /^\d+[,.]?\d*$/;

checkNumero(regex, 2)
checkNumero(regex, 20)
checkNumero(regex, 2.12)
checkNumero(regex, 21.5)
checkNumero(regex, 400.5)
checkNumero(regex, 2.432)
checkNumero(regex, '2')
checkNumero(regex, '2.12')
checkNumero(regex, '122.12345')
checkNumero(regex, 'A')
checkNumero(regex, 'A.A')
checkNumero(regex, '1.A')

console.log('-----------------------------------------------')

// • Validar DNI, 8 números y una letra al final. 
console.log('---------- DNI = 8 números y una letra final -------------')
function checkDNI(regex, text) {
    if (regex.test(String(text))) { 
        console.log(`OK  -> La expresión ${regex} es correcta: ${text}`); 
        if (text.charAt(text.length -1) === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(String(text).substring(0, 8)) % 23)) {
            console.log(`OK  -> La letra ${text.charAt(text.length -1)} corresponde al DNI: ${String(text).substring(0, 8)}`); 
        } else { 
            console.log(`BAD -> Pero la letra ${text.charAt(text.length -1)} no corresponde al DNI: ${String(text).substring(0, 8)}`); 
            console.log(`BAD -> Por lo tanto, es un código de DNI inválido, intentelo de nuevo`); 
        }
    } else { 
        console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); 
    }  
}
regex = /^\d{8}[A-Z]{1}$/;

checkDNI(regex, '54797723Q')
checkDNI(regex, '48679042W')
checkDNI(regex, '48679042J')
checkDNI(regex, '48679142W')
checkDNI(regex, '486790W')
checkDNI(regex, '4867904212J')
checkDNI(regex, '4867914AW')
checkDNI(regex, '4867904212JW')
checkDNI(regex, 'Q8679042J')
checkDNI(regex, 'X86791427')

console.log('-----------------------------------------------')

// • Validar una matrícula de un coche con formato 0000XXX 
console.log('---------- Matricula = formato 0000XXX -------------')
function checkMatricula(regex, text) {
    if (regex.test(String(text))) 
        { console.log(`OK  -> La expresión ${regex} es correcta: ${text}`); }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
}
regex = /^[0-9]{4}[A-Z]{3}$/;

checkMatricula(regex, '3080FCP')
checkMatricula(regex, '1234ABC')
checkMatricula(regex, '5525XYA')
checkMatricula(regex, '123ABC')
checkMatricula(regex, '12345ABC')
checkMatricula(regex, '123ABCD')
checkMatricula(regex, '12345AB')
checkMatricula(regex, '1234abc')
checkMatricula(regex, '1234AbC')
checkMatricula(regex, 'ABCD123')

console.log('-----------------------------------------------')

// • Valida nombre de usuario en twitter, debe de empezar por @ y puede 
// contener, números, letras mayúsculas y minúsculas, “-“ y “_”. 
console.log('---------- Cadena = usuario twitter -------------')
function checkTwitter(regex, text) {
    if (regex.test(String(text))) 
        { console.log(`OK  -> La expresión ${regex} es correcta: ${text}`); }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
}
regex = /^[@][\w-_]+$/;

checkTwitter(regex, '@sellardo')
checkTwitter(regex, '@tu_tia')
checkTwitter(regex, '@el-nabo')
checkTwitter(regex, '@a97_cruzcampo')
checkTwitter(regex, '@TwitUs3r')
checkTwitter(regex, 'sellardo')
checkTwitter(regex, '@@tu_tia')
checkTwitter(regex, '@el-nabo@')
checkTwitter(regex, '@a97.cruzcampo')
checkTwitter(regex, '@Tw:tUs3r')

console.log('-----------------------------------------------')

// • Crear una expresión regular que valide una fecha en formato "XX/XX/XXXX", 
// donde cada "X" es un dígito. Se puede probar con expresiones tipo: "El día  
// 29/11/2019 tenemos examen.". 
console.log('---------- Fecha = formato "XX/XX/XXXX" -------------')
function checkFecha(regex, text) {
    if (regex.test(String(text))) {
        console.log(`OK  -> La expresión ${regex} es correcta: ${text}`);
        console.log(`OK  -> La coincidencia está en [${text.match(regex)}]`);
    }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
}
regex = /\d{1,2}\/\d{1,2}\/\d{4}/g;

checkFecha(regex, 'El día 29/11/2019 tenemos examen.')
checkFecha(regex, 'Nos casamos el 18/02/1985')
checkFecha(regex, 'Yo soy nacido el 30/10/91')
checkFecha(regex, 'Empezaré a entrenar en casa el 1/1/2024')
checkFecha(regex, 'Para eso iré a Decathlon el 1/12/2023')
checkFecha(regex, 'Y si llegado el 31/1/2024 sigo sin mover el culo')
checkFecha(regex, 'El 01/2/2024 abandono, el 2/02/2024 doy de baja el gym y para el 3/2/2024 compro un sofá nuevo')

console.log('-----------------------------------------------')


// • Crear una expresión regular para la validación de direcciones de correo 
// electrónico. Para simplificar, los valores anteriores a @ pueden contener 
// cualquier carácter alfanumérico, y los caracteres “.” y “-”, mientras que los 
// valores después de la @ pueden contener caracteres alfanuméricos, y el tipo 
// de dominio tendrá una longitud de 2 o 3 caracteres. 
console.log('---------- Cadena = número entero -------------')
regex = /\d+[,.]?\d*/;

checkRegex(regex, 2)
checkRegex(regex, 20)
checkRegex(regex, 2.12)
checkRegex(regex, 21.5)
checkRegex(regex, 400.5)
checkRegex(regex, 2.432)
checkRegex(regex, '2')
checkRegex(regex, '2.12')
checkRegex(regex, '122.12345')
checkRegex(regex, 'A')

console.log('-----------------------------------------------')


// • Crear una expresión regular que elimine las etiquetas potencialmente 
// peligrosas (<script>...</script>) y todo su contenido de una cadena HTML. 
console.log('---------- Cadena = número entero -------------')
regex = /\d+[,.]?\d*/;

checkRegex(regex, 2)
checkRegex(regex, 20)
checkRegex(regex, 2.12)
checkRegex(regex, 21.5)
checkRegex(regex, 400.5)
checkRegex(regex, 2.432)
checkRegex(regex, '2')
checkRegex(regex, '2.12')
checkRegex(regex, '122.12345')
checkRegex(regex, 'A')

console.log('-----------------------------------------------')


// • Crea una expresión regular que dado un número de cuenta IBAN en formato 
// ESXXXXXXXXXXXXXXXXXXXXXX nos lo devuelva en porciones de 4 
// dígitos separado por un “-“.  
console.log('---------- Cadena = número entero -------------')
regex = /\d+[,.]?\d*/;

checkRegex(regex, 2)
checkRegex(regex, 20)
checkRegex(regex, 2.12)
checkRegex(regex, 21.5)
checkRegex(regex, 400.5)
checkRegex(regex, 2.432)
checkRegex(regex, '2')
checkRegex(regex, '2.12')
checkRegex(regex, '122.12345')
checkRegex(regex, 'A')

console.log('-----------------------------------------------')


// Ej 2 – Genera dos ejercicios donde te parezca interesante el uso de expresiones regulares. 

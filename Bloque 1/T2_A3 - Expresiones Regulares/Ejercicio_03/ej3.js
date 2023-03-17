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
    console.log();
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
    console.log();
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
    console.log();
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
    console.log();
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
    console.log();
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
console.log('---------- Cadena = correo electrónico -------------')
function checkEmail(regex, text) {
    if (regex.test(String(text))) {
        console.log(`OK  -> La expresión ${regex} es correcta: ${text}`);
    }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
    console.log();
}
regex = /^[\w.-]*\@[a-z]*.[a-z]{2,3}$/;

checkEmail(regex, 'tonet.sellardo@gmail.com')
checkEmail(regex, 'tonet_12@hotmail.com')
checkEmail(regex, 'foo_33@demo.net')
checkEmail(regex, 'bar-ba@test.co')
checkEmail(regex, 'bar.ba@test.co.uk')
checkEmail(regex, 'tonet.sella@gm41l.com')

console.log('-----------------------------------------------')


// • Crear una expresión regular que elimine las etiquetas potencialmente 
// peligrosas (<script>...</script>) y todo su contenido de una cadena HTML. 
console.log('---------- Cadena = etiquetas html -------------')
function checkHTML(regex, text) {
    if (regex.test(String(text))) {
        console.log(`OK  -> La expresión ${regex} es correcta: ${text}`);
        console.log(`OK  -> La coincidencia está en [${text.match(regex)}]`);
        console.log(`OK  -> Es resultado final controlado sería: [${text.replace(text.match(regex), '')}]`);
    }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}, el texto no incluye esa etiqueta`); }  
    console.log();
}
regex = /<script>[a-zA-Z0-9 .-_"'`{}()<>=:*/%]*<\/script>/g;

checkHTML(regex, '<script>...</script>')
checkHTML(regex, '<script>function popup() {alert("Hola gente")}</script>')
checkHTML(regex, '<h1>Esto es un título</h1>')
checkHTML(regex, '<h1><script>...</script></h1>')
checkHTML(regex, '<div>Aqui hay texto <script>function </script> </div>')
checkHTML(regex, '<div>Aqui hay texto<script>function popup() {alert("Hola gente")}</script></div>')
checkHTML(regex, '<div>Aqui hay texto<script>function popup() {alert("Hola gente")}<script></div>')
checkHTML(regex, '<div>Aqui hay texto<script>function popup() {alert("Hola gente")}</div>')

console.log('-----------------------------------------------')


// • Crea una expresión regular que dado un número de cuenta IBAN en formato 
// ESXXXXXXXXXXXXXXXXXXXXXX nos lo devuelva en porciones de 4 
// dígitos separado por un “-“.  
console.log('---------- Cadena = cuenta IBAN -------------')
function checkIBAN(regex, text) {
    if (regex.test(String(text))) {
        console.log(`OK  -> La expresión ${regex} es correcta: ${text}`);
        let iban = ''
        for (let i = 1, j = 1; i <= text.length; i++) {
            iban += text.charAt(i-1);
            if (i === (4 * j) && i !== text.length) { j++; iban += '-'; }
        }
        console.log(`La expresión correcta del IBAN de la cuenta sería: [${iban}]`);
    }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
    console.log();
}
regex = /^ES[0-9]{22}$/;

checkIBAN(regex, 'ES1212341234123412341234')
checkIBAN(regex, 'ES1212345678901234567890')
checkIBAN(regex, 'ESXXXXXXXXXXXXXXXXXXXXXX')
checkIBAN(regex, 'AS1212341234123412341234')
checkIBAN(regex, 'ES121234123412341234123456')
checkIBAN(regex, 'ES12123412341234123412')
checkIBAN(regex, 'ESJK12341234123412341234')

console.log('-----------------------------------------------')


// Ej 2 – Genera dos ejercicios donde te parezca interesante el uso de expresiones regulares. 
console.log('---------- Cadena = Teléfono movil -------------')
function checkMobil(regex, text) {
    if (regex.test(String(text))) {
        console.log(`OK  -> La expresión ${regex} es correcta: ${text}`);
    }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
    console.log();
}
// regex = /^[+]?[3]?[4]?[6-7][0-9]{2}[.-]?[0-9]{2,3}[.-]?[0-9]{2,3}[.-]?[0-9]?[0-9]?/;
regex = /^[+]?[3]?[4]?[6-7]{1}[0-9]{2}[.-]?[0-9]{2}[.-]?[0-9][.-]?[0-9][.-]?[0-9]{2}$/;

checkMobil(regex, '638533882')
checkMobil(regex, '738533882')
checkMobil(regex, '638.533.882')
checkMobil(regex, '638-533-882')
checkMobil(regex, '638.53.38.82')
checkMobil(regex, '738.533.882')
checkMobil(regex, '738-533-882')
checkMobil(regex, '738.53.38.82')
checkMobil(regex, '638 533 882')
checkMobil(regex, '738 533 882')
checkMobil(regex, '838533882')
checkMobil(regex, '+34638533882')
checkMobil(regex, '+44638533882')
checkMobil(regex, '+34838533882')
checkMobil(regex, '6385338827')
checkMobil(regex, '63853388')

console.log('-----------------------------------------------')

console.log('---------- Cadena = URL WEB -------------')
function checkURL(regex, text) {
    if (regex.test(String(text))) {
        console.log(`OK  -> La expresión ${regex} es correcta: ${text}`);
    }
    else 
        { console.log(`BAD -> La expresión ${regex} es incorrecta: ${text}`); }  
    console.log();
}
regex = /^(http[s]?:[\/]{2})?([w]*\.)?[a-z-_\.]*[\.][a-z]{2,3}([\/][.?a-zA-Z0-9\/=_-]*)?$/;

checkURL(regex, 'http://foo.co.uk/')
checkURL(regex, 'www.demo.com')
checkURL(regex, 'http://www.github.com')
checkURL(regex, 'https://github.com')
checkURL(regex, 'https://marketplace.visualstudio.com/items?itemName=chrmarti.regex')
checkURL(regex, 'https://github.com/chrmarti/vscode-regex')
checkURL(regex, 'httpj://github.com/chrmarti/vscode-regex')
checkURL(regex, 'https://github.coma')
checkURL(regex, 'foo_33@demo.net')
checkURL(regex, 'bar-ba@test.co')
checkURL(regex, 'https://git hub.com')

console.log('-----------------------------------------------')

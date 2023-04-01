"use strict";

let nombre, valor, caducidad, data, expires, show = false;

function loadCookie() {
    nombre = prompt(`Indique el nombre para la cookie`);
    while (nombre === "" || nombre === undefined || nombre === null)
        nombre = prompt(`Por favor, no deje el campo vacío, indique el nombre para la cookie`);
    
    valor = prompt(`Indique el valor para la cookie`);
    while ((valor === "" || valor === undefined || valor === null) || (typeof Number(valor) !== "number" || Number.isNaN(Number(valor))))
        if (typeof Number(valor) !== "number" || Number.isNaN(Number(valor)))
            valor = prompt(`Por favor, revise el valor, introduzca un valor numérico para la cookie`);
        else if (valor === "" || valor === undefined || valor === null)
            valor = prompt(`Por favor, no deje el campo vacío, indique el valor para la cookie`);

    caducidad = prompt(`Indique la caducidad en segundos para comprobar la caducidad de la cookie`);
    while ((caducidad === "" || caducidad === undefined || caducidad === null) || (typeof Number(caducidad) !== "number" || Number.isNaN(Number(caducidad))))
        if (typeof Number(caducidad) !== "number" || Number.isNaN(Number(caducidad)))
            caducidad = prompt(`Por favor, revise la caducidad, introduzca un valor numérico de segundos para la cookie`);
        else if (caducidad === "" || caducidad === undefined || caducidad === null)
            caducidad = prompt(`Por favor, no deje el campo vacío, indique la caducidad para la cookie`);

    console.log(`${nombre}=${valor};max-age=${Number(caducidad)}`);
    document.cookie=`${nombre}=${valor};max-age=${Number(caducidad)}`;
}

function checkCookie() {
    data = new Date();
    let exists = false;
    let cookies = document.cookie;
    let cookies_array = cookies.split(";")
    cookies_array.forEach(cookie => {
        if (cookie.includes(nombre)) {
            console.log("[" + data + "]: La cookie " + nombre + " sigue activa");
            exists = true;
        }
    })
    if (!exists && !show) {
        console.log("[" + data + "]: La cookie ya ha expirado")
        alert("Ha expirado su cookie")
        show = true
    } 
}

window.setInterval(checkCookie, 3000);
"use strict";

const lista = document.getElementById("lista");
let listado;
let array_cookies;

function anadir() {
    let flag = true
    while (flag) {
        let num = prompt("¿Cuantas cookies desea crear?");

        if (typeof Number(num) === "number" && !Number.isNaN(Number(num))) {
            flag = false;

            for (let i = 0; i < Number(num); i++) {
                let nombre = prompt(`Indique el nombre para la cookie nº ${i+1}`);
                while (nombre === "" || nombre === undefined || nombre === null)
                    nombre = prompt(`Por favor, no deje el campo vacío, indique el nombre para la cookie nº ${i+1}`);

                let valor = prompt(`Indique el valor para la cookie nº ${i+1}`);
                while ((valor === "" || valor === undefined || valor === null) || (typeof Number(valor) !== "number" || Number.isNaN(Number(valor))))
                    if (typeof Number(valor) !== "number" || Number.isNaN(Number(valor)))
                        valor = prompt(`Por favor, revise el valor, introduzca un valor numérico para la cookie nº ${i+1}`);

                    else if (valor === "" || valor === undefined || valor === null)
                        valor = prompt(`Por favor, no deje el campo vacío, indique el valor para la cookie nº ${i+1}`);

                let caducidad = prompt(`Indique la caducidad en formato "DD-MM-AAAA" para la cookie nº ${i+1}`);
                let data = new Date(`${caducidad.substring(6,10)}-${caducidad.substring(3,5)}-${caducidad.substring(0,2)}`)
                let now = new Date()
                while ((caducidad === "" || caducidad === undefined || caducidad === null) || !(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](2023)$/.test(caducidad)) || data < now) {
                    if (caducidad === "" || caducidad === undefined || caducidad === null)
                        caducidad = prompt(`Por favor, no deje el campo vacío, indique la caducidad para la cookie nº ${i+1}`);

                    else if (!(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](202)\d$/.test(caducidad)))
                        caducidad = prompt(`Por favor, revise el formato en "DD-MM-AAAA" o los valores introducidos para la fecha para la cookie nº ${i+1}`);

                    else if (data < now)
                        caducidad = prompt(`Por favor, revise la fecha, si es menor a la fecha actual, no se creará la cookie, la fecha debe ser posterior a hoy para la cookie nº ${i+1}`);
                        data = new Date(`${caducidad.substring(6,10)}-${caducidad.substring(3,5)}-${caducidad.substring(0,2)}`)
                        now = new Date()
                }

                document.cookie=`${nombre}=${valor};expires=${data}`;
            }
            return;
        }
        else
            alert("Por favor, revise el número que introduce");
    }    
}

function consultar() {
    removeCookies()
    array_cookies = document.cookie.split(";");
    array_cookies.forEach(element => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(element))
        document.getElementById("lista").appendChild(li)
    });
}

function removeCookies() {
    listado = document.getElementsByTagName("li")
    for (let i = listado.length; i > 0; i--) {
        listado[0].remove()
    }
}

function modificar() {
    let existe = false;

    let nombre = prompt(`Indique el nombre de la cookie que desea modificar`);
    while (nombre === "" || nombre === undefined || nombre === null)
        nombre = prompt(`Por favor, no deje el campo vacío, indique el nombre de la cookie que desea modificar`);

    array_cookies = document.cookie.split(";");

    array_cookies.forEach(element => {
        let cookie = element.split("=")
        if (cookie[0] == nombre) {
            existe = true;

            let valor = prompt(`Indique el valor para la cookie`);
            while ((valor === "" || valor === undefined || valor === null) || (typeof Number(valor) !== "number" || Number.isNaN(Number(valor))))
                if (typeof Number(valor) !== "number" || Number.isNaN(Number(valor)))
                    valor = prompt(`Por favor, revise el valor, introduzca un valor numérico para la cookie`);

                else if (valor === "" || valor === undefined || valor === null)
                    valor = prompt(`Por favor, no deje el campo vacío, indique el valor para la cookie`);
        
            let caducidad = prompt(`Indique la caducidad en formato "DD-MM-AAAA" para la cookie`);
            let data = new Date(`${caducidad.substring(6,10)}-${caducidad.substring(3,5)}-${caducidad.substring(0,2)}`)
            let now = new Date()
            while ((caducidad === "" || caducidad === undefined || caducidad === null) || !(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](2023)$/.test(caducidad)) || data < now) {
                if (caducidad === "" || caducidad === undefined || caducidad === null)
                    caducidad = prompt(`Por favor, no deje el campo vacío, indique la caducidad para la cookie`);

                else if (!(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](202)\d$/.test(caducidad)))
                    caducidad = prompt(`Por favor, revise el formato en "DD-MM-AAAA" o los valores introducidos para la fecha para la cookie`);

                else if (data < now)
                    caducidad = prompt(`Por favor, revise la fecha, si es menor a la fecha actual, no se creará la cookie, la fecha debe ser posterior a hoy para la cookie`);
                    data = new Date(`${caducidad.substring(6,10)}-${caducidad.substring(3,5)}-${caducidad.substring(0,2)}`)
                    now = new Date()
            }
        
            console.log(`${nombre.trim()}=${valor};expires=${data}`);
            document.cookie=`${nombre.trim()}=${valor};expires=${data}`;
        }
    });
    if (!existe)
        alert("La cookie que ha indicado no coindice con ninguna que esté almacenada, revise el nombre o creela primero.")
}

function borrar() {
    let existe = false;

    let nombre = prompt(`Indique el nombre de la cookie que desea borrar`);
    while (nombre === "" || nombre === undefined || nombre === null)
        nombre = prompt(`Por favor, no deje el campo vacío, indique el nombre de la cookie que desea borrar`);

    array_cookies = document.cookie.split(";");

    array_cookies.forEach(element => {
        console.log(element);
        let cookie = element.split("=")
        console.log(cookie[0].trimStart());
        if (cookie[0].trimStart() == nombre) {
            existe = true;
            document.cookie = `${cookie[0].trimStart()}=${cookie[1]};max-age=0`;
        };
    });
    if (!existe)
        alert("La cookie que ha indicado no coindice con ninguna que esté almacenada, revise el nombre o creela primero.")
}

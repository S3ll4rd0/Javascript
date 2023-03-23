"use strict";
let index = document.getElementsByTagName("li").length;

function añadir() {
    // index++;
    let text = prompt("Introduzca el texto que desea añadir");
    if (text != null && text != '') {
        let li = document.createElement("li");
        li.innerHTML = text;
        document.getElementById('lista').appendChild(li);
    } else {
        alert("No se puede introducir un texto vacío, reviselo e inténtelo de nuevo.");
    }
}

function eliminar() {
    let lista = document.getElementsByTagName("li");
    if (lista.length > 1) {
        index--;
        let node = lista[lista.length - 1];
        document.getElementById('lista').removeChild(node);
    } else {
        alert('La lista no puede contener menos de un elemento');
    }
}
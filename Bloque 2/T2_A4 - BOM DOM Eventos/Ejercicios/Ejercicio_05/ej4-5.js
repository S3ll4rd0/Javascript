"use strict";

let size1 = 1, size2 = 1, size3 = 1;

function obtenerParrafo() {
    const input = document.getElementById("parrafo").value;
    const parrafo = document.getElementById(input);
    return parrafo;
}

function agrandar() {
    const parrafo = obtenerParrafo();
    if (document.getElementById("parrafo").value == 'parrafo1') {
        if (size1 < 2) {
            let value = parrafo.style.fontSize;
            size1 = Number(value.replace("em", "")) + 0.05;
            parrafo.style.fontSize = String(size1) + 'em';
        } else {
            alert('Ha excedido el máximo que puede aumentar este parrafo');
        }
    } else if (document.getElementById("parrafo").value == 'parrafo2') {
        if (size2 < 2) {
            let value = parrafo.style.fontSize;
            size2 = Number(value.replace("em", "")) + 0.05;
            parrafo.style.fontSize = String(size2) + 'em';
        } else {
            alert('Ha excedido el máximo que puede aumentar este parrafo');
        }
    } else if (document.getElementById("parrafo").value == 'parrafo3') {
        if (size3 < 2) {
            let value = parrafo.style.fontSize;
            size3 = Number(value.replace("em", "")) + 0.05;
            parrafo.style.fontSize = String(size3) + 'em';
        } else {
            alert('Ha excedido el máximo que puede aumentar este parrafo');
        }
    } else {
        alert('Ha introducido un valor erroneo, no existe ese parrafo');
    }
}

function reducir() {
    const parrafo = obtenerParrafo();
    if (document.getElementById("parrafo").value == 'parrafo1') {
        if (size1 > 0.9) {
            let value = parrafo.style.fontSize;
            size1 = Number(value.replace("em", "")) - 0.05;
            parrafo.style.fontSize = String(size1) + 'em';
        } else {
            alert('Ha excedido el mínimo que puede reducir este parrafo');
        }
    } else if (document.getElementById("parrafo").value == 'parrafo2') {
        if (size2 > 0.9) {
            let value = parrafo.style.fontSize;
            size2 = Number(value.replace("em", "")) - 0.05;
            parrafo.style.fontSize = String(size2) + 'em';
        } else {
            alert('Ha excedido el mínimo que puede reducir este parrafo');
        }
    } else if (document.getElementById("parrafo").value == 'parrafo3') {
        if (size3 > 0.9) {
            let value = parrafo.style.fontSize;
            size3 = Number(value.replace("em", "")) - 0.05;
            parrafo.style.fontSize = String(size3) + 'em';
        } else {
            alert('Ha excedido el mínimo que puede reducir este parrafo');
        }
    } else {
        alert('Ha introducido un valor erroneo, no existe ese parrafo');
    }
}

function original() {
    const parrafo = obtenerParrafo();
    parrafo.style.fontSize = '1em';
}

function originalSizes() {
    let parrafo = document.getElementById("parrafo1");
    parrafo.style.fontSize = '1em';
    parrafo = document.getElementById("parrafo2");
    parrafo.style.fontSize = '1em';
    parrafo = document.getElementById("parrafo3");
    parrafo.style.fontSize = '1em';
}
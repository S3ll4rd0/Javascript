"use strict";

const pares = document.getElementsByClassName('parP');
const impares = document.getElementsByClassName('imparP');

function buttonClick() {
    for (let i = 0; i < pares.length; i++) {
        pares[i].style.backgroundColor = "orange";
    }
    for (let i = 0; i < impares.length; i++) {
        impares[i].style.backgroundColor = "lightgreen";
    }
}

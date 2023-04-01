"use strict";

let ciclos, ciclos_toString;

function loadJson() {
    ciclos = {
        "SMR":"SMR - Sistemas Microinformáticos y Redes",
        "ASIR":"ASIR - Administración de Sistemas Informáticos y Redes",
        "DAW":"DAW - Desarrollo de Aplicaciones Web",
        "DAM":"DAM - Desarrollo de Aplicaciones Multiplataforma"
    }
    ciclos_toString = JSON.stringify(ciclos);
    localStorage.setItem("ciclos", ciclos_toString)
}

function cargarCiclos() {
    let ciclos_toString = localStorage.getItem("ciclos");
    ciclos = JSON.parse(ciclos_toString)
    let ol = document.createElement("ol")

    let li_SMR = document.createElement("li")
    li_SMR.innerText = ciclos.SMR
    ol.appendChild(li_SMR)

    let li_ASIR = document.createElement("li")
    li_ASIR.innerText = ciclos.ASIR
    ol.appendChild(li_ASIR)

    let li_DAW = document.createElement("li")
    li_DAW.innerText = ciclos.DAW
    ol.appendChild(li_DAW)

    let li_DAM = document.createElement("li")
    li_DAM.innerText = ciclos.DAM
    ol.appendChild(li_DAM)

    document.getElementById("lista").appendChild(ol)
}

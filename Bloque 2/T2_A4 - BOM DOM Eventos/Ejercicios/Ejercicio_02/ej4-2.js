"use strict";

const titulo = document.getElementById("title");
const subtitulo = document.getElementById("subtitle");
const parrafo1 = document.getElementById("firstP");
const parrafo2 = document.getElementById("secondP");
const parrafo3 = document.getElementById("thirdP");

titulo.onmouseover = function(){
    titulo.style.backgroundColor = "lightgreen";
    titulo.style.color = "red";
};

titulo.onmouseleave = function(){
    titulo.style.backgroundColor = "white";
    titulo.style.color = "black";
};

subtitulo.onmouseover = function(){
    subtitulo.style.backgroundColor = "orange";
    subtitulo.style.color = "yellow";
};

subtitulo.onmouseleave = function(){
    subtitulo.style.backgroundColor = "white";
    subtitulo.style.color = "black";
};

parrafo1.onmouseover = function(){
    parrafo1.style.backgroundColor = "wheat";
    parrafo1.style.color = "green";
};

parrafo1.onmouseleave = function(){
    parrafo1.style.backgroundColor = "white";
    parrafo1.style.color = "black";
};

parrafo2.onmouseover = function(){
    parrafo2.style.backgroundColor = "grey";
    parrafo2.style.color = "cyan";
};

parrafo2.onmouseleave = function(){
    parrafo2.style.backgroundColor = "white";
    parrafo2.style.color = "black";
};

parrafo3.onmouseover = function(){
    parrafo3.style.backgroundColor = "pink";
    parrafo3.style.color = "blue";
};

parrafo3.onmouseleave = function(){
    parrafo3.style.backgroundColor = "white";
    parrafo3.style.color = "black";
};
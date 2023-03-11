'use strict';

document.addEventListener('DOMContentLoaded', e => {
    let form = document.getElementById("formItems");
    let ul = document.getElementById("items");
    form.addEventListener("submit", e => {
        e.preventDefault();
        let li = document.createElement("li");
        li.innerText = form.item.value;
        let span = document.createElement("span");
        span.innerText = "X";
        span.style.marginLeft = "10px";
        span.style.color = "red";
        span.style.cursor = "pointer";
        li.appendChild(span);

        // Cuando hagamos click en la "X" borramos el elemento de la lista
        span.addEventListener("click", e => li.remove());
        // Añadimos el elemento a la lista
        ul.appendChild(li);
        form.reset();
    });
});
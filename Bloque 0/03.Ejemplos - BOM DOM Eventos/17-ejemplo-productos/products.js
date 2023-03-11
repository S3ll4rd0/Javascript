"use strict";

let imagePreview = null;
let productForm = null;
let tableProducts = null;

function convertBase64(file) {
    let reader = new FileReader();

    if (file) { // Archivo seleccionado (convertir a Base64)
        reader.readAsDataURL(file);
    }

    reader.addEventListener("load", () => { //Evento (se ha terminado la conversión a base64)
        imagePreview.src = reader.result;
    });
}

function addProduct(e) {
    e.preventDefault();
    let name = productForm.name.value;
    let desc = productForm.description.value;
    let photo = imagePreview.src;

    let tr = document.createElement("tr");
    let tdPhoto = document.createElement("td");
    let img = document.createElement("img");
    img.src = photo;
    tdPhoto.appendChild(img);
    tr.appendChild(tdPhoto);

    let tdName = document.createElement("td");
    tdName.innerText = name;
    tr.appendChild(tdName);

    let tdDesc = document.createElement("td");
    tdDesc.innerText = desc;
    tr.appendChild(tdDesc);

    let tdDelete = document.createElement("td");
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.innerText = "Delete";
    // Click en el botón de borrar -> eliminamos la fila
    btnDelete.addEventListener("click", e => tr.remove());
    tdDelete.appendChild(btnDelete);
    tr.appendChild(tdDelete);

    // Añadimos la fila a la tabla
    tableProducts.querySelector("tbody").appendChild(tr);
    productForm.reset(); // Limpiamos el formulario
    imagePreview.src = ""; // Quitamos la imagen
}

document.addEventListener("DOMContentLoaded", e => {
    imagePreview = document.getElementById("imagePreview");
    productForm = document.getElementById("addProduct");
    tableProducts = document.getElementById("products");

    productForm.photo.addEventListener("change", e => {
        convertBase64(productForm.photo.files[0]);
    });

    productForm.addEventListener("submit", addProduct);
});

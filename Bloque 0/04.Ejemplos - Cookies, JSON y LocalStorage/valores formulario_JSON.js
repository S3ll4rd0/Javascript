'use strict';

let form = null;
let array_datos = [];
document.addEventListener('DOMContentLoaded', e => {
    form = document.getElementById('formulario');
    form.addEventListener('submit', envioForm);
});

function envioForm(e) {
    let dato = [];
    e.preventDefault();
    const aficiones = Array.from(form.aficiones)
        .filter(input => input.checked)
        .map(input => input.value);
        
    document.getElementById('envio').textContent = `Nombre: ${form.nombre.value},
    Aficiones: ${aficiones}, Color: ${form.color.value}`;
    dato.push(form.nombre.value,aficiones,form.color.value);
    array_datos.push(dato);
    console.log(array_datos);
    let datos_string = JSON.stringify(array_datos);
    console.log(datos_string);
    console.log(JSON.parse(datos_string));
    if(formulario.fichero.files.length) { // Si hemos seleccionado un archivo
        const fichero = formulario.fichero.files[0];
        document.getElementById('envioArchivo').textContent = `Archivo: ${fichero.name},
        tipo: ${fichero.type}, tamaño: ${fichero.size}bytes`;

        if(fichero.type.startsWith('image')) {
            cargaImagen(fichero);
        }
    }

}

function cargaImagen(fichero) {
    let reader = new FileReader();
    reader.readAsDataURL(fichero);

    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
    });
}

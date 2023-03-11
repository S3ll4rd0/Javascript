'use strict'

let datos;
let btn_cargar = document.getElementById("boton_c");
let btn_modifica = document.getElementById("boton_m");
let btn_guardar = document.getElementById("boton_g");

btn_cargar.addEventListener('click', inicia);
btn_modifica.addEventListener('click',modifica);
btn_guardar.addEventListener('click',guarda);


function inicia(){
   let ajax=new XMLHttpRequest();
   ajax.onreadystatechange = function () {
    console.log("ReadyState "+this.readyState+" Status "+this.status);
        // Si todo esta bien
        if (this.readyState == 4 && this.status == 200) {
            // Parseo la informacion
            datos = JSON.parse(this.response);  
            
            alert("Archivo JSON cargado" + " Nombre:"+ datos.name); 
            console.log("Datos recibidos servidor: "+ this.response);
            console.log ("Datos parseados: ");
            console.log(datos);
            console.log("_______________________");                
        }
    }
    ajax.open("GET","documento2.json",true);
   ajax.send();
   }

function modifica(){
datos.name = prompt("Introduce el nombre");
datos.age = prompt("Introduce la edad");
datos.city = prompt("Introduce la población");

console.log ("Datos modificados y no guardados: ");
console.log(datos);
console.log("_______________________");   

}

function guarda(){

var str = JSON.stringify(datos);
let ajax2=new XMLHttpRequest();

ajax2.onreadystatechange = function () {
        // Si todo esta bien
         console.log("ReadyState "+this.readyState+" Status "+this.status);
        if (this.readyState == 4 && this.status == 200) {
           //readyState=4 - done – la operación ha terminado
           //status=200 - Todo OK
                 
            alert ("Archivo guardado "+str);
            console.log("Datos guardados en el servidor: "+ str);
            console.log("_______________________");  
        }
    }

    ajax2.open("POST", "post.php", true);
    ajax2.setRequestHeader("Content-type", "application/json");
    ajax2.send(str);



}




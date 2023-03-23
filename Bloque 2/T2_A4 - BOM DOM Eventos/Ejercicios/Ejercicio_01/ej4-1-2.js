"use strict";

// Ej01 - Debes de mostrar que es lo que está mal al lado del input, no en el alert. 
// No compruebas la fecha del DNI. 
// No comprubeas las fechas incorrectas (se puede introducir 55-55-5252 por ejemplo). 
// Dejas introducir letras en el teléfono. 
// No comprubeas el formato del e-mail. 
// No compruebas que las contraseñas cumplan con el formato correcto. 

let datos = '';
let errores = '';
let contraseña = '';
let contraseñaRep = '';

function prueba() {
    const nombre = document.getElementById('nombreE')
    nombre.innerText = "Hola";
}

function send() {
    checkNombre();
    checkDireccion();
    checkDNI();
    checkFechaNac();
    checkCodPostal();
    checkPais();
    checkGenero();
    checkPreferencias();
    checkNumTelefono();
    checkEmail();
    checkPassword();
    checkPasswordAgain();
    if (errores != '') {
        alert(errores);
        errores = '';
        datos = '';
    } else {
        alert(datos);
        errores = '';
        datos = '';
        borrar();
    }
}

function borrar() {
    const nombre = document.getElementById('nombre').value = "";
    const direccion = document.getElementById('direccion').value = "";
    const dni = document.getElementById('dni').value = "";
    const fechaNac = document.getElementById('fecha').value = "";
    const CodPostal = document.getElementById('CP').value = "";
    const gender = document.getElementsByName('gender');
    const color = document.getElementsByName('color');
    for (let i = 0; i < 3; i++) {
        gender[i].checked = false;
        color[i].checked = false;
    }
    const phone = document.getElementById('phone').value = "";
    const email = document.getElementById('email').value = "";
    const pass = document.getElementById('pass').value = "";
    const password = document.getElementById('password').value = "";
}

function checkNombre() {
    const nombreP = document.getElementById('nombreP');
    const nombre = document.getElementById('nombre').value;
    if (nombre === "") {
        nombreP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Nombre\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else {
        nombreP.style.backgroundColor = "white";
        datos += 'Nombre: ' + nombre + '\n';
    }
}

function checkDireccion() {
    const direccionP = document.getElementById('direccionP');
    const direccion = document.getElementById('direccion').value;
    if (direccion === "") {
        direccionP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Dirección\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else {
        direccionP.style.backgroundColor = "white";
        datos += 'Dirección: ' + direccion + '\n';
    }
}

function checkDNI() {
    const dniP = document.getElementById('dniP');
    const dni = document.getElementById('dni').value;
    const regExDNI = /^[0-9]{5,8}[A-Z]$/; 
    if (dni === "") {
        dniP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'DNI\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else if (!regExDNI.test(dni) == true) {
        dniP.style.backgroundColor = "red";
        errores += 'El campo \'DNI\' tiene un formato incorrecto. Reviselo de nuevo.\n';
    } else {
        dniP.style.backgroundColor = "white";
        datos += 'DNI: ' + dni + '\n';
    }
}

function checkFechaNac() {
    const fechaNacP = document.getElementById('fechaP');
    const fechaNac = document.getElementById('fecha').value;
    let xMonth = fechaNac.substring(3, 5);  
    let xDay = fechaNac.substring(0, 2);  
    let xYear = fechaNac.substring(6,10); 
    let birthday = Date.parse(xMonth + '/' + xDay + '/' + xYear);
    let today = new Date();
    let regExFechaNac = /^\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}$/;
    
    if (fechaNac === "") {
        fechaNacP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Fecha de nacimiento\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else if (!regExFechaNac.test(fechaNac)) {
        fechaNacP.style.backgroundColor = "red";
        errores += 'El campo \'Fecha de nacimiento\' tiene un formato incorrecto. Reviselo de nuevo.\n';
    } else if (today < birthday) {
        fechaNacP.style.backgroundColor = "red";
        errores += 'El campo \'Fecha de nacimiento\' no puede ser mayor al día actual. Compruebe la fecha.\n';
    } else {
        fechaNacP.style.backgroundColor = "white";
        datos += 'Fecha de nacimiento: ' + fechaNac + '\n';
    }
}

function checkCodPostal() {
    const codPostalP = document.getElementById('CPP');
    const CodPostal = document.getElementById('CP').value;
    let regExCodPostal = /^\d{5}$/;
    if (CodPostal === "") {
        codPostalP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Código Postal\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else if (!regExCodPostal.test(CodPostal)) {
        codPostalP.style.backgroundColor = "red";
        errores += 'El campo \'Código Postal\' tiene un formato incorrecto. Reviselo de nuevo.\n';
    } else {
        codPostalP.style.backgroundColor = "white";
        datos += 'DNI: ' + CodPostal + '\n';
    }

}

function checkPais() {
    const pais = document.getElementById('pais').value;
    datos += 'País: ' + pais + '\n';
}

function checkGenero() {
    const genderP = document.getElementById('genderP');
    const gender = document.getElementsByName('gender');
    let valor = '';
    for(let i = 0; i < gender.length; i++) { if (gender[i].checked) { valor = gender[i].value; } }
    if (valor == '') {
        genderP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Genero\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else {
        genderP.style.backgroundColor = "white";
        datos += 'Género: ' + valor + '\n';
    }
}

function checkPreferencias() { 
    const colorP = document.getElementById('colorP');
    const color = document.getElementsByName('color');
    let valor = '';
    for(let i = 0; i < color.length; i++) {
        if (color[i].checked) { 
            if (valor != '') {
                valor += ', ' + color[i].value; 
            } else {
                valor += color[i].value; 
            }
        }
    }
    if (valor == '') {
        colorP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Preferencias\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else {
        colorP.style.backgroundColor = "white";
        datos += 'Preferencias: ' + valor + '\n';
    }

}

function checkNumTelefono() {
    const phoneP = document.getElementById('phoneP');
    const phone = document.getElementById('phone').value;
    let regExPhone = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/; 
    if (phone === "") {
        phoneP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Número de teléfono\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else if (regExPhone.test(phone)) {
        phoneP.style.backgroundColor = "red";
        errores += 'El campo \'Número de teléfono\' tiene un formato incorrecto. Reviselo de nuevo.\n';
    } else {
        phoneP.style.backgroundColor = "white";
        datos += 'Número de teléfono: ' + phone + '\n';
    }
}

function checkEmail() {
    const emailP = document.getElementById('emailP');
    const email = document.getElementById('email').value;
    let regExEmail = /^w+ ( [.-]?w+)*@w+ ( [.-]?w+)* (.w {2,3,4})+$/;
    if (email === "") {
        emailP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Correo Electrónico\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else if (regExEmail.test(email)) {
        emailP.style.backgroundColor = "red";
        errores += 'El campo \'Correo Electrónico\' tiene un formato incorrecto. Reviselo de nuevo.\n';
    } else {
        emailP.style.backgroundColor = "white";
        datos += 'Correo Electrónico: ' + email + '\n';
    }
}

function checkPassword() {
    const passP = document.getElementById('passP');
    const pass = document.getElementById('pass').value;
    let regExPassword = /^\w{6,12}$/;
    if (pass === "") {
        passP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Contraseña\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else if (!regExPassword.test(pass)) {
        passP.style.backgroundColor = "red";
        errores += 'El campo \'Contraseña\' tiene un formato incorrecto. Reviselo de nuevo.\n';
    } else {
        passP.style.backgroundColor = "white";
        contraseña = pass;
    }
}

function checkPasswordAgain() {
    const passwordP = document.getElementById('passwordP');
    const password = document.getElementById('password').value;
    contraseñaRep = password;
    let regExPassword = /^\w{6,12}$/;
    if (password === "") {
        passwordP.style.backgroundColor = "red";
        errores += 'No puede dejar el campo \'Repita Contraseña\' vacio. Introduzcalo y pulse de nuevo.\n';
    } else if (!regExPassword.test(password)) {
        passwordP.style.backgroundColor = "red";
        errores += 'El campo \'Repita Contraseña\' tiene un formato incorrecto. Reviselo de nuevo.\n';
    } else if (contraseña !== contraseñaRep) {
        passwordP.style.backgroundColor = "red";
        errores += 'Las contraseñas introducidas no son iguales. Corrijalo antes de continuar.\n';
    } else {
        passwordP.style.backgroundColor = "white";
        datos += 'Contraseña: ' + password + '\n';
    }
}



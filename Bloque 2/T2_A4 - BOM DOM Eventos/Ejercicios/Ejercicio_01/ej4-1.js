"use strict";

// Ej01 - Debes de mostrar que es lo que está mal al lado del input, no en el alert. 
// OK No compruebas la fecha del DNI. 
// OK No comprubeas las fechas incorrectas (se puede introducir 55-55-5252 por ejemplo). 
// Dejas introducir letras en el teléfono. 
// No comprubeas el formato del e-mail. 
// No compruebas que las contraseñas cumplan con el formato correcto. 

let regex;
const regularExps = new Map() 
{
    regularExps.set("nombre", "^[a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ ]*$");
    regularExps.set("direccion", "^[a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ\\.-º,0-9() ]*$");
    regularExps.set("dni", "^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$");
    regularExps.set("codPostal", "^[0-9]{1,5}$");
    regularExps.set("pais", "^$");
    regularExps.set("phone", "^$");
    regularExps.set("email", "^$");
    regularExps.set("pass", "^$");
    regularExps.set("password", "^$");
}

let flag = true;
let counter = 0;
const boolInputs = new Map() 
{
    boolInputs.set("nombre", false);
    boolInputs.set("direccion", false);
    boolInputs.set("dni", false);
    boolInputs.set("fecha", false);
    boolInputs.set("codPostal", false);
    boolInputs.set("pais", false);
    boolInputs.set("genero", false);
    boolInputs.set("preferencias", false);
    boolInputs.set("phone", false);
    boolInputs.set("email", false);
    boolInputs.set("pass", false);
    boolInputs.set("password", false);
}

let nombre = document.getElementById("nombre");
let direccion = document.getElementById("direccion");
let dni = document.getElementById("dni");
let fecha = document.getElementById("fecha");
let codPostal = document.getElementById("codPostal");
let pais = document.getElementById("pais");
let genero = document.getElementById("");
let preferencias = document.getElementById("");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let password = document.getElementById("password");

const setValidAttribute = element => element.setAttribute("class", "valid");
const setInvalidAttribute = element => element.setAttribute("class", "invalid");
const dropInvalidAttribute = element => element.removeAttribute("class", "invalid");
const showErrorMessage = (element, text) => element.innerText = text;
const deleteErrorMessage = (element) => element.innerText = '';
const setValidInput = (id) => boolInputs.set(id, true);
const setInvalidInput = (id) => boolInputs.set(id, false);

function checkInputs(id, check) {
    if (check) 
        setValidInput(id);
    else 
        setInvalidInput(id);

    counter = 0;
    boolInputs.forEach((value, key) => {
        if (value == false) { 
            flag = value; 
        } else {
            flag = value;
            counter++;
        }
    });
    if (counter === boolInputs.length && flag) {
        console.log('Activamos boton');
        document.getElementById("enviar").disabled = false;
    }
    console.log(counter);
    console.log(boolInputs);
};

//#region Controladores Campo vacio
let formVacioKeyPress = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    if (input == '') {
        setInvalidAttribute(this); 
        showErrorMessage(message, "No puede dejar este campo vacío");
    } 
}

let formVacioBlur = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    if (input == '') {
        setInvalidAttribute(this); 
        showErrorMessage(message, "No puede dejar este campo vacío");
    } 
}
//#endregion

//#region Nombre
let nombre_inputKeyPress = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);
        if (regex.test(input)) {
            dropInvalidAttribute(this)
            if (input.length > 2) {
                setValidAttribute(this)
                checkInputs(this.id, true)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(message, "Ha introducido carácteres incorrectos, un nombre solo debería contener letras");
            checkInputs(this.id, false)
        }
    } 
}

let nombre_inputBlur = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);
        if (regex.test(input)) {
            dropInvalidAttribute(this)
            if (input.length > 2) {
                setValidAttribute(this)
                checkInputs(this.id, true)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(message, "Ha introducido carácteres incorrectos, un nombre solo debería contener letras");
            checkInputs(this.id, false)
        }
    } 
}

nombre.addEventListener('keypress', formVacioKeyPress); 
nombre.addEventListener('blur', formVacioBlur); 
nombre.addEventListener('keypress', nombre_inputKeyPress); 
nombre.addEventListener('blur', nombre_inputBlur)
//#endregion

//#region Dirección
let direccion_inputKeyPress = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);
        if (regex.test(input)) {
            dropInvalidAttribute(this)
            if (input.length > 5) {
                setValidAttribute(this)
                checkInputs(this.id, true)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
    } 
}

let direccion_inputBlur = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);
        if (regex.test(input)) {
            dropInvalidAttribute(this)
            if (input.length > 5) {
                setValidAttribute(this)
                checkInputs(this.id, true)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
    } 
}

direccion.addEventListener('keypress', formVacioKeyPress); 
direccion.addEventListener('blur', formVacioBlur); 
direccion.addEventListener('keypress', direccion_inputKeyPress); 
direccion.addEventListener('blur', direccion_inputBlur)
//#endregion

//#region NIF
let dni_inputKeyPress = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);
        if (input.length == 9) {
            if (regex.test(input)) {
                if ("TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(input.substr(0, 8) % 23)) == (input.substr(-1)) ) {
                    dropInvalidAttribute(this)
                    setValidAttribute(this)
                    checkInputs(this.id, true)
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(message, "La letra no coincide con el DNI indicado, reviselo para continuar.");
                    checkInputs(this.id, false)
                }
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
                checkInputs(this.id, false)
            }
        }
        else if (input.length > 9) {
            setInvalidAttribute(this)
            checkInputs(this.id, false)
            showErrorMessage(message, "Un DNI está compuesto por 8 números y 1 letra, el suyo excede la cantidad de caracteres, por favor, reviselo antes de continuar.");
        }
    } 
}

let dni_inputBlur = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);
        if (input.length == 9) {
            if (regex.test(input)) {
                if ("TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(input.substr(0, 8) % 23)) == (input.substr(-1)) ) {
                    dropInvalidAttribute(this)
                    setValidAttribute(this)
                    checkInputs(this.id, true)
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(message, "La letra no coincide con el DNI indicado, reviselo para continuar.");
                    checkInputs(this.id, false)
                }
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
                checkInputs(this.id, false)
            }
        }
        else if (input.length < 9) {
            setInvalidAttribute(this)
            checkInputs(this.id, false)
            showErrorMessage(message, "Un DNI está compuesto por 8 números y 1 letra, el suyo no tiene todos los caracteres, por favor, reviselo antes de continuar.");
        }
        else if (input.length > 9) {
            setInvalidAttribute(this)
            checkInputs(this.id, false)
            showErrorMessage(message, "Un DNI está compuesto por 8 números y 1 letra, el suyo excede la cantidad de caracteres, por favor, reviselo antes de continuar.");
        }
    } 
}

dni.addEventListener('keypress', formVacioKeyPress); 
dni.addEventListener('blur', formVacioBlur); 
dni.addEventListener('keypress', dni_inputKeyPress); 
dni.addEventListener('blur', dni_inputBlur)
//#endregion

//#region Fecha de nacimiento 
let fecha_inputKeyPress = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);

    console.log(this.id);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);
        if (input != '') {
            deleteErrorMessage(message);
            dropInvalidAttribute(this);
    
            let dateNow = new Date();
            let dateInput = new Date(input)
            if (dateNow < dateInput) {
                setInvalidAttribute(this)
                showErrorMessage(message, "La fecha de nacimiento no puede ser superior a la fecha actual. ");
                setInvalidInput(this.id)
            }
            else {
                setValidAttribute(this)
                deleteErrorMessage(message)
                setValidInput(this.id)
            }
        } 
    } 
}

let fecha_inputBlur = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);

        let dateNow = new Date();
        let dateInput = new Date(input)
        if (dateNow < dateInput) {
            setInvalidAttribute(this)
            showErrorMessage(message, "La fecha de nacimiento no puede ser superior a la fecha actual. ");
            setInvalidInput(this.id)
        }
        else {
            setValidAttribute(this)
            deleteErrorMessage(message)
            setValidInput(this.id)
        }
    } 
}

fecha.addEventListener('keypress', formVacioKeyPress); 
fecha.addEventListener('blur', formVacioBlur); 
fecha.addEventListener('keypress', fecha_inputKeyPress); 
fecha.addEventListener('blur', fecha_inputBlur)
//#endregion

//#region Codigo Postal
let codPostal_inputKeyPress = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);

        if (Number.isNaN(Number(input))) {
            console.log(input);
            console.log(Number(input));
            console.log(Number.isNaN(Number(input)));
            setInvalidAttribute(this)
            showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
        else {
            if (input.length < 5) {
                setInvalidAttribute(this)
                showErrorMessage(message, "Un código postal no puede ser menor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length > 5) {
                setInvalidAttribute(this)
                showErrorMessage(message, "Un código postal no puede ser mayor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length == 5) {
                if (regex.test(input)) {
                    setValidAttribute(this)
                    deleteErrorMessage(message)
                    checkInputs(this.id, true)
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
                    checkInputs(this.id, false)
                }
            }
        }
    } 
}

let codPostal_inputBlur = function() { 
    let input = document.getElementById(this.id).value;
    let message = document.getElementById(`${this.id}E`);
    regex = new RegExp(regularExps.get(this.id))

    console.log(this.id);
    console.log(regex);

    if (input != '') {
        deleteErrorMessage(message);
        dropInvalidAttribute(this);

        if (Number.isNaN(Number(input))) {
            console.log(input);
            console.log(Number(input));
            console.log(Number.isNaN(Number(input)));
            setInvalidAttribute(this)
            showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
        else {
            if (input.length < 5) {
                setInvalidAttribute(this)
                showErrorMessage(message, "Un código postal no puede ser menor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length > 5) {
                setInvalidAttribute(this)
                showErrorMessage(message, "Un código postal no puede ser mayor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length == 5) {
                if (regex.test(input)) {
                    setValidAttribute(this)
                    deleteErrorMessage(message)
                    checkInputs(this.id, true)
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(message, "Ha introducido carácteres incorrectos, reviselo para continuar");
                    checkInputs(this.id, false)
                }
            }
        }
    } 
}

codPostal.addEventListener('keypress', formVacioKeyPress); 
codPostal.addEventListener('blur', formVacioBlur); 
codPostal.addEventListener('keypress', codPostal_inputKeyPress); 
codPostal.addEventListener('blur', codPostal_inputBlur)
//#endregion

//#region País

//#endregion 

//#region Genero 

//#endregion

//#region Preferencias 

//#endregion

//#region Número Teléfono 

//#endregion

//#region Correo electrónico 

//#endregion

//#region Contraseña 

//#endregion

//#region Contraseña Validación 

//#endregion

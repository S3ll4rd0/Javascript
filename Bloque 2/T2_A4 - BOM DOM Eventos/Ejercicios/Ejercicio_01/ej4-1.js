"use strict";

let regex;
const regularExps = new Map() 
{
    regularExps.set("nombre", "^[a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ ]*$");
    regularExps.set("direccion", "^[a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ\\.-º,0-9() ]*$");
    regularExps.set("dni", "^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$");
    regularExps.set("codPostal", "^[0-9]{1,5}$");
    regularExps.set("phone", "^[67][0-9]{8}$");
    regularExps.set("email", "^[a-zA-Z0-9.-_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
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

let input;
let errorMsg;
let successMsg;

//#region Controladores
const setValidAttribute = element => element.setAttribute("class", "valid");
const setInvalidAttribute = element => element.setAttribute("class", "invalid");
const dropInvalidAttribute = element => element.removeAttribute("class", "invalid");

const showErrorMessage = (element, text) => element.innerText = text;
const deleteErrorMessage = (element) => element.innerText = '';
const showSuccessMessage = (element, text) => element.innerText = text;
const deleteSuccessMessage = (element) => element.innerText = '';

const setValidInput = (id) => boolInputs.set(id, true);
const setInvalidInput = (id) => boolInputs.set(id, false);
const checkInputs = (id, check) => {
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
}

let formVacioKeyPress = function() { 
    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
}

let formVacioBlur = function() { 
    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
}
//#endregion

//#region Nombre
let nombre_inputKeyPress = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (regex.test(input)) {
            dropInvalidAttribute(this)

            if (input.length > 2) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "El nombre no puede contener tan pocos caracteres, reviselo para continuar.");
                checkInputs(this.id, false)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, un nombre solo debería contener letras, reviselo para continuar.");
            checkInputs(this.id, false)
        }
    } 
}

let nombre_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (regex.test(input)) {
            dropInvalidAttribute(this)

            if (input.length > 2) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "El nombre no puede contener tan pocos caracteres, reviselo para continuar.");
                checkInputs(this.id, false)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, un nombre solo debería contener letras, reviselo para continuar.");
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
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (regex.test(input)) {
            dropInvalidAttribute(this)

            if (input.length > 5) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "la dirección no puede contener tan pocos caracteres, reviselo para continuar.");
                checkInputs(this.id, false)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
    } 
}

let direccion_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (regex.test(input)) {
            dropInvalidAttribute(this)

            if (input.length > 5) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "la dirección no puede contener tan pocos caracteres, reviselo para continuar.");
                checkInputs(this.id, false)
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
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
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (input.length == 9) {
            if (regex.test(input)) {
                dropInvalidAttribute(this)

                if ("TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(input.substr(0, 8) % 23)) == (input.substr(-1)) ) {
                    setValidAttribute(this)
                    checkInputs(this.id, true)
                    showSuccessMessage(successMsg, "OK")
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "La letra no coincide con el DNI indicado, reviselo para continuar.");
                    checkInputs(this.id, false)
                }
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
                checkInputs(this.id, false)
            }
        }
        else if (input.length > 9) {
            setInvalidAttribute(this)
            checkInputs(this.id, false)
            showErrorMessage(errorMsg, "Un DNI está compuesto por 8 números y 1 letra, el suyo excede la cantidad de caracteres, por favor, reviselo antes de continuar.");
        }
    } 
}

let dni_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (input.length == 9) {
            if (regex.test(input)) {
                dropInvalidAttribute(this)

                if ("TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(input.substr(0, 8) % 23)) == (input.substr(-1)) ) {
                    setValidAttribute(this)
                    checkInputs(this.id, true)
                    showSuccessMessage(successMsg, "OK")
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "La letra no coincide con el DNI indicado, reviselo para continuar.");
                    checkInputs(this.id, false)
                }
            }
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
                checkInputs(this.id, false)
            }
        }
        else if (input.length < 9) {
            setInvalidAttribute(this)
            checkInputs(this.id, false)
            showErrorMessage(errorMsg, "Un DNI está compuesto por 8 números y 1 letra, el suyo no tiene todos los caracteres, por favor, reviselo antes de continuar.");
        }
        else if (input.length > 9) {
            setInvalidAttribute(this)
            checkInputs(this.id, false)
            showErrorMessage(errorMsg, "Un DNI está compuesto por 8 números y 1 letra, el suyo excede la cantidad de caracteres, por favor, reviselo antes de continuar.");
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
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        let dateNow = new Date();
        let dateInput = new Date(input)
        if (dateNow < dateInput) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La fecha de nacimiento no puede ser superior a la fecha actual. ");
            checkInputs(this.id, false)
        }
        else {
            setValidAttribute(this)
            deleteErrorMessage(errorMsg)
            checkInputs(this.id, true)
            showSuccessMessage(successMsg, "OK")
        }
    } 
}

let fecha_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        let dateNow = new Date();
        let dateInput = new Date(input)
        if (dateNow < dateInput) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La fecha de nacimiento no puede ser superior a la fecha actual. ");
            checkInputs(this.id, false)
        }
        else {
            setValidAttribute(this)
            deleteErrorMessage(errorMsg)
            checkInputs(this.id, true)
            showSuccessMessage(successMsg, "OK")
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
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (Number.isNaN(Number(input))) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
        else {
            if (input.length < 5) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un código postal no puede ser menor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length > 5) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un código postal no puede ser mayor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length == 5) {
                if (regex.test(input)) {
                    setValidAttribute(this)
                    deleteErrorMessage(errorMsg)
                    checkInputs(this.id, true)
                    showSuccessMessage(successMsg, "OK")
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
                    checkInputs(this.id, false)
                }
            }
        }
    } 
}

let codPostal_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (Number.isNaN(Number(input))) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
        else {
            if (input.length < 5) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un código postal no puede ser menor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length > 5) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un código postal no puede ser mayor a 5 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length == 5) {
                if (regex.test(input)) {
                    setValidAttribute(this)
                    deleteErrorMessage(errorMsg)
                    checkInputs(this.id, true)
                    showSuccessMessage(successMsg, "OK")
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
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
let phone_inputKeyPress = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (Number.isNaN(Number(input))) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
        else {
            if (input.length < 9) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un número de telefóno español no puede ser menor a 9 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length > 9) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un número de telefóno español no puede ser mayor a 9 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length == 9) {
                if (regex.test(input)) {
                    setValidAttribute(this)
                    deleteErrorMessage(errorMsg)
                    checkInputs(this.id, true)
                    showSuccessMessage(successMsg, "OK")
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
                    checkInputs(this.id, false)
                }
            }
        }
    } 
}

let phone_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (Number.isNaN(Number(input))) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
            checkInputs(this.id, false)
        }
        else {
            if (input.length < 9) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un número de telefóno español no puede ser menor a 9 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length > 9) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Un número de telefóno español no puede ser mayor a 9 números, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (input.length == 9) {
                if (regex.test(input)) {
                    setValidAttribute(this)
                    deleteErrorMessage(errorMsg)
                    checkInputs(this.id, true)
                    showSuccessMessage(successMsg, "OK")
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
                    checkInputs(this.id, false)
                }
            }
        }
    } 
}

phone.addEventListener('keypress', formVacioKeyPress); 
phone.addEventListener('blur', formVacioBlur); 
phone.addEventListener('keypress', phone_inputKeyPress); 
phone.addEventListener('blur', phone_inputBlur)
//#endregion

//#region Correo electrónico 
let email_inputKeyPress = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (regex.test(input)) {
            dropInvalidAttribute(this)
            if (input.length > 6) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, un nombre solo debería contener letras, reviselo para continuar.");
            checkInputs(this.id, false)
        }
    } 
}

let email_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (regex.test(input)) {
            dropInvalidAttribute(this)
            if (input.length > 6) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            }
        }
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar.");
            checkInputs(this.id, false)
        }
    } 
}

email.addEventListener('keypress', formVacioKeyPress); 
email.addEventListener('blur', formVacioBlur); 
email.addEventListener('keypress', email_inputKeyPress); 
email.addEventListener('blur', email_inputBlur)
//#endregion

//#region Contraseña 
let minus = "abcdefghijklmnopqrstuvwxyz";
let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nums = "0123456789";
let specChars = "-_@*#";

function checkLetters(letras, contraseña) {
    for (let i = 0; i < letras.length; i++) {
        if (contraseña.includes(letras.charAt(i))) {
            return true;
        }
    }
}

let pass_inputKeyPress = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (input.length < 6) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La contraseña tiene menos de 6 caracteres, debería tener entre 6 y 12 caracteres.");
            checkInputs(this.id, false)
        }
        else if (input.length > 12) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La contraseña tiene más de 12 caracteres, debería tener entre 6 y 12 caracteres.");
            checkInputs(this.id, false)
        }
        else {
            if (! checkLetters(minus, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ninguna minúscula, reviselo para continuar.");
                checkInputs(this.id, false)
            } 
            else if (! checkLetters(mayus, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ninguna mayúscula, reviselo para continuar.");
                checkInputs(this.id, false)
            } 
            else if (! checkLetters(nums, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ningun número, reviselo para continuar.");
                checkInputs(this.id, false)
            } 
            else if (! checkLetters(specChars, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ningun caracter especial, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (checkLetters(minus, input) && checkLetters(mayus, input) && checkLetters(nums, input) && checkLetters(specChars, input)) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            } 
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
                checkInputs(this.id, false)
            }
        }
    } 
}

let pass_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (input.length < 6) {
            setInvalidAttribute(this)
            showErrorMessage(message, "La contraseña tiene menos de 6 caracteres, debería tener entre 6 y 12 caracteres.");
            checkInputs(this.id, false)
        }
        else if (input.length > 12) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La contraseña tiene más de 12 caracteres, debería tener entre 6 y 12 caracteres.");
            checkInputs(this.id, false)
        }
        else {
            if (! checkLetters(minus, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ninguna minúscula, reviselo para continuar.");
                checkInputs(this.id, false)
            } 
            else if (! checkLetters(mayus, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ninguna mayúscula, reviselo para continuar.");
                checkInputs(this.id, false)
            } 
            else if (! checkLetters(nums, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ningun número, reviselo para continuar.");
                checkInputs(this.id, false)
            } 
            else if (! checkLetters(specChars, input)) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "No ha introducido ningun caracter especial, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            else if (checkLetters(minus, input) && checkLetters(mayus, input) && checkLetters(nums, input) && checkLetters(specChars, input)) {
                setValidAttribute(this)
                checkInputs(this.id, true)
                showSuccessMessage(successMsg, "OK")
            } 
            else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar");
                checkInputs(this.id, false)
            }
        }
    } 
}

pass.addEventListener('keypress', formVacioKeyPress); 
pass.addEventListener('blur', formVacioBlur); 
pass.addEventListener('keypress', pass_inputKeyPress); 
pass.addEventListener('blur', pass_inputBlur)
//#endregion

//#region Contraseña Validación 
let password_inputKeyPress = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (pass === input) {
            setValidAttribute(this)
            checkInputs(this.id, true)
            showSuccessMessage(successMsg, "OK")
        } 
        else if (pass.length == 0) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Primero introduzca una contraseña en el formulario superior a este.");
            checkInputs(this.id, false)
        } 
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Las contraseñas introducidas no coinciden.");
            checkInputs(this.id, false)
        }
    } 
}

let password_inputBlur = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    if (input != '') {
        deleteErrorMessage(errorMsg);
        deleteSuccessMessage(successMsg)
        dropInvalidAttribute(this);

        if (pass === input) {
            setValidAttribute(this)
            checkInputs(this.id, true)
            showSuccessMessage(successMsg, "OK")
        } 
        else if (pass.length == 0) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Primero introduzca una contraseña en el formulario superior a este.");
            checkInputs(this.id, false)
        } 
        else {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "Las contraseñas introducidas no coinciden.");
            checkInputs(this.id, false)
        }
    } 
}

password.addEventListener('keypress', formVacioKeyPress); 
password.addEventListener('blur', formVacioBlur); 
password.addEventListener('keypress', password_inputKeyPress); 
password.addEventListener('blur', password_inputBlur)
//#endregion

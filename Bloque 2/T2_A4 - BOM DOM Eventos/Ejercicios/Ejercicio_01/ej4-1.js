"use strict";

let regex;
const regularExps = new Map() 
{
    regularExps.set("nombre", "^[a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ ]*$");
    regularExps.set("direccion", "^[a-zA-ZàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚ\\.-º,0-9() ]*$");
    regularExps.set("dni", "^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$");
    regularExps.set("codPostal", "^[0-9]{1,5}$");
    regularExps.set("phone", "^[67][0-9]{8}$");
    regularExps.set("email", "^[a-zA-Z0-9.-_]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$");
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
    if (counter === boolInputs.size && flag) {
        document.getElementById("enviar").disabled = false;
    } else {
        document.getElementById("enviar").disabled = true;
    }
}
//#endregion

//#region Nombre
let nombre_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
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

nombre.addEventListener('keyup', nombre_controller); 
nombre.addEventListener('blur', nombre_controller);

//#endregion

//#region Dirección
let direccion_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
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

direccion.addEventListener('keyup', direccion_controller); 
direccion.addEventListener('blur', direccion_controller)
//#endregion

//#region NIF
let dni_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
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

dni.addEventListener('keyup', dni_controller); 
dni.addEventListener('blur', dni_controller)
//#endregion

//#region Fecha de nacimiento 
let fecha_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
        let dateNow = new Date();
        let dateInput = new Date(input)
        if (dateNow < dateInput) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La fecha de nacimiento no puede ser posterior a la fecha actual. ");
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

fecha.addEventListener('keyup', fecha_controller); 
fecha.addEventListener('blur', fecha_controller)
//#endregion

//#region Codigo Postal
let codPostal_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
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

codPostal.addEventListener('keyup', codPostal_controller); 
codPostal.addEventListener('blur', codPostal_controller)
//#endregion

//#region País
// Como este select ya elige un valor por defecto al iniciar, si no se cambia, este será el valor escogido.
checkInputs("pais", true);

// Si el usuario decide cambiar el elemento seleccionado, como no puede seleccionar un elemento erroneo, 
// este será actualizado pero visualmente se le hará saber que su elección ha sido procesada y correcta.
pais.addEventListener('change', function() { 
    successMsg = document.getElementById(`${this.id}S`);
    checkInputs(this.id, true);
    showSuccessMessage(successMsg, "OK")
    setValidAttribute(pais)
});
//#endregion 

//#region Genero 
setInvalidAttribute(document.getElementById("generoField"))
showErrorMessage(document.getElementById(`generoE`), "Debe seleccionar una opción de este campo");
let generoEscogido;

document.getElementById("genH").addEventListener('change', function() { 
    setValidAttribute(document.getElementById("generoField"));
    deleteErrorMessage(document.getElementById(`generoE`))
    showSuccessMessage(document.getElementById(`generoS`), `Ha escogido ${genH.value}`)
    checkInputs("genero", true);
    generoEscogido = genH.value;
});

document.getElementById("genM").addEventListener('change', function() { 
    setValidAttribute(document.getElementById("generoField"));
    deleteErrorMessage(document.getElementById(`generoE`))
    showSuccessMessage(document.getElementById(`generoS`), `Ha escogido ${genM.value}`)
    checkInputs("genero", true);
    generoEscogido = genM.value;
});

document.getElementById("genU").addEventListener('change', function() { 
    setValidAttribute(document.getElementById("generoField"));
    deleteErrorMessage(document.getElementById(`generoE`))
    showSuccessMessage(document.getElementById(`generoS`), `Ha escogido ${genU.value}`)
    checkInputs("genero", true);
    generoEscogido = genU.value;
});

//#endregion

//#region Preferencias 
setInvalidAttribute(document.getElementById("preferenciasField"))
showErrorMessage(document.getElementById(`preferenciasE`), "Debe seleccionar al menos una opción de este campo");
let colores = []

document.getElementById("colorRojo").addEventListener('change', function() { 
    if (! document.getElementById("colorRojo").checked && ! document.getElementById("colorAzul").checked && ! document.getElementById("colorVerde").checked) {
        setInvalidAttribute(document.getElementById("preferenciasField"));
        deleteSuccessMessage(document.getElementById(`preferenciasS`))
        showErrorMessage(document.getElementById(`preferenciasE`), "No puede dejar ninguna opción sin seleccionar");
        checkInputs("preferencias", false);
        colores = []
    } else {
        setValidAttribute(document.getElementById("preferenciasField"));
        deleteErrorMessage(document.getElementById(`preferenciasE`))
        showSuccessMessage(document.getElementById(`preferenciasS`), "Su selección ha sido registrada")
        checkInputs("preferencias", true);
        if (! colores.includes(document.getElementById("colorRojo").value)) {
            colores.push(document.getElementById("colorRojo").value);
        }
    }
});

document.getElementById("colorAzul").addEventListener('change', function() { 
    if (! document.getElementById("colorRojo").checked && ! document.getElementById("colorAzul").checked && ! document.getElementById("colorVerde").checked) {
        setInvalidAttribute(document.getElementById("preferenciasField"));
        deleteSuccessMessage(document.getElementById(`preferenciasS`))
        showErrorMessage(document.getElementById(`preferenciasE`), "No puede dejar ninguna opción sin seleccionar");
        checkInputs("preferencias", false);
        colores = []
    } else {
        setValidAttribute(document.getElementById("preferenciasField"));
        deleteErrorMessage(document.getElementById(`preferenciasE`))
        showSuccessMessage(document.getElementById(`preferenciasS`), "Su selección ha sido registrada")
        checkInputs("preferencias", true);
        if (! colores.includes(document.getElementById("colorAzul").value)) {
            colores.push(document.getElementById("colorAzul").value);
        }
    }
});

document.getElementById("colorVerde").addEventListener('change', function() { 
    if (! document.getElementById("colorRojo").checked && ! document.getElementById("colorAzul").checked && ! document.getElementById("colorVerde").checked) {
        setInvalidAttribute(document.getElementById("preferenciasField"));
        deleteSuccessMessage(document.getElementById(`preferenciasS`))
        showErrorMessage(document.getElementById(`preferenciasE`), "No puede dejar ninguna opción sin seleccionar");
        checkInputs("preferencias", false);
        colores = []
    } else {
        setValidAttribute(document.getElementById("preferenciasField"));
        deleteErrorMessage(document.getElementById(`preferenciasE`))
        showSuccessMessage(document.getElementById(`preferenciasS`), "Su selección ha sido registrada")
        checkInputs("preferencias", true);
        if (! colores.includes(document.getElementById("colorVerde").value)) {
            colores.push(document.getElementById("colorVerde").value);
        }
    }
});
//#endregion

//#region Número Teléfono 
let phone_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))
    
    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
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
                if (input.charAt(0) != '6' && input.charAt(0) != '7') {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "Los teléfonos en españa solamente empiezan por 6 o 7, reviselo para continuar.");
                    checkInputs(this.id, false)
                }
                else {
                    if (regex.test(input)) {
                        setValidAttribute(this)
                        deleteErrorMessage(errorMsg)
                        checkInputs(this.id, true)
                        showSuccessMessage(successMsg, "OK")
                    }
                    else {
                        setInvalidAttribute(this)
                        showErrorMessage(errorMsg, "Ha introducido carácteres incorrectos, reviselo para continuar.");
                        checkInputs(this.id, false)
                    }
                }
            }
        }
    }
}

phone.addEventListener('keyup', phone_controller); 
phone.addEventListener('blur', phone_controller)
//#endregion

//#region Correo electrónico 
let email_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
        if (regex.test(input)) {
            dropInvalidAttribute(this)

            if (input.length >= 6) {
                if (input.includes("@") && input.substr(input.length-3, 1) == "." || input.substr(input.length-4, 1) == ".") {
                    setValidAttribute(this)
                    checkInputs(this.id, true)
                    showSuccessMessage(successMsg, "OK")
                }
                else {
                    setInvalidAttribute(this)
                    showErrorMessage(errorMsg, "El correo está incompleto o no ha indicado el dominio o lo ha indicado de forma erronea, reviselo para continuar.");
                    checkInputs(this.id, false)
                }
            }
        }
        else {
            console.log(input.includes("@"));
            if (!input.includes("@") && (input.substr(input.length-3, 1) == "." || input.substr(input.length-4, 1) == ".")) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "El correo está incompleto o no ha indicado el dominio o lo ha indicado de forma erronea, reviselo para continuar.");
                checkInputs(this.id, false)
            } else {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "Su correo electrónico está incompleto, o a introducido carácteres incorrectos, reviselo para continuar.");
                checkInputs(this.id, false)
            }
            if (input.length < 6) {
                setInvalidAttribute(this)
                showErrorMessage(errorMsg, "El correo electrónico no puede tener tan pocos caracteres, reviselo para continuar.");
                checkInputs(this.id, false)
            }
        }
    }
}

email.addEventListener('keyup', email_controller); 
email.addEventListener('blur', email_controller)
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

let pass_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
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
        else if (input.length < 6) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La contraseña tiene menos de 6 caracteres, debería tener entre 6 y 12 caracteres.");
            checkInputs(this.id, false)
        }
        else if (input.length > 12) {
            setInvalidAttribute(this)
            showErrorMessage(errorMsg, "La contraseña tiene más de 12 caracteres, debería tener entre 6 y 12 caracteres.");
            checkInputs(this.id, false)
        }
        else if (checkLetters(minus, input) && checkLetters(mayus, input) && checkLetters(nums, input) && checkLetters(specChars, input) && input.length >= 6 && input.length <= 12) {
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

pass.addEventListener('keyup', pass_controller); 
pass.addEventListener('blur', pass_controller)
//#endregion

//#region Contraseña Validación 
let password_controller = function() { 
    input = document.getElementById(this.id).value;
    errorMsg = document.getElementById(`${this.id}E`);
    successMsg = document.getElementById(`${this.id}S`);
    regex = new RegExp(regularExps.get(this.id))

    deleteErrorMessage(errorMsg);
    deleteSuccessMessage(successMsg)
    dropInvalidAttribute(this);

    if (document.getElementById(this.id).value == '') {
        setInvalidAttribute(this); 
        showErrorMessage(document.getElementById(`${this.id}E`), "No puede dejar este campo vacío");
    } 
    else {
        if (pass.value === input) {
            setValidAttribute(this)
            checkInputs(this.id, true)
            showSuccessMessage(successMsg, "OK")
        } 
        else if (pass.value.length == 0) {
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

password.addEventListener('keyup', password_controller); 
password.addEventListener('blur', password_controller)
//#endregion

//#region Borrar formulario
function borrar_formulario() {
    nombre.innerText = "";
    setInvalidAttribute(nombre);
    deleteSuccessMessage(document.getElementById("nombreS"));
    showErrorMessage(document.getElementById("nombreE"), "No puede dejar el campo sin rellenar");

    direccion.innerText = "";
    setInvalidAttribute(direccion);
    deleteSuccessMessage(document.getElementById("direccionS"));
    showErrorMessage(document.getElementById("direccionE"), "No puede dejar el campo sin rellenar");

    dni.innerText = "";
    setInvalidAttribute(dni);
    deleteSuccessMessage(document.getElementById("dniS"));
    showErrorMessage(document.getElementById("dniE"), "No puede dejar el campo sin rellenar");

    fecha.innerText = "";
    setInvalidAttribute(fecha);
    deleteSuccessMessage(document.getElementById("fechaS"));
    showErrorMessage(document.getElementById("fechaE"), "No puede dejar el campo sin rellenar");

    codPostal.innerText = "";
    setInvalidAttribute(codPostal);
    deleteSuccessMessage(document.getElementById("codPostalS"));
    showErrorMessage(document.getElementById("codPostalE"), "No puede dejar el campo sin rellenar");

    phone.innerText = "";
    setInvalidAttribute(phone);
    deleteSuccessMessage(document.getElementById("phoneS"));
    showErrorMessage(document.getElementById("phoneE"), "No puede dejar el campo sin rellenar");

    email.innerText = "";
    setInvalidAttribute(email);
    deleteSuccessMessage(document.getElementById("emailS"));
    showErrorMessage(document.getElementById("emailE"), "No puede dejar el campo sin rellenar");

    pass.innerText = "";
    setInvalidAttribute(pass);
    deleteSuccessMessage(document.getElementById("passS"));
    showErrorMessage(document.getElementById("passE"), "No puede dejar el campo sin rellenar");

    password.innerText = "";
    setInvalidAttribute(password);
    deleteSuccessMessage(document.getElementById("passwordS"));
    showErrorMessage(document.getElementById("passwordE"), "No puede dejar el campo sin rellenar");

    document.getElementById("genH").checked = false;
    document.getElementById("genM").checked = false;
    document.getElementById("genU").checked = false;
    generoEscogido = "";
    setInvalidAttribute(document.getElementById("generoField"));
    deleteSuccessMessage(document.getElementById(`generoS`))
    showErrorMessage(document.getElementById(`generoE`), "No puede dejar el campo sin seleccionar una opción")

    document.getElementById("colorRojo").checked = false;
    document.getElementById("colorAzul").checked = false;
    document.getElementById("colorVerde").checked = false;
    colores = []
    setInvalidAttribute(document.getElementById("preferenciasField"));
    deleteSuccessMessage(document.getElementById(`preferenciasS`))
    showErrorMessage(document.getElementById(`preferenciasE`), "No puede dejar ninguna opción sin seleccionar");

    document.getElementById("enviar").disabled = true;
    boolInputs.forEach((value) => value = false);
    checkInputs("pais", true);
}
//#endregion

//#region Mostrar Formulario
function enviar_formulario() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("formulario"));

    document.getElementById("respuestas").style.visibility = 'visible';
    
    document.getElementById("nombreR").innerText = `Como nombre, usted ha indicado: [${nombre.value}]`;
    document.getElementById("direccionR").innerText = `Como dirección, usted ha indicado: [${direccion.value}]`;
    document.getElementById("dniR").innerText = `Como DNI, usted ha indicado: [${dni.value}]`;
    document.getElementById("fechaR").innerText = `Como fecha de nacimiento, usted ha indicado: [${fecha.value}]`;
    document.getElementById("codPostalR").innerText = `Como código postal, usted ha indicado: [${codPostal.value}]`;
    document.getElementById("paisR").innerText = `Como pais, usted ha seleccionado: [${pais.value}]`;
    document.getElementById("generoR").innerText = `Como género, usted ha seleccionado: [${generoEscogido}]`;
    document.getElementById("preferenciasR").innerText = `Como preferencia de color, usted ha seleccionado: [${colores.join(', ')}]`;
    document.getElementById("phoneR").innerText = `Como teléfono, usted ha indicado: [${phone.value}]`;
    document.getElementById("emailR").innerText = `Como correo electrónico, usted ha indicado: [${email.value}]`;
    document.getElementById("passwordR").innerText = `Como contraseña, usted ha indicado: [${password.value}]`;
}
//#endregion
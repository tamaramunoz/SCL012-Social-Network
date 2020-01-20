// Este es el punto de entrada de tu aplicacion

import {
    myFunction
} from './lib/index.js';

myFunction();

const validation = () => {
    valorEmail = document.getElementById("mail").value;
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
        alert('[ERROR] El campo debe tener un valor de correo electrónico');
        return false;
    }
    valorPassword = document.getElementById("password-example").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert('[ERROR] El campo debe tener un valor de 8 caracteres');
        return false;
    }
    return true;
}
validation();

const btnRegistro = document.getElementById("registro");
btnRegistro.addEventListener("click", () => {
    const formsNone = document.getElementById("forms");
    formsNone.style.display = "none";
    const pagesPerfil = document.getElementById("root-post");
    pagesPerfil.style.display = "block";
})
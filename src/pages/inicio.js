import {
    googleLogin
} from '../lib/google-auth.js';

const enterGoogle = (googleLogin) => {
    document.getElementById("root").innerHTML =
        `<div id= "pag-main">
    <p> Bienvenido</p>`
}
enterGoogle();
import {
  googleLogin,
} from '../lib/google-auth.js';

import {
  emailLogin,
  createAccount,
} from '../lib/index.js';

<<<<<<< HEAD
// GENERACIÓN DE PÁGINA DE LOGUEO CON FIREBASE
=======
//  GENERACIÓN DE PÁGINA DE LOGUEO CON FIREBASE
>>>>>>> afe8f2da9c855254db767dd8c9cfcf62828a07ff
export const goLoginPage = () => {
  document.getElementById('root').innerHTML = `<div id="form-login" class= "form-login">
        <form action="/form-page" method="post" onsubmit="return validation()">
<<<<<<< HEAD
          <ul class= "list">
            <li>
=======
          <ul class="list"
            <li >
>>>>>>> afe8f2da9c855254db767dd8c9cfcf62828a07ff
              <label for="mail"></label>
              <input class="inputLogin" type="email" id="txtMail" name="user_mail" Placeholder="Correo electrónico" />
            </li>
            <li class="text-box">
              <label for="password-example"></label> 
              <input class="inputLogin" type="password" id="txtPassword" name="password-example" Placeholder="Contraseña" required />
            </li>
            <li class="button">
              <button class="login" id="btnLogin" type="submit">Iniciar Sesión</button>
              <button class="register" id="registro" type="button">Registrate</button>
              <span id="loginGoogle" class="loginGoogle"><img src="./img/googleLogo2.png" class="icon" alt=""><p>Registrate con Google</p></span>
            </li>
          </ul>
        </form>
      </div>`;
  buildListenerForm();
};

<<<<<<< HEAD
//  FUNCIÓN INICIA EL BOTÓN DE LOGIN CUANDO ESTE EXISTA
=======
//  FUNCIÓN INICIA BOTÓN DE LOGIN CUANDO ESTE EXISTA
>>>>>>> afe8f2da9c855254db767dd8c9cfcf62828a07ff
const buildListenerForm = () => {
  try {
    // BOTÓN PARA LOGUEAR CON EMAIL Y PASSWORD
    document.getElementById('form-login').addEventListener('submit', () => {
      const email = document.getElementById('txtMail').value;
      const password = document.getElementById('txtPassword').value;
      emailLogin(email, password);
    });
    // BOTÓN LOGIN CON GOOGLE
    document.getElementById('loginGoogle').addEventListener('click', () => {
      let variable = googleLogin();
      variable.then(function(result){
        console.log(result.user);
        
        document.getElementById('root').innerHTML="<img src='"+result.user.photoURL+"' />";
      });
    });

    // BOTÓN CREACIÓN DE CUENTA
    document.getElementById('registro').addEventListener('click', () => {
      document.getElementById('root').innerHTML = `
        <div class="logo" id="logo"><img src="./img/img.jpg"></div>
        <div id="createAccount"><p class="fontRoot">Ingresa un correo y una contraseña para tu cuenta</p>
        <input type="text"  id="newTextMail" class="inputLogin" placeholder="Correo electrónico.">
        <input type="password" id="newTextPassword" class="inputLogin" placeholder="Contraseña.">
        <button id="btnCreate" class="btnLogin">Crear Cuenta</button>
<<<<<<< HEAD
        <a class="fontRoot" id="btnBack">Volver</a></div>`;
      // BOTÓN QUE CREA CUENTA
=======
        <a class="fontRoot" id="loginBack">Volver</a></div>`;
      
      // BOTON QUE CREA CUENTA PARA NUEVO USUARIO
>>>>>>> afe8f2da9c855254db767dd8c9cfcf62828a07ff
      document.getElementById('btnCreate').addEventListener('click', () => {
        const email = document.getElementById('newTextMail').value;
        const password = document.getElementById('newTextPassword').value;
        createAccount(email, password);
      });
      // BÓTÓN DE REGRESO AL LOGIN
      document.getElementById('btnBack').addEventListener('click', () => {
        goLoginPage();
      });
    });
  } catch (e) {
    console.error(e);
    document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
  }
};
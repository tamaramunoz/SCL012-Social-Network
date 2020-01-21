// SE IMPORTAN FUNCIONES DESDE ./LIB/INDEX.JS
import * as modulo from './lib/index.js';

//CARGA DE PÁGINA EN NAVEGADOR
document.addEventListener("DOMContentLoaded", event => {

});

modulo.myFunction();

    console.log('hola');

//CLAVES DE ACCESO A CONSOLA FIREBASE
    const firebaseConfig = {
      apiKey: "AIzaSyB3qZfhmgPz4ptCRmXhD4Wa9WTH4vOlKEg",
      authDomain: "socialnet-f80a2.firebaseapp.com",
      databaseURL: "https://socialnet-f80a2.firebaseio.com",
      projectId: "socialnet-f80a2",
      storageBucket: "socialnet-f80a2.appspot.com",
      messagingSenderId: "885408468760",
      appId: "1:885408468760:web:628562711a6f2cb974986d"
    };
//INICIALIZACIÓN DE FIREBASE
  firebase.initializeApp(firebaseConfig);

//GENERACIÓN DE PÁGINA DE LOGUEO CON FIREBASE
    const loginPage = () =>{

      document.getElementById("root").innerHTML = `
      <div id="logo" class='logo'><img src="./img/img1.jpg"></div><div id="logins"><p class="fontRoot">Comienza tu aventura...¡Inicia sesión!</p><input type="text"  id="txtMail" class="inputLogin" placeholder="Correo electrónico.."><input type="password" id="txtPassword" class="inputLogin" placeholder="Contraseña.."><button id="btnLogin" class="btnLogin">Iniciar Sesión</button><button id="btnLogOut" class="btnLogin">Salir</button>
      <p class="fontRoot">¿Aún no te registras? Hazlo <a id="newAccount">AQUÍ</a></p><hr>
      <span id="loginGoogle" class="login"><img src="./img/googleLogo.jpg" class="icon" alt=""><p>Inicia Sesión con Google</p></span>
      <span id="loginFacebook" class="login Facebook"><img src="" class="icon" alt=""><p>Inicia Sesión con Facebook</p></span>
      </div>`;



   // BOTON PARA LOGUEAR CON EMAIL Y PASSWORD
   document.getElementById("btnLogin").addEventListener("click", () => {
     const email = document.getElementById("txtMail").value;
     const password = document.getElementById("txtPassword").value;
     modulo.emailLogin(email, password);
   });


   };




    document.addEventListener('DOMContentLoaded', ()=>  {
      // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      // // The Firebase SDK is initialized and available here!
      //
      // firebase.auth().onAuthStateChanged(user => { });
      // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
      // firebase.messaging().requestPermission().then(() => { });
      // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
      //
      // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

      try {
        
       // let app = firebase.app();
       // let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
       // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
        loginPage();


        // BOTÓN LOGIN CON GOOGLE
        document.getElementById("loginGoogle").addEventListener("click", ()=>{
        modulo.googleLogin();                         
         });
        // BOTÓN LOGIN CON FACEBOOK
        document.getElementById("loginFacebook").addEventListener("click", ()=>{
                  modulo.facebookLogin()
        });
      


        // BOTON CREACIÓN DE CUENTA
        document.getElementById("newAccount").addEventListener("click", ()=> {
          document.getElementById("root").innerHTML = `
          <div class="logo" id="logo"><img src="./img/img.jpg"></div><div id="createAccount"><p class="fontRoot">Ingresa un correo y una contraseña para tu cuenta</p><input type="text"  id="newTextMail" class="inputLogin" placeholder="Correo electrónico.."><input type="password" id="newTextPassword" class="inputLogin" placeholder="Contraseña.."><button id="btnCreate" class="btnLogin">Crear Cuenta</button><a class="fontRoot" id="volver">Volver</a></div>`;


  // BOTON QUE VUELVE AL LOGIN
  document.getElementById("volver").addEventListener("click", ()=> {   
    document.getElementById("root").innerHTML = '';     
    loginPage();
    });
          
   // BOTON QUE CREA CUENTA
   document.getElementById("btnCreate").addEventListener("click", ()=>{
    const email = document.getElementById("newTextMail"). value;
    const password = document.getElementById("newTextPassword").value;
     modulo.createAccount(email, password);

  });
        });

   // BOTON LOGOUT
   document.getElementById("btnLogOut").addEventListener("click", ()=>{
   firebase.auth().signOut();
  });
  } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
      }
  });



      


 

    
 
       




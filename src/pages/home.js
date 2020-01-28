/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  perfilInfo,
} from './perfil.js';

export const goHome = () => {
 
  document.getElementById('root').innerHTML = `
  <header class="header">
          <img class="logoBar" src="img/logoOcre.png" alt="logo-bitacora"/>
          <nav class="topnav">
                <a id="home" href="#">Home</a>
                <a id="btn-perfil">Perfil</a>
          </nav>
          <a id="btnLogOut" href="#" class="logOut">Cerrar sesión</a>
  </header>
        <div id="perfil-content"></div>
  <div id="writePost" class="post" >  
  <h4> Escribe tu post </h4>  
  <textarea name="message" id="message" class="texts"></textarea> 
  <div id="encodeDecodeButton">
  <input type="button" value="Postear" id="buttonPost" class="firstButton">
  </div>           
  </div>`

  /* Button perfil */
  document.getElementById('btn-perfil').addEventListener('click', (evt) => {
    perfilInfo();
  });

   /* Button home */
   document.getElementById('home').addEventListener('click', () => {
goHome();
  });

  // Button Logout.
  document.getElementById('btnLogOut').addEventListener('click', () => {
    firebase.auth().signOut()
      .then(() => {
        goLoginPage();
        console.log('salir');
      })
      .catch((error) => {
        console.log('error saliendo');
      });
  });
};

//   #Agregando Posts
//   db.collection("posts").add({
//   name: "Tami",
//   place: "Cajon del Maipo",
//   description: "Lugar para acampar"
//   })
//   .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//   console.error("Error adding document: ", error);
//   });

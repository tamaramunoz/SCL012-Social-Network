/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  perfilInfo,
} from './perfil.js';

export const goHome = () => {
  document.getElementById('root').innerHTML = `
        <div class="inicio-home" id="inicio"></div>
            <nav class="topnav">
                <a id="btn-home" href="#">Home</a>
                <a id="btn-perfil">Perfil</a>
                <a id="btnLogOut" href="#" style="float:right">Cerrar sesión</a>
            </nav>
        <div id="perfil-content"></div>
        <div id="home-content"</div>`;

  /* Button perfil */
  document.getElementById('btn-perfil').addEventListener('click', (evt) => {
    perfilInfo();
  });

   /* Button home */
   document.getElementById('btn-home').addEventListener('click', () => {

  });

  // Button Logout.
  document.getElementById('btnLogOut').addEventListener('click', () => {
    firebase.auth().signOut()
      .then(function () {
        goLoginPage();
        console.log('salir');
      })
      .catch(function (error) {
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

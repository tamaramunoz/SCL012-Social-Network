/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  perfilInfo,
} from './perfil.js';

export const goHome = () => {
  window.location.hash = '/home';
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
  <div id="postsUsers"> 
  <ul id="lista"><div id="usuario"></div></ul> </div>
  <textarea name="message" id="message" class="texts"></textarea> 
  <div id="postButton">
  <input type="button" value="Postear" id="buttonPost" class="firstButton">
  </div>          
  </div>`;

  // RECUPERACIÓN DE POSTS
  const ulList = document.getElementById('lista');

  const starCountRef = firebase.database().ref().child('posts/');
  starCountRef.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val().body;
    ulList.appendChild(li);
  });

  document.getElementById('buttonPost').addEventListener('click', () => {
    const database = firebase.database();
    const user = firebase.auth().currentUser;
    console.log(user);

    let uid = user.uid;
    let username = user.displayName;
    let picture = user.photoURL;
    let title = '';
    let body = document.getElementById('message').value;
    document.getElementById("message").innerHTML="";
    const writeNewPost = (uid, username, picture, title, body) => {
      // A post entry.
      let postData = {
        author: username,
        uid: uid,
        body: body,
        title: title,
        starCount: 0,
        authorPic: picture
      };
      console.log(postData);
      // Get a key for a new Post.
      let newPostKey = firebase.database().ref().child('posts').push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      let updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + uid + '/' + newPostKey] = postData;

      return firebase.database().ref().update(updates);
    };

    writeNewPost(uid, username, picture, title, body);
    //  printPost();
  });

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

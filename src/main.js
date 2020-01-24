import { goLoginPage } from './pages/login.js'
import { goHome } from './pages/home.js';
import './firebase-init.js';

// #Observador de autenticación
const stateObserved = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('usuario activo');
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      goHome();
    } else {
      goLoginPage();
      console.log('no existe usuario activo');
    }
  });
}
stateObserved();

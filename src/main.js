import {
  goLoginPage
} from './pages/login.js'
import './firebase-init.js';
import { goHome } from './pages/home.js';

firebase.auth().onAuthStateChanged(function(user) { 
  if (user) {
    // User is signed in.
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
  }
});
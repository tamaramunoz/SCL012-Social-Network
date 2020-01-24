// LOGIN CON FACEBOOK

export const googleLogin=()=> {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  
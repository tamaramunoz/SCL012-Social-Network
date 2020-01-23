// LOGIN CON FACEBOOK

export const facebookLogin=()=> {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  
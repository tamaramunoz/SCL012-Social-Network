// aqui exportaras las funciones que necesites
// LOGIN CON GOOGLE
export const googleLogin=()=> {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  
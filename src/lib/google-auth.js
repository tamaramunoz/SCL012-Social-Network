// aqui exportaras las funciones que necesites
// LOGIN CON GOOGLE
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);

  // Using a redirect.
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    const token = result.credential.accessToken;
  }
  const user = result.user;
});
}
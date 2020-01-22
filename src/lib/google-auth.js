// aqui exportaras las funciones que necesites
// LOGIN CON GOOGLE
const GoogleIn = document.getElementById("loginGoogle");
export const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}
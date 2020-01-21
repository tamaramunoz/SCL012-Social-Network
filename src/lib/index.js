// aqui exportaras las funciones que necesites
export const myFunction = () => {
  console.log('hola ratsi')
}

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDgD6mNHghURun7IwcQZqbREOFcYXY4z-Q",
  authDomain: "bitacora-d5fc4.firebaseapp.com",
  projectId: "bitacora-d5fc4",
});
// inicializando cloud firestore
let db = firebase.firestore();


// agregando posts
db.collection("posts").add({
  name: "Tami",
  place: "Cajon del Maipo",
  description: "Lugar para acampar"
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});






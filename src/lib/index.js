// LOGIN CON EMAIL Y PWD
export const emailLogin=(email, password)=> {
  event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña Incorrecta');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }


// CREAR CUENTA MAIL Y PWD
export const createAccount=(email, password)=> {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
  }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email en uso"){
        alert("Correo en uso")
      } if (errorCode === "auth/email inválido"){
        alert("Email inválido")
      } if (errorCode === "auth/password débil"){
        alert("Contraseña tiene que tener más de 8 caracteres y una mayúscula")
      }
      alert(`${errorCode}`)
    });
}

export const logout = () => {
  firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
}



// // agregando posts
// db.collection("posts").add({
//   name: "Tami",
//   place: "Cajon del Maipo",
//   description: "Lugar para acampar"
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });



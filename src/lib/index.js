// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};



// LOGIN CON GOOGLE
export const googleLogin=()=> {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

// LOGIN CON FACEBOOK

export const facebookLogin=()=> {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

// LOGIN CON EMAIL Y PWD
export const emailLogin=(email, password)=> {
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, password)
  promise.catch(e=> console.log(e.message));
  
  
  //promise.catch(function(error) { });
      // Handle Errors here.
            
}

// CREAR CUENTA MAIL Y PWD
export const createAccount=(email, password)=> {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
    window.socialNet.verification();
  }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email en uso"){
        alert("Correo en uso")
      } if (errorCode === "auth/email inválido"){
        alert("Email inválido")
      } if (errorCode === "auth/password débil"){
        alert("Contraseña tiene que tener más de 8 caracteres y una mayúscula")
      }
      console.log(`${errorCode} ${errorMessage}`)
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


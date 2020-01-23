
// LOGIN CON EMAIL Y PWD
export const emailLogin=(email, password)=> {
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, password)
  promise.catch(e=> console.log(e.message));
}

// CREAR CUENTA MAIL Y PWD
export const createAccount=(email, password)=> {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  promise.catch(e=> console.log(e.message));
}


export const logout = () => {
  firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
}


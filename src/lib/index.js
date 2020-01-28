// LOGIN CON EMAIL Y PWD
export const emailLogin = (email, password) => {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Contraseña Incorrecta');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
};

// CREAR CUENTA MAIL Y PWD
export const createAccount = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    check ();
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/email en uso') {
      alert('Correo en uso');
    }
    if (errorCode === 'auth/email inválido') {
      alert('Email inválido');
    }
    if (errorCode === 'auth/password débil') {
      alert('Contraseña tiene que tener más de 8 caracteres y una mayúscula');
    }
    alert(`${errorCode}`);
  });

};

/* Validación de correo al usuario */
const check = () => {
<<<<<<< HEAD
  const user = firebase.auth.getInstance().getcurrentUser();
  user.sendEmailVerification()
  then(() => {}).catch((error) => {});
}
=======
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {}).catch((error) => {});
};
>>>>>>> 583c4eb3377639d6008e42d230113e39dc04dfcd

/* Cambio de contraseña */
const resetPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {})
    .catch((error) => {});
};

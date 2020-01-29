
// LOGIN CON EMAIL Y PWD
export const emailLogin = (email, password) => {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      alert("User signed in");
    })
    .catch((error) => {
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
    veriFyUser();
    alert("User account created");
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
const veriFyUser = () => {
  const user = firebase.auth().currentUser
  user.sendEmailVerification().then(() => {
    alert("Email sent!");
  }).catch("Email not sent!");
};

/* Cambio de contraseña */
export const resetPassword = () => {
  firebase.auth().sendPasswordResetEmail(user.email)
    .then(() => {
      alert("Email sent!");
    })
    .catch("Email not sent!");
};
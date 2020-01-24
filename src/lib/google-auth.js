// LOGIN CON GOOGLE

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

export const getProfilePicUrl = () => {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
const getUserName = () => {
  return firebase.auth().currentUser.displayName;
}

<<<<<<< HEAD
  const isUserSignedIn = () => {
    return !!firebase.auth().currentUser;
  }
} 
=======
const isUserSignedIn = () => {
  return !!firebase.auth().currentUser;
}
>>>>>>> 9d4f69f5755838aa0e4b888c87e69b8ac70eb2bd

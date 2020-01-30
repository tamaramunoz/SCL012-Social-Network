// CLAVES DE ACCESO A CONSOLA FIREBASE
const firebaseConfig = {
  apiKey: 'AIzaSyDgD6mNHghURun7IwcQZqbREOFcYXY4z-Q',
  authDomain: 'bitacora-d5fc4.firebaseapp.com',
  databaseURL: 'https://bitacora-d5fc4.firebaseio.com',
  projectId: 'bitacora-d5fc4',
  storageBucket: 'bitacora-d5fc4.appspot.com',
  messagingSenderId: '336372532933',
  appId: '1:336372532933:web:5d25b4eb0df322573712ac',
  measurementId: 'G-YBXSZ9NSY2',
};
// INICIALIZACIÓN DE FIREBASE
firebase.initializeApp(firebaseConfig);

const database = firebase.database();


const writeNewPost = (uid, username, picture, title, body) => {
  // A post entry.
  let postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };
console.log(postData);
  // Get a key for a new Post.
  let newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  let updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

export const writeUserData = (userId, name, email, imageUrl) => {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
};

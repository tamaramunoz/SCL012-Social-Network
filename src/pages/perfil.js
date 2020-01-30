export const perfilInfo = () => {
  window.location.hash = '/profile';
  const user = firebase.auth().currentUser;
  document.getElementById('perfil-content').innerHTML =
    `<div class="row">
       <div class="side">
         <div class="fakeimg">
             <img src= "${user.photoURL}" class="picture" alt="foto de perfil"/>
         </div> 
         <div class="info"> 
             <span class="name">${user.displayName}</span>
             <span class="email">${user.email}</span><br>
         </div>
         <div>
             <button id="btnSave-perfil" type="submit" class="btnSave">Editar perfil</button>
         </div>
       </div>
       <div class="main"> 
       <h2>PUBLICACIONES</h2>
       </div>
     </div>`;

  /* Button editar perfil */
  document.getElementById('btnSave-perfil').addEventListener('click', () => {
    perfilEdit();
  });
};

const perfilEdit = () => {
  window.location.hash = '/editProfile';
  const user = firebase.auth().currentUser;
  document.getElementById("perfil-content").innerHTML =
    `<div id="modalUser" class="w3-modal">
             <div class="perfil-section"
                    <div class="container-profile">
                        <div class="ft-perfil">
                         <img src= "${user.photoURL}" class="ft" alt="foto de perfil"/>
                        </div>
                    </div>
                 <form class="perfil-container">
                     <label for="Nombre completo"></label>
                     <input class="datosPerfil" type="text" id="perfilNombre" name="username" Placeholder="Nombre completo" required     value=${user.displayName} />
                     <label for="Email"></label> 
                     <input class="datosPerfil" type="email" id="perfilEmail " name="email" Placeholder="Email" required   value=${user.email} />
                     <label for="Pasword"></label> 
                     <input class="datosPerfil" type="password" id="perfilPassword" name="password-example" Placeholder="Contraseña" />
                     <button class="datosPerfil" id="save-perfil" type="submit">Actualizar</button>
                        </div>
                </form>
         </div>`;eveloper
=======
/* Button actualizar perfil */
         document.getElementById("save-perfil").addEventListener("click",()=>{
          updateProfile();
        })  
}

/* editar Datos perfil */
const updateProfile = () =>{
  const user = firebase.auth().currentUser;
  if (user != null) {
    user.updateProfile({
      displayName: ""
    });
    user.updateEmail().then(() => {
      alert("Email updated");
    }).cath((error) => {
      alert("Email not updated");
    })

  }else {
    alert("There is no user!");
  }
}
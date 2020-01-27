export const perfilInfo = () => {
  const user = firebase.auth().currentUser;
  document.getElementById("perfil-content").innerHTML =
        `<div class="container">
          <div class="container-profile">
            <div class="ft-perfil">
              <img src= "${user.photoURL}" class="ft" alt="foto de perfil"/>
            </div>
          </div>
          <div class="container-information"> 
            <div class="information">
              <span class="name">${user.displayName}</span>
              <span class="info">${user.email}</span>
            </div>
            <button  id="btnSave-perfil" type="submit">Editar perfil</button>
            </div>`

  /* Button editar perfil */
  document.getElementById("btnSave-perfil").addEventListener("click", () => {
    perfilEdit();
  });
};


const perfilEdit = () => {
  document.getElementById("perfil-content").innerHTML =
        `<div id="modalUser" class="w3-modal"></div>
             <div class="perfil-section"
                    <div class="container-profile">
                        <div class="ft-perfil">
                         <img src= "${user.photoURL}" class="ft" alt="foto de perfil"/>
                        </div>
                    </div>
                 <form class="perfil.container">
                     <label for="Nombre completo"></label>
                     <input class="datosPerfil" type="text" id="perfilNombre" name="username" Placeholder="Nombre completo" required     value=${user.displayName} />
                     <label for="Email"></label> 
                     <input class="datosPerfil" type="email" id="perfilEmail " name="email" Placeholder="Email" required   value=${user.email} />
                     <label for="Pasword"></label> 
                     <input class="datosPerfil" type="password" id="perfilPassword" name="password-example" Placeholder="Contraseña" required   />
                     <button class="datosPerfil" id="save-perfil" type="submit">Actualizar</button>
                        </div>
                </form>
         </div>`;
}
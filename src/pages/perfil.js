export const perfilEdit = () => {
    const user = firebase.auth().currentUser;
    document.getElementById("perfil-content").innerHTML =
 `<div id="modalUser" class="w3-modal">
     <form class="perfil.container">
         <div class="perfil-section"
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
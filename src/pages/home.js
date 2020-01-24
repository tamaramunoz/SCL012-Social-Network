export const goHome = () => {
    document.getElementById("root").innerHTML =
        `<div class= "inicio-perfil" id= "inicio">
     <p>Bienvenido</div>
     <button id= "btnLogOut" class= "btnLogOut">cerrar sesión</button>`;
    // / BOTON LOGOUT.
    document.getElementById("btnLogOut").addEventListener("click", () => {
        firebase.auth().signOut()
            .then(function () {
                goLoginPage();
                console.log("salir");
            })
            .catch(function (error) {
                console.log("error saliendo")
            })
    });

}
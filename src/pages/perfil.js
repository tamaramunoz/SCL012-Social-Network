import { goHome } from './pages/home.js';
import './firebase-init.js';
import{
    stateObserved
} from './main.js'

const btnEditPerfil = document.getElementById("datos-perfil")

export const perfilEdit = () => {
    document.getElementById("root").innerHTML =
  `<div
   <button id="datos-perfil" >Editar perfil</button>
    
   </div>`

}
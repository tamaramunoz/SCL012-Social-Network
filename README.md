# Bitacora

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

Te presentamos [Bitácora](https://.github.io/SCL012-Social-Network/src/index.html), la nueva red social turística que despertará al explorador que todos llevamos dentro y nos acompañará a explorar nuevos lugares, llevándonos a vivir inolvidables aventuras.

* ### **1.1 Usuario**
¿Cuántas veces has estado con deseos de salir a disfrutar de un buen lugar en tu tiempo libre y te has encontrado con que:
- No conoces los lugares que se encuentran en los alrededores de tu ciudad para acampar o bien salir por el día, o simplemente hacer una caminata?.

Y cuando te decides por algún lugar...
- No tienes referencias de este; no sabes que llevar, no tienes con quien ir o no tienes los implemenntos necesarios para tu excursión.

[Bitácora](https://.github.io/SCL012-Social-Network/src/index.html), es la red social que estabas esperando y que te ayudará a resolver todas las problemáticas antes mencionadas, permitiendo hacer de tus próximas salidas, en tu tiempo libre, una experiencia inolvidable.  


* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

* ### **1.2 Problematica del Usuario**
Bitácora nace luego de detectar la necesidad, en un grupo de potenciales usuarios, de disponer de una aplicación en donde pudiesen encontrar información actualizada aportada por otros usuarios sobre... 

Se revisaron las aplicaciones:


* ### **1.3 Objetivos de la Aplición**

## 2. Metodología UX


* ### **2.1 Encuesta**

Encuesta de formularios con google

* ### **2.2 Historias de Usuario**

Imagenes de las Historias de Usuario

* ### **2.3 Diagrama de Flujo**

Integrar los esquemas del diagrama de flujo

* ### **2.4 Prototipos de Baja Calidad**

Prototipos en balsamiq

* ### **2.5 Test de Usuario**

Hacer test de usuario con Loom

## 3. Pruebas Unitarias

Imagen de que pasamos todos los test unitarios

## 4. Futuras Mejoras
Qué le vamos a mejorar

La próxima versión de Bitácora, te permitirá:

- Ofrecer tus servicios como guía a otros usuarios que los necesiten,
- Contactar a otros usuarios de la plataforma para organizar excursiones en las que podrán seleccionar un guía.
- Vender, Arrendar o intercambiar equipo para la próxima excursión.


## 5. Herramientas

Visual Studio (HTML5, CSS3, JAVASCRIPT), Firebase, Trello, Balsamiq, Formularios Google (encuesta), Loom, GitBash, GitHub, Node.js, Jest.


## 6. Desarrolladoras

- Nayarett González
- Tamara Muñoz
- Vianny Reyes

División de tareas:
- Nayarett González:  Product Owner, HTML5 JavaScript CSS3, Prototipo Baja, Readme,

- Tamara Muñoz: Scrum Master, HTML5 JavaScript CSS3, Test de Usuario, Readme,

- Vianny Reyes: Integradora, HTML5 JavaScript CSS3, Prototipo Baja Calidad, Readme, 


## 7. Check List

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en éstas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

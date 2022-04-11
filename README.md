# To-Do-List with React.

Creando un lista de tareas interactiva con React (Uso de Hooks).

### Pre-requisitos 📋

1. Ordenador o dispositivo movil.
2. Programa donde copiar el repositorio. (Gitpod, VisualStudioCode, Pycharm ....)
3. Navegador web donde visualizar el resultado del codigo.


## Construido con 🛠️

* [HTML5] 
* [CSS3]  
* [Javascript](https://www.javascript.com/) - Usado para generar interactividad del DOM.
* [Bootstrap v5.1.3](https://getbootstrap.com/) - Libreria para el diseño del HTML.
* [React 17.0.2](https://es.reactjs.org/) - Biblioteca de interfaz para Javascript


## Deployment

Para lanzar este proyecto introduce en la consola el codigo de la ventana inferior, posteriormente si no se muestra el resultado escibre localhost en el buscador.
Valido para Windows, Mac, Linux o Gitpod.
```
$ npm install
```

```bash
  $ npm run start
```



## Estructura y explicación del codigo ⚙️

* La estructura del ejercicio se basa en componentes jsx de React y el uso del hook useState.
* Se crean dos componentes. Tarea (seran als tareas que se muestren que haya introducido el usuario previamente) y el componente Home que importa tarea y envia a index el completo.
* El codigo es basico. El usuario introduce una tarea en el input del landing page. Cuando presiona enter entra la funcion "handleKeyDown" la cual hace una callback a "validacion". Esta ultima funcion comprobara si la tarea esta vacia o si esta repetida. Si cumple ambas condiciones la insertara en el array principal de tareas. Al final en el landing page se muestra un contador de tareas.
* Posteriormente en Home hay un map del array principal. el cual recorre las tareas e inserta el componente "Tarea" por cada una de ellas. Se utiliza el hook "useState" para pasarle props a ese componenete.
* Dentro de Tarea insertamos un boton de eliminacion. el cual solo aparece al pasar el mouse por encima del componente. Al pulsar en ese boton se hace llamada a una funcion que elimina del array principal esa tarea por su indice. De esa forma en el proximo mapeao con la llamada al useState no aparecera.
* Finalmente en Index.js se importa Home y se renderiza.


## Autor ✒️

* **Jose Luis Gil** - *Navbar and Jumbotron* - [JoseLike](https://github.com/JoseLike)


También puedes mirar la lista de todos los [contribuyentes](https://github.com/JoseLike/traffic-light) quíenes han participado en este 



## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).
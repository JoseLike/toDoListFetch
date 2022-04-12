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

* La estructura del ejercicio es la misma que el ejercicio de toDoList (https://github.com/JoseLike/toDoList).
* Cambiamos la esttructura de dattos a objetos de tio {label:"", done:false}.
* Se incluye la estructura de conecttividad  a API mediante fetch, primero se hace un "GET" a la API mediante getTask. El resultado del Get lo guardamos en datta. Posteriormente hacemos un settLista(data) para que inserte los resultados en nuestro Array de tareas que se mapeara y mostrara. 
* Ese get lo pasamos en un useEffect con una sola ejecucion para que se inicie y por lo tanto nos muestre los datos guardados en la BBDD al recargar la pagina.
* Para guardar las tareas que introduce el usuario hacemos un peticion a la API mediante fetch "PUT". En updateTasks le pasamos body: JSON.stringify(lista), eso exportara el contenido del Array principal.
* Para que la app haga esta tarea de exportar automaticamente, pasamos updateTasks dentro de un useEffect, y como segundo argumento ponemos "lista", de esa forma se ejecutara cada vez que lista (nuestro array principal) se vea modificado.
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
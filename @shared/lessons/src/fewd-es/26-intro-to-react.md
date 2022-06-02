class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Introducción a React</h1>
</div>

---

## Una pequeña historia

React fue creado por Jordan Walke, un desarrollador de Facebook. Fue influenciado por XHP, una libreria HTML para PHP.

Se utilizó por primera vez en Facebook en 2011 para mostrar el suministro de noticias. Posteriormente se utilizó en Instagram en 2012.

El producto fue lanzado al público como un proyecto de código abierto en 2013, en la JSConf en Florida.

React ahora tiene una gran comunidad en todo el mundo y muchos recursos en línea. **Sin embargo, vale la pena señalar que React es nuevo y se actualiza con frecuencia.**

React utiliza una serie de funciones de ES6 y ESNext, que requieren transpilación con Babel antes de ser compiladas por el navegador. Esto significa que hay una cantidad razonable de configuración antes de que podamos comenzar a desarrollar con ella.

React también es muy diferente a otros frameworks JS, lo que significa que la curva de aprendizaje puede ser un poco empinada al principio. Sin embargo, una vez que superes el bache inicial, ¡te resultará muy útil y divertido!

---

## ¿En qué se diferencia React?

React se describe a sí mismo como **Una biblioteca de JavaScript para crear interfaces de usuario**.

Es muy nuevo y muy caliente en la industria en este momento. Ha alterado la forma en que los desarrolladores abordan el desarrollo web frontend y ha influido mucho en otros marcos JS como Angular y VueJS.

---

## Ejemplo

Descarga el siguiente archivo para seguir los siguientes <a href="https://github.com/pataruco/jsd/raw/master/labs/react/react-solution-code.zip" class="download-link">ejemplos </a>

---

## DOM API vs React

.row[
.col[

### DOM API

```js
const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});
```

]
.col[

### React

```js
const Element = {
  type: 'div',
  props: {
    style: {
      background: 'blue',
      width: 50,
      height: 50,
    },
    onClick: () => console.log('clicked'),
  },
};
```

]
]

---

## DOM API vs React

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React

```js
const container = document.querySelector('#root');

const Element = {
  type: 'div',
  props: {
    style: {
      background: 'blue',
      width: 50,
      height: 50,
    },
    onClick: () => console.log('clicked'),
  },
};

ReactDOM.render(Element, domContainer);
```

]
]

---

## DOM API vs React

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React

```js
const container = document.querySelector('#root');

const Element = React.createElement('div', {
  style: {
    background: 'blue',
    width: 50,
    height: 50,
  },
  onClick: () => console.log('clicked'),
});

ReactDOM.render(Element, domContainer);
```

]
]

---

## DOM API vs React

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React

```jsx
const container = document.querySelector('#root');

const Element = (
  <div
    style={{ width: 50, height: 50, background: 'blue' }}
    onClick={() => console.log('Clicked')}
  />
);

ReactDOM.render(Element, domContainer);
```

]
]

---

## DOM API vs React

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React component

```jsx
const container = document.querySelector('#root');

const Counter = () => (
  <div
    style={{ width: 50, height: 50, background: 'blue' }}
    onClick={() => console.log('Clicked')}
  />
);

ReactDOM.render(<Counter />, domContainer);
```

]
]

---

## Componentes

Lo principal que lo distingue de otros frameworks JS es que está _basado en componentes_.

Este paradigma de componentes facilita a los desarrolladores la reutilización de widgets útiles en sus sitios. Cada componente contiene toda la lógica, el marcado HTML y el estilo en un paquete autónomo.

---

## Componentes

.row[
.col[

### DOM API

```txt
        ┌─────────┐
        │Business │
        │  logic  │
        └─────────┘
             ▲           UI
             │          API
    ┌────────┴──────┐
─ ─ ┼ ─ ─ ─ ─ ─ ─ ─ ┼ ─ ─ ─
    │               │
    ▼               │
┌──────┐        ┌──────┐
│state │        │events│
└──────┘        └──────┘
```

]
.col[

### React

```txt

        ┌─────────┐
        │Business │
        │  logic  │
        └─────────┘
             ▲
             ▼
        ┌─────────┐
        │  React  │
        └─────────┘
             ▲
             │           UI
    ┌────────┴──────┐   API
─ ─ ┼ ─ ─ ─ ─ ─ ─ ─ ┼ ─ ─ ─
    │               │
    ▼               │
┌──────┐        ┌──────┐
│state │        │events│
└──────┘        └──────┘
```

]
]

---

## Componentes

.row[
.column[

```jsx
// Import packages and components
import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

// Export the component
export default MyComponent;
```

]
.column[

- Componentes puedes ser creados con `function` o functiones flechas con `const`
- Componentes puede ser exportados
- Los nombres de los componentes empiezan con la primera letra en mayúscula
- Los components deben retornar `return` JSX
  ]
  ]

---

## Propiedades (props)

.row[
.column[

Archivo del componente

```jsx
import React from 'react';

function MyComponent(props) {
  return <h1>{props.greeting}</h1>;
}

export default MyComponent;
```

Archivo de render

```jsx
<MyComponent greeting="Hello Word">
```

Como se ve en el navegador

```html
<h1>Hello Word</h1>
```

]
.column[

- El equivalente en React de parametros en functiones
- Agrupados en un objeto predeterminadamente
- Una buena práctica es llamarlos `props` cuando escribas el componente
- Pueden ser destructurados pare mejor legibilidad
- Pueden tener valores predeterminados
  ]
  ]

---

## Estado (state)

- Describe al componente y sus caracteristicas
- Los desarrolladores de React se refieren al "estado de configuración"
- Controla la data dentro del componente

---

## Flujo de datos unidireccional

En React, los datos solo pueden fluir en una dirección. A medida que cambian los datos subyacentes, la vista se actualizará, pero para que la capa de vista afecte a los datos, se debe activar una acción. No hay _actualización automática_. Esto ayuda a reducir los gastos generales y simplifica la gestión de datos.

Un componente puede administrar sus propios datos (conocido como "estado"), o puede recibir datos de otro componente (conocido como "props"). Cuando cambien el estado o los accesorios, React volverá a renderizar el componente que, a su vez, actualiza la vista.

---

## DOM virtual

React emplea un _DOM virtual_. Tiene una copia del DOM en memoria en todo momento. Cuando la vista necesite actualizarse, React actualizará este DOM virtual primero. Esto es fácil de hacer porque ya está en la memoria.

Una vez que se ha actualizado el DOM virtual, React comprueba cuáles son las diferencias entre el DOM virtual y el DOM real. React puede simplemente actualizar los nodos DOM que han cambiado.

Este enfoque es exclusivo de React y es lo que lo hizo mucho más rápido en el renderizado que cualquiera de sus rivales.

---

## JSX

`JSX` es una sintaxis para crear fácilmente elementos HTML con React. No es un lenguaje en sí mismo, simplemente azúcar sintáctico alrededor del método "createElement" de React.

Básicamente, `JSX` se puede utilizar para escribir el marcado` HTML` directamente en nuestro código fuente JavaScript. Se siente un poco extraño al principio, pero después de un tiempo se vuelve una segunda naturaleza.

En JavaScript podemos crear nodos HTML con el método `document.createElement ()`. React tiene un método similar, que crea un elemento en el DOM virtual.

---

## JSX

Aquí hay un ejemplo de cómo crear una etiqueta `<h1>` con el método `createElement` de React:

```js
React.createElement('h1', { className: 'header' }, 'Hello World!');
```

Esto crea el siguiente HTML en el DOM virtual:

```html
<h1 class="header">Hello World!</h1>
```

En lugar de tener que escribir `React.createElement ()`, podemos usar JSX como una abreviatura para el mismo método:

```jsx
<h1 className="header">Hello World!</h1>
```

Se parece a HTML, pero no lo es, en realidad es JavaScript, y por eso no podemos usar la propiedad `class`, ya que es una palabra reservada en JavaScript. En su lugar, usamos `className`.

---

## React Native

Facebook también ha lanzado React Native, que permite a los desarrolladores de React crear fácilmente aplicaciones nativas para iOS y Android. Aunque no veremos React Native en el curso, es digno de mención, ya que permite a los desarrolladores frontend una nueva oportunidad para crear productos que anteriormente requerían una gran inversión de tiempo y dinero. Otra razón más por la que React está cambiando la forma en que trabajamos en la industria.

---

## Webpack

> **Note**: **Webpack no es parte de React**

Debido a que React debe transpilarse de ES6 a ES5, y JSX a ES5, debe someterse a algún tipo de tarea automatizada. Hay muchas herramientas que pueden hacer esto, pero la comunidad tiende a favorecer Webpack. Es fácil de usar y razonablemente fácil de configurar.

Webpack analiza el código fuente e identifica JS, JSX, CSS y activos y los maneja de manera adecuada en función de su extensión de archivo. Eso nos permite hacer algunas cosas locas como _importar estilos en archivos JavaScript_

---

## Poniendolo todo junto: A Simple React App

> **Note:** Esta sección requiere una configuración de paquete web y la instalación de algunos paquetes npm.

---

## La plantilla HTML

React necesita un mínimo de HTML para ejecutarse. A diferencia de Angular, solo necesitamos un único elemento `<div>` con una identificación:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My First React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Notará que aquí no hay una etiqueta de secuencia de comandos. Webpack lo inyectará por nosotros.

---

## El archivo JavaScript principal: `app.js`

Webpack está configurado para buscar el archivo `src/app.js` como el archivo JavaScript principal que cargará (o arrancará) nuestra aplicación. En el interior necesitamos decirle a React qué elemento HTML inyectar todo el HTML que generaremos con nuestra aplicación.

---

## Sintaxis de ES6

Podemos escribir React con ES5, pero es más fácil usar ES6, y dado que estamos usando JSX de todos modos, tenemos que transpilar nuestro código de cualquier manera.

Con ES5 importamos archivos como este:

```js
const React = require('react');
```

Con ES6 la hacemos así:

```js
import React from 'react';
```

---

## Sintaxis de ES6

Necesitamos importar `react` y `react-dom` siempre que estemos trabajando con proyectos web. `react` es la biblioteca principal, y `react-dom` es para conectarse al DOM de un navegador.

> **Nota:** Si estuviéramos haciendo un proyecto de iOS o Android, usaríamos `react-native` en su lugar.

Luego podemos hacer un componente simple llamado `App`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

ES6 introdujo clases de JavaScript. Son casi idénticas a las clases de Ruby y cumplen la misma función. En última instancia, se transfieren a funciones de constructor de ES5, ¡pero la sintaxis está más en consonancia con casi todos los demás lenguajes de programación!

---

## Conectando el componente al DOM

Finalmente, necesitamos conectar nuestro componente `App` al DOM:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

---

## Iniciar la aplicación

Podemos usar el Dev Server de Webpack para transpilar nuestro código y observar nuestros archivos en busca de cambios _ sobre la marcha_. Para iniciar el proceso, podríamos escribir `webpack-dev-server` en la terminal. Sin embargo, eso es un poco largo y fácil de escribir mal. En su lugar, en el `package.json` podemos agregar una sección de` scripts`:

```json
"scripts": {
  "start": "webpack-dev-server"
}
```

Esto significa que simplemente podemos escribir `yarn start` o` npm start` para iniciar el proceso `webpack-dev-server` en ejecución. Ahora debería ver la aplicación en todo su esplendor en `http://localhost: 8000`. Cualquier modificación que realice en el código fuente se actualizará automáticamente en el navegador.

---

## Conclusion

Parece mucho trabajo por muy poco valor en este momento, pero pronto comenzarás a ver cuán poderoso es React y cómo le permite construir aplicaciones complejas rápidamente.

La sintaxis puede parecer un poco incómoda al principio, pero en realidad, cuanto más la uses, ¡más verás cuán similar es React al JavaScript vainilla!

React no es adecuado para todos los proyectos, pero es extremadamente popular en este momento y hay muchos trabajos disponibles para los desarrolladores de React y, con el respaldo de Facebook, es probable que tenga soporte durante un buen tiempo.

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

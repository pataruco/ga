class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Componentes React</h1>
</div>

---

# Componentes React

.row[
.col[
Todo en React es un componente. Cuando pensamos en crear una aplicación en React, primero debemos establecer qué componentes debemos hacer.

Los componentes deben ser reutilizables. Un componente puede utilizarse de forma independiente o como parte de otro componente más grande.

Considere este carrito de compras. Se compone de más de 5 componentes, que trabajan juntos para que la aplicación funcione.
]
.col[
![Everything in React is a component](https://s3-us-west-2.amazonaws.com/techdojo-web/blog/react+table+2.png)
]
]

---

## Creando un componente en React

.row[
.col[

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return(
    <h1>Hello World!</h1>;
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

]
.col[
Como puede ver, un componente es simplemente una función que define la interfaz de usuario del componente.

Para que un componente de React `render`ice" algo al DOM debe tener retornar (`return`).

Un componente debe contener toda la lógica que necesita dentro de sí mismo. Luego se puede conectar a otros componentes para construir aplicaciones complejas.

Puedes pensar en ello como el cuerpo humano. Los pulmones solo saben cómo pasar oxígeno a la sangre y dióxido de carbono al esófago. El corazón solo sabe cómo bombear sangre por todo el cuerpo. Conectarlos permite que el cuerpo entregue oxígeno a todos los músculos.
]
]

---

## Creando un componente en React

## La capa de datos

Cada componente en una aplicación React en algún momento necesita mostrar algo al usuario en forma de HTML renderizado al DOM. Exactamente lo que muestran generalmente depende de algunos datos.

Puede ser una matriz de pájaros o los datos de un usuario en forma de objeto. Sea lo que sea, un componente de React maneja estos datos en forma de `state` o `props`.

### `state`

`state` son datos que viven dentro de un componente. Podemos agregar el estado a nuestro componente ʻApp` así:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = { message: 'Hello World!' };
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Este componente ahora muestra datos que se almacenan en el `state` del componente.

#### `constructor()` & `super()`

Para crear este objeto de estado en nuestro componente, necesitamos agregarlo cuando el componente es _instalado_ o creado. Recuerde que una clase en JavaScript es una función constructora. Cuando le indicamos a React que use este componente, primero creará una instancia del mismo. Algo como esto:

```js
const app = new App();
```

Aunque debido a que usamos JSX, lo que escribimos _actualmente_ es esto:

```js
ReactDOM.render(
  <App />, // new App() is called here in the background
  document.getElementById('root'),
);
```

Cuando esto sucede, se llama al método `constructor()`, que luego crea nuestro objeto de `state`.

El componente `extends` la clase `React.Component`. La clase `React.Component` contiene mucha funcionalidad extra que permite que nuestra clase se comporte como un componente. Llamar a `super()` llamará a la función `constructor()` en la clase padre, asegurando que se ejecute cualquier lógica.

### `props`

Podemos pasar datos a un componente usando `props`. Actualicemos nuestro componente ʻApp` para permitirle recibir datos a través de accesorios:

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { message: 'Hello World!' }
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
      <h2>Welcome, {this.props.name}!</h2>
    )
  }
}

ReactDOM.render(
  <App name="Mike" />,
  document.getElementById('root')
)
```

Si miramos el navegador veremos un mensaje de error:

```
Error in ./src/index.js Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag
```

React se queja porque tenemos etiquetas JSX adyacentes, básicamente React solo puede representar un solo elemento, con elementos secundarios anidados dentro. Envuelva todo en un elemento `<header>`:

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: 'Hello World!' };
  }

  render() {
    return (
      <header>
        <h1>{this.state.message}</h1>
        <h2>Welcome, {this.props.name}!</h2>
      </header>
    );
  }
}

ReactDOM.render(<App name="Mike" />, document.getElementById('root'));
```

Hemos agregado una propiedad `name` al componente `<App />`en el método `ReactDOM.render`. Parece un atributo en un elemento HTML, por ejemplo: `<input name="Mike">` donde el atributo es `name`.

Cuando agregamos un atributo a un componente de React, nos referimos a él como un `prop`, y se puede acceder a los datos dentro del componente a través de` this.props`.

Observe que hemos tenido que actualizar los métodos `constructor` y `super`. El método `constructor` obtiene los accesorios de React. En segundo plano, React está convirtiendo los atributos en el JSX en un objeto:

```js
<App name="Mike" />;
// identical to
new App({ name: 'Mike' });
```

Cuando cambien `props` o `state`, React volverá a renderizar el componente, actualizando la vista.

![Changing state or props updates a react component](https://discoversdkcdn.azureedge.net/postscontent/react%20native/how%20it%20works/image5.png)

## Anidando componentes

Bien, veamos cómo ahora podemos combinar componentes para crear una aplicación un poco más compleja.

Crearemos dos nuevos componentes `Header` y `Footer` y los anidaremos dentro de nuestro componente `App`.

#### Header

```js
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.message}</h1>
        <h2>Welcome, {this.props.name}!</h2>
      </header>
    );
  }
}

export default Header;
```

Ahora podemos importarlo en nuestro archivo `src/index.js` y anidarlo dentro de `App`:

```js
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: 'Hello World!' };
  }

  render() {
    return <Header name="Mike" message={this.state.message} />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Vea cómo hemos pasado el mensaje del `estado` de nuestro componente `App` al componente` Header` a través de accesorios.

#### Footer

```js
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Made with &hearts; at GA London</p>
      </footer>
    );
  }
}

export default Footer;
```

Una vez más, importemos esto en nuestro archivo `src/index.js` y agréguelo al método `render` de nuestro componente `App`:

```js
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = { message: 'Hello World!' }
  }

  render() {
    <Header name="Mike" message={this.state.message} />
    <Footer />
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

Si miramos el navegador veremos un mensaje de error:

```
Error in ./src/index.js Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag
```

Este es el mismo error que vimos anteriormente. React se queja porque tenemos etiquetas JSX adyacentes, así que envolvemos todo en un elemento `main`:

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: 'Hello World!' };
  }

  render() {
    <main>
      <Header name="Mike" message={this.state.message} />
      <Footer />
    </main>;
  }
}
```

#### `children`

Finalmente, podemos anidar componentes colocándolos entre las etiquetas de apertura y cierre del componente. Creemos un tercer componente que simplemente mostrará una imagen y un título:

```js
import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <img
          src="https://laracasts.com/images/series/squares/do-you-react.jpg"
          alt="React"
        />
        <p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>
      </section>
    );
  }
}

export default Hero;
```

De nuevo, importemos nuestro componente, pero esta vez lo incluiremos dentro del elemento JSX `<App />`:

```js
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

class App extends React.Component {
.
.
.
}

ReactDOM.render(
  <App>
    <Hero />
  </App>,
  document.getElementById('root')
)
```

El componente `Hero` se ha pasado al componente `App` a través de "accesorios" y se ha almacenado en un elemento llamado `children`. Cualquier cosa entre las etiquetas de apertura y cierre de un componente se pasará al componente como `props.children`.

Para renderizarlo necesitamos agregarlo al método `render ()` de `App`:

```js
render() {
  <main>
    <Header name="Mike" message={this.state.message} />
    {this.props.children}
    <Footer />
  </main>
}
```

Es importante tener en cuenta que es difícil pasar datos de `App` a `Hero` de esta manera. Aunque es posible pasar datos desde el `state` en la aplicación a Hero a través de `props` usando este método, es complejo y requiere técnicas avanzadas de React. En términos generales,`this.props.children` solo debe usarse con componentes y elementos DOM que no necesitan recibir accesorios en sí mismos.

## Otras lecturas

- [React JS Tutorial - Nesting Components #6](https://www.youtube.com/watch?v=7VOko6eXb8s)
- [A quick intro to React's props.children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)
- [Thinking In React - ReactJS](https://reactjs.org/docs/thinking-in-react.html)

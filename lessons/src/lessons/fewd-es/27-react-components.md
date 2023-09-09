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

### La capa de datos

Cada componente en una aplicación React en algún momento necesita mostrar algo al usuario en forma de HTML renderizado al DOM. Exactamente lo que muestran generalmente depende de algunos datos.

Puede ser una matriz de pájaros o los datos de un usuario en forma de objeto. Sea lo que sea, un componente de React maneja estos datos en forma de `state` o `props`.

---

### `state`

`state` son datos que viven dentro de un componente. Podemos agregar el estado a nuestro componente `App` así:

.row[
.col[

```jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [message] = setState('Hello World!');

  return(
    <h1>{message}</h1>;
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

]
.col[
Este componente ahora muestra datos que se almacenan en el `state` del componente.

]
]

---

### `props`

Podemos pasar datos a un componente usando `props`. Actualicemos nuestro componente `App` para permitirle recibir datos a través de `props`:

.row[
.col[

```jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = (props) => {
  const [message] = setState('Hello World!');

  return(
    <h1>{message}</h1>;
    <h2>Welcome, {this.props.name}!</h2>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="Mike" />);
```

]
.col[
Si miramos el navegador veremos un mensaje de error:

`Error in ./src/index.js Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag`

]
]

---

### `props`

Podemos pasar datos a un componente usando `props`. Actualicemos nuestro componente `App` para permitirle recibir datos a través de `props`:

.row[
.col[

```jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = (props) => {
  const [message] = setState('Hello World!');

  return (
    <header>
      <h1>{message}</h1>
      <h2>Welcome, {this.props.name}!</h2>
    </header>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="Mike" />);
```

]
.col[

React se queja porque tenemos etiquetas JSX adyacentes, básicamente React solo puede representar un solo elemento, con elementos secundarios anidados dentro. Envuelva todo en un elemento `<header>`:

]
]

---

### `props`

.row[
.col[

```jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = (props) => {
  const [message] = setState('Hello World!');

  return (
    <header>
      <h1>{message}</h1>
      <h2>Welcome, {this.props.name}!</h2>
    </header>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="Mike" />);
```

]
.col[

Hemos agregado una propiedad `name` al componente `<App />`en el método `root.render`. Parece un atributo en un elemento HTML, por ejemplo: `<input name="Mike">` donde el atributo es `name`.

Cuando agregamos un atributo a un componente de React, nos referimos a él como un `prop`, y se puede acceder a los datos dentro del componente a través de ` props`.

En segundo plano, React está convirtiendo los atributos en el JSX en un objeto:

```js
<App name="Mike" />;
// identical to
new App({ name: 'Mike' });
```

]
]

---

## Actualización de componente

Cuando cambien `props` o `state`, React volverá a renderizar el componente, actualizando la vista.

![Changing state or props updates a react component](https://discoversdkcdn.azureedge.net/postscontent/react%20native/how%20it%20works/image5.png)

---

## Anidando componentes

Bien, veamos cómo ahora podemos combinar componentes para crear una aplicación un poco más compleja.

Crearemos dos nuevos componentes `Header` y `Footer` y los anidaremos dentro de nuestro componente `App`.

### Header

```js
import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.message}</h1>
      <h2>Welcome, {props.name}!</h2>
    </header>
  );
};

export default Header;
```

---

## Anidando componentes

Ahora podemos importarlo en nuestro archivo `src/index.js` y anidarlo dentro de `App`:

```jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';

const App = (props) => {
  const [message] = setState('Hello World!');

  return <Header name="Mike" message={message} />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="Mike" />);
```

Observa cómo hemos pasado el mensaje del `estado` de nuestro componente `App` al componente `Header` a través de `props`.

---

## Anidando componentes

### Footer

```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Made with &hearts; at GA London</p>
    </footer>
  );
};

export default Footer;
```

---

## Anidando componentes

Una vez más, importemos esto en nuestro archivo `src/index.js` y agreguemoslo de nuestro componente `App`:

.row[
.col[

```jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';

const App = (props) => {
  const [message] = setState('Hello World!');

  return (
    <Header name="Mike" message={message} />
    <Footer />
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="Mike" />);
```

]
.col[

Si miramos el navegador veremos un mensaje de error:

`Error in ./src/index.js Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag`

]
]

---

## Anidando componentes

Una vez más, importemos esto en nuestro archivo `src/index.js` y agreguemoslo de nuestro componente `App`:

.row[
.col[

```jsx
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';

const App = (props) => {
  const [message] = setState('Hello World!');

  return (
    <>
      <Header name="Mike" message={message} />
      <Footer />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App name="Mike" />);
```

]
.col[

Este es el mismo error que vimos anteriormente. React se queja porque tenemos etiquetas JSX adyacentes, así que envolvemos todo en un elemento fragmento `<></>`:

]
]

---

## `children`

Finalmente, podemos anidar componentes colocándolos entre las etiquetas de apertura y cierre del componente. Creemos un tercer componente que simplemente mostrará una imagen y un título:

```js
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="https://laracasts.com/images/series/squares/do-you-react.jpg"
        alt="React"
      />
      <p>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</p>
    </section>
  );
};

export default Hero;
```

De nuevo, importemos nuestro componente, pero esta vez lo incluiremos dentro del elemento JSX `<App />`:

---

## `children`

```js
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';

const App = (props) => {
  //
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App name="Mike">
    <Hero />
  </App>,
);
```

---

## `children`

.row[
.col[
El componente `Hero` se ha pasado al componente `App` a través de `props` y se ha almacenado en un elemento llamado `children`. Cualquier cosa entre las etiquetas de apertura y cierre de un componente se pasará al componente como `props.children`.

]
.col[

```js
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';

const App = (props) => {
  const [message] = setState('Hello World!');

  return (
    <>
      <Header name="Mike" message={message} />
      {props.children}
      <Footer />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App name="Mike">
    <Hero />
  </App>,
);
```

]
]

---

## `children`

Es importante tener en cuenta que es difícil pasar datos de `App` a `Hero` de esta manera. Aunque es posible pasar datos desde el `state` en la aplicación a Hero a través de `props` usando este método, es complejo y requiere técnicas avanzadas de React. En términos generales, `props.children` solo debe usarse con componentes y elementos DOM que no necesitan recibir `props` en sí mismos.

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

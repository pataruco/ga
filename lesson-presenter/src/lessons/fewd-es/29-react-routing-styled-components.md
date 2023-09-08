class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Enrutamiento en React <wbr> y <code>styled-components</code></h1>
</div>

---

## React router

React no viene con un enrutador incorporado, por lo que depende de ti decidir cómo enrutar su aplicación.

Tus principales opciones son:

- Crea el tuyo
- Utiliza [React Router](https://reactrouter.com/)
- Utiliza otro enrutador de terceros

Generalmente, los desarrolladores usan React Router a menos que tengan una buena razón para no hacerlo. Está bien documentado y hay mucha ayuda en línea.

Sin embargo, una pequeña advertencia: ha habido una serie de iteraciones de React Router. Actualmente es v6, que es muy diferente a v4 y v3. Así que asegurate de saber qué versión está utilizando.

---

## Instalación

Instalar con `npm` o `yarn`:

```sh
yarn add react-router-dom
```

> **Note**: React Router tiene un paquete separado para React Native: `react-router-native`. Ambos paquetes dependen de `react-router` que se instala automáticamente.

Hay tres componentes principales que instalar:

- `<BrowserRouter />`: el componente principal
- `<Route />`: Una ruta o 'página' individual
- `<Link />`: Un componente auxiliar para cambiar la URL
- `<Routes />`: Un componente auxiliar para envolver `<Route>`
  Importarlos a tu proyecto de esta manera:

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

---

## Un ejemplo simple

```jsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="estudiantes" element={<Estudiantes />}>
          <Route path=":id" element={<Estudiante />} />
          <Route path="new" element={<NuevoEstudiante />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
```

---

## Styled components

Tradicionalmente, hemos dividido las páginas web en marcado (HTML), estilo (CSS) y lógica (JavaScript).

Ahora que estamos trabajando con React, ya hemos visto cómo el marcado y la lógica aparecen en el mismo archivo (usando JSX). Pete Hunt (uno de los primeros desarrolladores que trabajaron en React)[dijo](https://www.youtube.com/watch?v=x7cQ3mrcKaY&feature=youtu.be&t=2m7s) mientras defiendia la naturaleza controvertida de JSX, _"durante mucho tiempo nos hemos visto obligados a separar nuestras tecnologías en lugar de nuestras preocupaciones"_.

La charla de Pete también toca los siguientes puntos:

- A menudo, la lógica de visualización y el marcado están inevitablemente **acoplados**.
- Esto también significa que la lógica de visualización y el marcado son altamente **cohesivos**.
- El código JavaScript que controla la interfaz de usuario y el marcado hacen básicamente lo mismo: manejan los eventos del usuario y le muestran datos.
- Es una separación de tecnologías que está utilizando para implementar la misma preocupación.

---

## Enfoques tradicionales

### 1. Estilo de la vieja escuela

Ya hemos visto cómo vincular una hoja de estilo a nuestras aplicaciones React usando la sintaxis `import`:

```js
import './scss/style.scss';
```

Esto nos permite hacer el tipo de estilo con el que estamos familiarizados: agregar ID y clases, configurar variables y mixins si usamos SCSS y esperar lo mejor. En CSS, todo es global de forma predeterminada, lo que significa que a menudo debemos tener cuidado al anular estilos y realizar actualizaciones en nuestro CSS que alterarán inesperadamente otras áreas de la aplicación.

Este enfoque es aceptable al principio, pero a medida que su aplicación crece en complejidad, puede ser una buena idea pasar a una solución más estructurada.

---

## Enfoques tradicionales

### 2. Metodologías de CSS

¿Qué sucede cuando tu aplicación comienza a expandirse y se agregan nuevos conceptos? Los selectores CSS amplios son globales. El problema empeora aún más si tiene que lidiar con el orden de carga. Si los selectores terminan en empate, la última declaración gana, a menos que haya `!important` en alguna parte.

Podríamos combatir este problema haciendo que los selectores sean más específicos, usando algunas reglas de nomenclatura, etc. Eso solo retrasa lo inevitable. Como la gente ha luchado con este problema durante un tiempo, han surgido varias metodologías.

Existen muchas metodologías que apuntan a reducir la huella de CSS, organizar la cooperación entre programadores y mantener grandes bases de código CSS.

En particular, OOCSS (CSS orientado a objetos), SMACSS (enfoque escalable y modular para CSS) y BEM (modificador de elementos de bloque) son bien conocidos. Cada uno de ellos resuelve problemas de CSS a su manera.

> Consulta sobre [BEM](http://getbem.com/introduction/) para ver de qué se trata.

---

## Enfoques basados en React

Con React tenemos algunas alternativas adicionales. ¿Qué pasa si la forma en que hemos estado pensando sobre el estilo ha sido equivocada? CSS es poderoso, pero puede convertirse en un desastre imposible de mantener sin un poco de disciplina. Hay varios enfoques en React que nos permiten llevar el estilo al nivel del componente.

---

## Enfoques basados en React

### 3. Estilos en línea

Agregar estilos en línea a HTML usando el atributo `style` ha estado lejos de ser una buena práctica durante mucho tiempo, pero se sabe que los desarrolladores de React cuestionan las mejores prácticas (¡piensa en JSX!). Puede parecer contrario a la intuición,
pero las características fundamentales de React caen en esta misma categoría. ¿Quién hubiera pensado que pondría toda su jerarquía de vistas en una función de representación?

---

## Enfoques basados en React

### 3. Estilos en línea

.row[
.col[
Hay algunas cosas a tener en cuenta al escribir [estilos en línea](https://zhenyong.github.io/react/tips/inline-styles.html) dentro de un componente React:

- Cuando codificamos estilos en línea con React, todos nuestros estilos están escritos en Javascript, no en CSS
- Los atributos CSS deben ser camel case
- Los valores normalmente están envueltos en una cadena
- Tener estilo a nivel de componente significa que podemos implementar una lógica que altere esos estilos fácilmente

  ]
  .col[

```js
import React from 'react';

const Button = () => {
  const styles = {
    backgroundColor: 'dodgerblue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
  };

  return <button style={styles}>Click</button>;
};

export default Button;
```

]
]

---

## Enfoques basados en React

### 3. Estilos en línea

Si te preocupa saturar tu archivo de componentes con CSS, siempre puede mover los estilos a un archivo separado e importarlos, pero ten en cuenta que esto hace que sea menos sencillo usar la lógica dentro del objeto de estilos.

.row[
.col[

```js
// button-styles.js

export default {
  backgroundColor: 'dodgerblue',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '8px 12px',
};
```

]
.col[

```js
// button.js

import React from 'react';

import styles from './button-styles.js';

const Button = () => {
  return <button style={styles}>Click</button>;
};

export default Button;
```

]
]

La idea sería que cada componente tenga su propio archivo `-styles.js` que se importe al archivo del componente, asegurando que no haya estilos globales y que los estilos de un componente no puedan afectar a otro componente.

---

## Enfoques basados en React

### 3. Estilos en línea

| Pros                                                                                                   | Cons                                                                   |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Sin estilos globales, todo es un objeto de estilo local                                                | Dado que todo está en JS, no hay `@media`                              |
| Dependencias explícitas usando la sintaxis de importación                                              | No hay soporte nativo para pseudoselectores, como hover o last-child   |
| Fácil de compartir valores entre componentes cuando sea necesario                                      | No es una buena opción para animaciones reutilizables                  |
| El aislamiento garantiza que el estilo de los componentes no influya en el estilo de otros componentes | Dificultad para realizar cambios grandes y radicales en nuestro código |

---

## Enfoques basados en React

### 4. Modulos CSS

La premisa de los Módulos CSS es simple: cada componente de React obtiene su propio archivo CSS, que tiene como alcance ese archivo y componente. La magia ocurre en el momento de la compilación, cuando los nombres de las clases locales, que pueden ser súper simples sin correr el riesgo de colisiones, se asignan a los generados automáticamente (hash) y se exportan como un objeto de JavaScript para usar dentro de los componentes de React.

---

## Enfoques basados en React

### 4. Modulos CSS

Por ejemplo, dos hojas de estilo podrían usar la misma clase `.button`, pero gracias a los módulos CSS, los nombres de las clases tendrán un hash único, lo que significa que los estilos no interferirán entre sí ni se anularán entre sí.

Cree un archivo `button-styles.scss` dentro del directorio `scss`.

```css
.button {
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
}
```

---

## Enfoques basados en React

### 4. Modulos CSS

El compilador CSS de Webpack luego genera un hash para cada selector, conocido en Webpack como el nombre de identificación local. Este selector hash se convierte en único en la página.

Después de hash, el nombre de la clase se verá así:

```css
.button--99a0f {
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
}
```

Incluso si dos archivos usan el mismo nombre de selector, el hashing lo hará único.

Importe este archivo en el componente `Button.js`:

```js
import css from './scss/button-styles.scss';
```

---

## Enfoques basados en React

### 4. Modulos CSS

Como autor de componentes de React, cuando importas el módulo CSS, lo que realmente importa es el objeto de exportaciones CSS. Este objeto contiene cada uno de sus nombres de selector originales como claves en el objeto. Los valores son los selectores hash asociados. Luego podemos agregar este nombre de clase con hash al componente `Button` de esta manera:

```js
const Button = () => {
  return <button className={css.button}>Click!</button>;
};
```

Al especificar el atributo `className`, utiliza la clave de objeto de exportación, pero el valor que se sustituye después del tiempo de compilación y en el tiempo de ejecución será el selector con hash. Simple y poderoso.

```html
<button class="button--99a0f">Click!</button>
```

---

## Enfoques basados en React

### 4. Modulos CSS

| Pros                                                                                   | Cons                                      |
| -------------------------------------------------------------------------------------- | ----------------------------------------- |
| Un paso hacia componentes modulares y reutilizables que no tendrán efectos secundarios | No es facil de leer por humanos en el DOM |
| Nombres de clase más cortos y semánticos                                               |                                           |
| Archivos CSS más pequeños                                                              |                                           |

Para muchos desarrolladores de React, los módulos CSS son increíbles. Son una gran mezcla de los mundos de CSS en línea y externo. Obtiene gran parte de la sensación de _estilos en línea_ modulares locales, y también puede escribir sus estilos usando el lenguaje CSS. Esto significa que podemos usar pseudoselectores, consultas de medios y animaciones de fotogramas clave como de costumbre sin necesidad de traer ningún paquete adicional.

---

## Enfoques basados en React

### 5. Styled Components 💅

[Styled-Components](https://www.styled-components.com/) es una nueva herramienta CSS, creada por Max Stoiber y Glen Maddern, que ayuda a organizar CSS en un proyecto React. Hay una [charla](https://www.youtube.com/watch?v=jaqDA7Btm3c) que Max dio en una conferencia de React sobre componentes con estilo que vale la pena ver.

Lo principal que debe comprender acerca de `styled-components` es que su nombre debe tomarse literalmente. Ya no aplica estilos a elementos o componentes HTML en función a su clase o elemento HTML: en su lugar, define componentes con estilo que poseen sus propios estilos encapsulados. Entonces los estás usando en toda tu base de código.

---

## Enfoques basados en React

### 5. Styled Components 💅

Los objetivos de los componentes con estilo:

1. Deshacerse de la asignación entre estilos y componentes — La mayoría de las veces, un componente pequeño siempre tiene su propio archivo pequeño `style.css` relacionado. Por lo tanto, debes crear dos archivos cada vez que desee crear el componente pequeño. Esto parece estar bien al principio, sin embargo, cuando su proyecto se haga más grande, terminarás con un montón de archivos. `styled-components` te permite escribir CSS directamente dentro del componente.
2. Construcción de componentes pequeños y reutilizables — Los componentes pequeños se pueden reutilizar y probar fácilmente. Mediante el uso de `styled-components`, puedes crear un componente pequeño y ampliar su capacidad con `props`.
3. Reducir el riesgo de choque de especificidades. Por ejemplo, solo quieres agregar un margen a un párrafo específico, pero impacta involuntariamente en los otros párrafos. Puede resolver este problema fácilmente aplicando una clase CSS solo una vez. `styled-components` está haciendo esto por nosotros. Genera automáticamente un nombre de clase único y lo pasa a nuestro componente.

---

## Enfoques basados en React

### 5. Styled Components 💅

Para usarlo en su proyecto, primero instálelo usando npm o yarn:

```sh
yarn add styled-components
```

Crea un archivo llamado para contener su componente, como `StyledButton.js`:

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
`;

export default StyledButton;
```

---

## Enfoques basados en React

### 5. Styled Components 💅

Importe este botón a otro archivo:

```js
import StyledButton from './styledButton';
```

```js
return (
  <main>
    <StyledButton>Styled Component</StyledButton>
  </main>
);
```

---

## Enfoques basados en React

### 5. Styled Components 💅

Puede anidar componentes con estilo dentro de otros componentes con estilo. Aquí está el ejemplo básico de los documentos.

```js
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
return(
  <Wrapper>
    <Title>Hello World, this is my first styled component!</Title>
  </Wrapper>,
);
```

---

## Enfoques basados en React

### 5. Styled Components 💅

Otra característica de la biblioteca de `styled-components` es la capacidad de adaptar estilos basados en `props`. ([docs](https://www.styled-components.com/docs/basics#adapting-based-on-props)):

```js
const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

return(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>,
);
```

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

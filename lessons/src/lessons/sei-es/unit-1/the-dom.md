# .center[DOM]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# El DOM

El _Document Object Model_, comúnmente conocido como DOM, es una representación interactiva de HTML como una colección de objetos JavaScript.

Cada elemento del HTML se convierte en un nodo del DOM (como una rama en un árbol), con sus propias propiedades y métodos específicos. Un elemento `form` tendrá un método`onsubmit`, y un `button` un método `onclick`, por ejemplo.

---

# El DOM

Cada elemento está vinculado a su padre mediante propiedades y métodos. Si tuviéramos que dibujar un diagrama del DOM, podría verse así:

![](https://cloud.githubusercontent.com/assets/40461/8267269/558bf840-1751-11e5-8127-12c6e5c34041.png)

---

## Interactuando con el DOM

Cuando un navegador lee un archivo HTML, crea el DOM, convirtiendo cada elemento en un objeto. Una vez creado el DOM podemos acceder a cualquier elemento con JavaScript. Podemos almacenar el elemento en una variable y luego modificar sus propiedades y métodos, al igual que podemos hacerlo con un objeto estándar de JavaScript.

El DOM se representa en JavaScript con la palabra clave `document`. Usamos métodos especiales del objeto `document` para acceder a nodos específicos del DOM.

Si tuviéramos el siguiente HTML:

```html
<body>
  <h1 id="header" class="header">I am a header</h1>
</body>
```

---

## Interactuando con el DOM

Podemos acceder a `h1` en nuestro archivo JavaScript de las siguientes formas:

```js
// The following methods ALWAYS return a single object
const header = document.getElementById('header'); // targets an element by its id
const header = document.querySelector('#header'); // uses CSS selector syntax

// The following methods ALWAYS return an array of objects, so we use [0] to get the first one
const header = document.getElementsByTagName('h1')[0]; // targets elements by their tag
const header = document.getElementsByClassName('header')[0]; // targets elements by the class
const header = document.querySelectorAll('.header')[0]; // uses CSS selector syntax
```

Una vez que tengamos un elemento almacenado en una variable podemos modificarlo, lo que actualizará instantáneamente el DOM, y a su vez la página web.

Si quisiéramos cambiar el contenido de `h1` de" Soy un encabezado "a" JavaScript Rocks! " por ejemplo, podríamos modificar la propiedad `textContent` del encabezado:

```js
const header = document.querySelector('#header');
header.textContent = 'JavaScript Rocks!';
```

La página se actualiza instantáneamente.

---

## Creando un elemento DOM con JavaScript

También podemos crear nuestros propios elementos DOM y agregarlos al DOM. Si quisiéramos crear un `h2` debajo de nuestro`h1`, podríamos hacerlo así:

```js
// get the element you wish to add the new element to
const body = document.querySelector('body');

// create the h2 element
const h2 = document.createElement('H2');

// add some content
h2.textContent = 'I love it!';

// append the element to the parent
body.appendChild(h2);
```

---

## Creando un elemento DOM con JavaScript

Ene el inspector del navegador

<img
src="https://user-images.githubusercontent.com/3531085/35640472-26206478-06b5-11e8-972a-1e2ac158e647.png"
alt="Dev tools"
style="max-width: 200px">

Y el nuevo elemento `h2` ha aparecido en la pantalla.

---

## Propiedades y métodos comunes

A continuación se muestra una lista de las propiedades y métodos más comunes que utilizará en este curso:

| **Property / Method**        | **Description**                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------- |
| `element.children`           | Returns a collection of an element's child element (excluding text and comment nodes) |
| `element.classList`          | Returns the class names of an element                                                 |
| `element.classList.add()`    | Adds the class name to the element's class attribute                                  |
| `element.classList.remove()` | Removes the class name from the element's class attribute                             |
| `element.classList.toggle()` | Toggles the class name of an element's class attribute                                |
| `element.className`          | Sets or returns the value of the class attribute of an element                        |
| `element.id`                 | Sets or returns the value of the id attribute of an element                           |
| `element.offsetHeight`       | Returns the height of an element, including padding, border and scrollbar             |
| `element.offsetWidth`        | Returns the width of an element, including padding, border and scrollbar              |
| `element.textContent`        | Sets or returns the textual content of a node and its descendants                     |
| `element.innerHTML`          | Sets or returns the content of an element                                             |
| `element.parentElement`      | Returns the parent element node of an element                                         |
| `element.style`              | Sets or returns the value of the style attribute of an element                        |

---

## Propiedades y métodos comunes

| **Property / Method**              | **Description**                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| `element.click()`                  | Simulates a mouse-click on an element                                               |
| `element.cloneNode()`              | Clones an element                                                                   |
| `element.addEventListener()`       | Attaches an event handler to the specified element                                  |
| `element.removeEventListener()`    | Removes an event handler that has been attached with the addEventListener method    |
| `element.appendChild()`            | Adds a new child node, to an element, as the last child node                        |
| `element.removeChild()`            | Removes a child node from an element                                                |
| `element.replaceChild()`           | Replaces a child node in an element                                                 |
| `element.insertBefore()`           | Inserts a new child node before a specified, existing, child node                   |
| `element.getAttribute()`           | Returns the specified attribute value of an element node                            |
| `element.setAttribute()`           | Sets or changes the specified attribute, to the specified value                     |
| `element.removeAttribute()`        | Removes a specified attribute from an element                                       |
| `element.getElementsByClassName()` | Returns a collection of all child elements with the specified class name            |
| `element.getElementsByTagName()`   | Returns a collection of all child elements with the specified tag name              |
| `element.querySelector()`          | Returns the first child element that matches a specified CSS selector of an element |
| `element.querySelectorAll()`       | Returns all child elements that matches a specified CSS selector of an element      |

---

## Otras lecturas

- [What is the DOM?](https://css-tricks.com/dom/)
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [How To Understand and Modify the DOM in JavaScript](https://www.digitalocean.com/community/tutorials/introduction-to-the-dom)

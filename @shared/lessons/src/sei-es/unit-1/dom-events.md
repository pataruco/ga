# .center[Eventos DOM]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# Eventos DOM

Cuando se imprime una página web, el usuario puede interactuar con ella. Hacer clic en enlaces y botones para cambiar de página o hacer que aparezcan ventanas, ingresar información en formularios y ver las respuestas según las entradas. De estas y muchas otras formas, las páginas web responden a las acciones.

En otras palabras, las **páginas web se controlan por eventos**. Reaccionan a eventos iniciados por el usuario, como los clics del mouse o la entrada del teclado.

---

## Manejo de eventos

Cuando un usuario interactúa con una página web, el DOM emite un evento al que podemos conectarnos para activar alguna funcionalidad.

### Un simple controlador de eventos de `click`

Podemos escuchar un evento de clic de dos formas, ya sea directamente en el HTML con JavaScript en línea o en un archivo JavaScript vinculado al documento HTML.

Al igual que CSS, generalmente se considera una mala práctica usar JavaScript en línea, pero lo mostraremos:

```html
<button onclick="console.log('hello')">Click Me</button>
```

```js
const button = document.querySelector('button');
button.onclick = function () {
  console.log('hello');
};
```

Cuando se activa el evento `click`, se llama a una función. Esta función se conoce como _event handler_ o _event listener_.

---

## El `event`

Cuando se llama a un detector de eventos (_event listener_), este tiene acceso a un objeto `event` al que podemos interrogar para obtener más información sobre el evento. Esto nos dirá qué elemento activó el evento (el _target_), la hora en que se activó el evento, los métodos para evitar el comportamiento predeterminado del evento y más.

El objeto de evento se pasa al detector de eventos como primer argumento. Generalmente lo llamamos `event`, `e` o `evt`:

```js
const button = document.querySelector('button');
button.onclick = function (e) {
  console.log('hello');
  console.log(e.target); // => <button>Click Me</button> -- the button that triggered this event
  console.log(e.target.innerHTML); // => Click Me
};
```

---

## `this`

Dentro de detector de eventos (_event listener_), `this` apunta al elemento que desencadenó el evento si usamos una función (`function`) estándar. **Con una función de flecha, `this` no será el elemento, así que en este caso podemos usar`e.target`.**

```js
const button = document.querySelector('button');
button.onclick = function (e) {
  console.log(this); // => <button>Click Me</button> -- the button that triggered this event
  console.log(this.innerHTML); // => Click Me
};

button.onclick = (e) => {
  console.log(this); // => Window { ... }
  console.log(e.target); // => <button>Click Me</button> -- the button that triggered this event
  console.log(e.target.innerHTML); // => Click Me
};
```

---

## `addEventListener`

Si queremos escuchar un evento `click`, podemos agregar un detector de eventos (_event listener_) a la propiedad `onclick` del elemento, para un evento `submit` usaríamos la propiedad `onsubmit`, y así sucesivamente.

Si agregamos dos detectores de eventos a la misma propiedad, el segundo sobrescribirá al primero:

```js
const button = document.querySelector('button');
button.onclick = () => console.log('Hey');
button.onclick = () => console.log('Ho'); // Only this function would be called
```

Comúnmente, usaríamos el método `addEventListener` para agregar detectores de eventos a un elemento. De esta manera, varios oyentes de eventos pueden escuchar el mismo evento:

```js
const button = document.querySelector('button');
button.addEventListener('click', () => console.log('Hey'));
button.addEventListener('click', () => console.log('Ho')); // Both functions are called
```

---

## Eventos comunes

| Event       | Behaviour                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------- |
| `click`     | Triggered on mouse clicked and then released, or touch                                       |
| `mousedown` | Triggered when the mouse button (or trackpad) is clicked                                     |
| `mouseup`   | Triggered when the mouse button (or trackpad) is released                                    |
| `keypress`  | Triggered when a key is pressed and then released                                            |
| `keydown`   | Triggered when a key is pressed                                                              |
| `keyup`     | Triggered when a key is released                                                             |
| `dblclick`  | Triggered on double click                                                                    |
| `mouseover` | Triggered when the mouse cursor moves over an element                                        |
| `mouseout`  | Triggered when the mouse cursor moves out of an element                                      |
| `resize`    | Triggered when the browser window is resized. _Only works on the window object._             |
| `scroll`    | Triggered when the user scrolls the window. _Only works on the window object._               |
| `focus`     | Triggered when an input becomes focussed                                                     |
| `blur`      | Triggered when an input loses focus                                                          |
| `change`    | Triggered when the value of an input changes                                                 |
| `submit`    | Triggered when a form is submitted. _`e.preventDefault()`_ should be used to prevent reload. |

---

## Event _bubbling_

Si colocamos un detector de eventos (_event listener_) de clic en un elemento hijo y también uno en su padre. Cuando hacemos clic en el elemento hijo, el detector de eventos del hijo se activará, pero también lo hará el del padre. Describimos este comportamiento como _event bubbling_. El evento irrumpe en el árbol DOM.

Para evitar esto, podemos usar `e.stopPropagation ()` en cualquier punto del árbol DOM:

---

## Event _bubbling_

```html
<div id="parent">
  <div id="child">
    <div id="grandchild"></div>
  </div>
</div>
```

```js
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const grandchild = document.querySelector('#grandchild');

parent.addEventListener('click', () => {
  console.log('parent click');
});
parent.addEventListener('click', () => {
  e.stopPropagation();
  console.log('child click');
});
parent.addEventListener('click', () => {
  console.log('grandchild click');
});
```

En el ejemplo anterior, si hacemos clic en el elemento nieto, veríamos "clic de nieto" y "clic de hijo" en la consola, pero el burbujeo se detendría allí y nunca llegaría al detector de eventos principal.

---

## Otras lecturas

- [An Introduction to DOM Events](https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/)
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Events and the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)

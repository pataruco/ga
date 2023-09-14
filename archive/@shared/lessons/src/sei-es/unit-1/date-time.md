# .center[`Date` y Tiempo]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# `Date` y Tiempo

A veces, necesitamos acceder a la configuración de fecha y hora de la computadora para que una aplicación funcione. Por ejemplo, si quisiéramos mostrar la hora actual en nuestra página web, calcular cuántos días el usuario inició sesión por última vez, cuándo realizó una compra por última vez, etc.

---

## JavaScript `Date`

`Date` es una función nativa de JavaScript . Podemos crear una instancia de fecha como lo haríamos con cualquier otro constructor:

```javascript
const currentDate = new Date();
```

Ahora podemos consultar esta instancia de fecha para obtener la fecha y la hora:

```javascript
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
```

---

## JavaScript `Date`

Esto devolverá la hora, minuto y segundo actuales del momento **cuando se creó la instancia de fecha**, y no la hora en la que se llaman los métodos.

También podemos obtener el día, mes y año actuales:

```javascript
const day = currentDate.getDay();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
```

---

## JavaScript `Date`

### El problema con `month`

Desafortunadamente, por razones que solo conocen aquellos que lo crearon, `getMonth` devuelve un número de ` 0 - 11`, en lugar de `1 - 12`, aunque la función` getDay` devuelve un número de `1 - 31`.

Desafortunadamente, no hay mucho que podamos hacer al respecto, solo debemos ser conscientes de ello.

---

## `setTimeout` y `setInterval`

Otra cosa que resulta útil es poder ejecutar una función o bloque de código en un momento determinado en el futuro, o cada `n` segundos.

La forma de JavaScript de hacer esto es con `setTimeout` y `setInterval`. Veamos cómo podemos usarlos:

```javascript
setTimeout(() => {
  console.log('setTimeout fired!');
  console.log(new Date());
}, 1000);
```

---

## `setTimeout` y `setInterval`

Entonces, en este caso, la función de devolución de llamada se ejecutará **una vez** en 1000 milisegundos, o 1 segundo en el futuro.

```javascript
setInterval(() => {
  console.log('setInterval fired!');
  console.log(new Date());
}, 1000);
```

La sintaxis de `setInterval` es la misma, pero en este caso ejecutaría el código dentro de la función de devolución de llamada **cada** 1000 milisegundos, para siempre.

---

## `setTimeout` y `setInterval`

Para detener un `setInterval` necesitas almacenar el ID devuelto por la función, luego usarlo para borrar el tiempo de espera con `clearTimeout` o `clearInterval`:

```javascript
const timerId = setInterval(() => {
  console.log('setInterval fired!');
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
}, 5000);
```

El `console.log` anterior se ejecutará cada segundo, durante 5 segundos, momento en el que el temporizador se borrará de la memoria y dejará de funcionar.

---

## Otras lecturas

- [Date - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Understanding Date & Time in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript)
- [JavaScript Date Cheatsheet](https://devhints.io/js-date)

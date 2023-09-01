# .center[AJAX]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## AJAX

AJAX son las siglas de **Asynchronous Javascript and XML** y es una forma de hacer solicitudes HTTP directamente dentro de nuestros archivos JavaScript.

Esto es realmente útil porque nos permite extraer los datos de una API directamente en nuestro JavaScript y luego renderizar esos datos en la vista (_view_) con jQuery, Angular o React.

---

## XML y JSON

En el pasado, las API solían enviar datos en formato XML, que es de donde proviene la X en AJAX. XML es similar a HTML. Un queso representado en XML podría verse así:

```xml
<cheese>
  <name>Gouda</name>
  <origin>Netherlands</origin>
  <strength>4</strength>
</cheese>
```

Esto era perfectamente bien, pero debido a que cada propiedad del queso requería una etiqueta de apertura y cierre, la cantidad de datos que se transferían era bastante grande.

---

## XML y JSON

A medida que las aplicaciones de JavaScript consumían cada vez más las API, nació una forma más adecuada de transferir datos con una API: JSON.

JSON significa **JavaScript Object Notation** y es una representación de cadena de objetos y matrices de JavaScript. El mismo queso representado en JSON podría verse así:

```json
{
  "name": "Gouda",
  "origin": "Netherlands",
  "strength": 4
}
```

Como puede ver, parece casi idéntico a un objeto JavaScript, excepto que las propiedades tienen comillas dobles y los valores de cadena también tienen comillas dobles.

Las API que creamos en este curso utilizarán JSON exclusivamente.

---

## Usando AJAX

Podemos realizar cualquier solicitud (incluyendo `GET`, `POST`, `PUT`, `PATCH` y `DELETE`)

Las llamadas a la API son código asincrónico. Debido a que no tenemos idea de cuánto tardará la respuesta en regresar, tenemos que esperar el resultado. Podemos hacerlo usando dos palabras clave que vienen juntas: `async` y `await`.

---

## Usando AJAX

### `fetch()`

#### ¿Qué es?

Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones (`Request`) y respuestas (`Response`)

---

## Usando AJAX

### `fetch()`

#### ¿Cómo? 

El método `fetch()` toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar. Devuelve una `Promise` que resuelve en `Response` a esa petición, sea o no correcta.

Una vez que `Response` es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.

```js
// Ejemplo implementando el metodo POST:
async function askForData() {
  const response = await fetch(url);
  const data = await response.json();
}
```

---

## Usando AJAX

### `async`

Una función asíncrona es una función declarada con la palabra clave asíncrona (`async`). El uso de la palabra clave `await` está permitida dentro de ellas. Las palabras clave `async` y `await` permiten que el comportamiento asincrónico basado en promesas se escriba en un estilo más limpio, evitando la necesidad de configurar explícitamente cadenas de promesas (`new Promises`)

---

## Usando AJAX

### `await`

El operador `await` es usado para esperar a una `Promise`. Sólo puede ser usado dentro de una función `async function`.

La expresión `await` provoca que la ejecución de una función `async` sea pausada hasta que una `Promise` sea terminada o rechazada, y regresa a la ejecución de la función `async` después del término. Al regreso de la ejecución, el valor de la expresión await es la regresada por una promesa terminada.

Si la `Promise` es rechazada, el valor de la expresión await tendrá el valor de rechazo.

Si el valor de la expresión seguida del operador await no es una promesa, será convertido a una resolved `Promise`.

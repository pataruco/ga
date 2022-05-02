class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>JavaScript Asincrónico</h1>
</div>

---

## Código síncrono

.row[
.column[

```js
let status;
function doSomething() {
  for (let i = 0; i < 1000000000; i++) {
    numberArray.push(i);
  }
  status = 'done';
  console.log('First function done');
}
function doAnotherThing() {
  console.log('Second function done');
}
function doSomethingElse() {
  console.log('Third function: ' + status);
}
```

]
.column[

```js
doSomething();
doAnotherThing();
doSomethingElse();
```

]
]

---

## Código síncrono

.row[
.column[

```js
let status;
function doSomething() {
  for (let i = 0; i < 1000000000; i++) {
    numberArray.push(i);
  }
  status = 'done';
  console.log('First function done');
}
function doAnotherThing() {
  console.log('Second function done');
}
function doSomethingElse() {
  console.log('Third function: ' + status);
}
```

]
.column[

```js
doSomething();
doAnotherThing();
doSomethingElse();
```

Resultados en la consola después de unos segundos

```txt
> 'First function done';
> 'Second	function done';
> 'Third function: done';
```

]
]

---

## Código síncrono

- Las declaraciones se ejecutan en orden, una tras otra.
- El código bloquea el flujo del programa para esperar los resultados
- La mayoría del código JS es síncrono

```txt
┌──────────────┐             ┌──────────────┐          ┌──────────────┐
│1st statement │───────────▶ │2nd statement │────────▶ │3rd statement │
└──────────────┘             └──────────────┘          └──────────────┘
```

---

## Código asíncrono

- La ejecución del código es independiente del flujo del programa principal
- Las declaraciones se ejecutan simultáneamente.
- El programa no bloquea el flujo del programa para esperar los resultados
- Ciertas declaraciones JS son asíncronas por defecto

```txt
┌──────────────┐
│1st statement │───────────▶
└──────────────┘
┌──────────────┐
│2nd statement │───────────▶
└──────────────┘
┌──────────────┐
│3rd statement │───────────▶
└──────────────┘
```

---

## Flujo de programa asíncrono

```js
const button = document.querySelector('button');

button.addEventListener('click', fetchCountries);

function fetchCountries() {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.warn('there is a problem');
      }
    })
    .catch((error) => console.error({ error }));
}
```

---

## Enfoques para el flujo de programa asíncrono

- Callbacks
- `Promises`
- `async` / `await`

---

## Callbacks

### Las funciones son objetos de primera clase.

- Las funciones se pueden usar en cualquier parte del código en el que se pueda usar cualquier otro tipo de datos
- Almacenar funciones como variables
- Pasar funciones como argumentos a otras funciones
- Funciones de retorno de otras funciones
- Ejecutar funciones sin asignarlas de otro modo

---

## Callbacks

### `function` de orden superior

- Una función que toma otra función como argumento, o que devuelve una función

Ejemplo [`setTimeOut`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

```js
setTimeout(function, delay)
```

- donde `function` es una función (referencia o anónima)
- `delay` es un tiempo en milisegundos para esperar antes de que se llame al primer argumento

---

## `setTimeOut`

```js
setTimeout(() => {
  console.log('Hello world');
}, 1000);
```

```js
function helloWorld() {
  console.log('Hello world');
}

setTimeout(helloWorld, 1000);
```

---

## Callbacks

- Una función que se pasa a otra función como argumento y que luego se llama desde dentro de la otra función
- Una función de devolución de llamada (`callback`) puede ser anónima (como con `setTimeout()` o `forEach()`) o puede ser una referencia a una función definida en otro lugar

---

## Promesas `Promises`

### Infieron de callbacks 🔥 👹

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log('Got the final result: ' + finalResult);
        },
        failureCallback,
      );
    },
    failureCallback,
  );
}, failureCallback);
```

---

## Promesas

- Callback tradicional:

  ```js
  doSomething(successCallback, failureCallback);
  ```

- Callback usando una promesa:
  ```js
  doSomething().then(/* work with result */).catch(/* handle error */);
  ```

---

## Promesas

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((result) => doThirdThing(result))
  .then((result) => {
    console.log('Got the final result: ' + result);
  })
  .catch(console.error);
```

---

## Manejando errores

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((result) => doThirdThing(result))
  .then((result) => {
    console.log('Got the final result: ' + result);
  })
  .catch(console.error); // Catch errors here
```

---

## Creando promesas `Promise`s

```js
const fooPromise = () => {
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
};
fooPromise().then((value) => {
  console.log(value); /* expected output: "foo" */
});
```

---

## Promises

```txt

          On completion                         On completion
            generates                             generates

                   ┌────────┐                               ┌────────┐
┌──────────┐       │Promise │        ┌──────────┐           │Promise │
│function 1│──────▶│(object)│───────▶│function 2│──────────▶│(object)│ ─────▶
└──────────┘       └────────┘        └──────────┘           └────────┘
                        │    promise                             │  promise
                        │    passed                              │  passed
                        │    to .then()                          │  to .then()
                        │             ┌────────┐                 │
                        │             │ Error  │                 │
                        └────────────▶│handling│◀────────────────┘
                         error        └────────┘  error
                         passed                   passed
                         to .catch()              to .catch()

```

---

## `fetch` con promesas

```js
fetch(url)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw 'Network response was not ok.';
    }
  })
  .then(function (data) {
    //	DOM manipulation
  })
  .catch(function (error) {
    //	handle lack of data in UI
  });
```

---

## `async` & `await`

### `async`

Una función asíncrona es una función declarada con la palabra clave asíncrona (`async`). Dentro de ellos se permite el uso de la palabra clave `await`. Las palabras clave `async` y `await` permiten que el comportamiento asíncrono basado en promesas se escriba en un estilo más limpio, evitando la necesidad de configurar explícitamente cadenas de promesa (`nuevas promesas`)
esperar

---

## `async` & `await`

### `await`

El operador `await` se usa para esperar una Promesa. Solo se puede usar dentro de una función `async`.

La expresión `await` hace que la ejecución de una función asíncrona se pause hasta que finalice o rechace una Promesa, y vuelve a la ejecución de la función asíncrona después de completarse. Al regresar de la ejecución, el valor de la expresión await es el que devuelve una promesa completa.

Si se rechaza la Promesa, el valor de la expresión de espera tendrá el valor de rechazo.

Si el valor de la expresión seguida por el operador `await` no es una promesa, se convertirá en una Promesa residente.

---

## `async` & `await`

.row[
.col[

### Callback

```js
const url = 'https://restcountries.com/v3.1/all';

const button = document.querySelector('button');

button.addEventListener('click', fetchCountries);

function fetchCountries() {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.warn('there is a problem');
      }
    })
    .catch((error) => console.error({ error }));
}
```

]

.col[

### `async` / `await`

```js
const url = 'https://restcountries.com/v3.1/all';

const button = document.querySelector('button');

button.addEventListener('click', fetchCountries);

async function fetchCountries() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    console.warn('there is a problem');
  } catch (error) {
    console.error({ error });
  }
}
```

]
]

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

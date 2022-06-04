class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Testing</h1>
</div>

---

# Testing

Es el proceso de ejecutar un programa con el objetivo de encontrar errores.

---

# Principios

- Todo test debe cumplir con los requisitos del usuario.
- No es posible realizar tests exhaustivos.
- Comienza con tests en piezas pequeñas y extiéndalo a piezas mas grandes.

---

# Tipos de test

.row[
.col[![](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png)]
.col[

- Unitarios
- Integration Tests
- E2E Tests
  ]
  ]

---

## Unit

Estos prueban la lógica individual de una función o componente particular en la aplicación, aislada de los otros componentes. Lo más importantes para probar en este nivel son la lógica condicional, los bucles y cualquier tipo de manipulación de datos (por ejemplo, la clasificación de una lista).

Las pruebas unitarias son las más rápidas de ejecutar de todas las capas de prueba, son independientes entre sí. Las pruebas independientes pueden actuar como documentación de una función y permitir la paralelización de las pruebas para mejorar la velocidad de ejecución.

---

## Integration

Estas pruebas aseguran que la interacción entre las funciones y los componentes juntos para crear el resultado deseado. Por ejemplo, en el ecosistema React, un nivel apropiado en un árbol de componentes (que podría ser una página completa) se representa y se completa con datos de entrada. Los eventos de clic se simulan en la interfaz de usuario para asegurarse de que el flujo de la aplicación lógica completa funcione como se esperaba.

---

## E2E

Las pruebas de interfaz de usuario (o de extremo a extremo) imitan lo más fielmente posible la interacción del usuario con la aplicación. Un navegador, impulsado por software, simula el viaje del usuario a través de la aplicación web. Estas son las pruebas que consumen más tiempo y, por lo tanto, son más costosas en la suite.

---

## Test driven development (TDD)

.row[
.col[

TDD significa Desarrollo dirigido por pruebas. Cuando se trabaja en un flujo de trabajo TDD, se escribe las pruebas antes de escribir el código. Esto significa que se sabe cuál es el punto de referencia para el código y qué se tiene que hacer antes de comenzar.

Cuando trabajas con TDD, comenzarás con una lista de pruebas que fallan (porque aún no hay código) y la tarea del desarrollador es escribir la aplicación de manera que pasen todas las pruebas.

]
.col[
![TDD](https://miro.medium.com/max/2558/0*YuyJ36hnqHLTW8sP.jpg)
]
]

---

## Jest

.row[
.col[

Jest es una biblioteca de prueba de JavaScript. Proporciona funciones para afirmar si una condición es verdadera o falsa. Verdadero significa que la prueba pasa, falso significa que falla.

Con este método, podemos ejecutar funciones desde nuestra aplicación y preguntarle a Jest si la condición resultante de la función es la misma que esperaríamos (tenemos que proporcionar la respuesta correcta para que Jest pueda comparar las dos).
]
.col[
![jest logo](https://raw.githubusercontent.com/facebook/jest/main/website/static/img/jest-readme-headline.png)
]
]

---

## Jest

### `describe`

Las pruebas se pueden agrupar usando la palabra clave `describe`, si tiene más de 1 prueba para una función, digamos un caso de éxito y un caso de falla, puedes envolver ambos en un bloque de descripción.

.row[
.col[

```js
describe('the add function', () => {
  // write your tests inside this block.
});
```

]
.col[

Observa que `describe` toma 2 argumentos:

1. Una cadena (`string`) que simplemente nos dice qué se está probando en este bloque de pruebas. Se generará en la consola para ayudarlo a identificar las pruebas cuando las ejecute.
2. Una función que envolverá todas sus pruebas reales.

]
]

---

## Jest

### `it` o `test`

Cada prueba se define mediante la palabra clave `test` o `it`. Según los documentos de Jest, es un alias de prueba, por lo que hacen exactamente lo mismo. Tener la opción de qué palabra clave usar solo ayuda a que nuestras pruebas sean un poco más legibles. Veamos cómo podríamos escribir una prueba:

```js
test('it adds 1 to 3 to equal 4', () => {
  expect(add(1, 3)).toBe(4);
});
```

También podríamos usar el alias `it` para acortar esto a:

```js
it('adds 1 to 3 to equal 4', () => {
  expect(add(1, 3)).toBe(4);
});
```

---

## Jest

### `it` o `test`

Ten en cuenta que afirmamos una prueba usando `expect()` y proporcionamos un comparador usando `toBe()`. Hay muchos emparejadores (matchers) para diferentes escenarios y puedes encontrarlos en los documentos de <a href="https://jestjs.io/" class="external-link">Jest</a>

---

class: lab

## Lab

[Fizzbuzz unit test](https://github.com/pataruco/ga/raw/main/labs/unit-test/unit-test-starter-code.zip)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

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

## Labs

---

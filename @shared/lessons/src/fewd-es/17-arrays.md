class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Arrays</h1>
</div>

---

# Arrays

Los arrays son objetos similares a una lista.

Piensa en los _array_ como contenedores de múltiples datos.

Técnicamente, un _array_ es una colección ordenada de tipos de datos combinados en una variable.

A cada elemento de un _array_ se le asigna un valor de índice en función de su posición.

Estos valores de índice nos permiten acceder a elementos individuales dentro del _array_

```js
const fruits = ['banana', 'naranja', 'manzana'];
//                  0         1          2
```

---

## Sintáxis

Crea un _array_ utilizando un conjunto de corchetes (`[ ]`). Dentro de los corchetes, cada valor debe estar separado por una coma (`,`).

---

## Accediendo a los valores de un _array_

Accede a los elementos de un _array_ utilizando corchetes alrededor de sus valores de índice.

Es bastante simple: recuerda que el primer valor del índice es siempre cero (**0**).

```js
const fruits = ['banana', 'orange', 'apple'];
fruits[0]; // will output "banana"
fruits[1]; // will output "orange"
fruits[2]; // will output "apple"
```

---

##  ¿Por qué son importantes?

Los _arrays_ son uno de los dos tipos de "contenedores" de datos en JavaScript (el otro son objetos).

Como resultado, muchos de los datos que usaremos vienen en forma de _array_.

Las _array_ provienen de tres lugares principales:

- El DOM (con `querySelectorAll` y `getElementsByClassName`)
- Respuestas API (información recibida de otras aplicaciones web)
- Bases de datos

---

## Metodos

### ¿Por qué utilizamos estos métodos?

.row[
.col[
Aprender a usarlos de manera efectiva nos convertirá en mejores programadores, descubriremos que tenemos más código libre de errores (porque es más fácil de razonar), código reutilizable que también fue más rápido y fácil de escribir **Solo UNA VEZ** y que podemos utilizarlo de una manera más eficaz

Primero tenemos que pensar qué son realmente las funciones en Javascript, sí, todo es un objeto bla, bla, bla, eso tiene más que ver con la sintaxis que podemos usar con todas ellas, por ejemplo, acceder a métodos a través de notación de puntos, etc., pero realmente son **valores**. Y, al final, todo en JavaScript se puede considerar como valores. Los strings, números, arrays, funciones, etc. son todos valores al final.

Así que podemos tomar valores en JavaScript, sin importar de dónde vengan, y simplemente manejarlos de la forma que nos guste.

]
.col[

```javascript
const doble = (number) => {
  return number * 2;
};

const caraotas = doble;
const huevos = caraotas;
const jamon = caraotas;

jamon(3); // ????
```

]
]

---

## Metodos

### ¿Por qué utilizamos estos métodos?

Entonces, al igual que los strings o los números, como podemos ver, las funciones se pueden asignar a valores o, también al igual que los strings y los números, pasarse a otras funciones.

Pero, ¿para qué sirve esto?

Bueno, nos permite crear composición, eso significa tomar funciones más pequeñas, que logran tareas relativamente simples y pasarlas a otras más grandes.

Hemos visto algunos hasta ahora para los arrays, y hemos intentado usarlos un poco, pero creo que ahora es el momento de revisarlos y tratar de entender realmente lo que está sucediendo, y tratar de sentirnos más cómodos usándolos. y comprobar el valor del trabajo que pueden hacer por nosotros. Estoy hablando de `forEach`, `map`, `filter`, `reduce` y algunos otros.

Comencemos con lo que creo que es uno de los más simples y más utilizados.

---

## Metodos

### `length`

Usa `length` para averiguar cuántos elementos hay en el _array_. Esto es muy útil cuando necesitamos ver todo el _array_ con un bucle.

```js
const fruits = ['banana', 'orange', 'apple'];
fruits.length;
// => 3
```

---

## Metodos

### `push`

agrega el elemento entre paréntesis al final del _array_.

```js
const fruits = ['orange'];
fruits.push('kiwi');
console.log(fruits);
// => ["orange", "kiwi"];
```

---

## Metodos

### `unshift`

agrega el elemento entre paréntesis al comienzo del _array_.

```js
const fruits = ['orange', 'kiwi'];
fruits.unshift('cherry');
console.log(fruits);
// => ["cherry", "orange", "kiwi"];
```

---

## Metodos

### `pop`

retorna y elimina el último elemento del _array_.

```js
const fruits = ['banana', 'orange', 'apple'];
// => apple
fruits.pop();
// fruits is now: ["banana", "orange"];
```

---

## Metodos

### `shift`

elimina el primer elemento del _array_.

```js
const fruits = ['banana', 'orange'];
// banana
fruits.shift();
// fruits is now: ["orange"];
```

---

## Metodos

### `splice`

Cambia el contenido de un _array_ eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.

```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

---

## Metodos

### `slice`

devuelve una copia de una parte del _array_ dentro de un nuevo _array_ empezando por inicio hasta fin (fin no incluido). El _array_ original no se modificará.

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

---

## Metodos

### `reverse`

invierte el orden de todos los elementos del _array_. No agrega ni elimina nada.

```js
const fruits = ["cherry", "pear", "kiwi"];
const fruits.reverse();
// fruits is now: ["kiwi", "pear", "cherry"];
```

---

## Metodos

### `join`

combina todos los elementos del _array_ en un _string_. Si se le da un _string_ como parámetro, `join` colocará el _string_ dado entre los elementos.

```js
const fruits = ['kiwi', 'pear', 'cherry'];

const fruitsList = fruits.join(' and ');
// fruitsList is: "kiwi and pear and cherry";
```

---

## Metodos

### `indexOf`

Ahora, un vistazo rápido a otros métodos de _array_ realmente útiles.

Veamos el índice de

```js
const breakfast = ['eggs', 'bacon', 'toast', 'beans'];

const index = breakfast.indexOf('bacon');
```

Un método que devuelve el número de índice de la coincidencia, si no hay coincidencia, devuelve `-1`.

---

## Bucles (_loops_)

### ¿Por qué?

- Los bucles aprovechan lo que las computadoras hacen mejor: evalúan instrucciones en conjuntos organizados de datos rápidamente.
- Las computadoras se destacan cuando trabajan en patrones aislados, que es exactamente como funciona un bucle.
- Evita copiar o volver a escribir código innecesariamente repitiéndolo en un bucle.

---

## Bucles (_loops_)

### `for`

`for` es similar a una instrucción `if` pero con más condiciones.

Al crear un bucle `for`, necesitamos hacer tres declaraciones:

- Definir una variable para que actúe como nuestro iterador, normalmente llamada `i`.
- Estabelcer una condición para que el bucle se detenga, llamada condición de terminación.
- Incrementar la variable del iterador (o decrementar, si el ciclo va hacia atrás).

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// outputs 0,1,2,3,4,5,6,7,8,9

const names = ['pedro', 'gabriel', 'alex'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

---

## Bucles (_loops_)

### `filter`

Bien, tomemos esta lista de animales. Echemos un vistazo a la composición de nuestros datos aquí, es un array de objetos.

```javascript
const animales = [
  { nombre: 'Pedro', especie: 'perro' },
  { nombre: 'Gabriel', especie: 'delfin' },
  { nombre: 'Alex', especie: 'gato' },
  { nombre: 'Mike', especie: 'perro' },
  { nombre: 'Brandon', especie: 'mono' },
  { nombre: 'Peter', especie: 'gato' },
  { nombre: 'Miranda', especie: 'gato' },
  { nombre: 'Ana', especie: 'pez' },
];
```

Lo que quiero lograr aquí es filtrar todos nuestros animales en el array que no son perros, y quedarme con mis perros.

---

## Bucles (_loops_)

### `filter`

Así es como podemos hacerlo con un bucle for regular

```javascript
const perros = [];
for (let i = 0; i < animales.length; i++) {
  if (animales[i].especie === 'dog') {
    perros.push(animals[i]);
  }
}
```

Recorrimos toda el array y usamos la variable que creamos `i` para acceder a cada elemento de la matriz y verificamos si su especie es perro. Si es así, lo introducimos en un nuevo array de perros, y si no es así, no lo hacemos.

Ok, veamos cómo se puede lograr esto mismo con el método `filter` Arrays.

```javascript
const perros = animales.filter((animal) => animal.especie === 'dog');
```

---

## Bucles (_loops_)

### `filter`

Examinemos `filter` por un segundo, podemos ver que es una función en el prototipo de métodos Array, porque podemos ver que se invoca con `()` al igual que llamamos a cualquier función. `filter` también toma un argumento, que es otra función, una que escribimos nosotros mismos, conocida como función de devolución de llamada.

`filter` recorrerá cada elemento de nuestra matriz y lo pasará a la función de devolución de llamada (_callback function_). `filter` esperará que la función devuelva verdadero o falso, para que `filter` sepa si debe mantener o eliminar ese elemento.

---

## Bucles (_loops_)

### `map`

La diferencia entre `map` y `filter` es bastante simple, el filtro decide que elemento debemos mantener o eliminar en un array. `map` toma cada uno de esos elementos y los transforma, ¿Qué significa esto?, Vamos a ver .

Usando el array animales nuevamente, el desafío es crear una nuevo array, que solo contenga los nombres de los animales.

Antes de mirar el metodo map , solucionemos este como lo hicimos antes usando el clásico bucle `for`.

```javascript
const nombres = [];
for (let i = 0; i < animales.length; i++) {
  nombres.push(animales[i].name);
}
```

Ahora hagamos esto de nuevo, usando `map` en su lugar, recuerda que `map` es un método en el prototipo de array, al igual que filter.

```javascript
const names = animals.map((animal) => animal.name);
```

---

## Bucles (_loops_)

### `map`

Entonces, el `filter` esperaba una función (_callback function_) devolviera verdadero o falso para determinar si el elemento actual debe mantenerse.

`map`, por otro lado, mantiene todos sus elementos, pero espera una función (_callback function_) que devuelva una versión transformada de ese elemento, por lo que en nuestro caso, solo devuelve una un string de los animales, que colocará en lugar del original en nuestra nuevo _array_.

El caso de uso que vemos arriba es bastante estándar para `map`, lo usamos para extraer partes de un objeto existente y devolverlas de una manera nueva.

```js
const names = animals.map((animal) => `${animal.name} is a ${animal.species}`);
```

---

## Bucles (_loops_)

### `map`

`map` y `filter`tienen en común es que tomarán un _array_ y la transformarán en otra cosa, pero esa cosa seguirá siendo un array.

`map` nos dio un _array_ de la misma longitud (`length`), con cada elemento individual transformado de alguna manera.

`filter` tomó nuestro _array_ original y nos devolvió uno más pequeñ0, basado en una prueba de verdadero / falso que le dimos.

---

## Bucles (_loops_)

### `forEach`

Así que veamos los ejemplos en los que ya hemos trabajado con `map` y `filtro` y tomemos nota de lo que observamos.

Es importante destacar que podemos notar que los _arrays_ originales nunca han cambiado, nuestros métodos de `filtro` y `map` siempre han devuelto nuevos _arrays_.

`forEach` por otro lado es un poco diferente, solo nos permite hacer **algo** con cada elemento sobre el que iteramos, pero si afectamos el array original, cambiará, actualizemos nuestra función de `map` para ver esto en acción .

---

## Bucles (_loops_)

### `forEach`

Aunque esto hace que no sea tan útil para cambiar nuestros tipos de datos, lo convierte en el candidato perfecto para trabajos como, por ejemplo, configurar `eventListener` en todos nuestros elementos contenidos en una lista de nodos. Aquí hay un ejemplo que hemos vamos a ver mucho

```js
const buttons = document.querySelectorAll('buttons');

buttons.forEach((button) =>
  button.addEventListener('click', functionToDoWhenClicked),
);
```

---

## Bucles (_loops_)

### `reduce`

`reduce` es un poco diferente. Es una especie de herramienta múltiple de todas las anteriores, en realidad se puede usar para hacer mapas (`maps`) y filtros (`filter`) si realmente lo deseas. Es el metodo de _array_ pero con superpoderes, realmente puede hacer cualquier cosa. Si no puede encontrar uno de los otros métodos que funcione para ti, `reduce` puede hacerlo. Veamos un uso mucho más simple de `reducir` ahora por ahora.

Tomemos esta nueva y brillante variedad de objetos

```js
const orders = [
  { amount: 100 },
  { amount: 175 },
  { amount: 210 },
  { amount: 50 },
  { amount: 80 },
];
```

---

## Bucles (_loops_)

### `reduce`

Entonces, con `reduce`, en lugar de devolvernos otra _array_, como `map` y `reduce`, **nos devolverá un solo objeto**.

Ahora bien, este objeto puede ser cualquier cosa que queramos: _string_, _number_, un objeto incluso otro _array_ si realmente quisiéramos.

Ene le siguiente ejemplo queremos devolver un número que es la suma de todas las cantidades.

Primero hagamos esto con un bucle `for`

```js
let totalAmmount = 0;
for (let i = 0; i < orders.length; i++) {
  totalAmmount += orders[i].amount;
}
```

---

## Bucles (_loops_)

### `reduce`

Ahora hagamos lo mismo con `reduce`

```js
const totalAmmount = orders.reduce(
  (total, currentValue) => total + currentValue.ammount,
  0,
);
```

`reduce` acepta una función con 2 argumentos.

---

## Bucles (_loops_)

### `reduce`

El primer argumento, es el objeto que eventualmente será devuelto, su punto de inicio se define después de la coma al final de nuestra función.

Entonces, en nuestro ejemplo anterior, `total` es un número y comienza su vida cuando el **0** pasando como segundo argumento de `reduce`. El segundo argumento `currentValue` es nuestro elemento sobre el que estamos iterando actualmente, ¡es como el único argumento que pasamos con `map` y `filter`! ¡Lo especial de `reduce` es que recuerda todo lo que actualizamos en ese objeto `total` para que esté en cada iteración!

Abramos esto en dos líneas y coloquemos un `console.log()` dentro de la función de `reduce` para ver esto mejor.

Como dije, `reduce` se puede usar para lograr cualquiera de los métodos que hemos visto antes, creo que por ahora, es mejor seguir con los métodos anteriores, ya que `reduce` puede ser un poco más complicado al principio, pero a medida que avanzas, ¡Te sentirás más cómodo usandolo!

---

## Bucles (_loops_)

### `some` y `every`

Los dos últimos los veremos juntos, porque van de la mano, pero tienen una gran diferencia.

`some` devuelve verdadero si **cualquier** valor en el _array_ devuelve verdadero desde una función de prueba.

`every` devuelve verdadero si **todos** los valores en el _array_ devuelven verdadero desde una función de prueba.

Por función de prueba, me refiero a una función que se evaluará como verdadera (`true`) o falsa (`false`), se parece a la que usamos en `filter`, que devolvía verdadero (`true`) o falso (`false`) si el animal era un perro, pero a diferencia de `filter`, **no vamos para obtener una nueva lista, solo obtendremos un booleano (`true` o `false`)**.

---

## Bucles (_loops_)

### `some` y `every`

Intentemos esto en nuestro _array_ de animales.

Escribamos una función que nos diga si cada elemento de nuestra lista es un perro.

```js
const areAllDogs = animals.every((animal) => animal.species === 'dog');
```

Y ahora usemos `some` para ver si alguno de nuestros animales es un perro.

```js
const areAllDogs = animals.some((animal) => animal.species === 'dog');
```

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

---

# .center[Inmutabilidad]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# Inmutabilidad

Una de las cosas que hace que React sea muy rápido es que se adhiere al concepto de estado inmutable. Pero, ¿qué significa inmutable?

Bueno, en su raíz está la palabra _mutar_. Cuando mutamos algo, lo cambiamos. Lo modificamos en su lugar. Cuando Bruce Banner se convierte en el Increíble Hulk, muta. Cambia su cuerpo.

---

## Mutación de datos

En JavaScript, a menudo _mutamos_ datos. Echemos un vistazo a un par de ejemplos:

```js
const arr = ['Charles Xavier', 'James Logan', 'Jean Grey'];
arr.push('Scott Summers');

const mutant = { name: 'Rogue', alterEgo: 'Jean Grey' };
mutant.alterEgo = 'Anne Marie';
```

En los dos casos anteriores hemos mutado un objeto.

En el primer caso ampliamos una matriz con un elemento extra. La matriz se ha modificado **en su lugar**. La matriz original ha cambiado.

En el segundo caso cambiamos los valores de las claves de un objeto. El objeto en sí es el mismo, lo **mutamos** cambiando su contenido.

---

## React y mutación

Por lo general, a React no le gusta cuando mutamos datos. Hay una buena razón para esto. Cuando mutamos un objeto, no obtenemos un nuevo objeto, por lo que es difícil para React saber qué ha cambiado o incluso si algo ha cambiado en absoluto.

Cuando los datos subyacentes de una aplicación React cambian, normalmente significa que React tiene que ponerse a trabajar para actualizar la interfaz de usuario. La forma en que React sabe si hacer esto es comparando los datos antiguos con los nuevos. Si mutamos los datos antiguos, React no sabe qué ha cambiado.

---

## React y mutación

```js
const beforeMutation = { name: 'Rogue', alterEgo: 'Jean Grey' };
const afterMutation = beforeMutation;

afterMutation.alterEgo = 'Anne Marie';

console.log(beforeMutation === afterMutation); // true
console.log(beforeMutation.alterEgo === afterMutation.alterEgo); // true

console.log(beforeMutation, afterMutation);
// => { name: 'Rogue', alterEgo: 'Anne Marie' } { name: 'Rogue', alterEgo: 'Anne Marie' }
```

---

## React y mutación

Debido a que el objeto ha sido mutado, sus datos han cambiado **en su lugar**. React no tiene forma de ver la forma en que se veía el objeto antes, por lo que no tiene forma de saber qué parte del objeto se ha cambiado y de qué manera.

---

## Trabajando inmutablemente

Entonces, para que React sepa si los datos subyacentes de la aplicación han cambiado y de qué manera, debemos asegurarnos de cambiar los datos de manera inmutable. Para hacer eso, necesitamos usar métodos y patrones que devuelvan **objetos nuevos** en lugar de objetos mutantes en su lugar.

Veamos algunos ejemplos:

---

## Trabajando inmutablemente

```js
const arr = ['Charles Xavier', 'James Logan', 'Jean Grey'];
const newArr = arr.concat('Scott Summers');

// could also use the spread operator
// const newArr = [...arr, 'Scott Summers']

console.log(arr === newArr); // false
console.log(arr.length === newArr.length); // false
```

La versión inmutable de `push` es `concat`. `concat` devuelve una nueva matriz, toma la matriz existente, más el nuevo elemento y devuelve una nueva matriz, dejando la existente intacta. Esto hace que sea muy fácil ver qué ha cambiado y qué parte de la aplicación necesita actualizarse.

---

## Trabajando inmutablemente

```js
const beforeMutation = { name: 'Rogue', alterEgo: 'Jean Grey' };
const afterMutation = { ...beforeMutation, alterEgo: 'Anne Marie' };

console.log(beforeMutation === afterMutation); // false
console.log(beforeMutation.alterEgo === afterMutation.alterEgo); // false
```

`...` se llama _operador de propagación (spread operator)_, se utiliza para copiar propiedades de un objeto a otro. En el ejemplo anterior, hemos creado un nuevo objeto y le hemos agregado las propiedades del objeto `beforeMutation` con el _spread operator_. Luego también sobrescribimos la propiedad `alterEgo`. El resultado es un nuevo objeto con todos los datos que queremos. El objeto original no se ha modificado, por lo que podemos comparar fácilmente los dos.

Echemos un vistazo a algunos métodos de matriz que son mutables e inmutables:

---

## Trabajando inmutablemente

| Mutable     | Immutable                |
| ----------- | ------------------------ |
| `splice()`  | `slice()`                |
| `push()`    | `concat()`               |
| `pop()`     | `slice(-1)`              |
| `shift()`   | `slice(1)`               |
| `unshift()` | `[element, ...oldArray]` |
| `sort()`    | `slice(0).sort()`        |
| `reverse()` | `slice(0).reverse()`     |
| N/A         | `filter()`               |
| N/A         | `map()`                  |
| N/A         | `reduce()`               |

---

## Otras lecturas

- [Immutability in JavaScript](https://www.sitepoint.com/immutability-javascript/)
- [Pure javascript immutable arrays](https://vincent.billey.me/pure-javascript-immutable-array/)

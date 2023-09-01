class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Control de flujo</h1>
</div>

---

## Operadores lógicos

JavaScript admite un conjunto compacto de declaraciones, específicamente declaraciones de control de flujo, que se pueden utilizar para incorporar una gran cantidad de interactividad en tu aplicación.

---

## Declaración de bloque

(_block statement_)

Las declaraciones destinadas a ejecutarse después de una operación de control de flujo se agrupará en lo que se denomina **declaración de bloque**. Estas declaraciones están envueltas en un par de llaves:

```js
{
  console.log('hola');
  console.log('chao');
}
```

---

## Alcance del bloque

(_Block scope_)

Hemos visto que el alcance (_scope_) en JavaScript cambia con frecuencia. En el caso de **declaración de bloque**, el alcance se crea pero solo con `let` y `const`.

```js
let name = 'pedro';
{
  let name = 'gabriel';
}
console.log(name); // outputs pedro
```

---

## Declaraciones condicionales

(_Conditional statements_)

Las declaraciones condicionales son una forma de omitir esencialmente un bloque de código si no pasa una expresión booleana. JavaScript admite dos declaraciones condicionales: `if` ...`else` y `switch`.

---

## Declaraciones `if`...`else`

`if(expr) { code }`

... significa corre el bloque `code` si (`if`) `expr` es verdadero (`true`)

```javascript
if (1 > 0) {
  console.log('Hola');
}
//=> Hola
```

---

## Declaraciones condicionales

(_Conditional statements_)

Cuando necesites probar más de un caso, puede usar `else if`:

```javascript
let name = 'gaticos';

if (name === 'cachorros') {
  name += '!';
} else if (name === 'gaticos') {
  name += '!!';
} else {
  name = '!' + name;
}
name === 'gaticos!!';
//=> true
```

---

## Declaraciones condicionales

(_Conditional statements_)

Operador condicional (ternario) (_Ternary Operator_)

JavaScript tiene un operador ternario para expresiones condicionales. Puede pensar en el operador ternario como un conciso "`if-else` en una línea":

```javascript
const edad = 12;
//=> undefined

const permitido = age > 18 ? 'yes' : 'no';
//=> undefined

permitido;
//=> "no"
```

---

## Verdadero & Falso

Lo siguientes se vuelven falso (`false`) cuando se convierte en un booleano

```js
Boolean(false);
//=> false

Boolean(0);
//=> false

Boolean('');
//=> false

Boolean(NaN);
//=> false

Boolean(null);
//=> false

Boolean(undefined);
//=> false
```

---

## Verdadero & Falso

Todos los demás valores se vuelven verdaderos (`true`) cuando se convierten a booleanos

Existe una forma sencilla de verificar la veracidad o falsedad de un valor. Cuando agregas `!` Delante de un valor, el valor devuelto será el inverso del valor en un booleano. Entonces, si agrega dos `!`, Obtendrás el valor booleano del original:

```javascript
!!1;
//=> true
!!0;
//=> false
!!-1;
//=> true
!![];
//=> true
!!{};
//=> true
!!null;
//=> false
!!'';
//=> false
```

---

## Operadores lógicos

(_Boolean/Logical Operators_)

[Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

Los operadores lógicos siempre devolverán un valor booleano "verdadero" `true` o "falso" `false`.

Hay dos operadores "binarios" que requieren dos valores:

- **Y**, denotado `&&`
- **O**, denotado `||`

Un tercer operador "unario" que requiere solo un valor:

- **NO**, denotado `!`

---

## Operadores lógicos

(_Boolean/Logical Operators_)

#### `&&` (Y)

El operador `&&` requiere que los valores izquierdo y derecho sean `true` para devolver `true`:

```javascript
true && true;
//=> true
```

---

## Operadores lógicos

(_Boolean/Logical Operators_)

#### `&&` (Y)

Cualquier otra combinación retorna `false`

```javascript
true && false;
//=> false

false && false;
//=> false
```

---

## Operadores lógicos

(_Boolean/Logical Operators_)

#### `||` (O)

El operador `||` requiere que solo uno de los valores izquierdo o derecho sea `true` para devolver `true`.

```javascript
true || false;
//=> true

false || true;
//=> true

false || false;
//=> false
```

---

## Operadores lógicos

(_Boolean/Logical Operators_)

#### `||` (O)

Solo `false || false` retornará `false`

El `!` toma un valor y devuelve el valor booleano opuesto, es decir,

```javascript
!true;
//=> false
```

---

## Operadores lógicos

(_Boolean/Logical Operators_)

Los operadores `&&` y `||` usan lógica de cortocircuito, lo que significa que la ejecución del segundo del primero. Esto es útil para establecer valores predeterminados:

```javascript
const otherName = '';
const name = otherName || 'gabriel';
```

En este caso, si el primer operando `otherName` es _falsy_, entonces veremos que se devolverá `gabriel`. Si `othername` es _truthy_ (por ejemplo, contiene un valor), se devolverá y la segunda expresión ni siquiera se evaluará.

---

## Operadores relacionales

(_Comparison Operators_)

Las [comparaciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) en JavaScript se pueden hacer usando `<`, `>`, `<=` y `>=`.

Funcionan tanto para _strings_ como para números. Es útil y puede ser una fuente de frustración para algunos desarrolladores, ya que la mayoría de los lenguajes no convierten implícitamente _strings_ en números como lo hace JavaScript.

```javascript
'A' > 'a';
//=> false

'b' > 'a';
//=> true

12 > '12';
//=> false

12 >= '12';
//=> true
```

---

## Operadores relacionales

(_Comparison Operators_)

Operador de igualdad (`Equality operator`) `==`

La igualdad es un poco más compleja. Hay 2 formas en JavaScript para verificar igualdad.

Cuando se verifica la igualdad usando doble igual `==`, JavaScript hace una gran cantidad de "**coerción de tipos**" en segundo plano. Como mencionamos anteriormente, si los operandos tienen un tipo diferente (es decir, el número `1` y el _string_ `"1"`), JavaScript intentará cambiar el tipo de ambos operandos para verificar si son iguales. Esto significa que muchas veces, las expresiones devolverán igual más fácilmente que si fuéramos más estrictos sobre qué cosas fueran equivalentes. Algunos ejemplos:

```javascript
'perro' == 'perro';
//=> true

1 == true;
//=> true
```

---

## Operadores relacionales

(_Comparison Operators_)

Operador de igualdad (`Equality operator`) `===`

Para evitar la coerción de tipos y medir la igualdad de manera más estricta, **usa el operador triple-igual**. Debido a que `===` chequea que el tipo y el valor sean el mismo más verdaderamente la igualdad real, usaremos esto mucho más a menudo cuando verifiquemos si también las cosas son, de hecho, lo mismo.

Algunos ejemplos:

```javascript
1 === true;
//=> false

true === true;
//=> true

'hola' === 'hola';
//=> true
```

---

## Operadores relacionales

(_Comparison Operators_)

Operador de igualdad (`Equality operator`) `===`

Sin embargo, hay algunos incidentes cuando no hace lo que esperamos, por ejemplo cuando se trabaja con objetos vacíos o _arrays_;

```javascript
{} === {}
//=> false

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

---

## Operadores relacionales

(_Comparison Operators_)

**Explicación**

Los ejemplos de arriba fallan porque las prueba de equivalencia porque son **objetos literales (_object literals_)** y **_arrays_** y no solo valores "primitivos" como _strings_, números y valores booleanos.

Los objetos y los _arrays_ son colecciones complejas de valores, y cuando nos referimos a ellos, en realidad hacemos referencia a dónde viven en la memoria. Es por eso que los llamamos "tipos de referencia (_reference types_)", mientras que cosas como cadenas y números son "tipos de valor" (_value types_).

Significa que cuando comparamos dos objetos o _arrays_ con `===`, JavaScript no le importa si se ven como colecciones similares. Solo compara si son exactamente el mismo objeto en la memoria o no. En cada uno de los casos anteriores, al verificar la equivalencia, en realidad estamos comparando dos objetos que están en dos lugares diferentes de la memoria. Por lo tanto no son exactamente "iguales".

#### `!=` y `!==`

También hay operadores `!=` Y `!==`, que son las versiones negativas de `==` y `===`.

---

## Declaración `switch`

La declaración `switch` se puede utilizar para varias ramas en función de un número, string o booleano:

```javascript
const fruta = 'manzana';

switch (fruta) {
  case 'pera':
    console.log('Me gusta las peras');
    break;
  case 'manzana':
    console.log('Me gusta las manzanas');
    break;
  default:
    console.log('No tengo una favorita');
}
//=> Me gusta las manzanas
```

En este caso, la declaración `switch` compara`fruta` con cada uno de los casos (`pera` y `manzana`), y evalúa las expresiones debajo de ellos para ver si hay coincidencia. Utiliza `===` para evaluar la igualdad.

La cláusula `default` es opcional.

---

## While y Do-While

`while` es una declaración de bucle que se ejecutará **mientras** una condición es verdadera.

JavaScript tiene bucles `while` y `do-while`. El primero es bueno para bucles básicos, pero existe la posibilidad de que nunca se ejecute. El uso de un bucle `do-while` asegura que el cuerpo del bucle se ejecute al menos una vez, porque `while ()` no se evalúa hasta que se ejecuta el bloque de código.

```javascript
while (true) {
  // bucle infinito
}
```

Esto debería ser suficiente para romper un navegador.

```javascript
let input = 0;
do {
  console.log(input++);
} while (input < 10);
```

---

## Iteración

La iteración es una forma de repetir una tarea de forma incremental.

### `for`

Puede iterar sobre un array con:

```javascript
const a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  console.log(i);
}
```

Esto es un poco ineficaz, ya que busca la propiedad length una vez en cada bucle. Una mejora es encadenar la asignación `let`:

```javascript
const a = [1, 2, 3, 4, 5];
for (let i = 0, len = a.length; i < len; i++) {
  console.log(i);
}
```

Observa la ubicación de la coma y el punto y coma.

---

## Iteración

### `while`

También es posible iterar sobre un array con un bucle while:

```js
const a = [1, 2, 3, 4, 5],
  len = a.length;
let i = 0;

while (i < len) {
  console.log(i);
  i++;
}
```

En realidad, es más eficiente recorrer una matriz hacia atrás:

```js
const a = [1, 2, 3, 4, 5];
let i = a.length;

while (i--) {
  console.log(i);
}
```

---

## Iteración

### `forEach`

Otra forma de iterar sobre una matriz que se agregó con ECMAScript 5 es [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```javascript
['dog', 'cat', 'hen'].forEach(function (currentValue, index, array) {
  console.log(`I want a ${currentValue}`);
  console.log(currentValue, index, array);
});
```

---

## Conclusión

Estas son algunas de las herramientas fundamentales que utilizarás en muchas de tus aplicaciones. Probablemente necesitarás chequear la sintaxis exacta varias veces antes de memorizarla, pero es importante poder recordar estos conceptos básicos de "control de flujo", en general, porque aparecerán en casi todos los lenguaje de programación

- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

---

class: lab

# Labs

-[Intro to JavaScript lab 🧪](https://github.com/pataruco/ga/raw/main/labs/intro-to-js/intro-to-js-starter-code.zip)

-[JavaScript Calculator 🧮][js-calc]

---

class: code-along

# Homework

-[JavaScript Calculator 🧮][js-calc]

---

[js-calc]: https://github.com/pataruco/ga/raw/main/homeworks/javascript-calculator/javascript-calculator-starter-code.zip

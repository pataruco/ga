# .center[Intro JavaScript]

## .center[Tipos de datos, <br> estructuras y <br> `array`s]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## Intro

JavaScript es un lenguaje dinámico orientado a objetos. Su sintaxis proviene de los lenguajes Java y C, por lo que muchas estructuras de esos lenguajes también se aplican a JavaScript.

---

## Consola

Para esta lección utilizaremos la consola del navegador

- **Chrome**: <kbd>cmd</kbd>+<kbd>alt</kbd>+<kbd>J</kbd>
- **Firefox**: <kbd>cmd</kbd>+<kbd>alt</kbd>+<kbd>K</kbd>

---

## Tipos de datos

Comencemos observando el componente básico de cualquier idioma: los tipos. Los programas JavaScript manipulan valores, y todos esos valores pertenecen a un tipo. Los tipos de JavaScript son:

> **_datos primitivos:_** _Un tipo de datos proporcionado por un lenguaje de programación como un bloque de construcción básico_

> **_datos compuestos:_** _Un tipo de datos más complicado que puede estar compuesto de tipos de datos primitivos_

---

## Tipos de datos

### Datos primitivos

- [`Number`](a)
- [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

## Tipos de datos

### Datos compuestos

- [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

---

## Tipos de datos

### Datos especiales

- [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

¡Nuevo en ECMAScript 6!

- [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

Y también hay algunos tipos de [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) integrados. Sin embargo, las cosas son mucho más fáciles si nos atenemos a la lista anterior.

---

## Tipos de datos

#### `typeof()`

Para comprobar si una variable es de cierto tipo, podemos usar [`typeof ()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

```js
typeof 37 === 'number';
=> true

typeof {} === 'object';
=> true

typeof null === 'object';
=> true

typeof function(){} === 'function';
=> true
```

---

## Numbers

Los números en JavaScript son **"valores IEEE 754 de formato de 64 bits de doble precisión"**, de acuerdo con las especificaciones.

Esto tiene algunas consecuencias interesantes. No existe un número entero en JavaScript, por lo que debes tener un poco de cuidado con la aritmética si estás acostumbrado a las matemáticas en C o Java. Cuidado con cosas como:

```js
0.1 + 0.2;
=> 0.30000000000000004
```

En la práctica, los valores enteros se tratan como entradas de 32 bits (y se almacenan de esa manera en algunas implementaciones de navegador), lo que puede ser importante para las operaciones de bits.

---

## Numbers

#### Operadores aritméticos

Los [operadores aritméticos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators) estándar son suma, resta, residuo, división, etc.

```js
1 + 2;
=> 3

2 - 5;
=> -3

5 / 2;
=> 2.5

6 * 2;
=> 12

20 % 7;
=> 6;
```

---

## Numbers

#### Objecto `Math`

También hay un objeto incorporado llamado [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) si deseas realizar funciones matemáticas más avanzadas:

```js
// Raíz cuadrada
Math.sqrt(9);
=> 3

// Redondea al entero más cercano
Math.round(9.5);
=> 10

// Redondea al entero mayor o igual más próximo
Math.ceil(10.2);
=> 11

// Redondeo máximo entero menor o igual al número.
Math.floor(6.9);
=> 6

// PI
Math.PI
=> 3.141592653589793;

// Número pseudo-aleatorio dentro del rango [0, 1).
Math.random();
=> 0.7198309201452662;
```

---

## Numbers

### Convertir `strings` en enteros (_integers_)

#### `parseInt()`

Puedes convertir un _string_ en un número entero utilizando la función incorporada [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt). Esto toma la base para la conversión como un segundo argumento opcional.

```js
parseInt('123', 10);
=> 123

parseInt('010', 10);
=> 10
```

Si deseas convertir un número binario en un entero, simplemente cambia la base:

```js
parseInt('11', 2);
=> 3
```

---

## Numbers

#### `parseFloat()`

De manera similar, puedes analizar números de punto flotante usando la función incorporada [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) que siempre usa base 10 a diferencia de su primo `parseInt()`.

```js
parseFloat('11.2');
=> 11.2
```

---

## Numbers

#### Operadores unarios

También puede utilizar el operador unario `+` para convertir valores en números:

```js
+'42';
=> 42
```

---

## Numbers

#### `NaN`

Se devuelve un valor especial llamado [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (abreviatura de _"Not a Number"_) si el _string_ no es numérico:

```js
parseInt('hello', 10);
=> NaN
```

**`NaN` es tóxico**: si se proporciona como entrada para cualquier operación matemática, el resultado también será `NaN`:

```js
NaN + 5;
=> NaN
```

Puedes probar si el valor es `NaN` usando la función incorporada [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN):

```js
isNaN(NaN);
=> true
```

---

## Numbers

#### `Infinity`

JavaScript también tiene los valores especiales [`Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) and `-Infinity`:

```js
1 / 0;
=> Infinity

-1 / 0;
=> -Infinity
```

Puede probar los valores `Infinity`,`-Infinity` y `NaN` utilizando la función incorpodada [`isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite):

```js
isFinite(1/0);
=> false

isFinite(-Infinity);
=> false

isFinite(NaN);
=> false
```

---

## Strings

Strings en JavaScript son secuencias de caracteres. Para ser más precisos, son secuencias de [caracteres Unicode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode), con cada carácter representado por un número de 16 bits.

#### `length`

Para encontrar la longitud de un _string_, accede a su propiedad [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length):

```js
'hello'.length;
=> 5
```

---

## Strings

#### Espera, ¿Strings tienen métodos?

¡Esta es nuestra primera experiencia con objetos de JavaScript! ¿Mencioné que _strings_ también pueden ser objetos?

Los _string_ tienen otros [métodos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods) que también te permiten manipular y acceder a información sobre el _string_

```js
'hello'.charAt(0);
=> "h"

'hello, world'.replace('hello', 'goodbye');
=> "goodbye, world"

'hello'.toUpperCase();
=> "HELLO"
```

---

## Strings

No existe un método incorporado para capitalizar palabras. Tendras que hacer:

```js
var greeting = 'hello';
greeting.charAt(0).toUpperCase() + greeting.slice(1);
```

---

## Strings

#### Concatenación de string

El [operador `+` ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition) también realiza concatenación de strings:

```js
'hello' + ' world';
=> "hello world"
```

Si agregas un string a un número (u otro valor), todo se convierte primero en un string.

> **⚠️ Esto podría sorprenderte un día.**

```js
'3' + 4 + 5;
=> "345"

3 + 4 + '5';
=> "75"
```

**Nota**: Agregar un string vacío a algo es una forma útil de convertirlo.

---

## Strings

#### Concatenación de string

También en ECMAScript6 ahora es posible usar la notación de comillas invertidas (` `` `)para concatenar strings:

```js
var a = 'hello';
var b = 'world';
`${a} ${b}!`;
=> "hello world!"
```

---

## `null` y `undefined`

JavaScript tiene distinciones entre:

- `null` un valor que indica una falta de valor deliberada
- `undefined` indica un valor no inicializado, es decir, aún no se ha asignado un valor.

Hablaremos de variables más adelante, pero en JavaScript es posible declarar una variable sin asignarle un valor. Si haces esto, el tipo de la variable es `undefined`.

```js
var a;
=> undefined

a
=> undefined
```

---

## Boolean

JavaScript tiene un tipo booleano, con valores posibles "verdadero" (`true`) y "falso" (`false`) (ambos son palabras clave). Cualquier valor se puede convertir a booleano de acuerdo con las siguientes reglas:

#### Lo siguientes se vuelven falso (`false`) cuando se convierte en un booleano

- `false`
- `0`
- `''` (empty string)
- `NaN`
- `null`
- `undefined`

---

## Boolean

#### Todos los demás valores se vuelven verdaderos (`true`) cuando se convierten a booleanos

Puede realizar esta conversión explícitamente usando la función `Boolean ()`:

```js
Boolean('');
=> false

Boolean(234);
=> true

Boolean('a');
=> true
```

Sin embargo, esto rara vez es necesario, ya que JavaScript realizará silenciosamente esta conversión cuando espera un booleano, como en una declaración `if` (ver más abajo). Por esta razón, a veces hablamos simplemente de "valores verdaderos" y "valores falsos", es decir, valores que se vuelven "verdaderos" (`true` ) y "falsos" (`false`), respectivamente, cuando se convierten en valores booleanos.

Alternativamente, estos valores se pueden llamar **"truthy"** y **"falsy"**, respectivamente.

Se admiten operaciones booleanas como `&&` (lógico _y_), `||` (lógico _o_) y `!` (Lógico _no_).

---

## Variables

Los operadores numericos en JavaScript son `+`, `-`, `*`, `/` and `%`.

#### Operadores de asignación

Los valores se asignan mediante `=`, y también hay asignaciones compuestas como `+=` y `-=`.

```js
var x = 1;
=> 1

x += 5;
=> 6
```

Puede usar `++` y `--` para incrementar y disminuir respectivamente. Estos se pueden utilizar como operadores de prefijo o sufijo.

---

## Variables

#### Declaración de variables

En ECMAScript 6 se declaran variables utilizando las palabras clave: [**`var`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [**`let`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), o [**`const`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

```js
var a;
=> undefined

let b;
=> undefined
```

Si declaras una variable sin asignarle ningún valor, su tipo es `undefined`

```js
const c;
=> Uncaught SyntaxError: Missing initializer in const declaration
```

---

## Variables

#### Declaración de variables

Sin embargo, hacer esto con `const` causa un error

`const` define una constante, lo que significa que **no puede** ser reasignada

```js
var firstname = 'Alex';
=> undefined;
firstname = 'Pedro';
=> "Pedro"

const lastname = 'Chin';
=> undefined
lastname = 'Hayden';
=> Uncaught TypeError: Assignment to constant variable.
```

Al decidir qué palabra clave vas usar, siempre usa `const`. Si necesita una variable que cambia de valor, usa `let`. Solo debe usar `var` si los otros dos no son adecuados.

---

## Variables

#### Variables globales

No es posible definir variables sin `var`,`let` o `const`.

```js
x = 1;
=> 1
```

Lo anterior es una asignación de propiedad. Primero, Javascript intenta resolver `x` contra la cadena de alcance (_scope chain_). Si encuentra `x` en cualquier lugar de esa cadena de alcance, realiza una asignación; si no encuentra `x`, **solo**, entonces crea la propiedad`x` en un objeto global (**que es un objeto de nivel superior en una cadena de alcance**).

```js
window.x;
=> 1
```

Ahora, observa que **no** declara una variable global, se crea una **propiedad** global.

---

## Variables

#### Alcance del bloque (_Block scope_)

Una diferencia importante con otros lenguajes como Java es que en JavaScript, **los bloques no tienen alcance**; sólo las funciones tienen alcance. (El bloque está delimitado por un par de llaves `{}`).

```js
{
  statement_1;
  statement_2;
}
```

Entonces, si una variable se define usando `var` en una declaración compuesta (por ejemplo, dentro de una estructura de control`if`), será visible para toda la función.

Sin embargo, con ECMAScript Edition 6, [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) y [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) te permiten crear variables de ámbito de bloque.

```js
// con let
var name = 'Pedro';
{
  let name = 'Alex';
}

name;
=> 'Pedro'
```

---

## Arrays

Los arrays en JavaScript se utilizan para almacenar varios valores en una sola variable.

#### Usando la palabra clave `new`

Una manera de crear arrays es:

```js
const a = new Array();
=> undefined

a[0] = 'perro';
=> "perro"

a[1] = 'gato';
=> "gato"

a[2] = 'gallina';
=> "gallina"

a
=> ['perro', 'gato', 'gallina']

a.length;
=> 3
```

---

## Arrays

#### Usando array literal

Una forma mas fácil para crear arrays es

```js
const a = ['perro', 'gato', 'gallina'];

a.length;
=> 3
```

#### Método `length`

El método `length` funciona de una manera interesante en Javascript. Siempre es uno más que el índice más alto del array

Entonces, `array.length` no es necesariamente el número de elementos del array. Considera lo siguiente:

```js
const a = ['perro', 'gato', 'gallina'];
a[100] = 'zorro';
a.length; // 101
```

**Recuerda**: la longitud del array es uno más que el índice más alto.

---

## Arrays

#### Obteniendo desde un array

Si consultas un índice de un array inexistente, obtiene `undefined`:

```js
const a = ['perro', 'gato', 'gallina'];
=> undefined

typeof a[90];
=> undefined
```

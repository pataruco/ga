class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Functions</h1>
</div>

---

## Definiciones

Una función se puede definir utilizando dos sintaxis diferentes. Por ejemplo, podemos definir una función `speak` que recibe un argumento de cualquiera de las siguientes formas:

```javascript
const speak = function (words) {
  console.log(words);
};

function speak(words) {
  console.log(words);
}
```

---

## Definiciones

La diferencia es sutil pero importante.

1. La primera declaración de función es asignar una función "anónima" a una variable.
2. La segunda declaración de función es una función con nombre. La diferencia práctica es que la función nombrada se procesará cuando se interprete el código, por lo que se puede llamar a la función antes de definirla.

---

## Funciones flecha (_Arrow functions_)

.row[
.col[
Son nuevas desde ES6. Son un estilo abreviado de escribir funciones anónimas. Los usaremos más a lo largo del curso, pero por ahora, echemos un vistazo rápido a la sintaxis:

```js
// "standard" function syntax:
const sayHello = function (name) {
  return `Hi there, ${name}`;
};

// arrow function syntax:
const sayHello = (name) => {
  return `Hi there, ${name}`;
};
```

]
.col[
Independientemente de la sintaxis que utilices, una función siempre tiene:

- Un nombre
- Una lista opcional de argumentos, o información para usar, definida por el paréntesis (`()`) antes de la llave (`{}`) de apertura.
- Declaraciones dentro de la función: este es el código que se ejecuta cada vez que se llama a la función

  ]
  ]

---

## Llamada de funciones (_Calling Functions_)

.row[
.col[
Llamar a una función ejecutará el código definido dentro de esta función.

Definir y llamar a una función es diferente: no se llamará a una función cuando esté definida.

Llamas a una función usando paréntesis después del nombre de la función `()`:

]
.col[

```javascript
function hello(){
  return 'hello there';
}

hello();
=> hello there
```

]
]

---

## Argumentos predeterminados (_Default arguments_)

.row[
.col[
Con ES6 ahora podemos definir argumentos _por defecto_. Si se llama a la función sin un argumento, se usa el valor predeterminado en su lugar:

]
.col[

```js
function sayHi(name='John') {
  return `Hi, I'm ${name}`;
}

sayHi('Julian');
=> "Hi, I'm Julian"

sayHi();
=> "Hi, I'm John"
```

]
]

---

## Pasando una función como argumento

Una función se puede pasar como argumento a otra función:

```javascript
function getName(callback) {
  const name = prompt('What is your name?');
  callback(name); // sayName is called here
}

function sayName(name) {
  console.log(`Well hi there, ${name}`);
}

getName(sayName);
```

Cuando pasamos una función como argumento, se denomina **función de devolución de llamada (_callback function_)**. Analizaremos las devoluciones de llamada con más detalle más adelante en el curso.

---

## _Scope_

### Compilación

Antes de hablar sobre el _scope_, hay algunas cosas que debemos comprender antes.

El código que escribes _debe_ traducirse a una forma que la computadora pueda entender.

El código fuente es legible por humanos. Este código fuente puede traducirse en un conjunto de unos y ceros que el CPU de una computadora pueda entender.

`Source Code` ==> `1's y 0's`

... o, el código fuente puede traducirse a otro tipo de idioma, código de bytes, que pueda ser entendido por una Máquina Virtual (VM).

`Source Code` ==> `byte code`

---

## _Scope_

#### Idiomas compilados

Algunos lenguajes se compilan _explícitamente_. En otras palabras, el programador debe ejecutar comandos particulares para invocar la compilación.

Por ejemplo, los lenguajes **C** y **C++** se compilan explícitamente. El programador debe ejecutar un comando como:

- `gcc -o hello_world -c hello_world.c`.

Esto se hace para traducir el código C en el archivo hello _world.c en un archivo executable_ o _binario_ que contiene los 1 y 0 comprendidos por el CPU.

_gcc_ es el compilador de **C**.

Esto es lo que sucede:

- **Source Code** ==> **1's and 0's**
- **hello_world.c** ==> **hello_world**

---

## _Scope_

#### Idiomas interpretados

Algunos lenguajes _no_ requieren que el programador ejecute explícitamente un compilador. **JavaScript**, **Java**, **Ruby** son un par de lenguajes interpretados.

Hay compilando, pero se hace automáticamente.

`Source Code` ==> `byte code`

---

## _Scope_

#### De código fuente a código en ejecución.

Hay dos fases básicas que se deben seguir cuando se pasa del código de un archivo a un programa en ejecución.

- **Tiempo de compilación (_compile time_)**: el código fuente se traduce a otro formato. Por ejemplo, cuando ejecutamos un programa de javascript, compilaremos javascript en un lenguaje/código de bytes intermedio que la máquina virtual JavaScript (VM) comprenda.

- **Tiempo de ejecución (_runtime_)**: la computadora realmente ejecuta cada instrucción en el programa. Por ejemplo, esto es cuando la computadora ejecuta el código de bytes del programa JavaScript.

---

## _Scope_

#### _Scope_ variable

El _scope_ variable describe en qué parte de un programa se puede ver una variable. En otras palabras, dónde se puede utilizar. Veremos más adelante, pero has visto que las variables declaradas dentro de una función no se pueden ver ni usar en el _scope_ global.

---

## _Scope_

#### Análisis léxico (_Lexical Analysis_)

Parte de la fase de compilación es el análisis léxico. En general, el _Lexical Analysis_ escanea el código fuente, un carácter a la vez, buscando construcciones de lenguaje como variables, funciones, palabras clave integradas, etc.

Es durante este tiempo que el compilador construye _el scope_ de la variable y **declara** la variable dentro de un scope variable.

Aquí hay un resumen rápido de lo que hace su computadora cuando está buscando ejecutar su archivo JavaScript:

1. Lee el código fuente en un archivo JavaScript en la memoria
2. Compila el código fuente:
   - Análisis léxico
   - Construye el _scope_
   - Convierta el código fuente en una forma entendida por VM, bytecode
3. Ejecuta código de bytes

---

## _Scope_

### Construyendo el _Scope_

El _scope_ se crea durante la parte de análisis léxico de la fase de compilación. Cuando se construye _el scope_ durante esta fase, se llama **Lexical Scope**. Esto es muy común en muchos lenguajes de programación.

Vamos a ver cómo funciona. Aquí está el código con el que trabajaremos:

---

### Construyendo el _Scope_

```javascript
const firstName = 'John'; // 1
const lastName = 'Dowd'; // 2
const age = 19; // 3

function displayPerson(fname, lname) {
  //4, 5
  const prefix = 'Mr'; // 6
  let fullName = null; // 6

  function getFullName() {
    // 7
    const suffix = 'Esq.'; // Everybody's a lawyer, eh.
    return (fullName = `${prefix} ${fname} ${lname} ${suffix}`);
  }

  return getFullName();
}

function removeYears() {
  // 8
  const minusYears = 10;
  const age = 49;
  return age - minusYears;
}

console.log(displayPerson(firstName, lastName));
console.log(removeYears());
```

---

### Construyendo el _Scope_

_Node_ cargará este archivo y pasará el código fuente a su máquina virtual Javascript. Luego, la máquina virtual ejecutará un análisis léxico de esta fuente y creará un _scope_ variable como se describe en los siguientes pasos:

1. Se encontró la declaración de la variable `firstName`.

   - Ponga la variable `firstName` en el _scope_ global.

2. Se encontró la declaración de la variable `lastName`.

   - Ponga la variable `lastName` en el _scope_ global.

3. Se encontró la declaración de la variable `age`.

   - Ponga la variable `age` en el _scope_ global.

4. Se encontró la declaración `displayPerson`.

   - Ponga la funcion `displayPerson` en el _scope_ global.
   - Observe que el valor de `displayPerson` es una función. Entonces, cree un _scope_ interno y procese esta función.

---

### Construyendo el _Scope_

5. Encuentra las declaraciones `firstName` y `lastName`.

   > Nota: los argumentos de las funciones se comportan como variables locales.

- Colóquelos en el _scope_ de la función `displayPerson`.

6. Se encontraron declaraciones de variables `prefix`,`fullName`.

   - Ponlas en el _scope_ de la función `displayPerson`.

7. Se encontró la declaración `getFullName`.
   - Ponga `getFullName` en el scope de la función`displayPerson`.
   - Nota que `getFullName` es una función. Entonces, crea un scope interno y procesa esta función.
   - Todo hecho con la función `getFullName`, no más declaraciones de variables.
   - Todo hecho con la función `displayPerson`, no más declaraciones de variables.

---

### Construyendo el _Scope_

8.  Se encontró la declaración de variable `removeYears`.

    - Ponga `removeYears` en el _scope_ global.
    - **Observe que el valor de `removeYears` es una función. Entonces, cree un scope interno y procese esta función.**

9.  Se encontraron declaraciones de variables `age` y`minusYears`.
    - Ponlas en el _scope_ d ela función

---

### Construyendo el _Scope_

<img src="https://i.imgur.com/cA6kaw5.png" alt="Scope building" style="max-width: 400px;">

---

### La terminología de _scope_

Existen diferentes terminologías para hablar de _scope_ en Javascript. Si lees sobre `(function|global|lexical|public/private)scope` o `closure` o `namespace`, todas estas palabras clave se refieren al **_scope_**, de una forma u otra.

---

### La terminología de _scope_

#### _Scope_ global

Antes de escribir una línea de JavaScript, estás en lo que llamamos el **Global scope**. Si declaramos una variable, se define globalmente:

```javascript
const name = 'Pedro';
```

Global scope puede ser realmente confuso cuando te encuentras con conflictos de _namespace_. No querrás usar el _scope_ global para todas tus variables, ya que usar el _scope_ global de la manera correcta es bastante complejo, pero cada programa de Javascript usa el _scope_ global de una forma u otra.

> **Note**: ¿Qué significa [namespace](http://www.codeproject.com/Articles/829254/JavaScript-Namespace) en JavaScript?

---

### La terminología de _scope_

#### _Scope_ local

El _scope_ local se refiere a cualquier _scope_ que se defina más allá del global. Si defines una función, esta función tendrá su propio _scope_ dentro del cuerpo de la función. Cualquier función definida dentro de otra función también tiene un _scope_ local y puede referirse al _scope_ principal, pero esta lógica no funciona al revés.

---

### La terminología de _scope_

#### _Scope_ de función: ¡no se puede entrar desde afuera!

No se puede acceder a una variable definida dentro de una función fuera de la función, este es el _scope_ de función

```javascript
const a = 'this is the global scope';
function myFunction() {
  const b = 'this variable is defined in the local scope';
}
myFunction();
console.log(b);
```

Esto arrojará un error de referencia porque la variable `b` no es accesible fuera del _scope_ si la función donde está definida.

---

### La terminología de _scope_

#### Accediendo a variables dentro del mismo scope

En la lógica definida anteriormente, el hecho de que el _scope_ padre no pueda acceder a una variable funciona solo de una manera.

Una función puede acceder a variables del _scope_ padre. En otras palabras, una función definida en el _scope_ global puede acceder a todas las variables definidas en el _scope_ global.

```javascript
// Global Scope
const a = 'Hello';

// This function is defined in the global scope
function sayHello(name) {
	return `${a} ${name}`;
}

sayHello('WDI');
=> "Hello WDI";
```

---

### La terminología de _scope_

#### _Scope_ de función anidada

Cuando una función se define dentro de otra función, es posible acceder a las variables definidas en el padre desde el hijo:

```javascript
const a = 1;

function getScore () {
  const b = 2,
  c = 3;

  function add() {
    return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

---

## Conclusión

La única forma de dominar _scope_ en JavaScript es practicar. ¡Tendrás muchos errores confusos con JavaScript que escribas al comienzo de tu viaje! Esto re obligará a nombrar las variables y funciones de la forma correcta para asegurarte de que no haya ningún conflicto.

Para más detalles sobre funciones y _scope_ [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

---

class: lab

# Lab

[Fizz buzz, 99 bottles, random address generator][lab]

[lab]: https://github.com/pataruco/ga/raw/main/homeworks/week-2/week-2-starter-code.zip

---

class: code-along

# Homework

[Problemas de funciones y arrays][array-func]

[array-func]: https://github.com/pataruco/ga/raw/main/homeworks/filter-map-problems/filter-map-problems-starter-code.zip

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

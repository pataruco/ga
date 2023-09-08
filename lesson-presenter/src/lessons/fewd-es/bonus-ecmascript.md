class: frontpage

<div>
   <h2>Front-End Web Development</h2>
  <hr/>
  <h1>EcmaScript N</h1>
</div>

---

## ES6/ECMA2015 ES10/ES2021? ¿Cómo se llama?

> "Los programas deben estar escritos para que **la gente los lea** y solo de manera incidental para que los ejecuten las computadoras". - Abelson y Sussman (Estructura e interpretación de programas informáticos)

¡Necesitamos programar para la gente!

Cada idioma se desarrolla a medida que pasa el tiempo. [Chaucer](https://en.wikipedia.org/wiki/Geoffrey_Chaucer) escribió en inglés así:

> Whan that Aprillë with his schowrës swoot <br>
> The drought of Marche had perced to the roote, <br>
> And bathed every veyne in swich licour, <br>
> Of which vertue engendred is the flour;" <br>

¡Pero eso ahora ni siquiera se lee como en inglés!

---

## ES6/ECMA2015 ES9/ES2020? ¿Cómo se llama?

Los lenguajes de programación no son diferentes. Los desarrolladores buscan constantemente términos que no existen o caen en el hábito de escribir ciertas frases o patrones que quizás se acortan con el tiempo.

El [comité TC39](http://www.ecma-international.org/memento/TC39.htm) (responsable de la estandarización de JavaScript) se ha ocupado de la mayoría de las preocupaciones sobre JavaScript Se agregaron características y se corrigieron las piezas defectuosas existentes. Si desea conocer las partes buenas y malas de JavaScript, consulte el libro de Douglas Crockford [JavaScript, las partes buenas](https://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742).

---

## ES6/ECMA2015 ES9/ES2020? ¿Cómo se llama?

### ¿Cómo se llama esta nueva versión de JS?

[ES5, ES6, ES2016, ES.Next: ¿Qué está pasando con el control de versiones de JavaScript?](Http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/) es una publicación de blog que explica esto muy bien.

Esencialmente, la mayoría de los desarrolladores se refieren al nuevo Javascript como ES6 porque ES2015 no tiene mucho sentido ahora que estamos en 2020.

Sin embargo, el tiempo dirá si la especificación del próximo año (se han comprometido a lanzar una por año) se conocerá popularmente como ES10 o ECMA2020.

---

## `var`

La palabra clave `let` es una nueva palabra clave disponible en ES6 que nos permite definir una variable de ámbito de bloque.

Hasta ahora, hemos estado usando `var` para definir una variable:

```js
var name = 'Pedro';
```

El alcance de `var` existe en el alcance de la función. Consideremos esto moviendo esta declaración dentro de una función.

```js
function sayName() {
  var name = 'Ben';
}

sayName();
console.log(name);
```

Cuando ejecutamos este código, deberíamos ver que no se produjo nada en el lado derecho. Esto se debe a que la variable de nombre no es accesible fuera del alcance de la función en la que se definió.

---

## `let`

En JS, nunca hemos tenido la capacidad de usar "alcance de bloque" hasta que haya aparecido **let**.

Consideremos:

```js
if (true) {
  var name = "Pedro";
}

console.log(name);
=> Pedro
```

Sin embargo, si cambiamos esto a un `let`, vemos que obtenemos el mismo efecto que si estuviéramos dentro de una función.

```js
if (true) {
  let name = 'Ben';
}

console.log(name);
```

---

## `let`

otro ejemplo:

```js
for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log("outside", i);

=>
0
1
2
3
4
5
6
7
8
9
outside 10
```

---

## `const`

A continuación, veremos el uso de `const`. En otros idiomas existe esta idea de un valor constante, a menudo escrito en mayúsculas, que es inmutable (no se puede cambiar).

En JavaScript, algunas personas solían usar la convención de mayúsculas para falsificar esto.

```js
var API_KEY = '121noainsoaindaoisnd';
console.log(API_KEY);
```

Sin embargo, esto es mutable ...

```js
var API_KEY = "121noainsoaindaoisnd";
API_KEY = null;

console.log(API_KEY);
=> null
```

---

## `const`

Probemos esto con una variable `const`:

```js
const API_KEY = '121noainsoaindaoisnd';
API_KEY = null;
```

Puede ver que obtenemos un error. Esto se debe a que esta nueva variable `const` es de solo lectura, no se puede cambiar.

```js
const someObject = {color: "red"};
someObject.color = "blue";

console.log(someObject);
=> {color: "blue"};
```

---

## ¿Cuándo usar `var`,`let`, `const`?

La mayoría de las veces, debe usar `const` sobre`let`. Para ser honesto, en ES6, casi nunca debería necesitar usar `var`.

---

## Elevación e inicialización

> ⚠️ **Advertencia** Con `let` y `const` en ES6, ya no es seguro verificar la existencia de un identificador usando `typeof`:

```js
function foo() {
  typeof bar;
  let bar = 'baz';
}
foo(); // ReferenceError: can't access lexical declaration
// `bar' before initialization
```

Todas las declaraciones (`var`,`let`, `const`,`function`, `function *`, `class`) se incluyen en JavaScript. Esto significa que si se declara un nombre en un ámbito, en ese ámbito el identificador siempre hará referencia a esa variable en particular.

Sin embargo ... `let` y `const` no se inicializan con `undefined`.

Pero eso está bien porque siempre DEBE inicializar sus identificadores antes de intentar usarlos.

---

## Template strings

A continuación, veremos la interpolación de _strings_. Esta es una característica que mucha gente quería. Esto se denomina "literales de plantilla" o "plantillas de strings".

#### _Strings_ multilínea

Hacer strings de varias líneas en Javascript fue bastante difícil, pero ahora es muy fácil. Necesita usar el carácter de tilde atrasado para lograr esto:

```js
let name = `Hola
a
todos
👋`;

console.log(name);
```

---

## Concatenación

Anteriormente, en ES5, debe hacer algo como esto para unir cadenas:

```js
var firstName = 'Pedro';
var lastName = 'Martin';

console.log('My name is ' + firstName + ' ' + lastName);
```

---

## Concatenación

Sin embargo, ahora con ES6 puedes hacer:

```js
let firstName = 'Pedro';
let lastName = 'Martin';

console.log(`My name is ${firstName} + ${lastName}`);
```

---

## Concatenación

Un ejemplo más complicado podría ser:

```js
let person = {
  firstName: 'Pedro',
  lastName: 'Martin',
  sayName: function () {
    return `My name is ${this.firstName} ${this.lastName}`;
  },
};

let name = person.sayName();

console.log(name);
```

---

## Literales de objetos mejorados

Entonces, en el ejemplo anterior, podríamos usar otra característica nueva de ES6: Literales de objetos mejorados.

```js
let person = {
  firstName: 'Pedro',
  lastName: 'Martin',
  sayName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  },
};

let name = person.sayName();
console.log(name);
```

---

## Literales de objetos mejorados

Otro ejemplo:

```js
function createPerson(name, age) {
  return {
    type: 'Person',
    name: name,
    age: age,
  };
}
```

Que puede ser reescrito:

```js
function createPerson(name, age) {
  return {
    type: 'Person',
    name,
    age,
  };
}
```

Esto es solo azúcar sintáctico y se llama **object literal property value shorthand**.

---

## Funciones de flecha

Las funciones de flecha son realmente geniales. Son una forma más rápida de escribir funciones anónimas en Javascript.

Tome una función anónima normal en ES5:

```js
var add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));
```

Reescribamos esto con una función de flecha ES6:

```js
var add = (a, b) => {
  return a + b;
};
```

---

## Funciones de flecha

De hecho, podemos hacer _DRY_ de esto y hacer dos cosas aquí:

```js
var add = (a, b) => a + b;
```

1. Quita las llaves
2. Retirar `return`

Consideremos esto con el uso de `map`:

```js
let numbers = [2,3,4,5,6,7];
let doubled = numbers.map(function(n){
  return n * 2;
}

console.log(doubled);
```

Sin embargo, usando funciones de flecha podemos hacer:

```js
let numbers = [2, 3, 4, 5, 6, 7];
let doubled = numbers.map((n) => n * 2);

console.log(doubled);
```

---

## Funciones de flecha

¡Que está realmente limpio! De hecho, podemos hacer esto aún más limpio cuando hay un solo parámetro y podemos eliminar los corchetes:

```js
let numbers = [2, 3, 4, 5, 6, 7];
let doubled = numbers.map((n) => n * 2);

console.log(doubled);
```

---

### Alcance (_scope_) léxico con funciones de flecha

Sin embargo, hay un par de cosas que pueden hacerte tropezar con las funciones de flecha. Uno es el alcance léxico.

Consideremos:

```js
let person = {
  name: 'Pedro',
  sayName: () => {
    console.log(`Hi my name is ${this.name}`);
  },
};

console.log(person.sayName());
```

---

### Alcance (_scope_) léxico con funciones de flecha

Esto dará un error. `this` dentro de la función de flecha sigue siendo el valor principal de this, por lo que en este caso sería `window`.

Entonces, si queremos _DRY_ el código anterior, necesitamos usar la sintaxis de objetos:

```js
let person = {
  name: 'Pedro',
  sayName() {
    console.log(`Hi my name is ${this.name}`);
  },
};

console.log(person.sayName());
```

Esto es equivalente a hacer:

```js
let person = {
  name: 'Pedro',
  sayName: function () {
    console.log(`Hi my name is ${this.name}`);
  },
};

console.log(person.sayName());
```

---

### Alcance (_scope_) léxico con funciones de flecha

Un ejemplo más práctico de cuándo es útil el alcance léxico. Primero, consideremos este código:

Hay algo **mal** con esto:

```js
let person = {
  name: 'Pedro',
  interests: ['JS', 'Rust', 'SQL'],
  showInterests: function () {
    this.interests.forEach(function (interest) {
      console.log(`${this.name} likes ${interest}`);
    });
  },
};

console.log(person.showInterests());
```

---

### Alcance (_scope_) léxico con funciones de flecha

El problema es que `this.name` ahora no se refiere al objeto, pero como está en una función de devolución de llamada, se refiere a otra cosa. ¡Sin embargo, podemos cambiar esto!

Anteriormente, podríamos haber almacenado el valor de `this` en una variable en`self`:

```js
let person = {
  name: 'Pedro',
  interests: ['JS', 'Ruby', 'Go'],
  showInterests: function () {
    let self = this;
    this.interests.forEach(function (interest) {
      console.log(`${self.name} likes ${interest}`);
    });
  },
};

console.log(person.showInterests());
```

---

### Alcance (_scope_) léxico con funciones de flecha

Pero ahora con ES6, podríamos usar una función de flecha:

```js
let person = {
  name: 'Pedro',
  interests: ['JS', 'Ruby', 'Go'],
  showInterests: function () {
    this.interests.forEach((interest) => {
      console.log(`${this.name} likes ${interest}`);
    });
  },
};

console.log(person.showInterests());
```

---

## Default + Rest + Spread

En Ruby, es posible establecer un valor predeterminado para un argumento en una definición de función ... ¡y ahora está en Javascript!

### Argumentos Predeterminados (_default_)

```js
function hello(greeting, name="Pedro"){
  console.log(`${greeting} ${name}`);
}

hello("Hi")
=> Hi Pedro
```

Este no tiene por qué ser el último argumento.

```js
function hello(greeting = 'Hi', name = 'Pedro') {
  console.log(`${greeting} ${name}`);
}

hello();
```

---

### Parámetros rests

Ruby tiene algo llamado argumento splat, que "absorbe" el resto de los argumentos. Ahora ES6 tiene algo similar llamado [parámetros rests](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters).

Este TIENE que ser el último argumento y tiene como prefijo tres puntos. Esto crea un _array_ y coloca todos los argumentos restantes en ese _array_. (Tiene todos los métodos de _array_).

```js
function hello(greeting, ...names) {
  console.log(`${greeting} ${names.join(', ')}`);
}

hello('Yo', 'Pedro', 'Gabriel', 'Alex');
```

---

### Operador Spread

El operador spread permite que un objeto complejo se expanda en argumentos cuando se espera más de un argumento:

```js
function hello(greeting, firstPerson, secondPerson) {
  console.log(`${greeting} ${firstPerson} and ${secondPerson}`);
}

hello('Yo', ...['Pedro', 'Gabriel']);
```

---

## Desestructuración (_Destructuring_)

### Uso de objetos

ES6 también nos brinda una nueva forma de extraer y asignar variables desde objetos en JavaScript. Hasta ahora, deberíamos estar familiarizados con la sintaxis de puntos y la sintaxis de corchetes. P.ej.:

```js
let person = {
  name: 'Pedro',
  age: 28,
  location: 'London',
};

console.log(person.age); // 28
console.log(person['age']); // 28
```

Sin embargo, podemos usar una nueva táctica llamada desestructuración (_destructuring_) para hacer:

```js
let { age: personAge } = person;

console.log(personAge);
```

---

## Desestructuración (_Destructuring_)

### Uso de objetos

Esto es un poco confuso cuando lo ha visto por primera vez. La estructura de esto es:

```js
let { key: newVariable } = Object;

// También puede utilizar la sintaxis de corchetes

let key = 'age';
let { [key]: newVariable } = Object;
```

Con la notación abreviada de objetos, también puede hacer:

```js
let { age } = person;

console.log(age);
```

Esto puede complicarse un poco más si desea obtener varios valores.

---

## Desestructuración (_Destructuring_)

### Uso en Arrays

```js
let numbers = [1, 2, 3, 4];

let first = numbers[0];
let second = numbers[1];
```

Con la desestructuración, esto se vería así.

```js
let numbers = [1, 2, 3, 4];

let [first, second] = numbers;
console.log(first, second);
```

Esto puede volverse muy extraño si usamos espacios en blanco:

```js
let numbers = [1, 2, 3, 4];

let [first, second, , fourth] = numbers;
console.log(first, second, fourth);
```

---

## Conclusión

Hay algunas otras características de ES6 que no hemos analizado. Aquí hay una lista de algunos de ellos que desea investigar ustedes mismos:

- classes
- iterators + for..of
- generators
- unicode
- modules
- module loaders
- map + set + weakmap + weakset
- proxies
- symbols
- subclassable built-ins
- promises
- math + number + string + array + object APIs
- literales binary y octal
- reflect API
- tail calls

---

## Conclusión

Sin embargo, hemos repasado las partes que necesitará aprender pronto. ¡Siéntete libre de leer sobre el tema y practicar un poco más!

---

## Otras lecturas

- [Eric Elliott](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.6tci62ldr)
- [Let's learn ES6](https://www.youtube.com/playlist?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX)
- [lukehoban](https://github.com/lukehoban/es6features)

---

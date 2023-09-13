class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Objetos y Clases</h1>
</div>

---

## ¿Qué son los objetos?

- Los objetos son un tipo de estructura de datos presente en casi todos los lenguajes de programación, aunque pueden tener diferentes nombres en diferentes lenguajes.
- Al igual que los _arrays_, los objetos pueden contener múltiples datos de diferentes tipos; pero a diferencia de los _arrays_, los objetos usan claves con nombre en lugar de índices para ordenar y acceder a esos datos
- Los objetos en general se componen de dos cosas: propiedades y métodos. Las propiedades son datos adjuntos a un objeto que lo describen o están relacionados con él de alguna manera. Los métodos son solo funciones, pero debido a que están adjuntos a un objeto, puede considerarlos como acciones que el objeto puede invocar sobre sí mismo.

---

## ¿Qué son los objetos?

Ejemplo: un automóvil tiene propiedades, un tipo de motor, un color, un cierto número de asientos, etc. Siguiendo la misma lógica, un objeto JavaScript puede tener **propiedades** y **valores** para estas propiedades.

Aparte de los valores `null` y`undefined`, **todo en JavaScript es un objeto**.

---

## Colecciones de pares nombre-valor

Los objetos JavaScript funcionan como listas de claves (**Un nombre de propiedad**) y los valores correspondientes (**Un valor de propiedad**).

Esta forma de almacenar / leer datos se usa ampliamente en programas y lenguajes porque es altamente personalizable y rápida de implementar.

Una clave puede ser un nombre, un número o un _string_, el valor correspondiente a una clave puede ser cualquier valor de JavaScript, incluidas los _arrays_, `null` o `undefined` e incluso otro objeto. Por tanto, las estructuras de objetos pueden estar anidadas (objetos dentro de objetos)

---

## Creando objetos

### Constructores de objetos

El constructor de [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) crea un contenedor para el objeto con el valor dado.

```javascript
const myObject = new Object();
```

---

## Creando objetos

### Sintaxis literal de objeto

Esto también se denomina [_object initializer_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Esto es equivalente a la sintaxis anterior y es la que usamos para crear objetos JSON.

```javascript
const myObject = {};
```

---

## Creando objetos

### Propiedades de objeto

Los objetos en JavaScript **siempre** tienen propiedades asociadas.

Puede pensar en una propiedad en un objeto como un tipo de variable que contiene un valor. Se puede acceder a las propiedades de un objeto mediante la "notación de puntos":

```javascript
const person = {
  name: 'Pedro'
};

person.name
=> 'Pedro'
```

---

## Creando objetos

### Propiedades de objeto

Puede definir o reasignar una propiedad asignándole un valor usando `=` como lo harías con una variable normal.

```javascript
const person = {
  name: 'Pedro'
};

person.name
=> 'Pedro'

person.name = 'Alex';
person.name
=> "Alex"
```

---

## Creando objetos

### Creando un objeto con propiedades

Vamos a crear un objeto `classroom` que contiene las propiedades `name` y `campus`:

```javascript
const classroom = new Object();
=> undefined

classroom.name = 'WDI 2';
=> 'WDI 2'

classroom.campus = 'London';
=> 'London'

classroom
=> Object { name: 'WDI 2', campus: 'London' }
```

---

## Notación de corchetes

Hay otra forma de establecer propiedades en un objeto JavaScript.

```javascript
classroom['name'] = 'WDI 2';
classroom['campus'] = 'London';
```

Esta sintaxis también se puede utilizar para leer las propiedades de un objeto:

```javascript
console.log(classroom['name']);
=> 'WDI 2';

const property = 'campus';

console.log(classroom[property]);
=> 'London';
```

Para más detalles lee [MDN's Documentation on Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

---

## Usar una variable como propiedad

Podemos agregar variables previamente definidas a un objeto como propiedades:

```js
const name = 'Jayne';
const object = {
  name: name
};

object;
=> Object { name: "Jayne" }
```

Con ECMA6 podemos usar el nombre de la propiedad para simplificar esto:

```js
const name = 'Adrianna';
const nationality = 'Polish';
const dob = '1990-10-10';

const person = { name, nationality, dob };

person;
=> Object { name: "Adrianna", nationality: "Polish", dob: "1990-10-10" };
```

---

## Desestructuración (_Destructuring_)

Lo contrario de esto se conoce como _desestructuración_. Podemos crear variables basadas en las propiedades de un objeto:

```js
const person = { name: 'Adrianna', nationality: 'Polish', dob: '1990-10-10' };
const { name, dob, nationality } = person;

name;
=> "Adrianna";

nationality;
=> "Polish";

dob;
=> "1990-10-10";
```

---

## Borrando propiedades

Si deseas eliminar una propiedad de un objeto (y, por extensión, el valor adjunto a la propiedad), debes usar [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete):

```js
const classroom = { name: 'WDI 2', campus: 'London', start: '1/1/2000' };
delete classroom.start;
classroom
=> Object { name: "WDI 2", campus: "London" }
```

---

## Métodos

Como dijimos antes, el valor de una propiedad puede ser cualquier cosa en JavaScript, lo que significa que también podemos adjuntar funciones a las propiedades de los objetos. Cuando una función se adjunta a una propiedad, esta función se convierte en un `método`. Los métodos se definen exactamente de la misma manera que una función, excepto que deben definirse como propiedad de un objeto.

```javascript
const classroom = {
  name: 'WDI 2',
  campus: 'London',
  start: '1/1/2000',
  sayHello: function () {
    console.log('Hello');
  },
};
```

---

## Métodos

También podemos usar la siguiente sintaxis con ES6:

```js
const classroom = {
  name: 'WDI 2',
  campus: 'London',
  start: '1/1/2000',
  sayHello() {
    console.log('Hello');
  },
};
```

Para llamar al método, agregamos un par de paréntesis para ejecutarlo:

```js
classroom.sayHello();
=> "Hello"
```

---

## Métodos

### Asignar una función previamente definida

Podemos adjuntar funciones regulares a objetos como métodos, incluso después de su creación.

```js
function sayHello() { console.log('Hello'); }

classroom.sayHello = sayHello;

classroom.sayHello();
=> "Hello"
```

---

## Métodos

## `this` para referencia de objetos

En JavaScript, `this` es una palabra clave que se refiere al objeto actual. Cuando se usa en un método en un objeto, siempre se referirá al objeto actual.

```js
var classroom = {
  name: 'WDI 2',
  campus: 'London',
  start: '1/1/2000',
  classInfo() {
    console.log(`This is ${this.name} and the class starts on ${this.start}`);
  }
};

classroom.classInfo();
=> "This is WDI 2 and it starts on 1/1/2000"
```

---

## Enumerar las propiedades de un objeto

Hay tres formas nativas de enumerar las propiedades de un objeto:

- **for...in loops**: Este método atraviesa todas las propiedades enumerables de un objeto y su cadena de prototipos.
- **Object.keys(obj)**: Este método devuelve un _array_ con todos los nombres de propiedades enumerables ("claves") propias (no en la cadena del prototipo) de un objeto `obj`.
- **Object.getOwnPropertyNames(o)**: Este método devuelve una matriz que contiene todos los nombres de las propiedades propias (enumerables o no) de un objeto `o`.

---

## Enumerar las propiedades de un objeto

### Loop de las propiedades de un objeto

Puede usar la notación de corchetes con `for ... in` para iterar sobre todas las propiedades enumerables de un objeto.

```javascript
const myCar = { make: 'Ford', model: 'Mustang', year: 1969 };

for (const key in myCar) {
  console.log(key, myCar[key]);
}

for (const key in myCar) {
  console.log(`myCar.${key} = ${myCar[key]}`);
}
```

> **Nota:** Para mayor información [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects#Objects_and_properties)

---

## Comparando objetos

En JavaScript, si dos objetos se crean por separado, son distintos, incluso si se les dan las mismas propiedades.

```javascript
const student1 = { name: 'Alicia' };
=> undefined

const student2 = { name: 'Alicia' };
=> undefined

student1 == student2;
=> false

student1 === student2;
=> false

student1 === student1;
=> true
```

---

## Clases

### Programación orientada a objetos en Javascript

Hasta ahora hemos visto cómo podemos crear objetos en JavaScript y agregar métodos y propiedades a esos objetos. Es hora de que prestemos atención a la programación orientada a objetos.

Cuando hablamos de programación orientada a objetos, estamos describiendo una forma de organizar el código para reflejar los problemas del mundo real y las estructuras de datos en nuestras aplicaciones. En esencia, estamos usando código para "modelar" el mundo que nos rodea.

En muchos idiomas usamos **clases** cuando hablamos de POO. Con la introducción de ES6 (ECMA2015), ahora tenemos [clases](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) en Javascript, por lo que podemos uso de estos.

---

## ¿Qué es una clase?

En ES6 Javascript, una clase es como un tipo especial de función. Nos permite representar datos de una manera que modela muchas cosas del mundo real:

```javascript
class Duck {
  constructor(name) {
    this.name = name;
  }
}
```

La convención es utilizar el título en mayúsculas, por ejemplo. `MyAmazingClass` para las clases, en lugar de la notaciòn de camello habitual que usamos para las funciones (y casi todo lo demás), p. `myGloriousFunction`

---

## ¿Qué es una clase?

### ¿Qué pasa con el operador `new`?

El operador [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) en Javascript crea una nueva instancia de un objeto o clase. Por ejemplo, queremos decir que hemos creado un nuevo objeto usando la clase que acabamos de definir.

```javascript
const scrooge = new Duck('Scrooge Mcduck');
const donald = new Duck('Donald Duck');
```

para asegurarnos que `scrooge` es una instancia de `Duck`:

```javascript
scrooge instanceof Duck;
// true
```

---

## ¿Qué es una clase?

### ¿Qué pasa con el operador `new`?

Puede pensar en las clases como 'planos' o 'fábricas' que crean varias cosas del mismo tipo, pero con valores diferentes. Si usamos objetos para modelar nuestros datos, necesitaríamos hacer esto en su lugar:

```js
const scroogeObj = {
  name: 'Scrooge Mcduck',
};

const donald = {
  name: 'Donald Duck',
};
```

Entonces, poder decir qué propiedades queremos _sin definir los valores todavía_ hace que las clases sean muy útiles algunas veces que solo objetos

---

## Múltiples argumentos

¿Y si quisiéramos crear una instancia de nuestros _ducks_ con una ocupación también? Podemos actualizar nuestra clase así:

```javascript
class Duck {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
}
```

Ahora tenemos que pasar un segundo argumento cuando instanciamos un nuevo `Duck`.

```javascript
const scrooge = new Duck('Scrooge Mcduck', 'Business owner');
```

---

## Métodos

Las clases también pueden tener métodos, al igual que los objetos. Los métodos son funciones que pertenecen a la clase y pueden hacer cosas con los datos de la clase. Cada instancia de una clase que cree tendrá acceso a este método.

Ejemplo:

```javascript
class Duck {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  quack() {
    console.log("Quack. I'm a savvy business duck.");
  }
}

const scrooge = new Duck('Scrooge Mcduck', 'Business owner');
scrooge.quack();
```

> Recuerda, agregamos nuestros métodos en la definición de la clase, ¡no dentro de nuestra función constructora!

---

## Extendiendo clases

Una de las características más poderosas de las clases es que pueden extenderse entre sí. Esto hace que nuestro código sea más limpio y modular.

Digamos que queremos presentar una nueva clase, un Perro, que quiere protestar contra los patos ricos:

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
  protest() {
    console.log("I'm a Dog! My voice counts!");
  }
}

const goofy = new Dog('Goofy');
goofy.protest();
```

---

## Extendiendo clases

Pero los patos no están contentos con esto. También quieren que se escuche su voz, así que démosles un método de protesta también.

```js
class Duck {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  quack() {
    console.log("Quack. I'm a savvy business duck.");
  }
  protest() {
    console.log("I'm a Duck! My voice counts!");
  }
}
```

---

## Extendiendo clases

El único problema con esto es que el mismo método ahora está duplicado en nuestras clases. Y si queremos agregar una nueva `clase` llamada`Mouse`, tendremos que darles el método `protest` también ...

¿Qué se puede hacer al respecto, para que todos los animales puedan hacer oír su voz y tener representación?

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  protest() {
    console.log(`I'm a {this.constructor.name}! My voice counts!`);
  }
}
```

---

## Extendiendo clases

```js
class Duck extends Animal {
  constructor(name, occupation) {
    super(name);
    this.occupation = occupation;
  }
  quack() {
    console.log("Quack. I'm a savvy business duck.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.occupation = occupation;
  }
}

class Mouse extends Animal {
  constructor(name) {
    super(name);
  }
}
```

---

## Extendiendo clases

```js
const goofy = new Dog('Goofy', 'Plumber');
console.log(goofy.name);
// Goofy
goofy.protest();
// I'm a Dog! My voice counts!
console.log(goofy.occupation);
// Plumber

const scrooge = new Duck('Scrooge Mcduck', 'Business owner');
console.log(scrooge.name);
// Scrooge Mcduck
scrooge.protest();
// I'm a Duck! My voice counts!
scrooge.quack();
// Quack. I'm a savvy business duck.'
console.log(scrooge.occupation);
// Business owner

const mickey = new Mouse('Mickey Mouse');
console.log(mickey.name);
// Mickey Mouse
mickey.protest();
// I'm a Mouse! My voice counts!
```

Entonces, ¿qué está pasando aquí?

---

## Extendiendo clases

Acabamos de crear lo que se conoce como una jerarquía de clases.

Los animales son nuestro tipo más genérico, y podemos usar la palabra clave `extends` para decir que nuestras clases`Dog` y `Duck` deberían heredar todas las propiedades y métodos de nuestro`Animal`, antes de agregar sus propias propiedades y métodos que se aplica específicamente a perros o patos.

---

## Extendiendo clases

### Entonces, en este caso

- Los patos heredan la propiedad `name` y el método`protest` de Animal. Y luego, además, agregan su propia propiedad de `occupation`, más su propio método de `quack`.
- Los patos heredan la propiedad `name` y el método`protest` de Animal, al igual que los Ducks. Además, agregan su propia propiedad de `occupation`.
- Finalmente, el Mouse hereda la propiedad `name` y el método`protest` de Animal, y no agrega nuevas propiedades y métodos propios.

También usamos _super_ en los constructores de `Mouse`,`Dog` y `Duck`. _`super()`_ **llama al constructor** de la clase que hemos extendido - así que en nuestro caso, _`super`_ va a llamar al constructor `Animal` **con cualquier argumento que queramos pasarle**. Entonces, en nuestro caso, `Mouse`,`Dog` y `Duck` no quieren establecer la propiedad `name` ellos mismos, quieren usar la clase que están extendiendo, `Animal`, para hacer eso por nosotros. Entonces pasamos por el nombre con _`super(name)`_.

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

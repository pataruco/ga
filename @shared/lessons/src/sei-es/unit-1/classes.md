# .center[Clases]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# Clases

## Programación orientada a objetos en Javascript

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

## Cierre

La programación orientada a objetos es un patrón de programación realmente poderoso que verás mucho en el mundo real, porque es una forma muy útil de modelar el mundo real (¡los humanos lo hacemos constantemente!). Las clases son como planos para que creemos nuestros propios tipos de datos, para resolver diferentes tipos de problemas. Tienen una definición y se instancian, de modo que podemos tener muchas instancias diferentes de la misma clase. También pueden tener métodos, que permiten que nuestras clases se conviertan en estas abstracciones dinámicas e interactivas que son súper flexibles.

---

## Otras lecturas

- [MDN Documentation on ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

# .center[Objetos]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

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

## Propiedades de objeto

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

## Propiedades de objeto

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

## Conclusion

Usaremos objetos en JavaScript todos los días, y tendrás mucho tiempo para practicar la creación y el uso de objetos en Javascript. Hay muchos recursos disponibles en la web para que pueda profundizar, pero el más detallado y comprensible probablemente sea MDN.

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Intro to Object-Orientated Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [Objects in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

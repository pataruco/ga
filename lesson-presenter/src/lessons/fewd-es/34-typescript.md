class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>TypeScript</h1>
</div>

---

## Intro a TypeScript

.row[
.col[
.image-half[![typescript logo](https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg)]
]
.col[
JavaScript se introdujo como lenguaje para el lado del cliente. El desarrollo de Node.js también ha marcado a JavaScript como una tecnología emergente del lado del servidor. Sin embargo, a medida que crece el código JavaScript, tiende a ensuciarse, lo que dificulta el mantenimiento y la reutilización del código.

Además, su incapacidad para adoptar las características de la Orientación a Objetos, la verificación de tipos y las verificaciones de errores en tiempo de compilación impiden que JavaScript tenga éxito a nivel empresarial como una tecnología de servidor completa. Por eso se presentó TypeScript para cerrar esta brecha.
]
]

---

## Qué es TypeScript

Por definición

> "TypeScript is JavaScript for application-scale development."

TypeScript es un lenguaje compilado, tipado y orientado a objetos. Fue diseñado por Anders Hejlsberg (diseñador de C#) en Microsoft. TypeScript es tanto un lenguaje como un conjunto de herramientas. TypeScript es un superconjunto escrito de JavaScript compilado en JavaScript. En otras palabras, TypeScript es JavaScript más algunas características adicionales.

---

## Por qué usar TypeScript ?

TypeScript es superior a otros lenguajes de programación como CoffeeScript y Dart en el sentido de que TypeScript es JavaScript extendido. Por el contrario, lenguajes como Dart, CoffeeScript son lenguajes nuevos en sí mismos y requieren un entorno de ejecución específico del lenguaje.

---

## Por qué usar TypeScript ?

Los beneficios de TypeScript incluyen:

- **Compilación:** JavaScript es un lenguaje interpretado. Por lo tanto, debe ejecutarse para probar que es válido. Significa que escribe todos los códigos solo para no encontrar resultados, en caso de que haya un error. Por lo tanto, debe pasar horas tratando de encontrar errores en el código. El transpiler de TypeScript proporciona la función de comprobación de errores. TypeScript compilará el código y generará errores de compilación, si encuentra algún tipo de error de sintaxis. Esto ayuda a resaltar los errores antes de que se ejecute el script.

- **Escritura de tipado estático:** JavaScript no está fuertemente tipado. TypeScript viene con un sistema de inferencia de tipo y escritura de tipdo estático opcional a través de TLS (Servicio de lenguaje TypeScript). El TLS puede inferir el tipo de una variable, declarada sin tipo, en función de su valor. La diferencia clave es que JavaScript usa **tipos dinámicos** (resueltos en tiempo de ejecución) mientras que TypeScript usa **tipos estáticos** (establecidos durante el desarrollo).

---

## Por qué usar TypeScript ?

Los beneficios de TypeScript incluyen:

- TypeScript **admite definiciones de tipo** para bibliotecas de JavaScript existentes. El archivo de definición de TypeScript (con extensión `.d.ts`) proporciona una definición para bibliotecas de JavaScript externas. Por lo tanto, el código TypeScript puede contener estas bibliotecas.

- TypeScript **admite programación orientada a objetos** conceptos como clases, interfaces, herencia, etc.

---

## Componentes de TypeScript

En esencia, TypeScript tiene los siguientes tres componentes:

- **Idioma:** Se compone de la sintaxis, las palabras clave y las anotaciones de tipo.

- **El compilador de TypeScript:** El compilador de TypeScript (tsc) convierte las instrucciones escritas en TypeScript a su equivalente de JavaScript.

- **El Servicio de lenguaje TypeScript:** El "Servicio de lenguaje" (TypeScript Language Service, TLS por sus sus sigals en inglés) expone una capa adicional alrededor del compilador central para aplicaciones similares a editores. El servicio de idiomas admite el conjunto común de operaciones típicas de un editor, como finalización de declaraciones, ayuda para firmas, formato y esquema de código, colorización, etc.

---

## Usando TypeScript

Para practicar el uso de TypeScript, puede usar el [TS Playground](https://www.typescriptlang.org/play/) o instalar el paquete `typescript` y ejecutar el compilador.

Si deseas instalarlo:

```bash
yarn global add typescript
```

El comando que se instaló fue `tsc`, que significa "Compilador de TypeScript". Para confirmar la instalación, puedes verificar su ubicación instalada con `what tsc` o verificar su número de versión con `tsc -v`.

---

## Usando TypeScript

Si elegiste la instalación, configura un archivo para usar:

1. `mkdir typescript`
2. `cd typescript`
3. `touch intro-typescript.ts`
4. `code .`

Ahora, cada vez que realice cambios, puede compilar su TypeScript en JavaScript usando el siguiente comando:

```bash
tsc intro-typescript.ts
```

La primera vez que ejecutes esto, creará un archivo JS con el mismo nombre (es decir, `intro-typescript.js`). Después de eso, tus cambios se compilarán en ese mismo archivo.

---

## Hello World

Empezaremos con la tradición:

```ts
const message: string = 'Hello World';
console.log(message);
```

Y, una vez compilado el código, aquí está el resultado:

```js
var message = 'Hello World';
console.log(message);
```

---

## The Type System

.row[
.col[

El sistema de tipos representa los diferentes tipos de valores admitidos por el lenguaje. El Sistema de tipos verifica la validez de los valores proporcionados, antes de que sean almacenados o manipulados por el programa. Esto asegura que el código se comporte como se esperaba. El sistema de tipos también permite sugerencias de código más ricas y documentación automatizada.
]
.col[
![Type System](https://www.tutorialspoint.com/typescript/images/data_types.jpg)
]
]

---

## El tipo `any`

El tipo de datos `any` es el supertipo de todos los tipos en TypeScript. Denota un tipo dinámico. Usar el tipo `any` es equivalente a excluirse de la verificación de tipos para una variable.

---

## Tipos incorporados

Los tipos incorporados son aquellos a los que estamos acostumbrados en JavaScript:

- Number
- String
- Boolean
- Null
- Undefined
- Void

El único de estos que no hemos usado es `void`, que se usa en funciones que no regresan, como aquellas que no incluyen una declaración `return` como la siguiente:

```js
function sayHello() {
  console.log('Hello');
}
```

---

## Tipos definidos por el usuario

Estos se cubrirán más adelante, pero incluyen tipos que el usuario define mediante enumeraciones, clases, interfaces, matrices y tuplas.

---

## Declaración de variable

Declarar una variable usando la sintaxis de tipo se ve así:

```ts
const [variable name]: [type annotation] = value;
// example with value:
const age: number = 27;

// example without value:
const isHappy: boolean;
```

> **Nota:** TypeScript soporta `var`, `const`, y `let`.

---

## Declaración de variable

Debido a que TS es un superconjunto de JS, la anotación de tipo no es necesaria, por lo que `var age = 27;` es un TS perfectamente válido. Si se declara una variable sin un tipo específico, el compilador de TS determinará el tipo de la variable en función del valor que se le asigne.

Pero, si una variable se declara sin un tipo y esa variable luego se reasigna a un tipo diferente, el compilador arrojará un error.

```ts
let age = 56;
age = '43';
```

---

## Tipos de parámetros

Con TS, podemos validar parámetros:

```ts
function sum(x: number, y: number) {
  return x + y;
}
```

Si llamamos a esta función y le pasamos cualquier tipo que no sea números, TS arrojará errores al intentar compilar.

---

## Tipos de `return`

Y, aún más, podemos definir tipos de devolución:

```ts
function sum(x: number, y: number): number {
  return x + y;
}
```

---

## Objectos

Podemos crear objetos usando el tipo `objeto` como este:

```ts
const person: object = {
  name: 'Alex',
  age: 32,
};
```

---

## Objectos

Pero, el tipo `objeto` no es tan descriptivo, por lo que podemos ser más explícitos acerca de cómo debería verse su forma:

```ts
const person: {
  name: string;
  age: number;
} = {
  name: 'Alex',
  age: 32,
};
```

No nos gustaría escribir la anotación de tipo para un objeto cada vez porque, si necesitamos reutilizar esa misma forma de objeto, nuestro código ya no está DRY. Este problema lo resuelven las interfaces, de las que hablaremos más adelante.

---

## Arrays

Declarar arreglos es similar a declarar variables básicas. La diferencia es la adición de `[]` después de la anotación de tipo.

```ts
const [variable name]: [type annotation][] = [value, value, value];
// example with value:
const odds: number[] = [1, 3, 5, 7];

// example without value:
const names: string[];
```

---

## Tuplas

A diferencia de Python, las tuplas de TypeScript son mutables en el sentido de que se pueden redefinir, pero solo mientras la nueva definición sea una nueva tupla, ya sea que esa tupla tenga los mismos valores dentro o no. Su característica distintiva es ser una matriz que puede tomar diferentes tipos de datos. Una tupla de TS solo debe usar dos elementos, aunque TS no impone esto.

```ts
let variety: [number, string] = [10, 'Hello'];
variety = 67;
```

---

## Unions

Cuando una variable necesita la capacidad de tener valores de múltiples tipos asignados, las uniones expresan esta posibilidad usando el símbolo de barra vertical (`|`).

```ts
const phoneNumber: string | number;

phoneNumber = '5554443333';
phoneNumber = 555444333;
```

```ts
function printNames(name: string | string[]) {
  if (typeof name === 'string') {
    console.log(name);
  } else {
    for (let i: number = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  }
}

printNames('Donavon');
printNames(['Jason', 'Korey', 'Jack']);
```

---

## Alias de tipo

Hasta ahora, hemos estado usando tipos incorporados. Pero, si queremos usar tipos definidos por el usuario, **los alias de tipo** son la forma de hacerlo. Entonces, si vamos a crear un tipo personalizado, usamos la palabra clave `type` y un nombre descriptivo.

```ts
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

Estos alias pueden permitirle definir un conjunto de valores como un tipo para usar ese tipo personalizado y proporcionar validación en partes relevantes de su código.

---

## Interfaces

Una interfaz es un contrato sintáctico al que debe ajustarse una entidad. En otras palabras, una interfaz define la sintaxis a la que debe adherirse cualquier entidad.

Considera la siguiente interfaz:

```ts
interface Person {
  firstName: string;
  lastName: string;
  sayHi(): string;
}
```

---

## Interfaces

Una vez que hemos definido una interfaz, podemos usarla para validar los objetos que queremos crear que necesitan coincidir con la forma de la interfaz.

```ts
const customer: Person = {
  firstName: 'Laura',
  lastName: 'Williams',
  sayHi() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  },
};

console.log(customer.sayHi());

const employee: Person = {
  firstName: 'Ali',
  lastName: 'Saleh',
  sayHi() {
    return `Greetings, ${this.firstName}`;
  },
};

console.log(employee.sayHi());
```

---

## Interfaces

Y, al igual que las clases, las interfaces también pueden heredar de otras interfaces.

```ts
interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

const drummer: Musician = {
  age: 27,
  instrument: 'Drums',
};

console.log(`Age: ${drummer.age}`);
console.log(`Instrument: ${drummer.instrument}`);
```

---

## Clases

Las clases de TypeScript se verán similares a las clases de ES6, pero las declaraciones de tipos de datos son una posible inclusión.

En ES6, podríamos escribir

.row[
.col[

### JavasScript

]
.col[

```js
class Car {
  //field(s)
  make;
  model;

  //constructor
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  //function
  display() {
    console.log(`The make and model is: ${this.make} ${this.model}`);
  }
}

const accord = new Car('Honda', 'Accord');
accord.display();
```

]
]

---

## Clases

.row[
.col[

### TypeScript

]
.col[

```ts
class Car {
  //field(s)
  make: string;
  model: string;

  //constructor
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  //function
  display(): void {
    console.log(`The make and model is: ${this.make} ${this.model}`);
  }
}

const camry = new Car('Toyota', 'Camry');
camry.display();
```

]
]

---

## Clases

Y, la herencia de clases también se verá similar:

```ts
class Shape {
  Area: number;

  constructor(a: number) {
    this.Area = a;
  }
}

class Circle extends Shape {
  display(): void {
    console.log(`Area of the circle: ${this.Area}`);
  }
}

var obj = new Circle(223);
obj.display();
```

---

## Type Casting

Echemos un vistazo a una situación un poco más realista.

```ts
const button = document.querySelector('button');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');

function add(num1, num2) {
  return num1 + num2;
}

// input values are always strings
button.addEventListener('click', () => {
  console.log(add(input1.value, input2.value));
});
```

---

## Type Casting

Notamos que las claves `.value` no están contentas, obteniendo un error de `Property 'value' does not exist on type 'Element'`. La propiedad `value` solo existe en ciertos _tipos_ de elementos HTML, por lo que TS quiere que seamos más específicos, así que emitamos el tipo `HTMLInputElement` ya que sabemos que este tipo de elemento tiene una propiedad `value`.

```ts
const input1 = document.querySelector('#num1') as HTMLInputElement;
const input2 = document.querySelector('#num2') as HTMLInputElement;
```

Debido a que TS tiene opiniones al respecto, nos vemos obligados a escribir un código mejor, más limpio y menos propenso a errores.

---

## Type Casting

Ahora asegurémonos de que `add` solo acepte números usando la anotación de tipo.

```ts
function add(num1: number, num2: number) {
  return num1 + num2;
}
```

Tenemos otro error en las expresiones de valor. Esto se debe a que los valores que recuperamos de los elementos `<input>` son cadenas. Por lo tanto, debemos asegurarnos de que esos argumentos se modifiquen antes de pasarlos a `add`. Podríamos usar `parseInt()`, pero usemos un **operador unario**.

---

## Type Casting

```ts
button.addEventListener('click', () => {
  console.log(add(+input1.value, +input2.value));
});
```

Finalmente, aprobemos la función `add` anotando su tipo de retorno:

```ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

---

## Unknown

```ts
// We don't know what type the user might enter
let userInput: unknown;

userInput = 5;
userInput = 'Sade';
```

Esto funcionará, lo que parece que realmente no hace nada. Pero, si tratamos de reasignar nuestra variable a una variable con una anotación de tipo más específica, obtendremos un error.

---

## Unknown

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Sade';
// This will cause an error
userName = userInput;
```

Esto causará un error (`Type 'unknown' is not assignable to type 'string'.`) porque `unknown` no permite la especificidad mientras que el tipo `any` sí. Tan pronto como intente precisar `unknown` en un tipo, arrojará un error.

---

## Never

Si tuviéramos que pensar en una función de utilidad cuyo objetivo es arrojar objetos de error, cualquier función que esté destinada a ejecutarse después del punto donde se arroja el error no se ejecutará. Por lo tanto, _nunca_ devolverán sus valores porque no tendrán la oportunidad.

```ts
function generateError(message: string, code: number): never {
  throw { errorMessage: message, errorCode: code };
}

generateError('An error occurred', 500);
console.log('after error');
```

En el código anterior, `console.log` nunca se ejecutará porque el error generado bloqueó todo el programa. Claro, también puede usar `void` como el tipo de función ya que no devuelve nada, pero el tipo `never` es más preciso.

---

## El compilador

Puede ser tedioso ejecutar `tsc fileName.ts` cada vez que hacemos cambios. Podemos decirle al compilador que mire un archivo y ejecutar automáticamente el compilador cada vez que guardemos nuevos cambios en un archivo.

Esto se puede hacer con `tsc fileName.ts --watch` o `tsc fileName.ts -w`

Y, si estamos trabajando en varios archivos `.ts`, sería bueno si pudiéramos ejecutar `tsc` para ejecutar todos los archivos TypeScript a través del compilador.

---

## El compilador

Primero, necesitamos crear el archivo `.json` que leerá el compilador.

```bash
tsc --init
```

Esto crea un archivo `tsconfig.json`. En su interior, encontrarás muchas opciones de configuración.

Ahora, si ejecutamos `tsc` cada vez que hacemos cambios, compilará todos los archivos `.ts`.

Y, si ejecutamos `tsc -w` o `tsc --watch`, el compilador se ejecutará automáticamente cada vez que guardemos uno de estos archivos.

El proceso de observación puede, por supuesto, detenerse usando `ctrl + c` o lo que sea que use para detener normalmente estos procesos.

---

class: lab

# Lab

Utiliza este tiempo para tu proyecto de final de curso

---

class: code-along

## Homework

Utiliza este tiempo para tu proyecto de final de curso

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de presentación</h1>
</div>

# .center[Introducción a Node.js]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

# Introducción a Node.js

## Qué es

Node.js es un motor de JavaScript, puede convertir el código fuente de JavaScript (el código que escribimos) en código de máquina (el código que su computadora entiende). De hecho, utiliza el mismo intérprete de JavaScript que utiliza Chrome, el motor V8 de Google.

---

## Qué no es

Node.js no es JavaScript, pero _comprende_ JavaScript y nos permite crear aplicaciones usando JavaScript en el lado del servidor.

---

## Para qué se usa esto

Node.js nos permite usar JavaScript para interactuar con el hardware de la máquina en la que se está ejecutando. Esto nos permite acceder al sistema de archivos de la computadora y, lo que es más importante para nosotros como desarrolladores web, a la tarjeta de red de la computadora. Esto nos permite escribir programas JavaScript que pueden escuchar y responder a solicitudes HTTP.

---

## Leer y escribir archivos usando Node.js

Node.js tiene varios módulos que se pueden cargar en la memoria para tareas específicas. Uno de ellos es el módulo `fs`, que nos permite interactuar con el _sistema de archivos_ de la computadora.

---

## Leer y escribir archivos usando Node.js

```js
// index.js
import fs from 'fs';

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.log(err);
  }
  console.log(files);
});
```

---

## Leer y escribir archivos usando Node.js

En el código anterior estamos usando `fs` para leer todos los archivos en el directorio actual. `__dirname` es una variable global de Node.js que contiene la ruta absoluta al directorio actual.

Ahora podemos pedirle a node que ejecute este archivo así: `node index.js`.

OK, escribamos un archivo:

```js
import fs from 'fs';

fs.writeFile('hello.txt', 'Hello World!', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('File created!');
});
```

---

## Leer y escribir archivos usando Node.js

Si ejecutamos este archivo, deberíamos obtener un mensaje de éxito y un archivo `hello.txt` creado, con el contenido de`¡Hola mundo!`.

Podemos leer un archivo de la siguiente manera:

```js
import fs from 'fs';

fs.readFile('hello.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
```

---

## Leer y escribir archivos usando Node.js

Pero esto producirá un resultado bastante inesperado:

```sh
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
```

Este es un _buffer_. Un búfer es una colección de datos binarios. El archivo ha sido leído como datos binarios por JavaScript. Puede referirse a esto como _raw data_. Podemos convertir estos datos en una cadena con el método `toString`, o pasando un tipo de codificación de cadena al método `readFile` como segundo argumento:

```js
import fs from 'fs';

fs.readFile('hello.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

fs.readFile('hello.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
```

---

## Leer y escribir archivos usando Node.js

> **Nota:** UTF-8 es una codificación de texto que permite caracteres especiales como é y 👍. Es la codificación de texto más utilizada en la web..

---

## Manejo de solicitudes con Node.js

De manera similar, podemos manejar solicitudes usando el módulo `http` de Node.js:

```js
import http from http;

const app = http.createServer();

app.on('request', (req, res) => {
  res.end('Hello World!');
});

app.listen(4000, () => console.log('Node.js is listening to localhost:4000'));
```

---

## Manejo de solicitudes con Node.js

Aquí el método `createServer` está haciendo un gran trabajo para nosotros. Crea una instancia de servidor que podemos configurar para escuchar un puerto específico de nuestro dominio local, `localhost`.

Podemos escribir lógica que realice una tarea específica cuando se realiza una solicitud a ese puerto.

Si navegamos a http://localhost:4000, ahora deberíamos ver la respuesta clásica **Hello World!**.

Cuando manejamos una solicitud con node, usamos una función de devolución de llamada que nos da dos objetos, `req` y `res`. `req` contiene información sobre la solicitud entrante, similar al objeto `event` que obtenemos cuando manejamos eventos DOM. `res` contiene métodos que nos permiten enviar una respuesta.

---

## Manejo de solicitudes con Node.js

Podemos modificar los encabezados antes de enviar una solicitud como esta:

```js
import http from http;

const app = http.createServer();

app.on('request', (req, res) => {
  res.statusCode = 418;
  res.setHeader('Content-Type', 'application/json');
  res.end('{ "message": "Hello World!" }');
});

app.listen(4000, () => console.log('Node.js is listening to localhost:4000'));
```

Si hacemos una solicitud GET a http://localhost:4000 usando Postman, ahora deberíamos ver el mismo mensaje _Hello World!_ Como respuesta JSON, con el código de estado 418 _I'm a teapot_. Clásico.

---

## Recibir datos de una solicitud

Recibir datos a través de HTTP desde una solicitud no es tan simple. Los datos se dividen en paquetes de datos binarios y se envían del cliente al servidor. Cada paquete puede tomar una ruta diferente a través de la masa de cables y conexiones que es Internet. Una vez que todos los paquetes llegan al servidor, se combinan y se convierten en el tipo de datos deseado.

---

## Recibir datos de una solicitud

Veamos esto en acción:

```js
import http from http;

const app = http.createServer();

app.on('request', (req, res) => {
  const data = [];

  req
    .on('data', (chunk) => {
      console.log(chunk);
      data.push(chunk);
    })
    .on('end', () => {
      req.body = Buffer.concat(data).toString();
      console.log(req.body);

      res.end('OK');
    });
});

app.listen(4000, () => console.log('Node.js is listening to localhost:4000'));
```

---

## Recibir datos de una solicitud

Aquí estamos creando un _array_ llamado `data` para almacenar todos los paquetes de datos. A medida que los paquetes de datos llegan al servidor, los insertamos en la array `data`. Una vez que han llegado todos los paquetes, los concatenamos y luego convertimos los datos binarios resultantes en una cadena.

Node.js maneja estos paquetes de datos como búferes, al igual que la biblioteca `fs` que vimos anteriormente.

---

## Recibir datos de una solicitud

Si envías una solicitud con algunos datos de Postman podras verla aparecer en la consola. En el fragmento de arriba, estamos convirtiendo los datos en una cadena, pero también podemos manejar JSON así:

```js
import http from http;

const app = http.createServer();

app.on('request', (req, res) => {
  const data = [];

  req
    .on('data', (chunk) => {
      console.log(chunk);
      data.push(chunk);
    })
    .on('end', () => {
      req.body = JSON.parse(Buffer.concat(data));
      console.log(req.body);

      res.end('OK');
    });
});

app.listen(4000, () => console.log('Node.js is listening to localhost:4000'));
```

---

## Agregar módulos externos

Hasta ahora hemos visto módulos propios de Node.js `fs` y `http`. Sin embargo, hay una gran cantidad de módulos de terceros que se pueden agregar a un proyecto de Node.js para brindar una funcionalidad adicional.

Podemos instalar estos módulos usando _npm_ o _yarn_. npm es un administrador de paquetes para Node.js. Para usar _npm_ o _yarn_, primero necesitamos crear un archivo `package.json`, que podemos usar para realizar un seguimiento de los módulos que se están usando con este proyecto. Para crear este archivo, podemos ejecutar el comando `npm init` o `yarn init` . Esto nos hace una serie de preguntas y luego genera automáticamente el archivo `package.json`.

---

## Agregar módulos externos

Con este archivo creado podemos instalar módulos de terceros. Si quisiéramos instalar `moment` para proyectar, por ejemplo, lo haríamos así:

```sh
npm install moment
```

o

```sh
yarn add moment
```

Esto descargará el paquete en una carpeta llamada `node_modules`, y agregará el nombre y la versión del paquete al archivo` package.json`.

Ahora podemos cargar el módulo en un script de nodo así:

```js
import moment from 'moment';
```

---

## `yarn` vs `npm`

Recientemente, se creó una nueva herramienta llamada Yarn como actualización a npm. Sus comandos son muy similares, pero Yarn es un poco más rápido para descargar paquetes.

En GA recomendamos usar Yarn, pero sea cual sea la herramienta que uses, _¡sé consistente!_.

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Intro a HTML</h1>
</div>

---

## Agenda

- ¿Cómo funciona la web?
- Las 3 capas de la web
- HTML

---

## Di la diferencia...

Por favor, explica la diferencia entre:

### Internet vs Web

---

## ¿Cómo funciona la Web?

.image-two-thirds[![](https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png)]

---

## Di la diferencia...

Por favor, explica la diferencia entre:

### Frontend vs Backend

---

## Frontend vs. Backend

El proceso de desarrollo se puede dividir en dos áreas:

.fila[
.columna[

### Interfaz

- Cómo ven las cosas el usuario
- Incluye: imágenes, contenido, estructura.
- HTML, CSS y JavaScript
  ]

.columna[

### Back-End

- Como funcionan las cosas
- Incluye: "lógica de negocios" y "datos"
- Ruby, PHP, C ++, Java, etc.]
  ]

---

## Di la diferencia...

Por favor, explica la diferencia entre:

### Sitio web vs Página web vs servidor web

---

## Las 3 capas de la web

.row[
.col[
.image-third[![](https://mdn.mozillademos.org/files/13502/cake.png)]
]
.col[

- **HTML** es el lenguaje de marcado que utilizamos para estructurar y dar sentido a nuestro contenido web.
- **CSS** es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML.
- **JavaScript** es un lenguaje de programación que le permite manipular dinámicamente el contenido y el estilo.
  ]
  ]

[CodePen](https://codepen.io/pataruco/pen/oPNzyd/)

---

## Introducción a HTML

**HTML** _(lenguaje de marcado de hipertexto)_ no es un lenguaje de programación.

Es un lenguaje de marcado para indicar al navegador cómo estructurar las páginas web.

---

## Introducción a HTML

`Mi gato es muy gruñón`

```html
<p>Mi gato es muy gruñón</p>
```

---

## Anatomía de un elemento HTML

![](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

---

## Elementos anidados

### ¿Cuál es la diferencia?

```html
<p>Mi gato es<strong> muy </strong> gruñón.</p>
```

```html
<p> Mi gato es <strong> muy gruñón. </p> </strong>
```

---

## Elementos de anidados

### Bueno 👍

```html
<p>Mi gato es <strong> muy </strong> gruñón.</p>
```

### ~~Malo~~ 👎

```html
<p> Mi gato es <strong> muy gruñón. </p> </strong>
```

---

## Bloque versus elementos en línea

Hay dos categorías importantes de elementos en HTML que debes conocer. Son :

- elementos **a nivel de bloque**
- elementos **en línea**.

---

## Bloque

- Aparecerán en una nueva línea de cualquier contenido anterior, y cualquier contenido que vaya después también aparecerá en una nueva línea.
- Suelen ser elementos estructurales de la página que representan, por ejemplo, párrafos, listas, menús de navegación, pies de página, etc.
- Un elemento a nivel de bloque no estaría anidado dentro de un elemento en línea, pero podría estar anidado dentro de otro elemento a nivel de bloque.

```html
<p>Párrafo</p>
<nav>
  <ul>
    <li>elemento de lista</li>
  </ul>
</nav>
```

---

## En línea

- Están incluidos en elementos a nivel de bloque y rodean solo pequeñas partes del contenido del documento, no párrafos completos ni agrupaciones de contenido.
- No hará que aparezca una nueva línea en el documento; normalmente aparecerían dentro de un párrafo de texto.
- Por ejemplo, un elemento `<a>` (hipervínculo) o elementos de énfasis como `<em>` o `<strong>`.

```html
<p>
  Aquí hay un enlace a <a href="www.ga.co"> General Assembly </a>. Aquí hay un
  <em>énfasis</em>. y aquí hay un <span>contenedor común</span>
</p>
```

---

## Elementos vacíos

Son elementos de cierre automático

```html
<img
  src="https://api.peteroftheday.com/random"
  alt="Una imagen aleatoria de Peter Martin"
/>

<hr />
<input type="color" id="color" />
```

---

## Fundamentos de texto HTML

### Encabezados y párrafos

```html
<p>Soy un párrafo, oh sí, lo soy.</p>
<h1>Soy el título de la historia.</h1>
```

---

## Fundamentos de texto HTML

### Implementando jerarquía estructural

```html
<h1>Guerra de las Galaxias</h1>
<p>Por George Lucas</p>

<h2>Episodio IV: Una nueva esperanza</h2>
<p>Es un período de guerra civil. Naves espaciales rebeldes ...</p>

<h2>Episodio V: El Imperio Contraataca</h2>
<p>Es una época oscura para la Rebelión ...</p>
<h3>EXT. GALAXY - PLANETA HOTH</h3>
<p>
  Un Destructor Estelar se mueve por el espacio, liberando robots sonda
  imperiales de su envés.
</p>
```

---

## Fundamentos de texto HTML

### ¿Por qué necesitamos semántica?

```html
<h1>Este es un título de nivel superior</h1>
<span style="tamaño de fuente: 32px; margen: 21px 0;">
  ¿Es este un título de nivel superior?
</span>
```

---

## Fundamentos de texto HTML

### Listas

#### Desordenado

```html
<ul>
  <li>leche</li>
  <li>huevos</li>
  <li>pan</li>
  <li>hummus</li>
</ul>
```

---

## Fundamentos de texto HTML

### Listas

#### Ordenado

```html
<ol>
  <li>Conduzca hasta el final del camino</li>
  <li>Gire a la derecha</li>
  <li>Siga recto por las dos primeras rotondas</li>
  <li>Gire a la izquierda en la tercera rotonda</li>
  <li>La escuela está a su derecha, a 300 metros de la carretera</li>
</ol>
```

---

## Código junto

## [Ejercicio de comunicado de prensa](https://raw.githubusercontent.com/pataruco/ga-fewd-assets/master/press-release/starter/press-release.txt)

---

## Rutas absolutas vs relativas

Podemos diferenciar entre una URL **absoluta** y una URL **relativa** mirando solo la parte de la ruta.

```js
'./i-am-relative-path/filename.txt';
// Desde mi posición actual ir a un directorio y luego obtener el archivo
```

```js
'../i-am-also-a-relative-path/filename.txt';
/* Desde mi posición actual, sube a mi directorio principal y
luego a otro directorio y obtener el archivo */
```

```js
'https://www.ga.com'; // soy una ruta absoluta
```

---

## Imágenes

Las imágenes se colocan utilizando la etiqueta `<img>`.

```html
<img src="img/nombre-de-imagen.jpg" alt="texto alternativo" />
```

---

## Imágenes

La etiqueta `img` requiere un atributo`src`, que le dice al navegador dónde encontrar la imagen.
El `src` apunta a un recurso un poco como el`href` de una etiqueta `<a>`.

---

## Imágenes

### ¿Cómo escribirías el `src`?

Existen diferentes enfoques para especificar la ubicación de una imagen

---

## Imágenes

Dentro de webroot, se podría usar una ruta relativa:

```html
<img src="images/logo.png" />
```

---

## Imágenes

### Ruta relativa

```html
<img src="../images/logo.png" />
```

---

## Imágenes

### Ruta absoluta

```html
<img src="https://source.unsplash.com/random" />
```

---

## Imágenes

El atributo `alt` proporciona una descripción de texto de la imagen

```html
<img src="https://source.unsplash.com/random" alt="Una imagen aleatoria" />
```

---

## Imágenes

### Formatos de archivo

Hay cuatro formatos de archivo de imagen principales:

- `png`
- `gif`
- `jpeg || jpg`
- `svg`

---

## Imágenes

### `png`

- `png` de 24 bits tiene transparencia alfa
- `png` de 8 bits tiene transparencia pero no semitransparencia
- Tamaño de archivo grande debido al almacenamiento de información de transparencia.

---

## Imágenes

### `gif`

- Puede ser animado
- Tener transparencia básica, como un PNG de 8 bits
- Se utiliza en correos electrónicos HTML ya que PNG no es ampliamente compatible

---

## Imágenes

### `jpeg` || `jpg`

- Sin transparencia
- El más utilizado para fotos.
- Puede comprimirse para reducir

---

## Imágenes

### `svg`

- Basado en vectores
- Más comúnmente utilizado para logotipos e ilustraciones.
- Dibujado con puntos y curvas.
- Infinitamente escalable

---

## ¿Qué es el encabezado HTML?

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

---

## ¿Qué es el encabezado HTML?

### Metadatos

```html
<head>
  <meta charset="utf-8" />
  <meta name="author" content="Pedro Martin" />
  <meta name="description" content="Una lección sobre HTML" />
</head>
```

---

## Aplicar CSS y JavaScript a HTML

```html
<link rel="stylesheet" href="css-file.css" />
```

```html
<script src="my-js-file.js"></script>
```

---

## Configuración del idioma principal del documento

```html
<html lang="en-GB"></html>
```

---

## Creando enlaces

```html
<p>
  Estoy creando un enlace a
  <a
    href="https://en.wikipedia.org/wiki/Star_Wars"
    title="Página de Wikipedia de Star Wars"
  >
    Página de Wikipedia de Star Wars </a
  >.
</p>
```

---

## Creando enlaces

### Enlaces relativos

```html
<h2 id="Mailing_address">Dirección postal</h2>
<p>
  ¿Quieres escribirnos una carta? Usa nuestro
  <a href="contacts.html#Mailing_address"> dirección postal </a>.
</p>
```

---

## Creando enlaces

### Enlaces de correo electrónico

```html
<p>
  <a href="mailto:mail@example.com"> Enviar un correo electrónico </a>
</p>
```

---

## Estructura del documento

```html
<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>
```

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

- Bifurcar (_fork_) el repositorio de tareas y seguir las instrucciones de instalación
- Completar el laboratorio <a href="https://github.com/pataruco/ga/raw/main/labs/cookie-recipe/cookie-recipe-starter-code.zip" class="download-link">receta de galletas</a>
- Iniciar la tarea

---

class: code-along

## Homework

### Fan Fiction CV

Elige una película que te guste y crea una página web sobre el CV de uno de los personajes.

Aquí hay unos ejemplos

- [Darth Vader](https://www.giraffecvs.co.uk/wp-content/uploads/2013/05/CVDarthVader_rev8-page-001.jpg)
- [Disney](https://ohmy.disney.com/movies/2017/02/27/imaginary-disney-character-resumes/)

---

class: code-along

## Homework

### Requerimientos técnicos

- Usa elementos estructurales HTML5 s (`nav`, `header`, `footer`)
- Usa elementos y clases en CSS para añadir estilo a tu página
- Sigue las convenciones de nomenclatura, manten la coherencia entre los archivos `.html` y `.css` y usa las mejores prácticas para nombrar clases
- Usa un `título` único y una sola etiqueta `h1`
- Usa imágenes usando etiquetas `img` que incluyen atributos únicos `alt`
- Use una hoja de estilo CSS externa para diseñar su página
- Seleccione al menos 5 elementos en la página y aplique al menos 5 propiedades CSS diferentes (`font-size`, `color`, `font-family`, `background`, `text-decoration`) a estos elementos
- Usa al menos 6 etiquetas HTML diferentes (`h1`, `h2`, `h3`, `blockquote`, `p`, `ul`, `ol`, `a`, `img`)
- Sangre elementos anidados para aumentar la legibilidad de su código

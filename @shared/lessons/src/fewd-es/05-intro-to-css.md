class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Intro to CSS</h1>
</div>

---

---

## CSS

Los navegadores web aplican reglas CSS a un documento para afectar cómo se muestran. Una regla CSS se forma a partir de:

- **Propiedades** que tienen valores establecidos para actualizar cómo se muestra el contenido HTML.
- **Selectores** que selecciona los elementos a los que desea aplicar los valores de propiedad actualizados.

---

## ¿Cómo luce?

```html
<h1>¡Hola mundo!</h1>
<p>Este es mi primer ejemplo de CSS</p>
```

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px black solid;
}

p {
  color: red;
}
```

---

## ¿Cómo funciona CSS realmente?

![](https://mdn.mozillademos.org/files/11781/rendering.svg)

---

## ¿Cómo funciona CSS realmente?

## Acerca del DOM

Document Object Model (**DOM**) representa el documento en la memoria de la computadora. Combina el contenido del documento con su estilo.

Un DOM tiene una estructura en forma de árbol. Cada elemento, atributo y fragmento de texto en el lenguaje de marcado se convierte en un nodo DOM en la estructura de árbol. Los nodos se definen por su relación con otros nodos DOM. Algunos elementos son padres de nodos secundarios y los nodos secundarios tienen hermanos.

---

## ¿Cómo funciona CSS realmente?

```html
<p>
  Usemos:
  <span> En cascada </span>
  <span> Estilo </span>
  <span> Hojas de cálculo </span>
</p>
```

```text
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
```

---

## Cómo aplicar tu CSS a tu HTML

Uso de una etiqueta `link` con una referencia a un archivo CSS

```html
<head>
  ...

  <link rel="stylesheet" href="style.css" />
  ...
</head>
```

---

## Cómo aplicar tu CSS a tu HTML

Usando una etiqueta de estilo `<style>`

```html
<head>
  <style>
    h1 {
      color: blue;
      background-color: yellow;
      border: 1px solid black;
    }

    p {
      color: red;
    }
  </style>
</head>

<body>
  <h1>Hello World!</h1>
  <p>This is my first CSS example</p>
</body>
```

---

## Cómo aplicar tu CSS a tu HTML

Usando estilos en línea

```html
<body>
  <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
    Hello World!
  </h1>
  <p style="color:red;">This is my first CSS example</p>
</body>
```

---

## Bloques de construcción CSS

### Declaraciones

.image-half[![](https://mdn.mozillademos.org/files/3665/css%20syntax%20-%20declaration.png)]

---

## Bloques de construcción CSS

### Bloques de declaración

.image-half[![](https://mdn.mozillademos.org/files/3667/css%20syntax%20-%20declarations%20block.png)]

---

## Bloques de construcción CSS

### Selectores y reglas

.image-half[![](https://mdn.mozillademos.org/files/3668/css%20syntax%20-%20ruleset.png)]

---

## Colores CSS

Hay muchas formas de especificar el color en CSS. Los mismos valores de color se pueden usar en todas partes en CSS, ya sea que esté especificando el color del texto, el color de fondo o cualquier otra cosa.

El sistema de color estándar disponible en las computadoras modernas es de 24 bits, lo que permite la visualización de aproximadamente **16,7 millones** de colores distintos a través de una combinación de diferentes canales **rojo** 🔴, **verde** 🟢 y **azul** 🔵 con 256 diferentes valores por canal

## 256 x 256 x 256 = 16.777.216

---

## Colores CSS

### Palabras clave

```html
<p>This paragraph has a red background</p>
```

```css
p {
  background-color: red;
}
```

[Lista completa de nombres de colores](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)

---

## Colores CSS

### Valores hexadecimales

Cada valor hexadecimal consta de un símbolo de almohadilla (#) seguido de seis números hexadecimales, cada uno de los cuales puede tomar un valor entre **0** y **f** (que representa 15), por lo que **0123456789abcdef**.

Cada par de valores representa uno de los canales

- **rojo** 🔴
- **verde** 🟢
- **azul** 🔵

y nos permite especificar cualquiera de los 256 valores disponibles para cada uno (16 x 16 = 256).

---

## Colores CSS

### Valores hexadecimales

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: #ff0000;
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: #0000ff;
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: #e0b0ff;
}
```

---

## Colores CSS

### RGB

Un valor RGB es una función - `rgb()` - a la que se le dan tres parámetros que representan los valores de los canales **rojo** 🔴, **verde** 🟢 y **azul** 🔵 de los colores, de la misma manera que los valores hexadecimales. La diferencia con RGB es que cada canal está representado no por dos dígitos hexadecimales, sino por un número decimal entre **0** y **255**.

---

## Colores CSS

### RGB

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: rgb(255, 0, 0);
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: rgb(0, 0, 255);
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: rgb(224, 176, 255);
}
```

---

## Colores CSS

### HSL

La función `hsl()` acepta valores de **tono** _(hue)_, **saturación** _(saturation)_ y **luminosidad** _(lightness)_, que se utilizan para distinguir entre los 16,7 millones de colores, pero de una manera diferente:

- **Tono**: el tono base del color. Toma un valor entre 0 y 360, presentando los ángulos alrededor de una rueda de colores.
- **Saturación**: ¿qué tan saturado está el color? Esto toma un valor de 0-100%, donde 0 es sin color (aparecerá como un tono de gris) y 100% es saturación a todo color.
- **Luminosidad**: ¿qué tan claro o brillante es el color? Esto toma un valor de 0-100%, donde 0 es sin luz (aparecerá completamente negro) y 100% es completamente claro (aparecerá completamente blanco)

---

## Colores CSS

### HSL

```css
/* equivalent to the red keyword */
p:nth-child(1) {
  background-color: hsl(0, 100%, 50%);
}

/* equivalent to the blue keyword */
p:nth-child(2) {
  background-color: hsl(240, 100%, 50%);
}

/* has no exact keyword equivalent */
p:nth-child(3) {
  background-color: hsl(276, 100%, 85%);
}
```

---

## Colores CSS

### RGBA y HSLA

Tanto RGB como HSL tienen modos correspondientes, RGBA y HSLA, que te permiten establecer no solo el color que desea mostrar, sino también la transparencia que desea que tenga ese color.

```css
/* Transparent red */
p:nth-child(1) {
  background-color: rgba(255, 0, 0, 0.5);
}

/* Transparent blue */
p:nth-child(2) {
  background-color: hsla(240, 100%, 50%, 0.5);
}
```

---

## Fuentes CSS

Hay numerosas cosas que podemos diseñar para que el texto parezca más interesante y más legible.

---

### Propiedades de fuente

Hay muchas propiedades CSS para aplicar estilo al texto, pero aquí hay algunas claves:

```css
h1 {
  font-size: 50px;
  font-family: 'Avenir', 'Arial', sans-serif;
  font-weight: bold;
  font-style: italic;
  line-height: 1.3;
}
```

---

### Propiedades de fuente

- `font-size` establece el tamaño del texto.
- `font-family` establece el tipo de letra.
- `font-weight` establece la negrita (número o palabra clave)
- `font-style` puede establecer texto en cursiva
- `line-height` establece el espacio entre líneas

---

## Trucos CSS

### Centrando el contenido

Es muy común que un sitio web tenga una columna de contenido centrada, más estrecha que el ancho total de la pantalla. Para lograr esto, envolvemos un elemento contenedor alrededor de las etiquetas de contenido que queremos centrar.

---

## Trucos CSS

### Centrando el contenido

Una etiqueta `<div>` es ideal para este propósito y se usa muy comúnmente para dividir la página en partes que se pueden mover como una sola entidad.

```html
<div>
  <h2>...</h2>
  <p>...</p>
  <p>...</p>
  <blockquote>...</blockquote>
  <p>...</p>
</div>
```

---

## Trucos CSS

### Centrando el contenido

Para centrar este `div` de contenido, le damos un "ancho" y configuramos auto en sus márgenes horizontales.

```css
div {
  width: 800px; /* could be any number or unit*/
  margin-left: auto;
  margin-right: auto;
}
```

---

## Trucos CSS

### Centrando el contenido

Para centrar el contenido basado en texto (como párrafos o encabezados) podemos usar la propiedad `text-align`.

```css
h1 {
  text-align: center;
}
```

---

## CSS

Juntemos todas las piezas

---

## Receta de galletas

## Instrucciones

1. Descarga el código de inicio zip [archivo](https://github.com/pataruco/ga-fewd-assets/raw/master/cookie-recipe/cookie-recipe-starter-code.zip)
2. Abra el archivo **instrucciones.md** y siga los pasos

---

# Receta de galletas

## CSS

- El color de fondo de la página es `#FFE`
- El color del texto que dice "Recetas relacionadas" es `#887`
- El color del enlace es `#900`
- La familia de fuentes para el h1 es `serif` y el resto es`sans-serif`
- Bonificación: el borde de la página y alrededor de la imagen es negro
- El ancho máximo del contenido es "800px" y debe estar centrado en la página.

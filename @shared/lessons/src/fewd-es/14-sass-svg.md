class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Sass & SVG</h1>
</div>

---

## Sass

- Sass es un preprocesador que otorga superpoderes a **CSS**.
- Es muy similar a CSS pero tiene muchas características adicionales que hacen que escribir su código de estilo sea más rápido, más eficiente, más fácil de mantener y más organizado.
- Sass significa **S**yntastically **A**wesomes **S**tyle **S**heets y fue inventado por [Hampton Catlin](https://www.hamptoncatlin.com/) en 2006.

---

## Sass

Sin embargo, la sintaxis Sass y la sintaxis CSS son casi idénticas, por lo que aprender CSS primero no es nada malo. La sintaxis idéntica también facilita el cambio a **Sass** desde **CSS**.

---

## Sass

Sass proporciona muchas funciones que no son posibles o que no existen en CSS normal.

---

## Sass

Sass puede hacer esto porque el código que escribe se ejecuta a través de un compilador antes de que llegue al navegador.

El resultado final es CSS normal.

---

## Archivos Sass

Escribimos Sass en un archivo con una extensión de archivo `.scss`.

p.ej.
`style.scss`

Cualquier archivo con una extensión `.scss` se compilará en un archivo` .css` correspondiente del mismo nombre.

---

## Archivos Sass

- Los archivos que comienzan con un carácter de subrayado `_nav.scss` no se compilan, pero pueden ser `@import` en un archivo Sass que se compilará.

- Estos archivos se denominan parciales Sass y pueden parecerse a `_nav.scss` o` _about-page.scss`.

- Esto ayuda con la organización del código y, en lugar de tener un archivo CSS masivo, podemos tener muchos archivos Sass más pequeños que el compilador combina en uno.

---

## Sass

El compilador de Sass nos permite hacer cosas más poderosas como:

- Combinar y comprimir archivos
- Selectores anidados y consultas de medios
- Variables
- Matemáticas
- Manipulación de color
- funciones
- Mixins
- Bucles
- Declaraciones condicionales
- ¡Y mucho más!

---

## Sintaxis Sass

Sass se parece un poco a esto:

```scss
.site-header {
  .logo {
    float: left;
  }
  .nav {
    @include horizontal-nav;
    color: $color-brand;
  }
}
.site-content {
  // more styles
}
```

---

## Sassy CSS

[https://codepen.io/pataruco/pen/deNPmd](https://codepen.io/pataruco/pen/deNPmd)

---

## Compilando Sass

Podemos usar una herramienta como Codepen para compilar nuestros estilos cuando
experimentando.

Pero si queremos usar Sass en un proyecto que estamos construyendo
localmente, necesitamos una aplicación que pueda compilar Sass para nosotros.

---

## Compilando Sass

Sass a menudo se compila a través de la línea de comandos, pero esto es bastante avanzado para principiantes.
Aquí hay algunas aplicaciones gratuitas que puede usar en su lugar:

- [Scout](https://scout-app.io/)
- [Koala](http://koala-app.com/)
- [Compass](http://compass-style.org/)

---

## Compilando Sass

Para compilar nuestro sass mientras lo escribimos, comenzaremos una tarea de observación que observará los cambios en el archivo scss, luego generará el css resultante en una carpeta css:

```sh
$ sass --watch scss/main.scss css/style.css
```

## Sass Importar parciales

Los parciales nos permiten crear archivos CSS más pequeños que se pueden importar a un archivo más grande.

```scss
// style.scss

@import 'normalize';
@import 'variables';
@import 'elements';
@import 'helpers';
// etc
```

---

## variables Sass

Al igual que JavaScript, las variables nos permiten almacenar valores para usarlos más adelante en nuestro código.

```scss
$font-family-base: Helvetica, sans-serif;
$font-family-heading: 'Times New Roman', serif;

body {
  font-family: $font-family-base;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $font-family-heading;
}
```

---

## Anidado Sass

_HTML_ tiene una estructura de anidamiento clara, mientras que CSS no. Con Sass puede anidar sus selectores para una jerarquía visual más clara.

```scss
header {
  display: flex;
  justify-content: space-between;

  h1 {
    color: red;
  }

  ul {
    display: flex;
    justify-content: space-between;
    li {
      flex-basis: 100%;
      max-width: 25%;
    }
  }
}
```

---

## Anidado Sass

Cada nivel que anida agrega especificidad a su cadena de selección.

Por lo tanto, se recomienda no ir más allá de los 4 niveles de anidamiento en su código Sass.

---

## Sass mixins

Los mixins le permiten crear reglas CSS reutilizables a las que puede pasar valores.

```scss
@mixin cta($text-color, $bg-color, $border-color) {
  color: $text-color;
  background-color: $bg-color;
  border-color: $border-color;
}

.cta-primary {
  @include cta(blue, black, white);
}

.cta-secondary {
  @include cta(yellow, rebeccapurple, yellow);
}
```

---

## Sass extends

Las extensiones nos permiten crear conjuntos de propiedades CSS compartibles que podemos usar en todo nuestro código.

```scss
%large-text {
  font-size: 2.6rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 1px;
}

.strapline,
.quote {
  @extend %large-text;
}
```

---

## Que es BEM?

**Block** **Element** **Modifier** es una convención de nomenclatura que hace que nuestro código front-end sea mucho más fácil de mantener.

---

## Block

El bloque encapsula un grupo de elementos que, si es necesario, se pueden compartir.

```html
<!-- block -->

<section class="intro">
  <!-- nested HTML -->
</section>
```

---

## Elemento

Cualquier elemento está vinculado a su bloque y no se puede compartir con él exclusivamente.

```html
<!-- block -->

<section class="intro">
  <!-- Element -->
  <article class="intro__content">
    <h2>Article title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime
      perferendis esse error quia molestiae asperiores ipsam quae possimus
      facilis minima sit nemo, aspernatur ullam, velit temporibus tempore
      reiciendis neque.
    </p>
  </article>
</section>
```

---

## Modifier

Los modificadores se pueden utilizar para cambiar la apariencia de un elemento o grupo de elementos.

```html
<!-- block -->

<section class="intro">
  <!-- Element -->
  <article class="intro__content intro__content--hightlighted">
    <h2>Article title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime
      perferendis esse error quia molestiae asperiores ipsam quae possimus
      facilis minima sit nemo, aspernatur ullam, velit temporibus tempore
      reiciendis neque.
    </p>
  </article>
</section>
```

---

class: bg-yellow, fullscreen

# Scalable Vector Graphics (SVG)

---

## SVG

**S**calable **V**ector **G**raphics (SVG) is an XML-based markup language for describing two dimensional based vector graphics.

SVG is essentially to graphics what HTML is to text.

---

## Basic ingredients

HTML provides elements for defining headers, paragraphs, and so on. In much the same way SVG provides elements for circles, rectangles, and simple and complex curves.

A simple SVG document consists of nothing more than the `<svg>` root element and several basic shapes that build a graphic together. In addition there is the `<g>` element, which is used to group several basic shapes together.

---

## A simple Example

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
    SVG
  </text>
</svg>
```

1.  We start with the svg root element.
2.  The background is set to red by drawing a rectangle `<rect/>` that covers the complete image area.
3.  A green circle `<circle/>` with a radius of 80px is drawn atop the center of the red rectangle (center of circle offset 150px to the right, and 100px downward from the top left corner).
4.  The text "SVG" is drawn. The interior of each letter is filled in with white. The text is positioned by setting an anchor at where we want the midpoint to be.

---

## How to render it

SVG files on the web can be displayed directly in the browser or embedded in HTML files via several methods:

- If the HTML is HTML5, and the browser is a conforming HTML5 browser, the SVG can be directly embedded.

- Likewise an `iframe` element can be used:

```html
<iframe src="image.svg"></iframe>
```

- An `img` element can be used theoretically

- Finally SVG can be created dynamically with JavaScript and injected into the HTML DOM.

---

## The grid

.image-one-fourth[![](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)]

SVG uses a coordinate system or grid.

- That is, the top left corner of the document is considered to be the point `(0,0)`, or point of origin.

- Positions are then measured in pixels from the top left corner, with the positive x direction being to the right, and the positive y direction being to the bottom.

---

## What are "pixels"?

- One pixel in an SVG document maps to one pixel on the output device.

- **But** SVG wouldn't have the "Scalable" in its name, if there weren't several possibilities to change this behaviour

- SVG defines absolute units (ones with a dimensional identifier like `px` or `cm`) and so-called _user units_, that lack that identifier and are plain numbers.

---

## What are "pixels"?

One _user unit_ equals _one screen unit_. To explicitly change this behaviour, there are several possibilities in SVG. We start with the svg root element:

```html
<svg width="100" height="100"></svg>
```

The above element defines a simple SVG canvas with 100x100px. One user unit equals one screen unit.

```html
<svg width="200" height="200" viewBox="0 0 100 100"></svg>
```

The whole SVG canvas here is 200px by 200px in size. However, the `viewBox` attribute defines the portion of that canvas to display.

These 200x200 pixels display an area that starts at user unit (0,0) and spans 100x100 user units to the right and to the bottom.

This effectively zooms in on the 100x100 unit area and enlarges the image to double size.

---

## Basic shapes

## Rectangles

The `rect` element does exactly what you would expect and draws a rectangle on the screen.

```html
<rect x="10" y="10" width="30" height="30" />
<rect x="60" y="10" rx="10" ry="10" width="30" height="30" />
```

- `x`: The x position of the top left corner of the rectangle.
- `y`: The y position of the top left corner of the rectangle.
- `width`: The width of the rectangle
- `height`: The height of the rectangle
- `rx`: The x radius of the corners of the rectangle
- `ry`: The y radius of the corners of the rectangle

---

## Circle

The `circle` element draws a circle on the screen.

There are really only 3 attributes that are applicable here.

```html
<circle cx="25" cy="75" r="20" />
```

- `r`: The radius of the circle.
- `cx`: The x position of the center of the circle.
- `cy`: The y position of the center of the circle.

---

## Ellipse

Ellipses are actually just a more general form of the circle element, where you can scale the x and y radius of the circle separately.

```html
<ellipse cx="75" cy="75" rx="20" ry="5" />
```

- `rx`: The x radius of the ellipse.
- `ry`: The y radius of the ellipse.
- `cx`: The x position of the center of the ellipse.
- `cy`: The y position of the center of the ellipse.

---

## Line

Lines are again, just straight lines.

They take as attributes two points which specify the start and end point of the line.

```html
<line x1="10" x2="50" y1="110" y2="150" />
```

- `x1`: The x position of point 1.
- `y1`: The y position of point 1.
- `x2`: The x position of point 2.
- `y2`: The y position of point 2.

---

## Polyline

Polylines are groups of connected straight lines. Since that list can get quite long, all the points are included in one attribute:

```html
<polyline
  points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"
/>
```

- `points`: A list of points, each number separated by a space, comma, EOL, or a line feed character. Each point must contain two numbers, an x coordinate and a y coordinate.

---

## Polygon

Polygons are a lot like polylines in that they're composed of straight line segments connecting a list of points. For polygons though, the path automatically returns to the first point for you at the end, creating a closed shape.

```html
<polygon
  points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"
/>
```

---

## Path

Path is probably the most general shape that can be used in SVG. Using a path element you can draw rectangles, circles, ellipses, polylines, and polygons. Basically any of the other types of shapes, bezier curves, quadratic curves, and many more.

```html
<path d="M 20 230 Q 40 205, 50 230 T 90230" />
```

`d`: a list of points and other information about how to draw the path. See the Paths section for more information.

More info in how to draw paths [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)

---

## Fills and Strokes

Basic coloring can be done by setting two attributes on the node: `fill` and `stroke`. Fill sets the color inside the object and stroke sets the color of the line drawn around the object

```html
<rect
  x="10"
  y="10"
  width="100"
  height="100"
  stroke="blue"
  fill="purple"
  fill-opacity="0.5"
  stroke-opacity="0.8"
/>
```

---

## Stroke

.image-one-fourth--align-left[![](https://mdn.mozillademos.org/files/730/SVG_Stroke_Linecap_Example.png)]

There are three possible values for `stroke-linecap`:

- `butt` closes the line off with a straight edge that's normal (at 90 degrees) to the direction of the stroke and crosses its end.

- `square` has essentially the same appearance, but stretches the stroke slightly beyond the actual path. The distance that the stroke goes beyond the path is half the stroke-width.

- `round` produces a rounded effect on the end of the stroke. The radius of this curve is also controlled by the stroke-width.

> [https://codepen.io/pataruco/pen/ELZqwK](https://codepen.io/pataruco/pen/ELZqwK)

---

## All together

### Loading spinner

[https://codepen.io/pataruco/pen/dKrPMw](https://codepen.io/pataruco/pen/dKrPMw)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Sass and SVG</h1>
</div>

---

class: code-along

# Labs

---

class: code-along

# Homeworks

---

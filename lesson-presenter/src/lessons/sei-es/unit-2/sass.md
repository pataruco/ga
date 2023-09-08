# .center[Sass]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

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

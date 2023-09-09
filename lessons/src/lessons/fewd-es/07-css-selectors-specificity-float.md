class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Selectores, especificidad & Floats</h1>
</div>

---

## Selectores

Hasta ahora hemos visto el siguiente tipo de selectores.

Coinciden con los elementos HTML del documento, pero son bastante limitantes cuando se trata de proyectos complejos.

```css
/* element selector */
p {
}
/* multiple elements selector */
h1,
h2,
h3 {
}
/* descendent element selector */
header a {
}
```

---

## Selectores simples

Para tener más control sobre las secciones de la página que se van a estilizar, hay muchos otros selectores disponibles.

### Tipo `html`

Selecciona todos los elementos que coinciden con el nombre de nodo dado.

```css
header {
  background-color: pink;
}
```

### Clase `.name`

Selecciona todos los elementos que tienen el atributo de clase dado.

```css
.column {
  display: flex;
}
```

---

## Selectores simples

### ID `#name`

Selecciona un elemento basado en el valor de su atributo id. _Solo debe haber un elemento con una ID dada en un documento_

```css
#hamburguer {
  position: absolute;
}
```

### Universal `*`

Selecciona todos los elementos

```css
* {
  box-sizing: border-box;
}
```

---

## Selectores simples

### Atributos `[key="value"]`

Selecciona elementos en función del valor del atributo dado.

```css
input[type='email'] {
  border: none;
}
```

---

## Combinadores

### `+`

Selecciona hermanos adyacentes

```css
h2 + p {
  font-family: monospace;
}
```

### `~`

Selecciona hermanos

```css
section ~ article {
  font-family: max-width: 1280px;
}
```

---

## Combinadores

### `>`

Selecciona nodos que son hijos directos del primer elemento.

```css
ul > li {
  border-bottom: none;
}
```

### (espacio)

Selecciona nodos que son hijos directores del primer elemento.

```css
.menu-open nav {
  display: none;
}
```

---

## Pseudo clases

Otros selectores incluyen pseudoselectores de estado.

Un ejemplo clásico es el estado `:hover` al pasar el mouse sobre los enlaces o el estado `:focus` al completar un formulario.

```css
a {
  color: red;
}
a:hover {
  color: blue;
}
input {
  background: #fff;
}
input:focus {
  background: #eee;
}
```

[MDN Index of pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes)

---

## Pseudo elementos

¿Se agrega una palabra clave a un selector que le permite diseñar una parte específica de los elementos seleccionados?

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

[MDN Index of pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#Index_of_standard_pseudo-elements)

---

## Clase vs Id

[CodePen](https://codepen.io/pataruco/pen/Pdqrqw)

### Cuando usar `.clase` y `#id`

- Usa atributos de `clase` al HTML para seleccionar con CSS.
- Usa atributos `id` al HTML para seleccionar con JS.
- **No uses** ~~`id`~~ para agregar estilo a los elementos.

---

## Especificidad

Al escribir CSS, es común que se apliquen propiedades contradictorias al mismo elemento.

Los estilos que "ganan" y se renderizarán en el navegador están determinados por 3 criterios principales en este orden:

1. Importancia
2. Especificidad
3. Orden de origen

---

### Importancia `!important`

Las declaraciones CSS con `!important` lo superan todo.

Evita usarlo a toda costa

```css
h1 {
  color: white !important; /*wins*/
}

#main-title {
  color: red;
}
```

---

## Especificidad

Calculamos la especificidad de los selectores contando el número de estilos en línea, identificadores, clases y selectores de elementos.

- `style` es más poderoso que
- `id` el cual es más poderoso que
- `class` el cual es más poderoso que
- `element` elector

Esto produce un número de 4 dígitos llamado **valor de especificidad**.

1 `element` y 1 `id` gana a 3 `elements`

```css
header #main-title {
  color: red; /* 0101 wins */
}

header div h1 {
  color: white; /* 0003 */
}
```

---

## especificidad

| Selector                                                                | style | Id  | Classes & attributes | Elements | Total especificidad |
| ----------------------------------------------------------------------- | ----- | --- | -------------------- | -------- | ------------------- |
| `h1`                                                                    | 0     | 0   | 0                    | 1        | **0001**            |
| `h1 + p::first-letter`                                                  | 0     | 0   | 0                    | 3        | **0003**            |
| `li > a[href*="en-US"] > .inline-warning`                               | 0     | 0   | 2                    | 2        | **0022**            |
| `#identifier`                                                           | 0     | 1   | 0                    | 0        | **0100**            |
| Sin selector, con una regla dentro del atributo `estilo` de un elemento | 1     | 0   | 0                    | 0        | **1000**            |

---

## Orden de origen

Si dos selectores tienen el mismo nivel de importancia y especificidad, ganará el que llegue después.

```css
header .title {
  color: black;
}

header .title {
  color: red; /* Wins !!*/
}
```

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Floats</h1>
</div>

---

## Floats

`float` es una propiedad que se puede usar para tener elementos de bloque _"float_(en)" uno al lado del otro.

La propiedad `float` nunca se pensó realmente para el maquetación, sino para permitir que el texto se envuelva alrededor de una imagen.

Este era un estilo de diseño popular en la época de la impresión y los diseñadores web querían imitar el efecto.

Ahora hay una serie de opciones de diseño disponibles en CSS pero (desafortunadamente) `float` sigue siendo una solución popular a pesar de los efectos secundarios

Para permitir que dos elementos `block` se coloquen uno al lado del otro, para crear diseños de varias columnas, necesitamos "flotarlos".

Esto se debe a que los elementos `block` normalmente se apilan verticalmente y los elementos `inline` no responden a propiedades de diseño como `width` y `height`.

---

## Floats

Un elemento puede flotar hacia el lado izquierdo (`left`) o derecho (`right`) de su contenedor.

```css
header .title {
  color: black;
}

head.main-content {
  width: 500px;
  float: left;
}

.sidebar {
  width: 300px;
  float: right;
}
```

---

## Floats

Cuando los elementos flotan, los elementos circundantes intentan fluir a su alrededor, lo que puede causar algunos efectos colaterales extraños.

Para volver a encarrilar el diseño, podemos "borrar" (`clear`) los `floats` y hacer que todo vuelva a la normalidad.

```css
.footer {
  clear: both;
}
```

Podemos despejar hacia los lados `izquierdo`, `derecho` o `ambos`. Lo que borrará el efecto de los elementos que flotan a la izquierda, a la derecha o tanto a la izquierda como a la derecha.

---

## Maquetación con `floats`

En el pasado, `floats` eran la única forma de introducir columnas, pero debido a que un contenedor con elementos flotantes pierde su altura, debemos eliminar ese efecto de inmediato.

### [Clearfix hack](https://nicolasgallagher.com/micro-clearfix-hack/)

```css
.cf:before,
.cf:after {
  content: ' ';
  display: table;
}
.cf:after {
  clear: both;
}
```

---

## Maquetación con `floats`

[CodePen](https://codepen.io/pataruco/pen/NLGKrV?editors=1100)

---

## Lab &#x1F9EA;

[CSS Diner](https://flukeout.github.io/)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de la presentación</h1>
</div>

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Box model</h1>
</div>

---

## El modelo de caja

Cada elemento del diseño web es una caja. En términos generales, los elementos son:

- **inline**
- **block**

---

## El modelo de caja

Los cuadros "en línea" se muestran uno al lado del otro, en una línea y son tan anchos y altos como el contenido dentro de ellos.

Algunos ejemplos son elementos como etiquetas `<a>` o etiquetas `<span>`.

---

## El modelo de caja

Los elementos `block` comienzan en una nueva línea, llenan el ancho de su elemento padre y se apilan uno encima del otro.

Algunos ejemplos son elementos como `<div>` o `<ul>` o `<p>`.

---

## El modelo de caja

Podemos cambiar el tipo de elemento cambiando la propiedad CSS `display`.

```css
div {
  display: inline;
}

img {
  display: block;
}
```

---

## El modelo de caja

Las cajas tienen una serie de propiedades que usamos para describirlos y cómo se distribuyen en la página:

- **width** `ancho`
- **height** `altura`
- **padding** `relleno`
- **border** `frontera`
- **margin** `margen`

---

## Tamaño calculado del cuadro de contenido

**ancho**: `width` +`padding-left` + `padding-right` +`border-left` + `border-right`

**height** `height` +`padding-top` + `padding-bottom` +`border-top` + `border-bottom`

¿No sería bueno si pudiéramos simplificar las cosas?

---

## El modelo de caja

**Cuadro de contenido** vs **cuadro de borde**

> `content-box` vs. `border-box`

Una [demostración interactiva](https://pataruco.github.io/box-model/) de El modelo de caja

Inspirado en el proyecto Guy Routledge [El modelo de caja](https://github.com/guyroutledge/box-model)

---

## Tamaño de caja

Agrega este fragmento en cada sitio en la parte superior del archivo CSS

```css
* {
  box-sizing: border-box;
}
```

---

## Atajos

`margin` y`padding` se pueden configurar en 1 o más lados con una sola línea de código

```css
div {
  margin: 20px; /* los cuatro lados */
  margin: 20px 40px; /* arriba/abajo and izquierda/derecha */
  margin: 20px 40px 10px; /* arriba izquierda/derecha and abajo */
  margin: 10px 20px 30px 40px; /* arriba derecha abajo izquierda */
}
```

### ¿Ves un patrón aquí?

---

## Atajos

El borde se compone de 3 propiedades que se pueden combinar para aplicar el mismo borde en los cuatro lados

```css
div {
  border-width: 1px;
  border-style: solid;
  border-color: red;
  `border: 1px solid red;`
}
```

---

class: lab

## Laboratorio

### Cajas de etiquetas

[Download](https://github.com/pataruco/ga/raw/main/labs/tag-boxes/tag-boxes-starter-code.zip)

---

## Selectores anidados

Hemos visto cómo seleccionar elementos en la página con CSS

```css
h1 {
  color: red;
}
```

Seleccionará todos los `<h1>` y los hará rojos.

---

## Selectores anidados

Pero, ¿qué pasa si no quieres que todo `<h1>` sean rojo? ¿Qué pasa si solo queremos que el título principal de un artículo sea rojo?

Podemos usar la estructura en forma de árbol de HTML (donde tenemos elementos padres, hijos y hermanos) para seleccionar elementos basados ​​en su elemento padre.

```css
article h1 {
  color: red;
}
```

Seleccionará cualquier `<h1>` que sea hijo de las etiquetas `<article>`.

---

## Selectores anidados

Llamamos a estos selectores descendientes y pueden contener tantos elementos como sea necesario para apuntar a elementos específicamente.

```css
header nav a {
  text-decoration: none;
}
```

La próxima vez aprenderemos tipos de selectores más específicos.

---

## Fuentes de Google

Fuentes de Google es un servicio gratuito que brinda acceso a una amplia gama de familias de fuentes diferentes.

---

## Fuentes de Google

1. Dirígete a https://www.google.com/fonts.
2. Busca una fuente
3. Haga clic en el icono de "uso rápido" (icono del medio a la derecha
   lado)
4. Elija los estilos de fuente que necesita
5. Deje el juego de caracteres latino
6. Copie y pegue el fragmento de código de la hoja de estilo `<link>`
7. Copie y pegue la familia de fuentes en su CSS, por ejemplo.

```css
body {
  font-family: 'Lato', sans-serif;
}
```

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de la presentación</h1>
</div>

---

class: lab

# Relaxr

[Download](https://github.com/pataruco/ga/raw/main/homeworks/relaxr-1/relaxr-1-starter-code.zip)

---

class: code-along

# Relaxr

[Download](https://github.com/pataruco/ga/raw/main/homeworks/relaxr-1/relaxr-1-starter-code.zip)

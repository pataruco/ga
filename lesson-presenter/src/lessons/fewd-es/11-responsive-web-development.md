class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Desarrollo Web responsivo</h1>
</div>

---

## Descripción general del diseño responsivo

- Contenedores fluidos
- Media queries
- Imágenes flexibles y responsivas

---

## Fijo vs responsivo

Consulta estos sitios **fijos**

- [Google](https://www.google.com)
- [Ling Cars](https://www.lingscars.com/)

Consulta estos sitios **responsivos**

- [General Assembly](https://generalassembly.com)
- [Wikipedia](https://en.wikipedia.org/wiki/Star_Wars)
- [Red Badger](https://www.red-badger.com)

La conclusión es que un sitio responsivo utiliza el mismo código para lograr un diseño optimizado en múltiples pantallas.

---

## Diseño fijo

- Sencillo y un buen punto de partida.
- Da más control
- Más fácil de construir
- Aún funciona en dispositivos móviles: pellizcar y acercar Se basa en un contenedor de ancho fijo

---

## Diseño fluido

- Dimensionado en porcentajes (o unidades relativas)
- Todo es relativo
- Se trata de proporciones

---

## Unidades relativas

Además de dimensionar nuestros contenedores en porcentajes, podemos dimensionar otros componentes de la interfaz de usuario (`font-size`,`margin`, `padding`, etc.) en unidades relativas que forman una cascada y construyen un sistema de proporciones.

Las unidades de medida comunes para estos componentes son:

- `em`
- `rem`
- `vw` and `vh`

---

## `em` vs `rem`

### `em`

- Tamaño basado en el ancho de la letra "M"
- El tamaño es relativo al padre

```css
body {
  font-size: 16px;
}
h1 {
  font-size: 2em; /*font size es 32px */
}
```

[CodePen](https://codepen.io/pataruco/pen/dxGRjM)

---

## `em` vs `rem`

### `rem`

- Significa **root** `em`.
- Basado en el tamaño de fuente del elemento `<html>` (raíz)

---

## `vh` y `vw`

También puede usar unidades de ventana gráfica llamadas **`vh`** (altura de ventana gráfica) y **`vw`** (ancho de ventana gráfica). Hay 100 unidades de altura de ventana y 100 de ancho de ventana por cada pantalla que ve (¡que es muy similar a los porcentajes!)

```css
.container {
  height: 100vh; /* Todo lo alto de la pantalla */
  width: 50vh; /* La mitad del ancho de pantalla */
}
```

---

## Porcentajes vs `vh` / `vw`

¿La mayor diferencia? Anidar un elemento con porcentaje significa que está vinculado a su padre. Las unidades de la ventana gráfica seguirán siendo las mismas sin importar cuán anidadas estén.

```html
<section class="”container”">
  <div class="”child-1”">Percent</div>
  <div class="”child-2”">vw Units</div>
</section>
```

```css
.child-1 {
  width: 50%; /* 50% de su padre*/
}
.child-2 {
  width: 50vw; /* 50% del ancho de pantalla */
}
```

---

## Media queries

### Tipos de media

Los dos tipos de medios principales son `print` y`screen`
Esto significa que podemos escribir CSS para dispositivos de pantalla (computadoras portátiles, tabletas, móviles) y diferentes CSS para imprimir una página web.

```css
@media only screen and (max-width: 800px) {
  /*styles only apply when viewport is up to 800px */
}
```

[Codepen](https://codepen.io/pataruco/pen/bXErem)

---

## Media queries

Hay muchas cosas que podemos consultar sobre el medio , estas son las más comunes.

```css
width | min-width | max-width
height | min-height | max-height
orientation
aspect-ratio | min-aspect-ratio | max-aspect-ratio resolution | min-resolution | max-resolution
```

Separe varias cláusulas con `and` y niegue con `not`

---

## Pantalla móvil

Para que nuestras consultas de medios funcionen, debemos agregar esta meta etiqueta especial al encabezado (`<head>`) de nuestro HTML.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

---

## Usando _media queries_

```css
.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.column {
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 1;
}

@media screen and (min-width: 600px) {
  .row {
    flex-direction: row;
  }
}
```

---

## Móvil primero

- Comience con una sola columna
- Agrega consultas de medios usando `min-width`
- Beneficios de rendimiento
- Un poco menos de código

---

## Escritorio primero

- Comience con la versión de ancho completo
- Agregar consultas de medios usando `max-width`
- Puede ser más intuitivo
- Puede causar problemas para escalar un diseño complejo a una pantalla estrecha

---

## Puntos de interrupción (_breakpoints_)

Al construir un sitio responsivo, a menudo tenemos algunos puntos de interrupción comunes donde queremos que ocurran cambios importantes. Por lo general, se describen como "estilos para dispositivos móviles", "estilos de tableta" o "estilos de escritorio".

**O pantallas pequeñas, medianas o grandes.**

---

## Puntos de interrupción (_breakpoints_)

| dimension  | pequeñas | medianas | grandes  |
| ---------- | -------- | -------- | -------- |
| **minimo** | `320px`  | `500px`  | `1500px` |
| **maximo** | `500px`  | `1000x`  | `1500px` |

## Tweakpoints

Tener puntos de interrupción genéricos es bueno, pero a menudo necesitarás modificar diferentes estilos para que el contenido se vea mejor.

---

## ¿Dónde colocar los _media queries_?

Puede colocar todas sus consultas de medios en un solo lugar en tu hoja de estilo (en la parte inferior para asegurarse de que no haya problemas de especificidad).

O puede tener varias declaraciones `@media` a lo largo de su hoja de estilo, configurando estilos responsivos directamente debajo de su CSS inicial.

---

## Imágenes flexibles

Las imágenes tienen dimensiones fijas que pueden romper nuestros diseños fluidos.

Podemos hacerlos flexibles configurando `max-width`

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```

---

## Imágenes responsivas

```html
<img
  srcset="
    elva-fairy-320w.jpg 320w,
    elva-fairy-480w.jpg 480w,
    elva-fairy-800w.jpg 800w
  "
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy"
/>
```

[CodePen](https://codepen.io/pataruco/pen/KOVXNM)

---

## Imágenes responsivas

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy"
/>
```

---

## Imágenes responsivas

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

---

## Herramientas

Las pruebas de diseño responsivo pueden ser complicadas.
Aquí hay algunas herramientas para ayudar:

- Herramientas de desarrollo del navegador
- [BrowserStack](https://www.browserstack.com/)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de la presentación</h1>
</div>

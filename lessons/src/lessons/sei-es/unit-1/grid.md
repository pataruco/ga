# .center[CSS Grid]

.logo[![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)]

---

## ¿Qué es una cuadrícula (_grid_)?

Imagina hojas de cálculos donde puedes colocar contenido en columnas y filas. Las cuadrículas garantizan que los elementos se alineen sin problemas en la página.

---

## Comparación herramientas de diagramación

| `inline-block`                            | `float`                                                                               | `flexbox`                                                                           | `grid`                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Hibrido entre `inline` y `block`          | ayuda a que el texto fluya alrededor de una imagen; no son ideales para diagramacion. | solo funciona en UNA dimensión a la vez, con un eje principal y un eje transversal. | funciona en dos dimensiones todo el tiempo, definiendo filas y columnas. |
| Interrumpe el flujo regular de documentos | Interrumpe el flujo regular de documentos                                             | puede anidar **flex containers**.                                                   | Una declaración más clara de patrones complicados.                       |

---

## CSS Grid: un primo de Flexbox

- Creado pensando en la Web moderna.
- Responde de forma nativa.
- Relacion contenedor principal → contenedor hijo.
- Al igual que flexbox, un elemento padre (o "contenedor") definirá el diseño de sus hijos.

---

## Grid tracks

> (Así se llaman las filas y las columnas).

![grid tracks](https://media.prod.mdn.mozit.cloud/attachments/2016/09/22/13899/fd498c7d62dfe4dc56ee32e85b9b5801/grid.png)

**Usa `display: grid` en el elemento contenedor**

```css
.container {
  display: grid;
}
```

A diferencia de `display: flex`, Grid no nos da mucho por defecto. Tendremos que definir la plantilla para nuestra cuadrícula de acuerdo con las filas y columnas que queramos.

---

## Define tus filas y columnas

### Filas (_rows_)

Usa la propiedad **`grid-template-rows`**.

### Columnas (_rows_)

Usa la propiedad **`grid-template-columns`**.

---

## Conceptos básicos en HTML

```html
<section class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</section>
```

---

## Conceptos básicos en CSS

```css
/* 2 column, 1 row grid */
.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px;
}
```

---

## Un ejemplo básico de Grid

Consulta este ejemplo como referencia para usar las propiedades Grid

[CodePen](https://codepen.io/GAmarketing/pen/GRRNgzJ)

---

## Un ejemplo básico de Grid

Ahora repliquemos lo que vimos solo usando propiedades de flexbox

| [Código inicial](https://codepen.io/GAmarketing/pen/yLLRQga) | ➡️  | [Código final](https://codepen.io/GAmarketing/pen/jOOeQLq) |
| ------------------------------------------------------------ | --- | ---------------------------------------------------------- |

---

## Grid tracks implícitos

Puede dejar **`grid-template-rows`** y CSS Grid creará automáticamente las filas (conceptualmente, esto se llama la “cuadrícula implícita”).

Si no sabemos cuántas filas ocupará nuestro contenido, ¿podemos definir su altura?

¡Resulta que hay una propiedad llamada `grid-auto-rows` solo para ese propósito!

```css
/* 2 column, ?? row grid */
.container {
  display: grid;
  grid-template-columns: 100px 100px;
}

.item {
  background-color: orange;
}
```

---

## `grid-gap`

**`grid-gap`** es el margen (`margin`) / relleno (`padding`) de CSS Grid. Si desea espacio entre los elementos de la cuadrícula, aplica `grid-gap`.

Cuando **`grid-gap`** se le da un valor se aplica una cantidad igual de espacio entre filas y columnas.

---

## `grid-gap`

Tenga en cuenta: `grid-gap puede` tomar dos valores, que establecen el relleno de columna y fila (respectivamente).

```css
.grid01 {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 25px 10px;
}
```

[CodePen ejemplo](https://codepen.io/GAmarketing/pen/vYYyOMx)

---

## Unidades fraccionales en Grid CSS

La unidad fraccionaria (**fr**) es una unidad más nueva para usarse con CSS Grid (similar a los porcentajes). Representa fracciones de un **grid container** y tiene en cuenta de manera inteligente el `grid-gap`

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
```

---

## Unidades fraccionales en Grid CSS

### ¿Puedo usar juntos diferentes valores de medición?

Podemos sentirnos libres de mezclar unidades de ancho fijo y de ancho variable, como **píxeles**, **fr** y **porcentajes**.

Cuando se usa junto con unidades de ancho fijo, **fr** dice:

> _"Use el resto del espacio que queda después de las unidades de ancho fijo"._

[CodePen de ejemplo](https://codepen.io/GAmarketing/pen/bGGBdPK)

---

## Ejercicio

### Haz imágenes con Grid

Crea una cuadrícula (**grid**) con las imágenes proporcionadas en el código de inicio. ¡Las imágenes son GRANDES! ¿Cómo puedes solucionar eso?

| [Código inicial](https://codepen.io/GAmarketing/pen/zYYMZqL) | ➡️  | [Código final](https://codepen.io/GAmarketing/pen/WNNYppj) |
| ------------------------------------------------------------ | --- | ---------------------------------------------------------- |

---

## Combinando herramientas de diagramación

Puede usar CSS Grid con `flexbox` e incluso con `floats`.

Todos tienen un papel que desempeñar y un propósito en su caja de herramientas.

- Haga flotar `float` una imagen cuando desee que el texto la rodee.
- `Flexbox` funciona muy bien para la navegación de sitios web y grandes secciones horizontales.
- `Grid` es una gran herramienta para patrones de visualización grandes y repetitivos.

¡Experimenta! No existe una única forma de crear diseños; la experiencia te ayudará a seleccionar la herramienta adecuada.

---

## Ejemplo `grid` + `flexbox`

[CodePen](https://codepen.io/GAmarketing/pen/eYYQWeO)

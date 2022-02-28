class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Animaciones, transformaciones y transiciones</h1>
</div>

---

## Moviendo cosas

### `position`

- `relative`
- `absolute`
- `fixed`

---

## Moviendo cosas

También podemos mover cosas `transform`ándolas:

- `rotate`
- `skew`
- `scale`
- `translate`

---

## Moviendo cosas

Todos estos valores se aplican a través de la propiedad `transform`.

```css
.box {
  transform: rotate(10deg);
  transform: skew(-5deg);
  transform: scale(1.5);
  transform: translate(20px, 100px);
}
```

---

## Moviendo cosas

Incluso puede mover cosas en "_3D_" y cuando se combina con la perspectiva puede crear algunos efectos realmente impresionantes.

[https://24ways.org/2010/intro-to-css-3d-transforms/](https://24ways.org/2010/intro-to-css-3d-transforms/)

---

## Efectos

Una gran cantidad de estilo visual solía hacerse con imágenes. Pero ahora, podemos hacer un montón de cosas interesantes en CSS. Esto hace que las cosas sean más rápidas y flexibles, ¡e incluso podemos animar estos efectos también!

---

## Efectos

Algunos efectos de uso común incluyen:

- **Sombra de caja**: `box-shadow`
- **Sombra de textto**: `text-shadow`
- **Gradientes**: `gradient`s
- **Filtros**: `filter`s

---

## Sombra de caja (`box-shadow`)

Agrega una sombra de caja debajo un elemento

```css
.box {
  /*x-offset y-offset blur colour */
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

---

## Sombra de texto (`text-shadow`)

Agrega una sombra de letra

```css
.title {
  /* x-offset y-offset blur colour */
  text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

---

## Gradientes (`gradient`)

Crea un degradado que se mezcla de un color a otro.

```css
.gradient {
  background: linear-gradient(#000, #fff);
}
.gradient {
  /* directions like to left, to right */
  background: linear-gradient(to right, #000, #fff);
}
.gradient {
  /* angles */
  background: linear-gradient(40deg, #000, #fff);
}
```

---

## Filtros (`filter`)

Podemos filtrar imágenes (como un paquete de edición de imágenes) con la propiedad `filter`

```css
.filter {
  filter: blur(20px);
}
```

---

## Filtros (`filter`)

Hay muchos filtros disponibles.

```css
.filter {
  filter: blur(5px);
  filter: brightness(0.4);
  filter: contrast(200%);
  filter: drop-shadow(16px 16px 20px blue);
  filter: grayscale(50%);
  filter: hue-rotate(90deg);
  filter: invert(75%);
  filter: saturate(30%);
  filter: sepia(60%);
  /*Aplica multiple filtros */
  filter: contrast(175%) brightness(3%);
}
```

---

## Transiciones

Podemos diseñar diferentes estados usando pseudoclases como

- `:hover`
- `:focus`
- `:active`

---

## Transiciones

En lugar de una activación / desactivación discordante de estos diferentes estados, podemos hacer una transición entre los valores cambiantes para tener un efecto más suave.

```css
.box {
  background: red;
  transition: all 1s ease;
}
.box:hover {
  background: blue;
}
```

---

## Transiciones

Las transiciones tienen un estado inicial y un estado final.

Cuando ocurre un disparador (por ejemplo, `:hover`), se cambia cualquier propiedad que sea diferente entre los dos estados.

---

## Transiciones

Las transiciones se componen de 3 cosas:

1. Las propiedades para la transición (todas por defecto)
2. La duración de la transición
3. La curva de aceleración de la transición (_cubic-bezier_)

---

## Animaciones

Durante mucho tiempo, las animaciones se hacían en Javascript.

Ahora la mayoría de las animaciones se pueden realizar en CSS.

Esto es bueno porque:

- Son aceleradas por hardware, que resulta en un mejor rendimiento
- Mantiene las cosas de la presentación con otras cosas de la presentación
- No es necesario Javascript

---

## Sintaxis de animación CSS

```css
.bouncing-ball {
  animation: bounce 2s 500ms infinite ease-in-out;
}

@keyframes bounce {
  0% {
    top: 0;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 0;
  }
}
```

---

## Sintaxis de animación CSS

There is also a keyword syntax for keyframes

También hay una sintaxis para fotogramas clave (`@keyframes`).

```css
@keyframes moveUp {
  from {
    top: 0;
  }
  to {
    top: 100%;
  }
}
```

---

## Propiedades de animación CSS

- `animation-duration`
- `animation-delay`
- `animation-direction`
- `animation-iteration-count`
- `animation-name`
- `animation-timing-function`
- `animation-play-state`
- `animation-fill-mode`

---

# Lab

[CodePen](https://codepen.io/pataruco/pen/wYEMmb)

---

# Bonus

[CodePen](https://codepen.io/pataruco/pen/eYOeGrj)

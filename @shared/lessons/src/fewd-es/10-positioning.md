class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Posicionamiento Y CSS base</h1>
</div>

---

## ¿Podemos construir cosas como esta?

- [Cerdo volador](https://codepen.io/zastrow/full/kLeDa)
- [Francine](http://diana-adrianne.com/purecss-francine/)

---

## Reinicio de CSS

Hay muchos estilos predeterminados molestos que son inconsistentes en todos los navegadores.
A veces, es posible que deseemos eliminarlos todos para tener un lienzo en blanco.

---

## Reinicio de CSS

### Simple reset

```css
* {
  margin: 0;
  padding: 0;
}
```

---

## Reinicio de CSS

### Eric Meyer's reset

Una aproximación
[https://meyerweb.com/eric/tools/css/reset/reset.css](https://meyerweb.com/eric/tools/css/reset/reset.css)

---

## Reinicio de CSS

### Normalize

My preferido: [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

---

## Posicionamiento CSS

- Colocación precisa de elementos
- Ajustar la posición de los elementos
- No para diseño
- Principalmente para abordar diseños complejos

---

## Propiedad de posición CSS

La "posición" (`position`) de CSS puede tomar 1 de 4 valores.

`static` es el valor predeterminado y no es necesario configurarlo.

- `static`
- `relative`
- `absolute`
- `fixed`

- [Codepen Sandbox](https://codepen.io/pataruco/pen/BaoVOoO)

---

## `position: relative`

- Mueve elementos "relativos" a sí mismos
- Crea un contenedor principal
- Coloca los elementos absolutos en el interior

---

# `position: absolute`

- Establece las coordenadas absolutas de un elemento a posicionar
- `top`, `right`, `bottom`, `left`
- Utiliza `px`,`%`,`em` y cualquier otra unidad CSS

---

# `position: fixed`

- Fija un elemento en su lugar, independientemente del desplazamiento
- Establece coordenadas a dónde fijar un elemento
- La posición se establece en relación con el cuerpo (`body`).

---

# `z-index`

- `z-index` controla el orden de apilamiento.
- El **eje z** sale de la pantalla hacia ti
- Es un poco como las capas (_layers_) de Photoshop.
- `z-index` solo funciona para posiciones que no sean estáticas

---

class: lab

# Laboratorio

[El cerdo volador](https://codepen.io/pataruco/pen/rZLvPZ)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Final de la presentación</h1>
</div>

---

class: lab

# Labs

- [El cerdo volador](https://codepen.io/pataruco/pen/rZLvPZ)
- [Grid garden](https://cssgridgarden.com/)
- [Grids](https://github.com/pataruco/ga/raw/main/labs/grid/grid-starter-code.zip)

---

class: code-along

# Homework

[Startup matchmaker](https://github.com/pataruco/ga/raw/main/labs/startup-matchmaker/startup-matchmaker-starter-code.zip)

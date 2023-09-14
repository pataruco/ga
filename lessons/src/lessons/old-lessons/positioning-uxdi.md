class: center, middle

# .center[Positioning]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

# Can we build stuff like this?

- [Flying Pig](https://codepen.io/zastrow/full/kLeDa)
- [Francine](http://diana-adrianne.com/purecss-francine/)

---

# CSS Reset

There are a lot of annoying default styles that are inconsistent across browsers.
Sometimes we might want to remove them all so we have a blank canvas.

---

# CSS Reset

## Simple reset

```css
* {
  margin: 0;
  padding: 0;
}
```

---

# CSS Reset

## Eric Meyer's reset

One approach:
[https://meyerweb.com/eric/tools/css/reset/reset.css](https://meyerweb.com/eric/tools/css/reset/reset.css)

---

# CSS Reset

## Normalize

My preference: [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

---

# CSS Positioning

- Precise placement of elements
- Tweak position of elements
- Not for layout
- Mostly for tackling complex design

---

# CSS position property

CSS `position` can take 1 of 4 values.

`static` is the default and does not have to be set.

- `static`
- `relative`
- `absolute`
- `fixed`

---

# `position: relative`

- Move elements `relative` to themselves
- Create a parent container
- Position elements absolutely inside

---

# `position: absolute`

- Set the absolute co-ordinates of an element to be positioned
- `top`, `right`, `bottom`, `left`
- Use `px`, `%`, `em` and any other CSS unit

---

# `position: fixed`

- Fix an element in place, regardless of scroll
- Set co-ordinates of where to fix an element
- Position is set relative to the body

---

# `z-index`

- `z-index` controls the stacking order.
- The `z-axis` comes out of the screen towards you
- It’s a bit like Photoshop layers
- `z-index` only works for position other than static

---

# Lab

[Pig Exercise](https://codepen.io/pataruco/pen/rZLvPZ)

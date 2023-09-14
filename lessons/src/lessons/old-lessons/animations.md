class: center, middle

# .center[Animations]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

#A genda

- Moving things
- Effects
- Transitions
- Animation

---

# Moving things

## `position`

- `relative`
- `absolute`
- `fixed`

---

# Moving things

We can also move things by `transform`ing them:

- `rotate`
- `skew`
- `scale`
- `translate`

---

# Moving things

These values are all applied via the `transform` property.

```css
.box {
  transform: rotate(10deg);
  transform: skew(-5deg);
  transform: scale(1.5);
  transform: translate(20px, 100px);
}
```

---

# Moving things

You can even move things in 3D and when combined with perspective you can create some really awesome effects.

[https://24ways.org/2010/intro-to-css-3d-transforms/](https://24ways.org/2010/intro-to-css-3d-transforms/)

---

# Effects

A lot of visual styling used to have to be done with images. But now, we can do loads of cool stuff in CSS. This makes making things faster and more flexible, and we can even animate these effects too!

---

# Effects

Some commonly used effects include:

- `box-shadow`
- `text-shadow`
- `gradient`s
- `filter`s

---

# Box shadow

Add a shadow underneath the boundry box of an element

```css
.box {
  /*x-offset y-offset blur colour */
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

---

# Text shadow

Add a shadow underneath each letter in a text element

```css
.title {
  /* x-offset y-offset blur colour */
  text-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

---

# Gradients

Create a gradient which blends from one colour to another

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

# Filters

We can filter images (like an image editing package) with the `filter` property

```css
.filter {
  filter: blur(20px);
}
```

---

# Filters

There are lots of available `filter`s

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
  /*Apply multiple filters */
  filter: contrast(175%) brightness(3%);
}
```

---

# Transitions

We can style different states using pseudo classes such as

- `:hover`
- `:focus`
- `:active`

---

# Transitions

Instead of a jarring on/off of these different states, we can transition between the changing values to provide a smoother effect.

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

# Transitions

Transitions have a starting state and an ending state.

When a trigger (eg. `:hover`) occurs, any properties that are different between the two states are transitioned.

---

# Transitions

Transitions are made up of 3 things:

1. The properties to transition (all by default)
2. The duration of the transition
3. The acceleration curve of the transition

---

# CSS Animations

For a long time, all animation had to be done in Javascript

Now most types of animation can be done in CSS.

This is good because:

- Hardware accelerated - better for performance
- Keeps presentation stuff with other presentation stuff
- No need to learn Javascript

---

# Animation screencast

Will be available here:
[https://www.sitepoint.com/tag/atoz-css/](https://www.sitepoint.com/tag/atoz-css/)

---

# CSS animation syntax

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

# CSS animation syntax

There is also a keyword syntax for keyframes

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

# CSS animation properties

- `animation-duration`
- `animation-delay`
- `animation-direction`
- `animation-iteration-count`
- `animation-name`
- `animation-timing-function`
- `animation-play-state`
- `animation-fill-mode`

---

---

# Lab

[CodePen](https://codepen.io/pataruco/pen/wYEMmb)

---

# Bonus

[CodePen](https://codepen.io/pataruco/pen/eYOeGrj)

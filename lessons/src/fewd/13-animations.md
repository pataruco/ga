class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>13 CSS animations</h1>
</div>
---

# Agenda

- Moving things
- Effects
- Transitions
- Animation
- States

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

## `linear-gradient`

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

# Gradients

## `radial-gradient`

```css
.gradient {
  background: radial-gradient(#e66465, #9198e5);
}

.gradient {
  /* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
  background: radial-gradient(circle at center, red 0, blue, green 100%);
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

# Transitions, Animations and States

## What Can We Animate?

You can animate many properties and create all sorts of interesting effects using transition and animation. Here's some common things you might want to do

- make something appear / disappear
- fade something in / out
- make something appear from the top / right / bottom / left
- move something up / down / left / right
- make something grow bigger / smaller
- rotate something

---

# Transitions, Animations and States

## Animatable Properties

.row[
.column[

#### There are many CSS properties that can be animated:

- `opacity`
- `transform`
- `color`
- `background-color`
- any length value `font-size`, `width`, `height`, `border`
  ]
  .column[

#### And some which can't.

- `display`
- `text-align`
- `text-transform`
- `z-index`
  ]  
  ]

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

---

# Transitions, Animations and States

## Hiding Content

Keep your HTML block turned off with CSS. There are three methods with which to hide elements in CSS, each with slightly different results.

| Property              | Takes Up Space | Can Be Clicked |
| --------------------- | -------------- | -------------- |
| `display: none;`      | No             | No             |
| `visibility: hidden;` | Yes            | No             |
| `opacity: 0;`         | Yes            | Yes            |

[Reference in CodePen](https://codepen.io/pataruco/pen/WNreWBa)

---

# Transitions

## A -> B

We can style different states using pseudo classes such as

- `:hover`
- `:focus`
- `:active`

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

[`transition` example in CodePen](https://codepen.io/pataruco/pen/MWKgREz)

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

## A -> B -> C -> .... -> Z

For a long time, all animation had to be done in Javascript

Now most types of animation can be done in CSS.

This is good because:

- Hardware accelerated - better for performance
- Keeps presentation stuff with other presentation stuff
- No need to learn Javascript

---

# CSS animation syntax

Complex animations require multiple steps. For these, you'll need to use CSS animation and @keyframes together. This will allow components to move in more interesting ways than simply appearing and disappearing!

Here's what it takes:

.row[
.column[

- Outline animation steps and timing.
- Set each movement instruction of a `@keyframes` step (usually a transform).
- Use CSS animation properties and apply everything to the component's initial state.
  ]
  .column[

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

]
]

---

# CSS animation syntax

## `@keyframes`

`@keyframes` work like media queries — conditional-based instructions that happen at particular times. Notice that we're giving this a custom name, mover.

```css
@keyframes mover {
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  38% {
  }
  42% {
  }
  50% {
    opacity: 1;
    transform: translate(300px, 0);
  }
  100% {
    transform: translate(300px, 300px);
  }
}
```

---

# CSS animation properties

The property contains a bunch of settings, similar to how background works.

```css
.box {
  animation-name: mover;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}
```

Or

```css
.box {
  animation: mover 10s ease alternate 10;
}
```

[Reference in CodePen](https://codepen.io/pataruco/pen/LYGPoYx)

---

# Stateful Apps

Interactive components subtly introduce a huge idea: state. State can include anything the user might toggle or adjust in your site, such as:

- Showing or hiding menus, forms, or modal windows.
- Filtering, adding, or removing the data displayed on a page.
- Filling out form inputs.

Building actual components means taking everything you know and putting it together. It may seem like a lot at first, but start slow and you’ll get there. Here’s how the steps break down:

1. Sketch out the two states of your component.
2. Build the “on” state first without turning it “off.” It will likely sit on top of your other work for now, but that’s OK!
3. Finally, add in the special CSS/JS you need to make the magic happen. Do this LAST!

---

# Lab &#x1F9EA;

## Hamburguer menu

[Starter code](https://github.com/pataruco/fewd/raw/master/labs/hamburguer-menu/hamburguer-menu-starter-code.zip)

???

Solution code https://github.com/pataruco/fewd/raw/master/labs/hamburguer-menu/hamburguer-menu-solution-code.zip

---

# Lab &#x1F9EA;

## Bouncing ball

[Starter Code](https://codepen.io/pataruco/pen/xxgxNyV)

???

Solution CodePen https://codepen.io/pataruco/pen/wYEMmb

---

# Bonus &#x1F9EA;

## Racing track

[CodePen](https://codepen.io/pataruco/pen/eYOeGrj)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

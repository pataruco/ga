class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Boostrap</h1>
</div>

---

## Agenda

- Use the Bootstrap CSS library to leverage pre-styled components.
- Adapt Bootstrap components for specific use cases.
- Evaluate UI frameworks against self-written CSS.

---

## UI frameworks

Frameworks are sets of pre-made HTML/CSS/JS components packaged together.

Think of a framework as a bunch of plugins made by the same team that so they work nicely together out of the box.

### Should I Use a CSS Framework Like Bootstrap?

| Benefits 👍                        | Drawbacks 👎                                         |
| ---------------------------------- | ---------------------------------------------------- |
| Gives you lots of code.            | Gives you lots of code.                              |
| Grid-based design out of the box.  | Bloats your site with features you likely won’t use. |
| Easy integration of JS components. |                                                      |
| Familiar, standard design feel.    | Design monotony.                                     |

---

## UI frameworks

> ⚠️ Framework != Instant Boost ⚠️

Frameworks will **slow you down** until you learn how to use them.

When you choose to use a framework, you’re embracing patterns created by other developers. It takes time to learn these patterns.

### Common UI frameworks

- Bootstrap: http://getbootstrap.com/
- Foundation: http://foundation.zurb.com/
- Material Design Lite: https://getmdl.io/

---

## Bootstrap

- Popular framework.
- Standard-feeling style
- Responsive grid system.
- Navbars, modals, carousels...

---

## Bootstrap

### Grid

.row[
.column[Bootstrap sets up a series of 12 columns that automatically respond to screen size.]
.column[
![Bootstrap grid based system](https://pataruco.s3.amazonaws.com/ga/fewd/grid-bootstrap-optimsed.svg)
]
]

---

## Bootstrap

### Grid

.row[
.column[You can create boxes that clip into the grid and take up 1–12 columns.]
.column[
![Bootstrap grid based system](https://pataruco.s3.amazonaws.com/ga/fewd/grid-bootstrap-columns-optimised.svg)
]
]

---

## Bootstrap

### Grid

All content should be placed within grid columns. Build column classes using the following formula:

```html
<div class="col-{screen-size}-{width} "></div>
```

Examples of Bootstrap column classes:

| Class                    | Explanation                                              |
| ------------------------ | -------------------------------------------------------- |
| `<div class="col-md-6">` | A `div` for medium-sized screens that is 6 columns wide. |
| `<div class="col-xs-2">` | A `div` for extra-small screens that is 2 columns wide.  |

---

## Bootstrap

### Grid

- Columns must be placed into an element with the row class to create horizontal groups.
- The total column widths in a row must add up to 12.
- If you don’t define specific numbers, Bootstrap will divide the columns equally.
- **row** must be placed within a parent with the class of:
  - `.container` (fixed-width), or;
  - `.container-fluid` (full-width) for proper alignment.

The grid structure is very similar to what we've done:

| Class                     | Explanation                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| `<div class="container">` | Top-level element; holds all other code.                                                 |
| `<div class="row">`       | Horizontal row used to hold **col** elements. <br/>Must be the child of a **container**. |
| `<div class="col">`       | Used to hold content (text/images/etc.). <br/>Must be the immediate child of a **row**.  |

---

## Bootstrap

### Grid

.row[
.column[

```html
<div class="container">
  <div class="row">
    <div class="col">Your content here.</div>
    <div class="col">Your content here.</div>
  </div>
</div>
```

]
.column[
![](https://pataruco.s3.amazonaws.com/ga/fewd/grid-bootstrap-columns-selected-optimised.svg)
]
]

---

## Bootstrap

### Grid

Check out the CodePen below to see grid breakpoints in action!

> [CodePen](https://codepen.io/pataruco/pen/MWbKqpB)

---

## Bootstrap

### Grid Lab 🧪

Recreate the grid layouts displayed in this [document](https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-bootstrap/layouts.pdf)

---

## Bootstrap

### Components

Bootstrap has a solid set of standard components that can easily be dropped into your site:

- Navigation bars
- Modals
- Image carousels
- Dropdown menus
- And so much more...

> [CodePen](https://codepen.io/pataruco/pen/mdOVGMr)

---

## Bootstrap

### Styles

#### Responsive Images

Creating responsive images is as easy as adding this class to your image:`.img-responsive`

This class gives us the following code:

```css
.img-responsive {
  max-width: 100%;
  height: auto;
}
```

---

## Bootstrap

### Styles

#### Stylized Images

```html
<img src="puppy.jpg" class="img-rounded" alt="Rounded Puppy" />
<img src="puppy.jpg" class="img-circle" alt="Circle Puppy" />
<img src="puppy.jpg" class="img-thumbnail" alt="Puppy Thumbnail" />
```

- `img-rounded` creates rounded rectangles.
- `img-circle` turns images into circles.
- `img-thumbnail` puts a nice border around images.

---

## Bootstrap

### Styles

#### Buttons

We can change button color and size very easily. Follow that link to see how.

> [Bootstrap button doc](http://getbootstrap.com/css/#buttons)

```html
<!-- Standard button -->
<button type="button" class="btn btn-default">Default</button>
```

---

## Group Lab &#x1F9EA;

Identify a site using Bootstrap and attempt to recreate it. There are many resources that list sites that use Bootstrap, or you can check your favorite sites for Bootstrap-style layouts and components.

https://expo.getbootstrap.com/

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Boostrap</h1>
</div>

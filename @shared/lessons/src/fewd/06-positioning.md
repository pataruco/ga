class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>06 Positioning</h1>
</div>

---

## Agenda

- Recap
- Resets and Boilerplates
- The `float` Strike Back and The Return of The Clearfix (pun intended) 🥁
- Building grids
- CSS Positioning
- CSS Units
- Lab

---

## CSS Reset

There are a lot of annoying default styles that are inconsistent across browsers.
Sometimes we might want to remove them all so we have a blank canvas.

---

## CSS Reset

### Simple reset

```css
* {
  margin: 0;
  padding: 0;
}
```

---

## CSS Reset

### Eric Meyer's reset

One approach:
[https://meyerweb.com/eric/tools/css/reset/reset.css](https://meyerweb.com/eric/tools/css/reset/reset.css)

---

## CSS Reset

### Normalize

My preference: [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/)

---

## CSS Float: Part II

`float`s are weird!

[Codepen](https://codepen.io/pataruco/pen/rZOEbr)

---

## Clearfix

When floating elements, the parent container will collapse in height if it only contains floating elements.

This is because the floating elements have floated out of the container and the container doesn't know how to correctly calculate the height.

---

## Clearfix

To work around this, we use the "clearfix" technique which is like putting a wedge in the top of the container and a wedge in the bottom of the container and forcing it open so it can correctly calculate the height.

Add this snippet to your CSS so you can **clearfix** collapsing containers

```css
.clearfix:before,
.clearfix:after {
  content: ' ';
  display: table;
}

.clearfix:after {
  clear: both;
}
```

To prevent a container from collapsing we add the clearfix class to the container in the HTML

```html
<div class="main-content clearfix">...</div>
```

---

## Grids

Imagine we have lots of pages that all use a combination of 1, 2, 3 and 4 columns for the layout

Could we use someting in CSS to standardise this?

---

## Grids

Yes. `class` selectors are perfect for building grids as they can be repeated on many different elements.
We write a very small amount of CSS which is then reused many times throughout a page and throughout a project.

---

## Grids

`floats`

[CodePen](https://codepen.io/pataruco/pen/GXqOqB/)

---

## Grids

`flex`

[CodePen](https://codepen.io/pataruco/pen/EeyoVE)

---

## Can we build stuff like this?

- [Flying Pig](https://codepen.io/zastrow/full/kLeDa)
- [Francine](http://diana-adrianne.com/purecss-francine/)
- [Gaze](https://diana-adrianne.com/purecss-gaze/)
- [Laze](https://diana-adrianne.com/purecss-lace/)

---

## CSS Positioning

- Precise placement of elements
- Tweak position of elements
- Not for layout
- Mostly for tackling complex design

---

## CSS position property

CSS `position` can take 1 of 4 values.

`static` is the default and does not have to be set.

- `static`
- `relative`
- `absolute`
- `fixed`

- [Codepen Sandbox](https://codepen.io/pataruco/pen/BaoVOoO)

---

## `position: relative`

- Move elements `relative` to themselves
- Create a parent container
- Position elements absolutely inside

---

## `position: absolute`

- Set the absolute co-ordinates of an element to be positioned
- `top`, `right`, `bottom`, `left`
- Use `px`, `%`, `em` and any other CSS unit

---

## `position: fixed`

- Fix an element in place, regardless of scroll
- Set co-ordinates of where to fix an element
- Position is set relative to the body

---

## `z-index`

- `z-index` controls the stacking order.
- The `z-axis` comes out of the screen towards you
- It’s a bit like Photoshop layers
- `z-index` only works for position other than static

---

## Units

### Relative

Relative lengths represent a measurement in terms of some other distance. Depending on the unit, this can be the size of a specific character, the line height, or the size of the viewport.

It can be divided in:

- Font-relative lengths
- Viewport-percentage lengths

---

## Font-relative lengths

Font-relative lengths define the **length** value in terms of the size of a particular character or font attribute in the font currently in effect in an element or its parent.

> Note: These units, especially `em` and `rem`, are often used to create scalable layouts, which maintain the vertical rhythm of the page even when the user changes the font size.

---

## Font-relative lengths

- `em`: represents the calculated `font-size` of the element. If used on the font-size property itself, it represents the inherited font-size of the element.
- `rem`: Represents the font-size of the root element (typically `<html>`). When used within the root element font-size, it represents its initial value (a common browser default is 16px, but user-defined preferences may modify this).

---

## Viewport-percentage lengths

Viewport-percentage lengths define the **length** value relative to the size of the viewport, i.e., the visible portion of the document.

> Note: If the `<html>` and `<body>` elements are set as `overflow:auto`, space taken by scrollbars is not subtracted from the viewport, whereas it will be subtracted if set as `overflow:scroll`.\*\*

---

## Viewport-percentage lengths

- `vh`: equal to 1% of the height of the viewport's initial containing block.
- `vw` equal to 1% of the width of the viewport's initial containing block.

---

## Lab &#x1F9EA;

[Pig Exercise](https://codepen.io/pataruco/pen/rZLvPZ)

---

## Homework

### Description

Relaxr was really impressed by your work last week and wants you to continue development on their landing page.

Download the [starter code](https://github.com/pataruco/fewd/raw/master/homeworks/relaxr-2/relaxr-2-starter-code.zip)

[Final version](https://raw.githubusercontent.com/pataruco/fewd/master/homeworks/relaxr-2/starter-code/images/relaxr-blog.jpg)

---

## Homework

### Technical Requirements

- Use flexbox in your CSS to achieve a two-column layout
- Use the correct `Open Sans` Google Font typeface to style the text denoted in the [design file](https://github.com/pataruco/fewd/blob/master/homeworks/relaxr-2/starter-code/instructions.md) and according to the JPEG provided
- Use proper filename conventions (lowercase, .html)
- Use a single external CSS stylesheet to style all pages
- Use a background image for the headers
- Add a hover effect to all the links using pseudo-classes
- Integrate drop caps using pseudo-classes

---

## Homework

### Bonus

- Link the "Blog" link in the header to the page you've built for this assignment
- Link the "About" link in the header to the you built last week

---

## Homework

### Resources

- [Documentation on integrating Drop Caps](https://css-tricks.com/snippets/css/drop-caps/)
- [Documentation on CSS Pseudo-classes](http://www.w3schools.com/CSS/CSS_pseudo_classes.asp)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

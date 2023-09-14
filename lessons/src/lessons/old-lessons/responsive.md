class: center, middle

# .center[Responsive]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

# Agenda

- Types of layouts
- Relative units
- Media Queries
- Flexible Images
- Responsive Images

---

# Responsive design overview

- Fluid containers
- Media queries
- Flexible images

---

# Fixed vs responsive

Checkout these **fixed** sites

- [Google](https://www.google.com)
- [Ling's Cars](https://www.lingscars.com/)

---

# Fixed vs responsive

Checkout these **responsive** sites:

- [General Assembly](https://generalassembly.com)
- [Wikipedia](https://en.wikipedia.org/wiki/Star_Wars)
- [Red Badger](https://www.red-badger.com)

---

# Fixed vs responsive

The important takeaway is that a responsive site uses the same codebase to achieve optimised layout across multiple screens.

---

# Fixed layout

- Simple and a good starting point
- Gives more control
- Easier to build
- Still works on mobile - pinch & zoom Relies on a container of fixed width

---

# Fluid layout

- Sized in percentages (or relative units)
- Everything is relative
- It's all about proportions

---

# Relative units

Further to sizing our containers in percentages, we can size other UI components (`font-size`, `margin`, `padding`, etc.) in relative units which cascade and build a system of proportions.

---

# Relative units

Common units of measurement for these components are:

- `em`
- `rem`
- `vw` and `vh`

---

# `em` vs `rem`

## `em`

- Sized based on the width of the letter "M"
- Size is relative to the parent

```css
body {
  font-size: 16px;
}
h1 {
  font-size: 2em; /*font size is 32px */
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="em vs rem" src="//codepen.io/pataruco/embed/dxGRjM/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/pataruco/pen/dxGRjM/'>em vs rem</a> by Pedro Martin
  (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/dxGRjM)

---

# `em` vs `rem`

# `rem`

- Stands for **root** `em`.
- Based on the font-size of html (root) element
- Browser support (IE9+) is not as good as `em` so a `px` fallback is needed.

---

# Media queries

## Media Types

The two main media types are `print` and `screen`
This means we can write CSS for screen devices (laptops, tablets, mobiles) and different CSS for printing a web page out.

---

# Media queries

```css
@media only screen and (max-width: 800px) {
  /*styles only apply when viewport is up to 800px */
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="Media queries" src="//codepen.io/pataruco/embed/bXErem/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/pataruco/pen/bXErem/'>Media queries</a> by Pedro Martin
  (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[Codepen](https://codepen.io/pataruco/pen/bXErem)

---

# Media queries

There are lots of things we can query about the media, these are the most common.

```css
width | min-width | max-width
height | min-height | max-height
orientation
aspect-ratio | min-aspect-ratio | max-aspect-ratio resolution | min-resolution | max-resolution
```

Separate multiple clauses with `and` and negate with `not`

---

# Mobile display

To make our Media queries work we need to add this special metatag to the headin our HTML.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

---

# Using media queries

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

# Media queries

## Mobile first

- Start with a single column
- Add Media queries using `min-width`
- Performance benefits
- Slightly less code

---

# Media queries

## Desktop first

- Start with the full-width version
- Add media queries using `max-width`
- Can be more intuitive
- Can cause trouble scaling complex layout to narrow screen

---

# Media queries

## Breakpoints

When building a responsive site we often have some common breakpoints where we want major changes to occur. These are normally described as "mobile styles", "tablet styles" or "desktop styles".
Or small, medium or large screens.

---

# Media queries

## Breakpoints

We want to use generic breakpoints that approximate most devices at these screen sizes so we don't design layouts for specific devices.
I tend to use `500px` to approximate mobile and `800px` to approximate tablets and `1200px` to approximate desktops

---

# Media queries

## Tweakpoints

Having generic breakpoints is good but you will often need to tweak different styles to make the content or your layout look it's best.
We call these tweak points and they can take any pixel value to wrangle your layout into its best shape.

---

# Media queries

You can either put all of your media queries in one place in your stylesheet (at the bottom to ensure no specificity issues).
Or you can have multiple `@media` declarations throughout your stylesheet, setting up responsive styles directly beneath your initial CSS.

---

# Flexible images

Images have fixed dimensions that can break our fluid layouts.

We can make them flexible by setting `max-width`

```css
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```

---

# Responsive images

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

# Responsive images

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy"
/>
```

---

# Responsive images

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

---

# Tools

Responsive Design testing can be tricky.
Here are some tools to help:

- Chrome Dev Tools
- [BrowserStack](https://www.browserstack.com/)

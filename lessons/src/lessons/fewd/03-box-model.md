class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>03 Box model</h1>
</div>

---

## Agenda

- Recap
- Building blocks of layout
- Nested Selectors
- Google Fonts

---

## Box model

- Every element in web design is a box.
- Broadly speaking, elements are either `inline` or `block`

### `inline`

Inline elements display next to each other, in a line and are as wide and tall as the content inside of them.
Examples are elements like `<a>` tags or `<span>` tags.

### `block`

Block elements start on a new line, fill the width of their parent element and stack on top of each other.
Examples are elements like `<div>` or `<ul>` or `<p>`.

---

## Box model

We can change the type of element by changing the CSS `display` property.

```css
div {
  display: inline;
}

img {
  display: block;
}
```

---

## Box model

Boxes have a number of properties that we use to describe them and how they lay out on the page:

- `width`
- `height`
- `padding`
- `border`
- `margin`

### Content box computed size

- **width**: `width` + `padding-left` + `padding-right` + `border-left` + `border-right`
- **height** `height` + `padding-top` + `padding-bottom` + `border-top` + `border-bottom`

Wouldn't it be nice if we could simplify things?

---

## Box sizing

I add this snippet on every site at the top of the CSS file

```css
* {
  box-sizing: border-box;
}
```

---

## Shorthand

`margin` and `padding` can be set on 1 or more sides with a single line of code

```css
div {
  margin: 20px; /* all four sides */
  margin: 20px 40px; /* top/bottom and left/right */
  margin: 20px 40px 10px; /* top left/right and bottom */
  margin: 10px 20px 30px 40px; /* top right bottom left */
}
```

### Do you see a pattern here?

Border is made up of 3 properties which can combine to apply the same border on all four sides

```css
div {
  border-width: 1px;
  border-style: solid;
  border-color: red;
  border: 1px solid red;
}
```

---

## Lab &#x1F9EA;

### Tag boxes

Please download the [starter code](https://github.com/pataruco/fewd/raw/master/labs/tag-boxes/tag-boxes-starter-code.zip)

---

## Nested selectors

We have seen how to select elements on the page with CSS

```css
h1 {
  color: red;
}
```

Will select all `<h1>`and make them red.

---

## Nested selectors

But what if don't want all `<h1>` to be red. What if we just want the main heading in an article to be red?

We can use the tree-like structure of HTML (where we have parent, child and sibling elements) to select elements based on their parent element.

```css
article h1 {
  color: red;
}
```

Will select any `<h1>` that are children of `<article>` tags.

We call these descendent selectors and they can contain as many elements as necessary to target elements specifically.

```css
header nav a {
  text-decoration: none;
}
```

Next time we'll learn more specific types of selectors.

---

## Lab &#x1F9EA;

[Nested selectors](https://github.com/pataruco/fewd/raw/master/labs/nested-selectors/nested-selectors-starter-code.zip)

---

## Google Fonts

Google fonts is a free service that provides access to a whole range of different font families.

1. Head to http://www.google.com/fonts
2. Search for a font
3. Click the "quick use" icon (middle icon on right hand
   side)
4. Choose the font styles you need
5. Leave the character set as Latin
6. Copy and paste the `<link>` stylesheet code snippet
7. Copy and paste the font-family into your CSS eg.

```css
body {
  font-family: 'Lato', sans-serif;
}
```

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

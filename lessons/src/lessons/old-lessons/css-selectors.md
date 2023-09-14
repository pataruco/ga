class: center, middle

# .center[CSS Selectors, Specificity & Float layout]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

# Agenda

- Review
- New CSS selectors
- Floats
- Lab

---

# Selectors

So far we've seen the following type of CSS selectors. They match the HTML elements in your document but are quite limiting when dealing with complex projects.

```css
p {
} /*_* element selector *_*/
h1,
h2,
h3 {
} /*_*multipleelements*_*/
header a {
} /*_* descendent element selector *_*/
```

---

# Selectors

To have more control over the sections of the page to be styled, there are a whole load of other selectors available.

---

# Simple selectors

- Type: Selects all elements that match the given node name.

  ```css
  header {
    background-color: pink;
  }
  ```

- Class: Selects all elements that have the given class attribute.

  ```css
  .column {
    display: flex;
  }
  ```

---

# Simple selectors

- ID: Selects an element based on the value of its id attribute. _There should be only one element with a given ID in a document_

  ```css
  #hamburguer {
    position: absolute;
  }
  ```

- Universal: Selects all elements

  ```css
  * {
    box-sizing: border-box;
  }
  ```

---

# Simple selectors

- Attribute: Selects elements based on the value of the given attribute.

  ```css
  input[type='email'] {
    border: none;
  }
  ```

---

# Combinators

- `+` selects adjacent siblings

  ```css
  h2 + p {
    font-family: monospace;
  }
  ```

- `~` selects siblings

  ```css
  section ~ article {
    font-family: max-width: 1280px;
  }
  ```

---

# Combinators

- `>` selects nodes that are direct children of the first element

  ```css
  ul > li {
    border-bottom: none;
  }
  ```

- (space) combinator selects nodes that are descendants of the first element.

  ```css
  .menu-open nav {
    display: nonel;
  }
  ```

---

# Pseudo classes

Other selectors include pseudo selectors for styling state. A classic example is the `:hover` state when mousing over links or the `:focus` state when filling in a form.

```css
a {
  color: red;
}
a:hover {
  color: blue;
}
input {
  background: #fff;
}
input:focus {
  background: #eee;
}
```

[MDN Index of pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes)

---

# Pseudo elements

Is keyword added to a selector that lets you style a specific part of the selected element(s)

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

[MDN Index of pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#Index_of_standard_pseudo-elements)

---

# Class vs Id

<iframe height='265' scrolling='no' title='Classes and Id's' src='//codepen.io/pataruco/embed/Pdqrqw/?height=265&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pataruco/pen/Pdqrqw/'>Classes and Id's</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/Pdqrqw)

---

# When to use `class` and `id`

- Add `class` attributes to the HTML for targeting with CSS.
- Add `id` attributes to the HTML for targeting with JS.
- **Don't use** ~~`id`~~ for adding styling to elements.

---

# Specificity

When writing CSS it's common for there to be conflicting properties applied to the same element.

The styles that "win" and will be rendered in the browser are determined by 3 major criteria in this order:

1. Importance
2. Specificity
3. Source Order

---

# Specificity

Take the following example HTML:

```html
<h1 id="main-title" class="title">
  some title
</h1>
```

---

# Specificity

## Importance

CSS declarations with `!important` beat everything.
Avoid using this because it's a very heavy-handed.

```css
h1 {
  color: white !important; /*wins*/
}

#main-title {
  color: red;
}
```

---

#Specificity

We calculate a selectors specificity by counting the number of inline styles, ids, classes and element selectors.

- `style` is more powerful than
- `id` which is more powerful than
- `class` which is more powerful than
- `element` selectors

This produces a 4 digit number called the **specifcity value**.

---

# Specificity

1 `element` and 1 `id` beats 3 `elements`

```css
header #main-title {
  color: red; /* 0101 wins */
}
header div h1 {
  color: white; /* 0003 */
}
```

---

# Specificity

.table[

| Selector                                                       | style | Id  | Classes & attributes | Elements | Total specificity |
| -------------------------------------------------------------- | ----- | --- | -------------------- | -------- | ----------------- |
| `h1`                                                           | 0     | 0   | 0                    | 1        | **0001**          |
| `h1 + p::first-letter`                                         | 0     | 0   | 0                    | 3        | **0003**          |
| `li > a[href*="en-US"] > .inline-warning`                      | 0     | 0   | 2                    | 2        | **0022**          |
| `#identifier`                                                  | 0     | 1   | 0                    | 0        | **0100**          |
| No selector, with a rule inside an element's `style` attribute | 1     | 0   | 0                    | 0        | **1000**          |

]

---

# Source order

If two selectors have the same level of importance and specificity, the one that comes later will win.

```css
header .title { color: black; }
header .title { color: red; } `/* Wins !!*/`
```

---

# Floats

`float` is a property that can be used to have block elements _"float"_ next to each other.

The `float` property was never really designed for layout but rather to allow text to wrap around an image.

This was a popular design style back in the day of print and web designers wanted to mimick the effect.

---

# Floats

There are now a number of layout options available in CSS but (unfortunatly) float still remains a popular solution even though there are some weird side effects.

To enable two `block` elements to site next to each other, to create multi-column layouts, we need to `float` them.

This is because `block` elements normally stack vertically and `inline` elements don't respond to layout properties like `width` and `height`.

---

# Floats

An element can be floated to the `left` or the `right` side of its container.

```css
.main-content {
  width: 500px;
  float: left;
}
.sidebar {
  width: 300px;
  float: right;
}
```

---

# Floats

When elements float, surrounding elements try to flow around them which can cause some weird knock-on effects.

To get the layout back on track, we can `clear` the floats and bring everything back to normal.

```css
.footer {
  clear: both;
}
```

---

# Floats

We can clear to the `left`, `right`, or `both` sides. Which will clear the affect of elements floating to the left, right or both left and right.

---

# Floats layout

Back in the day `floats` were the only way to introduce columns, but because a container with floats elements loose their height we need to clear that effect inmmediatly

## [Cleafix hack](http://nicolasgallagher.com/micro-clearfix-hack/)

```css
.cf:before,
.cf:after {
  content: ' '; /* 1 */
  display: table; /* 2 */
}

.cf:after {
  clear: both;
}
```

---

# Floating sections

<iframe height='265' scrolling='no' title='Floating sections' src='https://codepen.io/pataruco/embed/NLGKrV/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pataruco/pen/NLGKrV/'>Floating sections</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/NLGKrV?editors=1100)

---

# Lab

[CSS Diner](https://flukeout.github.io/)

---

# Homework

[Relaxr](https://github.com/pataruco/ga-fewd-assets/raw/master/relaxr-1/starter_code.zip)

[Final version](https://raw.githubusercontent.com/pataruco/ga-fewd-assets/master/relaxr-1/starter_code/images/relaxr_landing.jpg)

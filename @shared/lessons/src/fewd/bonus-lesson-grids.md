class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>CSS Grids</h1>
</div>

---

## Grids

Agenda:

- Create layouts using CSS Grid properties.
- Compare and contrast flexbox and Grid properties.
- Define fractional and percentage-based widths for layout elements.

---

## Flexbox review

### Think about it 💡?

- In which direction does a flexbox natively go: horizontal or vertical?
  - > What CSS property adjusts that?
- How do you reorder flexbox children?
  - > What CSS property adjusts that?
- Can you nest a flexbox inside of a flexbox?
- Why would we want to do that?

---

## Flexbox review

We have four sections aligned within a flex container, with each individual section also being a flex container.

Flex properties only affect direct children, often requiring flex children to be flex parents, as well!

> [CodePen](https://codepen.io/GAmarketing/pen/YzzJRRM)

---

## Grids

### What Is a Grid?

Picture spreadsheets: Columns and rows into which you can lay content.

Grids ensure that elements will line up smoothly across the page.

---

## Grids

Comparing Three Tools for Layouts

| Floats                                                                | Flexbox                                                                               | Grids                                                                        |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Floats help flow text around an image; they aren’t great for layouts. | Flexbox only works in **one** dimension at a time, with a main axis and a cross axis. | Grid works in **two** dimensions all of the time, defining rows and columns. |
| Interrupt regular document flow.                                      | However, you can nest flex containers.                                                | A clearer declaration of complicated patterns.                               |

---

## Grids

Flex container can be a row (`flex-direction: row;`) or a column (`flex-direction: column;`)

**But flexbox can't be both!**

---

## Grids

### Grid Tracks

That’s what the rows and columns are called.

```css
.container {
  display: grid;
}
```

Unlike `display:flex`, Grid doesn't give us much by default.

We'll have to define the template for our grid according to the rows and columns we want.

---

## Grids

.row[
.column[

### Rows

Use the CSS property `grid-template-rows`
]
.column[

### Columns

Use the CSS property `grid-template-columns`
]
]

---

## Grids

.row[
.column[

### Basics in HTML

Let’s create a set of `<div>`s inside of `<section>` tags.

```html
<section class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</section>
```

]
.column[

### Basics in CSS

You’ll need to use `grid-template-columns` and `grid-template-rows` on the parent to create a simple grid.

```css
/* 2 column, 1 row grid */
.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 100px;
}

.item {
  background-color: orange;
}
```

]
]

---

## Grids

### Implicit Tracks

You can leave off `grid-template-rows` and CSS Grid will automatically make the rows (conceptually, this is called the "implicit grid").

If we don’t know how many rows our content will take, can we still define their height?

Turns out there’s a property called **`grid-auto-rows`** for just that purpose!

### So this also works!

```css
/* 2 column, ?? row grid */
.container {
  display: grid;
  grid-template-columns: 100px 100px;
}

.item {
  background-color: orange;
}
```

---

## Grids

### `grid-gap`

Is the margin/padding of CSS Grid. If you want space between your grid items, you apply `grid-gap` to the container.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px;
}

.item {
  background-color: orange;
}
```

When `grid-gap` is given one value, it applies an equal amount of space between rows and columns.

---

## Grids

### `grid-gap`

Keep in mind: `grid-gap` can take **two** values, which set column and row padding (respectively).

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px 80px;
}

.item {
  background-color: orange;
}
```

> Note the difference when grid-gap is given two values: Different amounts of space between rows and between columns.

---

## Grids

### Fractional Units

The fractional unit (**`fr`**) is a newer unit to be used with CSS Grid (similar to percentages). It stands for fractions of a grid container, and it intelligently takes `grid-gap` into account.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
```

---

## Grids

### Can I Use Different Measurement Values Together?

We can feel free to mix fixed-width and variable-width units such as pixels, fr, and percentages.

They can be used together. When used together with fixed-width units, **`fr`** is saying:

_"Use the remainder of the space left over after the fixed-width units."_

---

## Grids

### Lab &#x1F9EA;

- [Starter code](https://github.com/pataruco/fewd/raw/master/labs/grid/grid-starter-code.zip)

???

- Solution code https://github.com/pataruco/fewd/raw/master/labs/grid/grid-solution-code.zip

---

## Grids

### Line-based placement

We now move on from creating a grid, to placing things on the grid. Our grid always has lines, which lines start at 1 and relate to the Writing Mode of the document. Therefore in English, column line 1 is on the left hand side of the grid and row line 1 at the top. In Arabic column line 1 would be on the right hand side, as Arabic is written right to left.

We can place things according to these lines by specifying the start and end line. We do this using the following properties:

- `grid-column-start`
- `grid-column-end`
- `grid-row-start`
- `grid-row-end`

These properties can all have a line number as the value. You can also use the shorthand properties:

- `grid-column`
- `grid-row`

---

## Grids

### Line-based placement

```css
header {
  grid-column: 1 / 3;
  grid-row: 1;
}

article {
  grid-column: 2;
  grid-row: 2;
}

aside {
  grid-column: 1;
  grid-row: 2;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;
}
```

---

## Grids

### Key Takeaways

- Grids Use Two Dimensions
- Define rows and columns in either pixels or responsive units.
- Implicit tracks can be used to expand patterns indefinitely.

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>CSS Grids</h1>
</div>

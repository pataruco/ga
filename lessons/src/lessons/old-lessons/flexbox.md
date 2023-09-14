class: center, middle

# .center[Layouts with Flexbox]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

# Agenda

- **Introduction**
  - What is not
  - What is it?
  - Why we should use it?
- **Explanation**
  - Core concepts
  - How it works
    - Main & cross axes
    - Flex container and flex items
  - Flex container
  - Flex items
- **Next steps**

---

# What is not?

- CSS property
- Box sizing
- Another kind of grid

---

# What it is ?

Officialy it's name is

### [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/)

_"...In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex” their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent."_

From W3C Candidate Recommendation, 19 October 2017

---

# What it is ?

Is as a **one-dimensional layout model**, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities.

When we describe flexbox as being one dimensional we are describing the fact that flexbox deals with layout in one dimension at a time (row or column). This can be contrasted with the **two-dimensional model** of _CSS Grid Layout_, which controls columns and rows together.

---

# Why we should use it?

## [Can I use Flexbox?](https://caniuse.com/#feat=flexbox)

---

# Why we should use it?

**inline-block**

<iframe scrolling='no' title='Layout inline-block' src='//codepen.io/pataruco/embed/preview/WKyjja/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 30vh;'>See the Pen <a href='https://codepen.io/pataruco/pen/WKyjja/'>Layout inline-block</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/WKyjja/)

---

# Why we should use it?

**float**

<iframe scrolling='no' title='Layout float' src='//codepen.io/pataruco/embed/preview/ZjRyWO/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 30vh;'>See the Pen <a href='https://codepen.io/pataruco/pen/ZjRyWO/'>Layout float</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/ZjRyWO/)

---

# Why we should use it?

**Flexbox**

<iframe scrolling='no' title='Layout flexbox' src='//codepen.io/pataruco/embed/preview/yqEXVe/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 30vh;'>See the Pen <a href='https://codepen.io/pataruco/pen/yqEXVe/'>Layout flexbox</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/yqEXVe/)

---

# Why we should use it?

- No coming changes on the distant [future](https://www.w3.org/TR/?title=flex)
- Is the default layout on native

---

# Before we start...

Let's talk about `direction` & `align`

<iframe scrolling='no' title='Flexbox core concept' src='//codepen.io/pataruco/embed/preview/pZZmNK/?height=265&theme-id=dark&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;height: 30vh;'>See the Pen <a href='https://codepen.io/pataruco/pen/pZZmNK/'>Flexbox core concept</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/pZZmNK/)

---

# How it works?

<iframe  scrolling='no' title='Flexbox 1st example' src='//codepen.io/pataruco/embed/preview/VBBOEm/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 30vh;'>See the Pen <a href='https://codepen.io/pataruco/pen/VBBOEm/'>Flexbox 1st example</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/VBBOEm/)

---

class: center, middle

# How it works?

```css
display: flex;
```

.img-center[![](../../assets/flexbox/axes.svg)]

---

# Flex container

An area of a document laid out using flexbox is called a **flex container**. To create a flex container, we set the value of the area's container's display property to flex.

```css
display: flex;
```

As soon as we do this the direct children of that container become **flex items**.

---

# Flex container

`flex-direction`: how flex items are placed in the flex container defining the main axis and the direction

```css
.container {
  display: flex;
  flex-direction: row;
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}
```

**[Playground](https://codepen.io/pataruco/pen/XBPmqj)**

---

# Flex container

`flex-wrap`: specifies whether flex items are forced into a single line or can be wrapped onto multiple lines.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  flex-wrap: nowrap;
  flex-wrap: wrap-reverse;
}
```

**[Playground](https://codepen.io/pataruco/pen/XBPmqj)**

---

# Flex container

`flex-flow`: is a shorthand property for `flex-direction` and `flex-wrap` individual properties.

```css
.container {
  display: flex;
  /* flex-flow: <'flex-direction'> and <'flex-wrap'> */
  flex-flow: row nowrap;
  flex-flow: column wrap;
  flex-flow: column-reverse wrap-reverse;
}
```

**[Playground](https://codepen.io/pataruco/pen/XBPmqj)**

---

# Flex container

`justify-content`: defines how the browser distributes space between and around content items along the **main-axis** of their container.

```css
.container {
  display: flex;
  /* Positional alignment */
  justify-content: center;
  justify-content: start; /* flex-start */
  justify-content: end; /* flex-end */
  justify-content: left;
  justify-content: right;
  /* Distributed alignment */
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
  justify-content: stretch;
}
```

**[Playground](https://codepen.io/pataruco/pen/XBPmqj)**

---

# Flex container

`align-items`: sets the `align-self` (flex item property) value on all direct children as a group. It controls the alignment of items on the **cross axis**

```css
.container {
  display: flex;
  /* Basic keywords */
  align-items: normal;
  align-items: stretch;
  /* Positional alignment */
  align-items: center;
  align-items: start; /* flex-start */
  align-items: end; /* flex-end */
  align-items: baseline;
}
```

**[Playground](https://codepen.io/pataruco/pen/XBPmqj)**

---

# Flex container

`align-content`: handles the remaining space between and around content items along the **cross-axis** with multiple lines.

```css
.container {
  display: flex;
  /* Basic keywords */
  align-content: center;
  align-content: start; /* flex-start */
  align-content: end; /* flex-end */
  /* Baseline alignment */
  align-content: baseline;
  /* Distributed alignment */
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
  align-content: stretch;
}
```

**[Playground](https://codepen.io/pataruco/pen/XBPmqj)**

---

# Flex items

To have more control over flex items we can target them directly. We do this by way of three properties

- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`
- `order`

---

# Flex items

`flex-grow`: specifies what amount of space inside the flex container the item should take up. The flex grow factor of a flex item is relative to the size of the other children in the flex-container.

```css
.container {
  display: flex;
}

.item {
  flex-grow: 1;
}
```

**[Playground 2](https://codepen.io/pataruco/pen/BPbYPe)**

---

# Flex items

`flex-basis`: specifies the initial main size of a flex item. This property determines the size of the content-box

```css
.container {
  display: flex;
}

.item {
  flex-basis: 33%;
}
```

**[Playground 2](https://codepen.io/pataruco/pen/BPbYPe)**

---

# Flex items

`flex-shrink`: flex items will shrink to fill the container according to the flex-shrink number, when the default size of flex items is larger than the flex container.

```css
.container {
  display: flex;
}

.item {
  flex-shrink: 1;
}
```

**[Playground 2](https://codepen.io/pataruco/pen/BPbYPe)**

---

# Flex items

`flex`: is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.container {
  display: flex;
}

.item {
  flex: 1 1 25%;
}
```

**[Playground 2](https://codepen.io/pataruco/pen/BPbYPe)**

---

# Flex items

`align-self`: aligns flex items of the current flex line overriding the align-items value. If any of the item's cross-axis margin is set to auto, then align-self is ignored.

```css
.container {
  display: flex;
}

.item {
  align-self: center; /* Put the item around the center */
  align-self: flex-start; /* Put the flex item at the start */
  align-self: flex-end; /* Put the flex item at the end */
}
```

**[Playground 2](https://codepen.io/pataruco/pen/BPbYPe)**

---

# Flex items

`order`: specifies the order used to lay out a flex or grid item in its flex container. Items within the same container are laid out in ascending order according to their order values. Elements with the same order value are laid out in the order in which they appear in the source code.

```css
.container {
  display: flex;
}

.item {
  order: 1;
  order: -1;
}
```

**[Playground 2](https://codepen.io/pataruco/pen/BPbYPe)**

---

class: center, middle

![](https://media.giphy.com/media/l2YWxUulKOk8EM4gg/giphy.gif)

---

# Next steps

- Do [Flex Froggy](https://flexboxfroggy.com/)

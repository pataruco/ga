# .center[Intro to HTML]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

# Agenda

- How the Web works?
- The 3 Layers of the Web
- HTML

---

# Tell the difference...

Please, tell us the difference between:

## Internet vs Web

---

# How the Web works?

.image-two-thirds[![](https://mdn.mozillademos.org/files/13839/Web%20Application%20with%20HTML%20and%20Steps.png)]

---

# Tell the difference...

Please, tell us the difference between:

## Frontend vs Backend

---

# Frontend vs. Backend

The development process can be broken into two areas:

.row[
.column[

### Front-End

- How things look to the user
- Involves: images, content, structure
- HTML, CSS, and JavaScript
  ]

.column[

### Back-End

- How things work
- Involves: “business logic” and “data”
- Ruby, PHP, C++, Java, etc.]
  ]

---

# Tell the difference...

Please, tell us the difference between:

## Website vs Webpage vs Web server

---

# The 3 Layers of the Web

.image-third[![](https://mdn.mozillademos.org/files/13502/cake.png)]

---

# The 3 Layers of the Web

- **HTML** is the markup language that we use to structure and give meaning to our web content.
- **CSS** is a language of style rules that we use to apply styling to our HTML content.
- **JavaScript** is a scripting language that enables you to manipulate dynamically content and style.

---

# The 3 Layers of the Web

<iframe height='265' scrolling='no' title='3 Layers of the Web' src='//codepen.io/pataruco/embed/oPNzyd/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pataruco/pen/oPNzyd/'>3 Layers of the Web</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/oPNzyd/)

---

# Intro to HTML

**HTML** _(Hypertext Markup Language)_ is not a programming language; it is a markup language used to tell your browser how to structure the web pages you visit.

---

# Intro to HTML

`My cat is very grumpy`

```html
<p>My cat is very grumpy</p>
```

---

# Anatomy of an HTML element

![](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

---

# Nesting elements

## What is the difference?

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

```html
<p>My cat is <strong>very grumpy.</p></strong>
```

---

# Nesting elements

## Good:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

## ~~Bad~~:

```html
<p>My cat is <strong>very grumpy.</p></strong>
```

---

# Block versus inline elements

There are two important categories of elements in HTML which you should know about. They are **block-level** elements and **inline** elements.

---

# Block

- They will appear on a new line from whatever content went before it, and any content that goes after it will also appear on a new line.
- Tend to be structural elements on the page that represent, for example, paragraphs, lists, navigation menus, footers, etc.
- A block-level element wouldn't be nested inside an inline element, but it might be nested inside another block-level element.

```html
<p>Paragraph</p>
<nav>
  <ul>
    <li>list item</li>
  </ul>
</nav>
```

---

## Inline

- Are contained within block-level elements and surround only small parts of the document’s content, not entire paragraphs and groupings of content.
- Will not cause a new line to appear in the document; they would normally appear inside a paragraph of text.
- For example an `<a>` element (hyperlink) or emphasis elements such as `<em>` or `<strong>`.

```html
<p>
  Here is a link to <a href="www.ga.co">General Assembly</a>. Here is an
  <em>emphasis</em>. and here is a <span>common wrapper</span>
</p>
```

---

# Empty elements

Are self closing elements

```html
<img
  src="https://api.peteroftheday.com/random"
  alt="A random Picture of Peter Martin"
/>
<hr />
<input type="color" id="color" />
```

---

# HTML text fundamentals

## Headings and Paragraphs

```html
<p>I am a paragraph, oh yes I am.</p>
<h1>I am the title of the story.</h1>
```

---

# HTML text fundamentals

## Implementing structural hierarchy

```html
<h1>Star Wars</h1>
<p>By George Lucas</p>

<h2>Episode IV: A New Hope</h2>
<p>It is a period of civil war. Rebel spaceships ...</p>

<h2>Episode V: The Empire Strike Back</h2>
<p>It is a dark time for the Rebellion...</p>
<h3>EXT. GALAXY - PLANET HOTH</h3>
<p>
  A Star Destroyer moves through space, releasing Imperial probe robots from its
  underside.
</p>
<p></p>
```

---

# HTML text fundamentals

## Why do we need semantics?

```html
<h1>This is a top level heading</h1>
<span style="font-size: 32px; margin: 21px 0;"
  >Is this a top level heading?</span
>
```

---

# HTML text fundamentals

## Lists

### Unordered

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

---

# HTML text fundamentals

## Lists

### Ordered

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

---

# Code along

## [Press release exercise](https://raw.githubusercontent.com/pataruco/ga-fewd-assets/master/press-release/starter/press-release.txt)

???
Add a link

---

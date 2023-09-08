class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>02 Advanced HTML & Intro to CSS</h1>
</div>

---

## Agenda

- Recap
- Advanced HTML
  - Absolute vs relative paths
  - Images
  - Metadata
  - Applying CSS and JavaScript to HTML
  - Creating hyperlinks
  - Document and website structure
- Intro to CSS
  - Properties
  - Selectors
  - How to apply your CSS
  - Colo(~~u~~)rs
  - Fonts

---

## Absolute vs relative paths

We can differentiate between an **absolute** URL and a **relative** URL by looking only at the path part of the URL.

```javascript
'./i-am-relative-path/filename.txt';
// From my current position get to a directory and then get the file

'../i-am-also-a-relative-path/filename.txt';
// From my current position go up to my parent directory and
// then to another directory and the get the file
```

```javascript
'https://www.ga.com'; // I am an absolute path
```

---

## Images

Images are placed using the `<img>` tag.

```html
<img src="img/image-name.jpg" alt="alternative text" />
```

- The `img` tag requires a `src` attribute, which tells the browser where to find the image.
- The `src` points to a resource a bit like the `href` of an `<a>` tag.

---

## Images

### Paths

- Inside webroot, a relative path could be used:

```html
<img src="images/logo.png" />
```

- Relative path

```html
<img src="../images/logo.png" />
```

- Absolute Path

```html
<img src="https://api.peteroftheday.com/random" />
```

---

## Images

`alt` attribute provides a text description of the image

```html
<img
  src="https://api.peteroftheday.com/random"
  alt="A random picture of Peter Martin"
/>
```

---

## Images

### File Formats

- `png`
- `gif`
- `jpeg || jpg`
- `svg`

---

## Images

### `png`

- 24­ bit `png` have alpha transparency
- 8­ bit `png` have transparency but not semi­-transparency
- Large file­ size due to storing transparency info.

### `gif`

- Can be animated
- Have basic transparency, like an 8­ bit PNG
- Used in HTML emails as PNG not widely supported

---

## Images

### `jpeg` || `jpg`

- No transparency
- Most commonly used for photos
- Can be compressed to reduce file­size

### `svg`

- Vector based
- Most commonly used for logos and illustrations
- Drawn with points and curves
- Infinitely scalable

---

## What is the HTML head?

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

---

## What is the HTML head?

### Metadata

```html
<head>
  <meta charset="utf-8" />
  <meta name="author" content="Pedro Martin" />
  <meta name="description" content="A Lesson about HTMLs" />
</head>
```

---

## Applying CSS and JavaScript to HTML

```html
<link rel="stylesheet" href="my-css-file.css" />
```

```html
<script src="my-js-file.js"></script>
```

---

## Setting the primary language of the document

```html
<html lang="en-GB"></html>
```

---

## Creating links

```html
<p>
  I'm creating a link to
  <a
    href="https://en.wikipedia.org/wiki/Star_Wars"
    title="Star Wars Wikipedia page"
  >
    Star Wars Wikipedia page </a
  >.
</p>
```

---

## Creating links

### Relative links

```html
<h2 id="Mailing_address">Mailing address</h2>
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

---

## Creating links

### Email links

```html
<p>
  <a href="mailto:mail@example.com"> Send an email </a>
</p>
```

---

# Document and website structure

```html
<body>
  <header>...</header>
  <nav>...</nav>
  <main>
    <article>...</article>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>
```

---

# Intro to Cascading Style Sheets (CSS)

Web browsers apply CSS rules to a document to affect how they are displayed. A CSS rule is formed from:

- **Properties** which have values set to update how the HTML content is displayed.
- **Selectors** which selects the element(s) you want to apply the updated property values to.

---

# Intro to Cascading Style Sheets (CSS)

## How it looks?

```html
<h1>Hello World!</h1>
<p>This is my first CSS example</p>
```

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}
```

```css
p {
  color: red;
}
```

---

# How does CSS actually work?

![](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg)

---

## How does CSS actually work?

### About the DOM Document Object Model (**DOM**) represents the

Document Object Model (**DOM**) represents the document in the computer's memory. It combines the document's content with its style.

A DOM has a tree-like structure. Each element, attribute and piece of
text in the markup language becomes a DOM node in the tree structure. The
nodes are defined by their relationship to other DOM nodes. Some elements are
parents of child nodes, and child nodes have siblings.

---

## How does CSS actually work?

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

```txt
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
```

---

## How to apply your CSS to your HTML

Using a `link` tag with a reference to a CSS file

```html
<head>
  ...
  <link rel="stylesheet" href="style.css" />
  ...
</head>
```

---

## How to apply your CSS to your HTML

Using a `style` tag

```html
<head>
  <style>
    h1 {
      color: blue;
      background-color: yellow;
      border: 1px solid black;
    }

    p {
      color: red;
    }
  </style>
</head>

<body>
  <h1>Hello World!</h1>
  <p>This is my first CSS example</p>
</body>
```

---

## How to apply your CSS to your HTML

Using inline styles

```html
<body>
  <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
    Hello World!
  </h1>
  <p style="color:red;">This is my first CSS example</p>
</body>
```

---

## CSS Building blocks

<div class="row">
  <section>
    <h3>Declarations</h3>
    <picture>
      <img src="https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/css_syntax_-_declaration.png" alt="CSS syntax declaration" />
    </picture>
  </section>
  <section>
    <h3>Blocks</h3>
    <picture>
      <img src="https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/css_syntax_-_block.png" alt="CSS syntax block" />
    </picture>
  </section>
  <section>
    <h3>Rules</h3>
    <picture>
      <img src="https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax/ruleset.png" alt="CSS syntax ruleset" />
    </picture>
  </section>
</div>

---

## CSS values and units

### Absolute vs relative

[CodePen](https://codepen.io/pataruco/pen/vzEKOO)

---

## CSS ~~Colours~~ Colors

There are many ways to specify color in CSS. The same color values
can be used everywhere in CSS, whether you are specifying text color,
background color, or whatever else.

The standard color system available in modern computers is 24 bit, which allows the display of about `16.7 million`
distinct colors via a combination of different **red**, **green** and
**blue** channels with 256 different values per channel

## 256 x 256 x 256 = 16,777,216

---

## CSS Colors

### Keywords

```html
<p>This paragraph has a red background</p>
```

```css
p {
  background-color: red;
}
```

[Full list of color names](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)

---

## CSS Colors

### Hexadecimal values

Each hex value consists of a hash/pound symbol (`#`) followed by six hexadecimal numbers, each of which can take a value between 0 and f (which represents 15) — so
**0123456789abcdef**. Each pair of values represents one of the channels — **red**, **green** and **blue** — and allows us to specify any of the 256
available values for each (16 x 16 = 256.)

```css
p:nth-child(1) {
  background-color: #ff0000; /* equivalent to the red keyword */
}
p:nth-child(2) {
  background-color: #0000ff; /* equivalent to the blue keyword */
}
p:nth-child(3) {
  background-color: #e0b0ff; /* has no exact keyword equivalent */
}
```

---

## CSS Colors

### RGB

An RGB value is a function `rgb()` which is given three parameters that represent the `red`, `green` and `blue` channel values of the colors, in much the same way as hex values.

The difference with RGB is that each channel is represented not by two hex
digits, but by a decimal number between **0** and **255**.

```css
p:nth-child(1) {
  background-color: rgb(255, 0, 0); /* equivalent to the red keyword */
}
p:nth-child(2) {
  background-color: rgb(0, 0, 255); /* equivalent to the blue keyword */
}
p:nth-child(3) {
  background-color: rgb(224, 176, 255); /* has no exact keyword equivalent */
}
```

---

## CSS Colors

### HSL

The `hsl()` function accepts **hue**, **saturation**, and **lightness** values, which are used to distinguish between the 16.7 million colors, but in a different way:

- **Hue**: the base shade of the color. This takes a value between 0 and
  360, presenting the angles round a color wheel.

- **Saturation**: how saturated is the color? This takes a value from 0-100%, where 0 is no color (it will appear as a shade of grey), and 100% is full color saturation
- **Lightness**: how light or bright is the color? This takes a value from 0-100%, where 0 is no light (it will appear completely black) and 100% is full light (it will appear completely white)

```css
p:nth-child(1) {
  background-color: hsl(0, 100%, 50%); /* equivalent to the red keyword */
}
p:nth-child(2) {
  background-color: hsl(240, 100%, 50%); /* equivalent to the blue */
}
p:nth-child(3) {
  background-color: hsl(276, 100%, 85%); /* has no exact keyword equivalent */
}
```

---

## CSS Colors

### RGBA

and HSLA RGB and HSL both have corresponding modes — RGBA and HSLA — that allow you to set not only what color you want to display, but also what transparency you want that color to have.

```css
p:nth-child(1) {
  background-color: rgba(255, 0, 0, 0.5); /* Transparent red */
}
p:nth-child(2) {
  background-color: hsla(240, 100%, 50%, 0.5); /* Transparent blue */
}
```

---

## CSS Fonts

There are numerous things we can style to make text look more interesting and more readable.

### Font properties

There are lots of CSS properties for styling text but here are some key ones:

```css
h1 {
  font-size: 50px;
  font-family: 'Avenir', 'Arial', sans-serif;
  font-weight: bold;
  font-style: italic;
  line-height: 1.3;
}
```

---

## Font properties

- `font-size` sets the size of the text.
- `font-family` sets the typeface.
- `font-weight` sets the boldness (number or keyword)
- `font-style` can set italic text
- `line-height` sets the spacing between lines

---

## CSS tricks

### Centring the content

It's very common for a website to have a centered column of content, narrower than the full width of the screen. To achieve this, we wrap a containing element around the content tags that we want to center.

---

## CSS tricks

### Centring the content

A `<div>` tag is ideal for this purpose and is very commonly used to divide up the page into chunks that can be moved around as a single entity.

```html
<div>
  <h2>...</h2>
  <p>...</p>
  <p>...</p>
  <blockquote>...</blockquote>
  <p>...</p>
</div>
```

---

## CSS tricks

### Centring the content

To center this div of content, we give it a `width` and set auto on its horizontal margins.

```css
div {
  width: 800px; /* could be any number or unit*/
  margin-left: auto;
  margin-right: auto;
}
```

---

## CSS tricks

### Centring the content

To center text­based content (like paragraphs or headings) we can use the `text-align` property.

```css
h1 {
  text-align: center;
}
```

---

## Let's pull all the pieces together

### Cookie recipe

#### Instructions

1. Download the starter code zip [file](https://github.com/pataruco/fewd/raw/master/labs/cookie-recipe/cookie-recipe-starter-code.zip)
2. Open the file **instructions.md** and follow the steps

#### CSS

- The background color for the page is `#FFE`
- The color for the text reading "Related Recipes" is `#887`
- The link color is `#900`
- The font family for the h1 is `serif` and the rest is `sans-serif`
- Bonus: The border on the page and around the image is black
- The max width of the content is `800px` and should be centered on the page.

---

## Homework

### Fan Fiction CV

Take a movie that you like and create a web page about the CV of one the characters.

Here are some examples

- [Darth Vader](https://www.giraffecvs.co.uk/wp-content/uploads/2013/05/CVDarthVader_rev8-page-001.jpg)
- [Darth Vader](http://uk.businessinsider.com/what-darth-vaders-resume-would-be-2015-12)
- [Disney characters](https://ohmy.disney.com/movies/2017/02/27/imaginary-disney-character-resumes/)

---

## Homework

### Technical requirements

- Use HTML5 structural elements (`nav`, `header`, `footer`)
- Use Elements and Classes to select and style elements on the page
- Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming classes
- Use a unique `title` and a single unique `h1` tag
- Show images using `img` tags including unique `alt` attributes
- Use an external CSS stylesheet to style your page
- Select at least 5 elements on the page and apply at least 5 different css properties (`font-size`, `color`, `font-family`, `background`, `text-decoration`) to these elements
- Use at least 6 different HTML tags (`h1`, `h2`, `h3`, `blockquote`, `p`, `ul`, `ol`, `a`, `img`) on your pages
- Indent nested elements to increase your code's readability

---

## Bonus

- Experiment by adding additional HTML tags and CSS properties we did not cover in class - explore!

---

## Homework

### Submission

- Create a folder using the following convention `name-surename-week-1`, e.g `pedro-martin-week-1`
- Submit your work via Google Drive (even it's not finished) by **Sunday** 11:59 PM to the instructors

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

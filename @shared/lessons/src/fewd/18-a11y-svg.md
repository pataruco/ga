class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Accessibility and SVG</h1>
</div>

---

class: bg-teal, fullscreen

# Accesability (a11y)

---

## Accesability

_"Accessibility is most often used to describe facilities or amenities to assist people with disabilities, as in 'wheelchair accessible'. This can extend to Braille signage, wheelchair ramps, audio signals at pedestrian crossings, walkway contours, website design, and so on."_

---

## Accessibility on the Web

_"**The Web is fundamentally designed to work for all people**, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability."_

---

## Benefits

Accessibility and the best practices it entails can benefit everyone:

- Semantic HTML (which improves accessibility) also improves SEO, making your site more findable/marketable.
- Caring about accessibility demonstrates good ethics/morals, which improves your public image.
- Other good practices that improve accessibility also make your site more usable by other groups, such as mobile phone users, those on a low network speed, etc.
- [EU](http://eur-lex.europa.eu/eli/dir/2016/2102/oj) and [UK Law](http://www.legislation.gov.uk/ukpga/2010/15/contents)

---

## What kinds of disability are we looking at?

- People with visual impairments
- People with hearing impairments
- People with mobility impairments
- People with cognitive impairments

---

## Implementing accessibility into your project

A common accessibility **myth** is that accessibility is an expensive _"added extra"_ to implement on a project. This myth actually can be true if either:

- You are trying to _"retrofit"_ accessibility onto an existing website that has significant accessiblity issues.
- You have only started to consider accessibility and uncovered related issues in the late stages of a project.

---

## What we are covering?

- HTML: A good basis for accessibility
- CSS accessibility best practices
- WAI-ARIA basics
- Accessible multimedia

---

## HTML: A good basis for accessibility

As you learn more about HTML — read more resources, look at more examples, etc. — you'll keep seeing a common theme: the importance of using semantic HTML. This means using the correct HTML elements for their correct purpose as much as possible.

A great deal of web content can be made accessible just by making sure the correct HTML elements are used for the correct purpose at all times.

---

## HTML: A good basis for accessibility

You might wonder why this is so important. After all, you can use a combination of CSS and JavaScript to make just about any HTML element behave in whatever way you want.

For example, a control button to play a video on your site could be marked up like this:

```html
<div>Play video</div>
```

But as you'll see in greater detail later on, it makes much sense to use the correct element for the job:

```html
<button>Play video</button>
```

---

## HTML: A good basis for accessibility

Not only do HTML `<button>`s have some suitable styling applied by default (which you will probably want to override), they also have built-in keyboard accessibility — they can be tabbed between, and activated using Return/Enter.

Semantic HTML doesn't take longer to write than non-semantic (bad) markup if you do it consistently from the start of your project.

Benefits:

- **Easier to develop with**: you get some functionality for free, plus it is arguably easier to understand.
- **Better on mobile**: semantic HTML is arguably lighter in file size than non-semantic spaghetti code, and easier to make responsive.
- **Good for SEO**:search engines give more importance to keywords inside headings, links, etc., than keywords included in non-semantic `<div>`s, etc., so your documents will be more findable by customers.

---

## HTML: A good basis for accessibility

### Exercise using VO utility

- [Good Practice](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)
- [Bad Practice](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)

---

## HTML: A good basis for accessibility

### Exercise using VO utility

[Images practice](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html)

---

## CSS accessibility best practices

CSS when used properly, also have the potential to allow for accessible web experiences, but if misused they can significantly harm accessibility.

---

## CSS accessibility best practices

- _Standard_ text content structure

```html
<h1>Heading</h1>

<p>Paragraph</p>

<ul>
  <li>My list</li>
  <li>has two items.</li>
</ul>
```

---

## CSS accessibility best practices

- _Standard_ text content structure

```css
h1 {
  font-size: 5rem;
}

p,
li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

---

## CSS accessibility best practices

- Emphasised text

```html
<p>The water is <em>very hot</em>.</p>

<p>
  Water droplets collecting on surfaces is called <strong>condensation</strong>.
</p>
```

---

## CSS accessibility best practices

- Emphasised text

```css
strong,
em {
  color: #a60000;
}
```

---

## CSS accessibility best practices

- Links

```html
<p>Visit the <a href="https://www.mozilla.org">Mozilla homepage</a>.</p>
```

---

## CSS accessibility best practices

- Links

```css
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

---

## WAI-ARIA basics

As web apps started to get more complex and dynamic, a new set of accessibility features and problems started to appear.

For example, HTML5 introduced a number of semantic elements to define common page features (`<nav>`, `<footer>`, etc.) Before these were available, developers would simply use `<div>`s with IDs or classes, e.g. `<div class="nav">`, but these were problematic, as there was no easy way to easily find a specific page feature such as the main navigation programmatically.

The initial solution was to add one or more hidden links at the top of the page to link to the navigation (or whatever else), for example:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

But this is still not very precise, and can only be used when the screenreader is reading from the top of the page.

---

## WAI-ARIA basics

WAI-ARIA (**W**eb **A**ccessibility **I**nitiative – **A**ccessible **R**ich **I**nternet **A**pplications) is a technical specification published by the World Wide Web Consortium (W3C) that specifies how to increase the accessibility of web pages, in particular, dynamic content, and user interface components.

There are three main features defined in the spec:

1.  **Roles**: these define what an element is or does. Many of these are so-called landmark roles, which largely duplicate the semantic value of HTML5 structural elements e.g. `role="navigation"` (`<nav>`) or `role="complementary"` (`<aside>`), but there are also others that describe different pages structures.

2.  **Properties**: these define properties of elements, which can be used to give them extra meaning or semantics. As an example, `aria-required="true"` specifies that a form input needs to be filled in to be valid, whereas `aria-labelledby="label"` allows you to put an ID on an element, then reference it as being the label for anything else on the page, including multiple elements, which is not possible using `<label for="input">`

3.  **States**: special properties that define the current conditions of elements, such as `aria-disabled="true"`, which specifies to a screenreader that a form input is currently disabled. States differ from properties in that properties don't change throughout the lifecycle of an app, whereas states can change, generally programmatically via JavaScript.

---

## WAI-ARIA basics

An important point about **WAI-ARIA** attributes is that they don't affect anything about the web page, except for the information exposed by the browser's accessibility APIs.

- [Role definitions](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)
- [State and properties definitions](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)

---

## Accessible multimedia

Another category of content that can create accessibility problems is multimedia video, audio, and image content need to be given proper textual alternatives so they can be understood by assistive technologies and their users.

- Simple images

```html
<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
/>
```

---

## Accessible multimedia

- Accessible audio and video controls

[Exercise](https://mdn.github.io/learning-area/accessibility/multimedia/native-controls.html)

---

## Accessible multimedia

- Accessible audio and video controls

[Example](https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/)

---

class: bg-yellow, fullscreen

# Scalable Vector Graphics (SVG)

---

## SVG

**S**calable **V**ector **G**raphics (SVG) is an XML-based markup language for describing two dimensional based vector graphics.

SVG is essentially to graphics what HTML is to text.

---

## Basic ingredients

HTML provides elements for defining headers, paragraphs, and so on. In much the same way SVG provides elements for circles, rectangles, and simple and complex curves.

A simple SVG document consists of nothing more than the `<svg>` root element and several basic shapes that build a graphic together. In addition there is the `<g>` element, which is used to group several basic shapes together.

---

## A simple Example

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
    SVG
  </text>
</svg>
```

1.  We start with the svg root element.
2.  The background is set to red by drawing a rectangle `<rect/>` that covers the complete image area.
3.  A green circle `<circle/>` with a radius of 80px is drawn atop the center of the red rectangle (center of circle offset 150px to the right, and 100px downward from the top left corner).
4.  The text "SVG" is drawn. The interior of each letter is filled in with white. The text is positioned by setting an anchor at where we want the midpoint to be.

---

## How to render it

SVG files on the web can be displayed directly in the browser or embedded in HTML files via several methods:

- If the HTML is HTML5, and the browser is a conforming HTML5 browser, the SVG can be directly embedded.

- Likewise an `iframe` element can be used:

```html
<iframe src="image.svg"></iframe>
```

- An `img` element can be used theoretically

- Finally SVG can be created dynamically with JavaScript and injected into the HTML DOM.

---

## The grid

.image-one-fourth[![](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)]

SVG uses a coordinate system or grid.

- That is, the top left corner of the document is considered to be the point `(0,0)`, or point of origin.

- Positions are then measured in pixels from the top left corner, with the positive x direction being to the right, and the positive y direction being to the bottom.

---

## What are "pixels"?

- One pixel in an SVG document maps to one pixel on the output device.

- **But** SVG wouldn't have the "Scalable" in its name, if there weren't several possibilities to change this behaviour

- SVG defines absolute units (ones with a dimensional identifier like `px` or `cm`) and so-called _user units_, that lack that identifier and are plain numbers.

---

## What are "pixels"?

One _user unit_ equals _one screen unit_. To explicitly change this behaviour, there are several possibilities in SVG. We start with the svg root element:

```html
<svg width="100" height="100"></svg>
```

The above element defines a simple SVG canvas with 100x100px. One user unit equals one screen unit.

```html
<svg width="200" height="200" viewBox="0 0 100 100"></svg>
```

The whole SVG canvas here is 200px by 200px in size. However, the `viewBox` attribute defines the portion of that canvas to display.

These 200x200 pixels display an area that starts at user unit (0,0) and spans 100x100 user units to the right and to the bottom.

This effectively zooms in on the 100x100 unit area and enlarges the image to double size.

---

## Basic shapes

## Rectangles

The `rect` element does exactly what you would expect and draws a rectangle on the screen.

```html
<rect x="10" y="10" width="30" height="30" />
<rect x="60" y="10" rx="10" ry="10" width="30" height="30" />
```

- `x`: The x position of the top left corner of the rectangle.
- `y`: The y position of the top left corner of the rectangle.
- `width`: The width of the rectangle
- `height`: The height of the rectangle
- `rx`: The x radius of the corners of the rectangle
- `ry`: The y radius of the corners of the rectangle

---

## Circle

The `circle` element draws a circle on the screen.

There are really only 3 attributes that are applicable here.

```html
<circle cx="25" cy="75" r="20" />
```

- `r`: The radius of the circle.
- `cx`: The x position of the center of the circle.
- `cy`: The y position of the center of the circle.

---

## Ellipse

Ellipses are actually just a more general form of the circle element, where you can scale the x and y radius of the circle separately.

```html
<ellipse cx="75" cy="75" rx="20" ry="5" />
```

- `rx`: The x radius of the ellipse.
- `ry`: The y radius of the ellipse.
- `cx`: The x position of the center of the ellipse.
- `cy`: The y position of the center of the ellipse.

---

## Line

Lines are again, just straight lines.

They take as attributes two points which specify the start and end point of the line.

```html
<line x1="10" x2="50" y1="110" y2="150" />
```

- `x1`: The x position of point 1.
- `y1`: The y position of point 1.
- `x2`: The x position of point 2.
- `y2`: The y position of point 2.

---

## Polyline

Polylines are groups of connected straight lines. Since that list can get quite long, all the points are included in one attribute:

```html
<polyline
  points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"
/>
```

- `points`: A list of points, each number separated by a space, comma, EOL, or a line feed character. Each point must contain two numbers, an x coordinate and a y coordinate.

---

## Polygon

Polygons are a lot like polylines in that they're composed of straight line segments connecting a list of points. For polygons though, the path automatically returns to the first point for you at the end, creating a closed shape.

```html
<polygon
  points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"
/>
```

---

## Path

Path is probably the most general shape that can be used in SVG. Using a path element you can draw rectangles, circles, ellipses, polylines, and polygons. Basically any of the other types of shapes, bezier curves, quadratic curves, and many more.

```html
<path d="M 20 230 Q 40 205, 50 230 T 90230" />
```

`d`: a list of points and other information about how to draw the path. See the Paths section for more information.

More info in how to draw paths [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)

---

## Fills and Strokes

Basic coloring can be done by setting two attributes on the node: `fill` and `stroke`. Fill sets the color inside the object and stroke sets the color of the line drawn around the object

```html
<rect
  x="10"
  y="10"
  width="100"
  height="100"
  stroke="blue"
  fill="purple"
  fill-opacity="0.5"
  stroke-opacity="0.8"
/>
```

---

## Stroke

.image-one-fourth--align-left[![](https://mdn.mozillademos.org/files/730/SVG_Stroke_Linecap_Example.png)]

There are three possible values for `stroke-linecap`:

- `butt` closes the line off with a straight edge that's normal (at 90 degrees) to the direction of the stroke and crosses its end.

- `square` has essentially the same appearance, but stretches the stroke slightly beyond the actual path. The distance that the stroke goes beyond the path is half the stroke-width.

- `round` produces a rounded effect on the end of the stroke. The radius of this curve is also controlled by the stroke-width.

> [https://codepen.io/pataruco/pen/ELZqwK](https://codepen.io/pataruco/pen/ELZqwK)

---

## All together

### Loading spinner

[https://codepen.io/pataruco/pen/dKrPMw](https://codepen.io/pataruco/pen/dKrPMw)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Accessibility and SVG</h1>
</div>

---

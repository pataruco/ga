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

# ⚠️ Warnings ⚠️

- Most of the following content is based on my opinions and experiences
- This content is just scratching the surface on accessibility on the Web

---

# What is Web accessibility (a11y)

> Accessibility is often abbreviated as the numeronym a11y, where the number 11 refers to the number of letters omitted.

---

# What is Web accessibility (a11y)

## Common definitions

> "Accessibility is most often used to describe facilities or amenities to assist people with disabilities, as in 'wheelchair accessible'. This can extend to Braille signage, wheelchair ramps, audio signals at pedestrian crossings, walkway contours, website design, and so on."

[Wikipedia](https://en.wikipedia.org/wiki/Accessibility)

---

# What is Web accessibility (a11y)

## Common definitions

> "**The Web is fundamentally designed to work for all people**, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.

[w3c](https://www.w3.org/standards/webdesign/accessibility)

---

# What is Web accessibility (a11y)

## Broad definition

Accessibility can be viewed as the **"ability to access"** and benefit from some system or entity.

---

# What is Web accessibility (a11y)

## Broad definition

The concept focuses on enabling access for people with disabilities, or enabling access through the use of assistive technology; however, research and development in accessibility brings benefits to everyone.

Some examples:

- Multi touch screens
- Dark themes `prefers-color-scheme: dark`
- Voice assistants (Siri/Alexa)
- Text-to-speech,
- Keyboard shortcuts

---

# Why should we care?

## Human Rights 🇺🇳

### Equality and non-discrimination

All individuals are equal as human beings and by virtue of the inherent dignity of each human person. All human beings are entitled to their human rights without discrimination of any kind, such as race, color, sex, ethnicity, age, language, religion, political or other opinion, national or social origin, disability, property, birth or other status as explained by the human rights treaty bodies.

### Participation and inclusion

Every person and all peoples are entitled to active, free and meaningful participation in, contribution to, and enjoyment of civil, political, economic, social and cultural development, through which human rights and fundamental freedoms can be realized.

From UNICEF [website](https://www.unicef.org/child-rights-convention/what-are-human-rights)

---

# Why should we care?

## It is the Law ⚖️

- [EN 301 549](http://eur-lex.europa.eu/eli/dir/2016/2102/oj) in the EU
- [Section 508 of the Rehabilitation Act](https://www.section508.gov/training) in the USA
- [Accessibility Regulation 2018](http://www.legislation.gov.uk/ukpga/2010/15/contents)

> Note: [Domino's v. Robles](https://www.supremecourt.gov/DocketPDF/18/18-1539/102950/20190613153319483_DominosPetition.pdf). On October 7th of 2018, the U.S. Supreme Court allowed a blind man’s accessibility lawsuit against Domino’s Pizza to proceed, paving the way to enforce more companies to provide accessible digital services.

---

# Why should we care?

## Business 💸

But if following the law is not enough stimulus, I am going to name another one: SEO! Search engine indexers (Yahoo !, Google, Bing, DuckDuckGo) use semantic HTML to extract information about a web page.

It means that to have accessibility as a core leads to better chances that the content we are serving will be best ranked in search engines.

???
[How Does HTML Microdata Help With Accessibility?](https://scottvinkle.me/blogs/work/how-html-microdata-helps-with-accessibility)

---

# Why should we care?

For these reasons, accessibility should not be an extra layer, should be the core of what we do.

---

# Assistive technology (AT)

Accessibility application programming interfaces exists to allow assistive technology products such as screen readers and screen magnifiers to work with mainstream software

---

# Assistive technology (AT)

## How to use macOS VoiceOver

Please, go to:

**System preferences** > **Accessibility** > **Open VoiceOver Training...**

---

# Assistive technology (AT)

## Practice

- ✅ [Good example](https://pataruco.github.io/a11y-examples/good-example)
- ❌ [Bad example](https://pataruco.github.io/a11y-examples/bad-example)
- 🪗 [Interactive example](https://pataruco.github.io/a11y-examples/interactive-example)
- [Accessible images](https://pataruco.github.io/a11y-examples/accessible-images)
- [Multimedia](https://pataruco.github.io/a11y-examples/multimedia)
- [Live bad website](https://www.lingscars.com/)
- [Live good website](https://www.bbc.co.uk/news)

---

# A11y as core

## Semantic HTML

As you learn more about HTML — read more resources, look at more examples, etc. — you'll keep seeing a common theme: the importance of using semantic HTML. This means using the correct HTML elements for their correct purpose as much as possible.

A great deal of web content can be made accessible just by making sure the correct HTML elements are used for the correct purpose at all times.

---

# A11y as core

## Semantic HTML

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

# A11y as core

## Semantic HTML

Not only do HTML `<button>`s have some suitable styling applied by default (which you will probably want to override), but they also have built-in keyboard accessibility — they can be tabbed between, and activated using Return/Enter.

Semantic HTML doesn't take longer to write than non-semantic (bad) markup if you do it consistently from the start of your project.

Benefits:

- **Easier to develop with**: you get some functionality for free, plus it is arguably easier to understand.
- **Better on mobile**: semantic HTML is arguably lighter in file size than non-semantic spaghetti code, and easier to make responsive.
- **Good for SEO**: search engines give more importance to keywords inside headings, links, etc., than keywords included in non-semantic `<div>`s, etc., so your documents will be more findable by customers.

---

# A11y as core

## CSS

CSS (when used properly) also has the potential to provide accessible web experiences. But if misused, it can significantly harm accessibility.

One example is:

### Good ✅

```css
body {
  font-size: 100%;
}
```

### Not good ❌

```css
body {
  font-size: 16px;
}
```

---

# A11y as core

## WAI-ARIA basics

WAI-ARIA (**W**eb **A**ccessibility **I**nitiative – **A**ccessible **R**ich **I**nternet **A**pplications) is a technical specification published by the World Wide Web Consortium (W3C) that specifies how to increase the accessibility of web pages, in particular, dynamic content, and user interface components.

---

# A11y as core

## WAI-ARIA basics

### Roles

These define what an element is or does. Many of these are so-called landmark roles, which largely duplicate the semantic value of HTML5 structural elements e.g. `role="navigation"` (`<nav>`) or `role="complementary"` (`<aside>`). But there are also others that describe different pages structures.

---

# A11y as core

## WAI-ARIA basics

### Properties

These define properties of elements, which can be used to give them extra meaning or semantics. As an example, `aria-required="true"` specifies that a form input needs to be filled in to be valid. Whereas `aria-labelledby="label"` allows you to put an ID on an element, then reference it as being the label for anything else on the page, including multiple elements, which is not possible using `<label for="input">`

---

# A11y as core

## WAI-ARIA basics

### States

**States**: special properties that define the current conditions of elements, such as `aria-disabled="true"`, which specifies to a screenreader that a form input is currently disabled. States differ from properties in that properties don't change throughout the lifecycle of an app. Whereas states can change programmatically via JavaScript.

---

# A11y as core

## WAI-ARIA basics

- [Role definitions](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)
- [State and properties definitions](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [Using ARIA: Roles, states, and properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)

---

class: bg-pink, fullscreen

# SVG

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

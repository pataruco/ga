class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>jQuery</h1>
</div>

---

## What is jQuery

- jQuery is a library that you can include in your project
- It provides hundreds of helpful methods for interacting with the DOM
- It was revolutionary and had a huge impact on the evolution of Javascript.
- The syntax mimics CSS selectors making it very readable

---

## How it works

Like `document.querySelector()` and `document.querySelectorAll()` jQuery uses CSS selectors but more concisely.

.row[
.col[

### Vanilla JavaScript

```js
document.querySelectorAll('ul li');
document.querySelector('#about');
```

]
.col[

### jQuery

```js
$('ul li');
$('#about');
```

]
]

---

## DOM manipulation

jQuery statements for DOM manipulation are also more concise!

.row[
.col[

### Vanilla JavaScript

```js
document.querySelector('#heading').textContent = 'Your Name';
```

]
.col[

### jQuery

```js
$('#heading').text('Your Name');
```

]
]

---

## How to add it

1. Add script elements at the end of the page just before the closing `</body>` tag
2. Add your own `.js` files after the jQuery import (the order matters)

```html
<html>
  <head> </head>
  <body>
    <h1>JavaScript resources</h1>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

---

## How to add it

### Using a CDN

- jQuery can be downloaded into your project directory and referenced locally using a relative path.
- Alternatively you can load the library from a CDN (content delivery network). Generally this will be the preferred option.
- Visit [https://code.jquery.com](https://code.jquery.com) and choose the minified option for the latest release. Copy and paste the script tag into your file. 🙌

---

## Selectors

|                 | CSS                         | jQuery           |
| --------------- | --------------------------- | ---------------- |
| Element         | `a { color: blue; }`        | `$('a');`        |
| ID              | `#special { color: blue; }` | `$('#special');` |
| Class           | `.info { color: blue; }`    | `$('.info');`    |
| Nested selector | `div span { color: blue; }` | `$('div span');` |

---

## jQuery objects

Selecting elements with vanilla JavaScript returns an element reference (`querySelector`) or a collection of element references (`querySelectorAll`)

.row[
.col[

### Vanila JavaScript selector

```js
document.querySelector('.info');
```

]
.col[

### Plain element reference

```txt
<element reference>
```

]
]

---

## jQuery objects

Selecting elements with jQuery returns a jQuery object, which is one or more element references packaged with jQuery methods and properties
.row[
.col[

### jQuery selector

```js
$('.info');
```

]
.col[

### jQuery object

```txt
{
  element reference
  methods
  properties
}
```

]
]

---

## Naming variables

Itʼs common to include **`$`** at start of variable name to indicate that its value is a jQuery object

```js
const $openTab = $('.open');
```

---

## Methods

Check jQuery docs at [https://api.jquery.com/](https://api.jquery.com/)

### What you can do

- Find elements
- Get/set content
- Add effects and animation
- Create event listeners

---

## Find elements

.row[
.col[

```js
$('#info').parent();
```

]
.col[

```txt
          ┌────┐
          │ ul │
          └────┘
             │
    ┌────────┼───────┐
    │        │       │
┌───────┐  ┌───┐   ┌───┐
│ #info │  │li │   │li │
└───────┘  └───┘   └───┘
```

]
]

---

## Common transversal methods

| Methods                          | Examples                         |
| -------------------------------- | -------------------------------- |
| `.find()` (find all descendants) | `$('h1').find('a');`             |
| `.parent()`                      | `$('#box1').parent();`           |
| `.siblings()`                    | `$('p').siblings('.important');` |
| `.children()`                    | `$('ul').children('li');`        |

What goes in the parentheses? **A CSS selector**.

---

## Common DOM manipulation methods

| Methods   | Examples                                    |
| --------- | ------------------------------------------- |
| `.html()` | `$(‘h1').html('<strong>Content</strong>');` |
| `.text()` | `$(‘h1’).text('Just text content!');`       |
| `.attr()` | `$('img').attr('src', 'images/bike.png');`  |

What goes in the parentheses? **The content you want to change**.

---

## Common DOM manipulation methods

| Methods          | Examples                               |
| ---------------- | -------------------------------------- |
| `.addClass()`    | `$('p').addClass('success');`          |
| `.removeClass()` | `$('p').removeClass('my-class-here');` |
| `.toggleClass()` | `$('p').toggleClass('special');`       |

What goes in the parentheses? **The classes you want to change**.

> Note: that there's no period before the class name.

---

## Common effects methods

| Methods          | Examples                         |
| ---------------- | -------------------------------- |
| `.show()`        | `$('h1').show();`                |
| `.hide()`        | `$('ul').hide();`                |
| `.fadeIn()`      | `$('h1').fadeIn(300);`           |
| `.fadeOut()`     | `$('.special').fadeOut('fast');` |
| `.slideUp()`     | `$('div').slideUp();`            |
| `.slideDown()`   | `$('#box1').slideDown('slow');`  |
| `.slideToggle()` | `$('p').slideToggle(300);`       |

What goes in the parentheses? **Animation speed**.

---

## Events

We use the `on()` method to handle events in jQuery.

```js
$('li').on('click', () => {
  //	your	code	here
});
```

---

## Common DOM events

| Mouse        | Keyboard   | Form     | Document |
| ------------ | ---------- | -------- | -------- |
| `click`      | `keypress` | `submit` | `rezise` |
| `dblclicl`   | `keydown`  | `change` | `scroll` |
| `mouseenter` | `keyup`    | `focus`  |          |
| `mouseleave` |            | `blur`   |

[Full list](https://developer.mozilla.org/en-US/docs/Web/Events)

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

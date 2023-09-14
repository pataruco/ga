# .center[intro jQuery]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

## Agenda

- JavaScript Recap
- jQuery Intro
- jQuery Practical

---

## Objective

Make creating interaction with JS more approachable.

---

## jQuery

As much as jQuery is a nicer was to add interaction... jQuery is JavaScript

---

## jQuery

jQuery is a cross browswer JavaScript library designed to simplify the client side scripting of HTML.

---

## jQuery example

[Example](https://codepen.io/pataruco/pen/PeZdGZ)

---

## jQuery provides

- More consistent and readable syntax
- More powerful element selecting
- Easier classname and CSS manipulation
- Powerful event binding and handling Animation
- AJAX (asyncronous requests)
- Loads of plugins

---

## jQuery

Adding jQuery to your website

```html
<script src="js/jquery-latest.min.js"></script>

<!-- or -->

<script src="http://code.jquery.com/jquery-3.3.1.js"></script>
```

---

## jQuery

jQuery gives us a short, human readable, cross browser friendly syntax for selecting and interacting with elements

```js
$('.content-box').hide();
```

---

## jQuery

jQuery selectors are just like CSS

```js
$('p').fadeIn();
$('.lead-paragraph').show();
$('#feature p').slideUp();
```

---

## jQuery

- `$` is a function.
- We can use it to find elements on a page:
- The function returns a set of HTML elements you have selected as a jQuery object. This object provides lots of methods (actions) so now you can do stuff to that selection.

```js
$("#searchBox") $(".errors")
```

---

## Look familiar?

```js
document.getElementById('searchBox'); // Javascript
$('#searchBox'); // jQuery
```

---

## jQuery

jQuery is a library that we have to load first before running our own JS so we only want to run

jQuery when the document is ready

```js
$(document).ready(function() {
  // your jQuery goes here and will run when the page is ready
});
```

---

## jQuery

Really useful documentation about everything jQuery can do: [http://jquery.com/](http://jquery.com/)

---

## Exercise

[Color Switcher](https://codepen.io/pataruco/pen/BxoPEK)

---

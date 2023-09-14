class: center, middle

# .center[Forms]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

# Agenda

- Forms & Inputs
- Form Solutions
- Application form Lab

---

# Forms

Forms are the only way (without JavaScript) to have the user interact with a website.

We create the form in HTML, just like the rest of our content.

---

# `form` tag

```html
<!-- Simple form which will send a GET request -->
<form action="/register" method="get">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>
```

---

# `form` tag

The `form` tag is a container for a series of inputs.
When the form is submitted, all the data is sent to the server and processed on the back end.

Attributes on the form tag determine:

- Where the data is sent (`action`)
- What method the data is sent by `method`

---

# Forms

What type of information might we want to send in a form?

---

# Forms inputs

- `text`
- `textarea`
- `email`, `password`, `url`, `search`, `number`, `tel`, `color`, `date` `file`
- `range`
- `select` menu (dropdown)
- `checkboxes`
- `radio` buttons
- `submit`, `reset`, `button`

---

# Forms inputs

<iframe height='265' scrolling='no' title='GA London Input' src='//codepen.io/pataruco/embed/BjoQRK/?height=265&theme-id=0&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pataruco/pen/BjoQRK/'>GA London Input</a> by Pedro Martin (<a href='https://codepen.io/pataruco'>@pataruco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[CodePen](https://codepen.io/pataruco/pen/BjoQRK)

---

# Form inputs

An example of a form input and some of the available attributes

```html
<input
  id="quantity"
  max="10"
  min="1"
  name="qty"
  placeholder="How many?"
  type="number"
  value="1"
/>
```

---

# Form inputs

Attributes on the inputs determine:

- The `type` of input
- The `name` of the input used on the back-end
- An `id` for the input - used to link inputs to their labels
- The initial `value` of the input (optional)
- `min`imum or `max`imum values (optional for numeric types)
- A `placeholder` message (optional)

---

# `text`, `email`, `password`

- `text`: regular text input - fallback for non HTML5 browsers
- `email`: choose the right keyboard on mobile Automatically validates email addresses
- `password`: hides characters as typed

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```

---

# Buttons

Special buttons

```html
<input type="submit" value="Go!" /> <input type="reset" value="Reset" />
```

Creates a file upload element

```html
<input type="file" />
```

Creates clickable button

```html
<input type="button" /> <button>I am a button<button></button></button>
```

---

# Select and option

A `select` dropdown is filled with many `option`s

```html
<select id="country" name="country">
  <option value="AF">Afghanistan</option>
  <option value="AX">Åland Islands</option>
  <option value="AL">Albania</option>
  <option value="DZ">Algeria</option>
  <option value="AS">American Samoa</option>
  ...
</select>
```

---

# Select and option groups

We can group common options together for better UX.

```html
<select>
  <optgroup>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
  </optgroup>
  <optgroup>
    <option value="AF">Afghanistan</option>
    <option value="AX">Åland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    ...
  </optgroup>
</select>
```

---

# Labels

Each `<input>` should have a corresponding `<label>` tag to let the user know what needs to be flled in.
The label and its input are linked with a `for` attribute on the **label** that matches the **input** `id`

```html
<label for="first-name">First Name</label> <input type="text" id="first-name" />
```

---

# html5 forms **not official** reference guide

[http://www.wufoo.com/html5/](http://www.wufoo.com/html5/)

---

## What if our users give us the wrong kind of data?

## Or doesn't fill in the fields we want them to?

---

# Validation

We can check if all the required fields have been filled out with the correct kind of information by using validation.

- HTML5 validation is available for free!
- We can style the validation states with `:valid` and :`invalid` pseudo classes
- Validation is also possible with JavaScript or on the server.

---

# Form solutions

What if I actually want someone to be able to send me the form info?

There are a handful of third-party solutions that allow you to put a working form on a static website.

- [Wufoo](https://www.wufoo.com)
- [Kontactr](https://kontactr.com/)
- [Google Forms](https://docs.google.com/forms)
- [FormSpree](formspreee.io)

---

# Lab

[Starter code](https://github.com/pataruco/ga-fewd-assets/raw/master/forms/starter-code.zip)

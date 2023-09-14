# .center[Sass]

## .center[Pedro Martin]

.logo[![](https://pataruco.s3.amazonaws.com/ga/assets/ga.svg)]

---

## Sass

Objective

- Add superpowers to your CSS

---

## Sass

- Sass is a pre-processor that gives **CSS** super powers.
- It's very similar to CSS but has lots of extra features that make writing your styling code faster, more eficient, more maintainable and more organised.
- Sass stands for **S**yntastically **A**wesomes **S**tyle **S**heets and was invented by Hampton Catlin in 2006.

---

## Sass

Sass syntax and CSS syntax are almost idential though, so learning CSS first is no bad thing. The identical syntax also makes it easy to switch to **Sass** from **CSS**.

---

## Sass

Sass provides lots of features that aren't possible or don't exist in normal CSS.

---

## Sass

Sass can do this because the code you write is run through a compiler before it reaches the browser.

The end result is just normal CSS.

---

## Sass files

We write Sass in a fille with a `.scss` file extension.

e.g.
`style.scss`

Any file with a `.scss` extension will be compiled into a corresponding `.css` file of the same name.

---

## Sass files

- Files that start with an **\_**underscore character aren't compiled but can be `@imported` into a Sass file that will be compiled.

- These files are called Sass partials and might look like `_nav.scss` or `_about-page.scss`.

- This helps with code organisation and instead of having one massive CSS file, we can have lots of smaller Sass files that get combined into one by the compiler.

---

## Sass

The Sass compiler enables us to do more powerful things like:

- Combining and compressing files
- Nested selectors and media queries
- Variables
- Maths
- Colour manipulation
- Functions
- Mixins
- Loops
- Conditional Statements
- And much more!

---

## Sass syntax

Sass looks a bit like this:

```scss
.site-header {
  .logo {
    float: left;
  }
  .nav {
    @include horizontal-nav;
    color: $color-brand;
  }
}
.site-content {
  // more styles
}
```

---

## Sassy CSS

[https://codepen.io/pataruco/pen/deNPmd](https://codepen.io/pataruco/pen/deNPmd)

---

## Compiling Sass

We can use a tool like Codepen to compile our styles when
experimenting.

But if we want to use Sass in a project we're building
locally, we need an application that can compile Sass for us.

---

## Compiling sass

Sass is often compiled via the command line but this is quite advanced for beginners.
Here are some free apps you can use instead:

- [Scout](https://scout-app.io/)
- [Koala](http://koala-app.com/)
- [Compass](http://compass-style.org/)

---

## Sass Importing partials

Partials allow us to create smaller CSS files that can be imported into a larger file.

```scss
// style.scss

@import 'normalize';
@import 'variables';
@import 'elements';
@import 'helpers';
// etc
```

---

## Sass file architecture

By using partials, we can utilise better file architecture patterns like [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) to make our projects scale better.

.image-half[![](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/01083650/itcss-layers2.svg)]

---

## Sass variables

Just like JavaScript, variables allow us to store values for use at a later time in our code.

```scss
$font-family-base: Helvetica, sans-serif;
$font-family-heading: 'Times New Roman', serif;

body {
  font-family: $font-family-base;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $font-family-heading;
}
```

---

## Sass nesting

_HTML_ has a clear nesting structure, whereas CSS doesn't. With Sass you can nest your selectors for a clearer visual hierarchy.

```scss
header {
  display: flex;
  justify-content: space-between;

  h1 {
    color: red;
  }

  ul {
    display: flex;
    justify-content: space-between;
    li {
      flex-basis: 100%;
      max-width: 25%;
    }
  }
}
```

---

## Sass nesting downfalls

Every level that you nest adds specificity to your selector chain.

Therefore it is recommended to not go beyond 4 levels of nesting in your Sass code.

---

## Sass mixins

Mixins allow you to create reusable CSS rules that you can pass values to.

```scss
@mixin cta($text-color, $bg-color, $border-color) {
  color: $text-color;
  background-color: $bg-color;
  border-color: $border-color;
}

.cta-primary {
  @include cta(blue, black, white);
}

.cta-secondary {
  @include cta(yellow, rebeccapurple, yellow);
}
```

---

## Sass extends

Extends allow us to create sets of shareable CSS properties that we can use throughout our code.

```scss
%large-text {
  font-size: 2.6rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 1px;
}

.strapline,
.quote {
  @extend %large-text;
}
```

---

## What is BEM?

**Block** **Element** **Modifier** is a naming convention that makes our front-end code much easier to maintain.

By creating completely isolated components, we very easily reuse our front-end code, even from project to project!

---

## Block

The block encapsulates a group of elements that can, if needed, be shared around.

```html
<!-- block -->

<section class="intro">
  <!-- nested HTML -->
</section>
```

---

## Element

Any element is tied to its block and cannot be shared around exclusive of it.

```html
<!-- block -->

<section class="intro">
  <!-- Element -->
  <article class="intro__content">
    <h2>Article title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime
      perferendis esse error quia molestiae asperiores ipsam quae possimus
      facilis minima sit nemo, aspernatur ullam, velit temporibus tempore
      reiciendis neque.
    </p>
  </article>
</section>
```

---

## Modifier

Modifiers can be used to change the appearance of an element or group of elements.

```html
<!-- block -->

<section class="intro">
  <!-- Element -->
  <article class="intro__content intro__content--hightlighted">
    <h2>Article title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime
      perferendis esse error quia molestiae asperiores ipsam quae possimus
      facilis minima sit nemo, aspernatur ullam, velit temporibus tempore
      reiciendis neque.
    </p>
  </article>
</section>
```

---

## Lab

Let's refactor Startup Matchmaker using Sass to make our CSS cleaner and more maintainable.

- [stater code](https://github.com/pataruco/ga-fewd-assets/raw/master/startup-matchmaker/solution.zip)

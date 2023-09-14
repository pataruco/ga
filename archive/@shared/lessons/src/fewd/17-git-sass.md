class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>Git and Sass</h1>
</div>

---

class: bg-yellow, fullscreen

# Git & GitHub

---

## Version control

Have you ever lost or overwritten some work that took you ages?

---

## Version control

**Version control** is a system that enables you to take regular _snapshots_ of your work in progress called _commits_. This enables:

- Recording the history of a project
- Constant backups of your work
- A more organised development workflow
- A safer way to collaborate with others
- Tools for publishing your work online

---

## Version control

- Keeping your code organised helps you be more efficient.
- Keeping your work backed up helps you stay sane.
- Going back over the history of a project helps you learn.

---

## Git

Git is a version control system (VCS) that saves the state of your project's files and folders; basically, it takes a **'snapshot'** of what all your files look like at a given moment and stores a reference to that **'snapshot'**.

---

## GitHub

GitHub is a platform that makes it easy to manage git repositories. It provides a graphical interface to help you review and manage your code repos.

The files are hosted in the cloud so you can share the finished product with other people.

---

## Why are Git & GitHub valuable?

- Stores a history of the code, which allows developers to go back in time if something breaks
- Allows multiple developers to work on the same project
- GitHub tracks changes so you can see who worked on what (and who broke what)
- GitHub allows for feedback to be given on the code, which can increase code quality

---

## The lingo

- **Repository/Repo**: a central location in which data - typically about a project - is stored and managed
- **Clone**: download data/code from the cloud to your local machine (laptop, computer, etc.)
- **Commit**: save a version of your project to git
- **Branch**: create an additional track for the code that is separate from the 'master' branch. This allows you to work on a feature/issue without affecting the main code until your feature is finished.

---

## Commits

Think of each commit as if you copied your whole project folder and saved it somewhere safe.

This folder is labeled with a unique ID and recorded in a chronological timeline.

If you want to view what a file looked like at any point in history you can open up the folder with a certain commit ID and take a look at the files inside.

---

## Commits

Instead of making a complete copy of your project for every snapshot, Version control systems can just save the differences between files.

This keeps the history small in file size and quick to work with.

---

## Version control process

A typical git workflow goes like this:

- Create a project folder
- Initialize it as a git project
- Write some code
- Check the status of what files/folders have changed
- Mark one or more files to be added into the next snapshot

---

## Version control process

- Take a snapshot and write a message describing what you did and why
- Write some more code
- Create the next snapshot
- Rinse and repeat often
- Push your changes to an online repository

---

## Version control process

Commit often even as you experiment.

Push regularly once everything is in good shape.

---

## Commit messages

Think of each commit message like an email. You have a brief subject and (an optional) longer description to describe what you did and why

---

## Git for final projects

### GitHub

- Open an account on [GitHub](https://github.com/join)
- Sign up
- Download [GitHub desktop](https://desktop.github.com/)
- Associate your GitHub account with GitHub desktop

---

## GitHub desktop workflow

### Steps

**Creating your repo**

.row[
.column[In the **File** menu, click **Add Local Repository**.
![](https://docs.github.com/assets/images/help/desktop/add-local-repository-mac.png)
]
.column[Click **Choose**... and, using the Finder window, navigate to the local repository you want to add.
![](https://docs.github.com/assets/images/help/desktop/add-repo-choose-button-mac.png)
]
.column[Click **Add Repository**.
![](https://docs.github.com/assets/images/help/desktop/add-repository-button-mac.png)
]
]

> From GitHub Desktop [documentation](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)

---

## GitHub desktop workflow

### Steps

**Committing**

.row[
.column[Create a new branch, or select an existing branch by clicking **Current Branch** on the toolbar and selecting the branch from the list.
![](https://docs.github.com/assets/images/help/desktop/click-branch-in-drop-down.png)
]
.column[As you make changes to files in your text editor and save them locally, you will also see the changes in GitHub Desktop.
![](https://docs.github.com/assets/images/help/desktop/commit-all.png)
]
]

> From GitHub Desktop [documentation](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)

---

## GitHub desktop workflow

### Steps

**Committing**

.row[
.column[Once you're satisfied with the changes you've chosen to include in your commit, write your commit message and push your changes.
]
.column[
.image-one-fourth[
![](https://docs.github.com/assets/images/help/desktop/commit-message.png)
]
]
]

> From GitHub Desktop [documentation](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)

---

## GitHub desktop workflow

### Steps

**Push**

.row[
.column[Click **Push origin** to push your local changes to the remote repository.]
.column[
![](https://docs.github.com/assets/images/help/desktop/push-origin-button.png)
]
]

> From GitHub Desktop [documentation](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)

---

class: bg-pink, fullscreen

# Sass

---

## Sass

- Sass is a pre-processor that gives **CSS** super powers.
- It's very similar to CSS but has lots of extra features that make writing your styling code faster, more eficient, more maintainable and more organised.
- Sass stands for **S**yntastically **A**wesomes **S**tyle **S**heets and was invented by Hampton Catlin in 2006.

---

## Sass

Sass syntax and CSS syntax are almost idential though, so learning CSS first is no bad thing. The identical syntax also makes it easy to switch to **Sass** from **CSS**.

Sass provides lots of features that aren't possible or don't exist in normal CSS.

Sass can do this because the code you write is run through a compiler before it reaches the browser.

The end result is just normal CSS.

> [Sass docs](https://sass-lang.com/)

---

## Sass files

We write Sass in a fille with a `.scss` file extension.

e.g.
`style.scss`

Any file with a `.scss` extension will be compiled into a corresponding `.css` file of the same name.

---

## Sass files

- Files that start with an `_` underscore character aren't compiled but can be `@imported` into a Sass file that will be compiled.

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

## Compiling Sass

Sass is often compiled via the command line but this is quite advanced for beginners.
Here are some free apps you can use instead:

- [Scout](https://scout-app.io/)
- [Koala](http://koala-app.com/)

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

## Lab &#x1F9EA;

Let's refactor Relaxr using Sass to make our CSS cleaner and more maintainable.

- [starter code](https://github.com/pataruco/fewd/raw/master/homeworks/relaxr-1/relaxr-1-solution-code.zip)

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

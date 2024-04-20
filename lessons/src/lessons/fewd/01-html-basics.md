class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>01 Orientation and introduction to HTML</h1>
</div>

---

## Learning Objectives

In this lesson, you will:

- Get set up with everything we need for the course.
- Create HTML documents using common element tags.
- Inspect web pages using the browser’s developer tools.
- Describe the relationship between HTML, CSS, and JavaScript in websites.

---

## Meet the Team - Pedro Martin

- Senior Software engineer at Red Badger.
- Former science teacher.
- General Assembly alumni 2015.
- <a href="https://generalassemb.ly/instructors/pedro-martin/7012" target="_blank" rel="noopener noreferrer" class="external-link">Teaching courses and workshops at General Assembly since 2015</a>
- Originally from Caracas, Venezuela 🇻🇪.
- <a href="https://www.theguardian.com/artanddesign/2015/jul/20/hanging-by-thread-rats-keep-skyscrapers-standing" target="_blank" rel="noopener noreferrer" class="external-link">Former Rope Access Technician (RAT 🐀)</a>
- Hardcore Star Wars fan.

---

## Tell us a highlight from a random year

- <a  href="https://fewd.pataruco.dev/resources/random-year" target="_blank" rel="noopener noreferrer"  class="external-link">Go to the random year generator</a>       
- Enter your year of birth
- Tell us your name?
- Tell us a highlight from your life that happened that year
- Where are you in the world?
- One thing you’re hoping to get out of this course?
- Your favourite ice cream flavour?
- Popcorn 🍿

---

## The Student Experience

- Open and friendly learning environment
- Supportive, collaborative
- Friendly yet challenging
- Learn by doing - and making mistakes!
- Be curious - ask lots of questions
- Remember: no question is a stupid question

---

## Our Promise

- We’ll focus on practical skills
- We’ll teach you how to continue learning

---

## Learn by Doing

- Throughout the course we'll be creating lots of small projects to learn the various languages and techniques.

- The goal is to work towards creating a final project of your choosing and presenting it to the class on the final session

---

## Process First, Syntax Second

- This course is very practical but aims to teach you a process so you can replicate the material in your own projects.

- You don't need to remember everything we cover in detail. You just need to remember the gist of it so you look things up online and in the notes.

---

## Course Outline

<ol class="row">
  <div>
    <li>Intro to HTML</li>
    <li>Intro to CSS</li>
    <li>Box Model</li>
    <li>CSS Selectors, Specificity & Floats</li>
    <li>Flexbox</li>
    <li>Positioning</li>
    <li>Responsive Web development</li>
    <li>Responsive Web development lab &#x1F9EA;</li>
    <li>Intro to JavaScript</li>
    <li>Document Object Model</li>
  </div>
  <div>
    <li>Conditional statements</li>
    <li>Arrays and loops</li>
    <li>CSS animations</li>
    <li>JavaScript plugins</li>
    <li>Forms</li>
    <li>API Requests and Responses</li>
    <li>Git and Sass</li>
    <li>Accessibility and SVG</li>
    <li>UI Frameworks / Final Project Lab &#x1F9EA;</li>
    <li>Final Project Presentation</li>
  </div>
</ol>

> Homework weeks 1-6

> Project work weeks 7-10

---

## Install Fest

### Tools We’ll Use

- [Slack](https://slack.com/intl/en-gb/downloads/) - for group communication
- [VSCode](https://code.visualstudio.com/Download) - a code editor
- [Google Chrome](https://www.google.com/intl/en_uk/chrome/) / [Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/new/) - web browser
- [CodePen](https://codepen.io/) - online code playground

---

## Install Fest

### Step by Step

- Download and install Slack desktop app and sign in
- Make sure you have access to the private Slack channel for the class
- Download and install VS Code (for Mac or Windows)
- Install the VS Code extensions
  - [Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Sign up for a Google Account (if you don’t have one already)
- Send us your Google Account email via Slack
- Create a free account on codepen.io

---

## How the Web Works?

<div class="row">
  <div>
    <picture>
      <img
        src="https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview/web_application_with_html_and_steps.png"
        alt="Request and response cycle"
      />
    </picture>
  </div>
  <div>
    <ol>
      <li>Browser send a HTTP request to the server</li>
      <li>
        Requests for dynamic resources are forwarded to server-side code
        (application)
      </li>
      <li>
        Application interprets the request, reads required information from the
        database
      </li>
      <li>Combines the retrieved data with HTML templates</li>
      <li>Sends back a response containing the generated HTML</li>
      <li>Browser read response and re render</li>
    </ol>
  </div>
</div>

---

## Tell the difference...

Please, tell us the difference between:

### Frontend vs Backend

---

## Frontend vs. Backend

The development process can be broken into two areas:

### Front-End

- How things look to the user
- Involves: images, content, structure
- HTML, CSS, and JavaScript

---

### Back-End

- How things work
- Involves: “business logic” and “data”
- Ruby, PHP, C++, Java, etc.

---

## Tell the difference...

Please, tell us the difference between:

### Website vs Webpage vs Web server

---

## The 3 Layers of the Web

<div class="row">
  <div>
    <picture>
      <img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/cake.png" alt="3 layers of the web" class="image-half">
    </picture>
  </div>
  <div>
    <ol>
      <li>HTML is the markup language that we use to structure and give meaning to our web content.</li>
      <li>CSS is a language of style rules that we use to apply styling to our HTML content.</li>
      <li>JavaScript is a scripting language that enables you to manipulate dynamically content and style.</li>
    </ol>
  </div>
</div>

---

## Intro to HTML

**HTML** _(Hypertext Markup Language)_ is not a programming language; it is a markup language used to tell your browser how to structure the web pages you visit.

`My cat is very grumpy`

```html
<p>My cat is very grumpy</p>
```

---

## Anatomy of an HTML element

![](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-small.png)

---

## Nesting elements

### What is the difference?

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

#### between

```html
<p>My cat is <strong>very grumpy.</p></strong>
```

---

## Nesting elements

### Good:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

### ~~Bad~~:

```html
<p>My cat is <strong>very grumpy.</p></strong>
```

---

## Block versus inline elements

There are two important categories of elements in HTML which you should know about. They are **block-level** elements and **inline** elements.

---

## Block

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

## Empty elements

Are self closing elements

```html
<img
  src="https://source.unsplash.com/1600x900/?beach"
  alt="A random beach picture"
/>
<hr />
<input type="color" id="color" />
```

---

## HTML text fundamentals

### Headings and Paragraphs

```html
<p>I am a paragraph, oh yes I am.</p>
<h1>I am the title of the story.</h1>
```

---

## HTML text fundamentals

### Implementing structural hierarchy

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
```

---

## HTML text fundamentals

### Why do we need semantics?

```html
<h1>This is a top level heading</h1>
<span style="font-size: 32px; margin: 21px 0;">
  Is this a top level heading?
</span>
```

---

## HTML text fundamentals

### Lists

#### Unordered

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

---

## HTML text fundamentals

### Lists

#### Ordered

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

## Code along

<h3>
  <a href="https://github.com/pataruco/fewd/raw/master/labs/press-release/press-release-starter-code.zip" class="download-link">Press release exercise</a>
</h3>

<a href="https://github.com/pataruco/fewd/raw/master/labs/press-release/press-release-solution-code.zip" class="download-link">solution</a>

---

class: frontpage

<div>
  <h2>Front-End Web Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

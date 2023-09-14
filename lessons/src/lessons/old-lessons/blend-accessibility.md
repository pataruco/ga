class: middle

# .center[Intro to Web accessibility]

---

# Agenda

- Common definition
- Broad definition
- Why should we care?
  - Ethics
  - Law
  - Business
- Who are the people responsible to deliver?
- How can we start? (from the technical perspective) (with exercises and demos)
  - Tools
  - Tips
  - Patterns
- Conclusions
- Pub?

---

# Hidden agenda

- Inspire/convince digital product delivery teams to bring accessibility to the core of development

---

# ⚠️ Warnings ⚠️

- Most of the following content is based on my opinions and experiences
- This content is just scratching the surface on accessibility on the Web

---

# Tell us a highlight from a random year

- [Go to the random year generator](https://pataruco.github.io/ga-fewd-assets/random-year/index.html)
- Enter your year of birth
- Tell us your name
- Tell us a highlight from your life that happened that year
- Where are you in the world?
- One thing you’re hoping to get out of this course?
- Your favourite ice cream flavour?
- Popcorn 🍿

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

# Who are the people responsible to deliver?

**⚠️ The product delivery team!**

To mention some:

- Content designers:
  - Following [plain english standards](https://en.wikipedia.org/wiki/Plain_English)
  - Following content design standards (e.g.: [Content design: planning, writing and managing content](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) , from gov.uk)
- UX/Product designers
  - Accessibility usablity tests
  - Focus states
  - Colour contrast
  - Information by text / no by colour
- Data analyst
  - A/B accessibility testing
- Product owner
  - Enforce accessibility in all the process of product development

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

## Semantic HTML

### Trivia

Let’s do a mobbing session and try to resolve the HTML Tags memory test

[https://codepen.io/plfstr/full/zYqQeRw](https://codepen.io/plfstr/full/zYqQeRw)

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

# A11y as core

## Microdata

> Microdata, as described from schema.org and/or the Microdata spec, are attributes to help browsers build out a machine-readable data structure for browsers to consume. It can be thought of as key:value pairs much like a JSON object.

from [How Does HTML Microdata Help With Accessibility?](https://scottvinkle.me/blogs/work/how-html-microdata-helps-with-accessibility)

---

```html
<article itemscope itemtype="http://schema.org/BlogPosting">
  <header>
    <h1 itemprop="headline">My Blog Post Title</h1>
    <p itemprop="description">A little extra on what this post is about</p>
    <ul>
      <li>
        Written by
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <span itemprop="name">Scott</span>
        </span>
      </li>
      <li>
        <time
          datetime="2020-01-09"
          itemprop="dateCreated pubdate datePublished"
        >
          January 9th, 2020
        </time>
      </li>
    </ul>
  </header>
  <img src="article-image.jpg" alt="good looking people" itemprop="image" />
  <div itemprop="articleBody">
    <p>
      Lorem ipsum dolor sit ame, consectetur adipiscing elit. Donec a quam
      rhoncus, tincidunt ipsum non, ultricies augue…
    </p>
  </div>
</article>
```

---

# A11y as core

## Microdata

And it is part of HTML live standard https://html.spec.whatwg.org/multipage/

---

# A11y as core

## Linters

Add `pre-commit` hooks to git to evaluate code before commiting and push to remote

- [prettier](https://prettier.io/): it would help you to catch errors if set incorrect WAI-ARIA HTML tags
- [eslint](https://eslint.org/): with [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

---

# A11y as core

## CLI tools

- [pa11y](https://github.com/pa11y/pa11y): It runs accessibility tests on your pages via the command line or Node.js
  ```sh
  yarn global add pa11y
  pa11y https://www.bbc.co.uk/news
  ```
- [lynx](https://lynx.invisible-island.net/): Is a text web browser
  ```sh
  brew install lynx
  lynx
  ```

---

# A11y as core

## Manual tests using VoiceOver

Enable accessibility shortcuts in you mac

**System Preferences** > **Accessibility** > **Show accessibility status in menu bar**

And use it while you are developing

---

# Why accessibility is important to me?

- Healthy communities take care of the most vulnerable
- My life was saved by a person with disabilities

---

# Today I learnt (TIL)

---

class: middle

# .center[Gracias]

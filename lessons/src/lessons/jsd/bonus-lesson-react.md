class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>Intro to React</h1>
</div>

---

## Learning objectives

- Creating a React app with Create React App
- Anatomy of a React Component
- React props
- React state
- Component lifecycle

---

class: code-along

# Example

[Download examples](https://github.com/pataruco/jsd/raw/master/labs/react/react-solution-code.zip)

---

## Create React App (CRA)

- An <a href="https://www.npmjs.com/package/create-react-app" class="external-link">NPM package</a> that installs all necessary packages to create a React application
- Accepts flags to tailor the template to your needs
- Executed in the terminal

```sh
yarn global add create-react-app
yarn create create-react-app web
```

> <a href="https://create-react-app.dev/docs/getting-started" class="external-link">Official documentation</a>

---

## React components

.row[
.col[

### DOM API

```js
const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});
```

]
.col[

### React component

```js
const Element = {
  type: 'div',
  props: {
    style: {
      background: 'blue',
      width: 50,
      height: 50,
    },
    onClick: () => console.log('clicked'),
  },
};
```

]
]

---

## React components

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React component

```js
const container = document.querySelector('#root');

const Element = {
  type: 'div',
  props: {
    style: {
      background: 'blue',
      width: 50,
      height: 50,
    },
    onClick: () => console.log('clicked'),
  },
};

ReactDOM.render(Element, domContainer);
```

]
]

---

## React components

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React component

```js
const container = document.querySelector('#root');

const Element = React.createElement('div', {
  style: {
    background: 'blue',
    width: 50,
    height: 50,
  },
  onClick: () => console.log('clicked'),
});

ReactDOM.render(Element, domContainer);
```

]
]

---

## React components

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React component

```jsx
const container = document.querySelector('#root');

const Element = (
  <div
    style={{ width: 50, height: 50, background: 'blue' }}
    onClick={() => console.log('Clicked')}
  />
);

ReactDOM.render(Element, domContainer);
```

]
]

---

## React components

.row[
.col[

### DOM API

```js
const container = document.querySelector('#root');

const view = document.createElement('div');
view.style.background = 'blue';
view.style.width = 50;
view.style.height = 50;
view.addEventListener('click', (event) => {
  console.log('clicked');
});

domContainer.appendChild(view);
```

]
.col[

### React component

```jsx
const container = document.querySelector('#root');

const Counter = () => (
  <div
    style={{ width: 50, height: 50, background: 'blue' }}
    onClick={() => console.log('Clicked')}
  />
);

ReactDOM.render(<Counter />, domContainer);
```

]
]

---

## React components

.row[
.col[

### DOM API

```txt
        ┌─────────┐
        │Business │
        │  logic  │
        └─────────┘
             ▲           UI
             │          API
    ┌────────┴──────┐
─ ─ ┼ ─ ─ ─ ─ ─ ─ ─ ┼ ─ ─ ─
    │               │
    ▼               │
┌──────┐        ┌──────┐
│state │        │events│
└──────┘        └──────┘
```

]
.col[

### React

```txt

        ┌─────────┐
        │Business │
        │  logic  │
        └─────────┘
             ▲
             ▼
        ┌─────────┐
        │  React  │
        └─────────┘
             ▲
             │           UI
    ┌────────┴──────┐   API
─ ─ ┼ ─ ─ ─ ─ ─ ─ ─ ┼ ─ ─ ─
    │               │
    ▼               │
┌──────┐        ┌──────┐
│state │        │events│
└──────┘        └──────┘
```

]
]

---

## React components

.row[
.column[

```jsx
// Import packages and components
import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

// Export the component
export default MyComponent;
```

]
.column[

- Components can be created with function or arrow functions: `const`
- Components must be exported
- Component names start with an upper case letter
- Components must return JSX
  ]
  ]

---

## React properties (props)

.row[
.column[

Component file

```jsx
import React from 'react';

function MyComponent(props) {
  return <h1>{props.greeting}</h1>;
}

export default MyComponent;
```

Render file

```jsx
<MyComponent greeting="Hello Word">
```

How is rendered in the browser

```html
<h1>Hello Word</h1>
```

]
.column[

- Reacts equivalent to function parameters
- Grouped together into an object by default
- Best practice is to call them props when writing a component
- Can be destructured in components for better readability
- Can have default values
  ]
  ]

---

## React state

- A description of the component and its features
- React developers refer to "setting state"
- Controls the data inside the component

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

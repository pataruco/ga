import Week from '../../components/week';

const resources = [
  [
    'MDN: for...in',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in',
  ],
  [
    'MDN: prototype call',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call',
  ],
  [
    'MDN: Inheritance in JavaScript',
    'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance',
  ],
  [
    'MDN: Inheritance and the prototype chain',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain',
  ],
  [
    'MDN: Closures',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
  ],
  [
    'MDN: this',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
  ],
];

const weekConfig = {
  firstLessonTitle: 'Prototypal Inheritance',
  resources,
  secondLessonTitle: 'Closures & this',
  weekNumber: 8,
};

const Week8 = () => <Week {...weekConfig} />;

export default Week8;

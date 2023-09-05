import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 5;

export const week5: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content: 'MDN: JavaScript Introduction',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',
    },
    {
      content: 'MDN: Learning JavaScript',
      link: 'https://developer.mozilla.org/en-US/Learn/JavaScript',
    },
    {
      content:
        'Stack Overflow: When should I use a semicolon after curly braces?',
      link: 'https://stackoverflow.com/questions/2717949/when-should-i-use-a-semicolon-after-curly-braces',
    },
    {
      content: 'MDN: Document',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document',
    },
    {
      content: 'MDN: Window',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Window',
    },
    {
      content: 'MDN: Web APIs',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API',
    },
    {
      content: 'MDN: Event object',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Event',
    },
    {
      content: 'Read through MDN JavaScript Basics',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
    },
    {
      content: "Start Code Academy's Introduction to JavaScript",
      link: 'https://www.codecademy.com/learn/introduction-to-javascript',
    },
  ],
};

export default week5;

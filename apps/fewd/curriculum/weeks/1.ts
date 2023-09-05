import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 1;

export const week1: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content: 'Intro to HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      content: 'Intro to HTML 5',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    },
    {
      content: 'History of the Web',
      link: 'https://webfoundation.org/about/vision/history-of-the-web/',
    },
    {
      content: 'History of the Web (YouTube video)',
      link: 'https://www.youtube.com/watch?v=h8K49dD52WA',
    },
    {
      content: 'Invention of Internet',
      link: 'https://www.history.com/topics/inventions/invention-of-the-internet',
    },
    {
      content: 'How CSS works?',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works',
    },
    {
      content: 'Intro to CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      content: 'Intro to Document Object Model (DOM)',
      link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
    },
    {
      content: "The Difference Between 'Block' and 'Inline'",
      link: 'https://www.impressivewebs.com/difference-block-inline-css/',
    },
    {
      content: 'MDN: Block-level elements',
      link: 'https://developer.mozilla.org/en/docs/Web/HTML/Block-level_elements',
    },
    {
      content: 'MDN: Inline elements',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements',
    },
    {
      content: 'MDN: CSS is weird (YouTube video)',
      link: 'https://youtu.be/aHUtMbJw8iA',
    },
    {
      content: "Complete a challenge that you haven't done yet on",
      link: 'https://learn.shayhowe.com/html-css/getting-to-know-html/',
    },
    {
      content: 'Read through Getting to know CSS',
      link: 'https://learn.shayhowe.com/html-css/getting-to-know-css/',
    },
  ],
};

export default week1;

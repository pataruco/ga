import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 8;

export const week8: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content: 'MDN: Input',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
    },
    {
      content: 'HTML5 Doctor: Input Types',
      link: 'http://html5doctor.com/html5-forms-input-types/',
    },
    {
      content: 'Input Types',
      link: 'https://robertnyman.com/html5/forms/input-types.html',
    },
    {
      content: 'MDN: Textarea',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea',
    },
    {
      content: 'CSS Tricks: Creating great web forms',
      link: 'https://css-tricks.com/tips-for-creating-great-web-forms/',
    },
    {
      content: 'MDN: Sending form data',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data',
    },
    {
      content: 'HTML Goodies: So you want to build a form?',
      link: 'http://www.htmlgoodies.com/tutorials/forms/article.php/3479121',
    },
    {
      content: 'Try a challenge on Frontend Mentor',
      link: 'https://www.frontendmentor.io',
    },
    {
      content: "Read Shay Howe's Building Forms",
      link: 'http://learn.shayhowe.com/html-css/building-forms/',
    },
    {
      content: "Read MDN's Your First HTML Form article",
      link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form',
    },
    {
      content: 'Read through Writing your best code',
      link: 'http://learn.shayhowe.com/html-css/writing-your-best-code/',
    },
    {
      content: "Complete Code Academy's  Make a website course",
      link: 'https://www.codecademy.com/learn/make-a-website',
    },
  ],
};

export default week8;

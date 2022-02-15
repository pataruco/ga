import Week from '../../components/week';

const resources = [
  [
    'MDN: Input',
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
  ],
  [
    'HTML5 Doctor: Input Types',
    'http://html5doctor.com/html5-forms-input-types/',
  ],
  ['Input Types', 'https://robertnyman.com/html5/forms/input-types.html'],
  [
    'MDN: Textarea',
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea',
  ],
  [
    'CSS Tricks: Creating great web forms',
    'https://css-tricks.com/tips-for-creating-great-web-forms/',
  ],
  [
    'MDN: Sending form data',
    'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data',
  ],
  [
    'HTML Goodies: So you want to build a form?',
    'http://www.htmlgoodies.com/tutorials/forms/article.php/3479121',
  ],
];

const bonuses = [
  ['Try a challenge on Frontend Mentor', 'https://www.frontendmentor.io'],
  [
    "Read Shay Howe's Building Forms",
    'http://learn.shayhowe.com/html-css/building-forms/',
  ],
  [
    "Read MDN's Your First HTML Form article",
    'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form',
  ],
  [
    'Read through Writing your best code',
    'http://learn.shayhowe.com/html-css/writing-your-best-code/',
  ],
  [
    "Complete Code Academy's  Make a website course",
    'https://www.codecademy.com/learn/make-a-website',
  ],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Forms',
  resources,
  secondLessonTitle: 'API Requests and Responses',
  weekNumber: 8,
};

const Week8 = () => <Week {...weekConfig} />;

export default Week8;

import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 8;

export const week8Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Forms',
    path: `/lessons/forms`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Forms" />
        <SlidesDeck slidesDeckPath={getLessonPath('15-forms')} />
      </>
    ),
  },
  lesson2: {
    name: 'API Requests and Responses',
    path: `/lessons/api`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="API Requests and Responses"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('16-api')} />
      </>
    ),
  },
  resources: [
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
  ],
};

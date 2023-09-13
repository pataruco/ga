import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 1;

export const week1Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Orientation and introduction to HTML',
    path: `/lessons/html-basics`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Orientation and introduction to HTML"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('01-html-basics')} />
      </>
    ),
  },
  lesson2: {
    name: 'Advanced HTML & Intro to CSS',
    path: `/lessons/advanced-html-intro-to-css`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Advanced HTML & Intro to CSS"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('02-advanced-html-intro-to-css')}
        />
      </>
    ),
  },
  homework: {
    name: 'Fictional CV',
    path: `/lessons/advanced-html-intro-to-css#43`,
  },
  resources: [
    ['Intro to HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
    [
      'Intro to HTML 5',
      'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    ],
    [
      'History of the Web',
      'https://webfoundation.org/about/vision/history-of-the-web/',
    ],
    [
      'History of the Web (YouTube video)',
      'https://www.youtube.com/watch?v=h8K49dD52WA',
    ],
    [
      'Invention of Internet',
      'https://www.history.com/topics/inventions/invention-of-the-internet',
    ],
    [
      'How CSS works?',
      'https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works',
    ],
    ['Intro to CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
    [
      'Intro to Document Object Model (DOM)',
      'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
    ],
    [
      "The Difference Between 'Block' and 'Inline'",
      'https://www.impressivewebs.com/difference-block-inline-css/',
    ],
    [
      'MDN: Block-level elements',
      'https://developer.mozilla.org/en/docs/Web/HTML/Block-level_elements',
    ],
    [
      'MDN: Inline elements',
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements',
    ],
    ['MDN: CSS is weird (YouTube video)', 'https://youtu.be/aHUtMbJw8iA'],
    [
      "Complete a challenge that you haven't done yet on",
      'https://learn.shayhowe.com/html-css/getting-to-know-html/',
    ],
    [
      'Read through Getting to know CSS',
      'https://learn.shayhowe.com/html-css/getting-to-know-css/',
    ],
  ],
};

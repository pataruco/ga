import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

export const week1Route: RoutesByWeek = {
  weekNumber: 1,
  lesson1: {
    name: 'Bienvenida e Intro a HTML',
    path: '/week-1/lesson-1',
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={1}
          title="Bienvenida e Intro a HTML"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('00-installfest')} />
      </>
    ),
  },
  lesson2: {
    name: 'HTML avanzado e Into a CSS',
    path: '/week-1/lesson-2',
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={1}
          title="HTML avanzado e Into a CSS"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('00-installfest')} />
      </>
    ),
  },
  workshops: {
    name: 'Installfest',
    path: '',
  },
  homework: {
    name: 'Curriculum vitae',
    path: '',
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
    ['Intro to CSS 3', 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'],
    [
      'Intro to Document Object Model (DOM)',
      'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
    ],
    [
      "The Difference Between 'Block' and 'Inline'",
      'http://www.impressivewebs.com/difference-block-inline-css/',
    ],
    [
      'MDN: Block-level elements',
      'https://developer.mozilla.org/en/docs/Web/HTML/Block-level_elements',
    ],
    [
      'MDN: Inline elements',
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements',
    ],
  ],
  bonuses: [
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

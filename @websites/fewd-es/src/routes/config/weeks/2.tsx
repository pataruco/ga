import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 2;

export const week2Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Terminal, Git & GitHub',
    path: `/week-${weekNumber}/terminal-git`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Terminal, Git & GitHub"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('03-terminal-git')} />
      </>
    ),
  },
  lesson2: {
    name: 'Intro a HTML',
    path: `/week-${weekNumber}/intro-to-html`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Intro a HTML"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('04-intro-to-html')} />
      </>
    ),
  },
  // workshops: {
  //   name: 'Installfest',
  //   path: `/week-${weekNumber}/installfest`,
  // },
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

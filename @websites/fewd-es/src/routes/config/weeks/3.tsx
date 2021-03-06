import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 3;

export const week3Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Intro a CSS',
    path: `/lessons/intro-to-css`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Intro a CSS" />
        <SlidesDeck slidesDeckPath={getLessonPath('05-intro-to-css')} />
      </>
    ),
  },
  lesson2: {
    name: 'Modelo de caja',
    path: `/lessons/box-model`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Model de caja"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('06-box-model')} />
      </>
    ),
  },
  workshops: {
    name: 'Relaxr',
    path: `/lessons/box-model#19`,
  },
  homework: {
    name: 'Relaxr',
    path: `/lessons/box-model#20`,
  },
  resources: [
    [
      'CSS Tricks: The CSS Box Model',
      'https://css-tricks.com/the-css-box-model/',
    ],
    [
      'MDN: Introduction to the Box model',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model',
    ],
    [
      'MDN: Box sizing',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
    ],
    [
      'MDN: Margin collapse',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing',
    ],
    [
      'The revenge of the IE Box model',
      'https://www.jefftk.com/p/the-revenge-of-the-ie-box-model',
    ],
    [
      'CSS Tricks:  What you should know about collapsing margins',
      'https://css-tricks.com/what-you-should-know-about-collapsing-margins/',
    ],
    [
      'Sitepoint: Collapsing margins',
      'https://www.sitepoint.com/collapsing-margins/',
    ],
  ],
  bonuses: [
    [
      'Read through opening the Box Model',
      'http://learn.shayhowe.com/html-css/opening-the-box-model/',
    ],
  ],
};

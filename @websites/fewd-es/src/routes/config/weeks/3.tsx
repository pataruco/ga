import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 3;

export const week3Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Intro a CSS',
    path: `/week-${weekNumber}/intro-to-css`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Intro a CSS" />
        <SlidesDeck slidesDeckPath={getLessonPath('05-intro-to-css')} />
      </>
    ),
  },
  lesson2: {
    name: 'Model de caja',
    path: `/week-${weekNumber}/box-model`,
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
    path: `/week-${weekNumber}/box-model#19`,
  },
  homework: {
    name: 'Relaxr',
    path: `/week-${weekNumber}/box-model#20`,
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
    [
      'MDN: Pseudo elements',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements',
    ],
    [
      'MDN: Pseudo classes',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes',
    ],
    [
      'CSS Tricks: :nth-child recipes',
      'https://css-tricks.com/useful-nth-child-recipies/',
    ],
    [
      'CSS Tricks: Child and Sibling Selectors',
      'https://css-tricks.com/child-and-sibling-selectors/',
    ],
    [
      'MDN: CSS Specificty',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
    ],
    [
      'MDN: CSS Selectors',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors',
    ],
  ],
  bonuses: [
    [
      'Read through opening the Box Model',
      'http://learn.shayhowe.com/html-css/opening-the-box-model/',
    ],
  ],
};

import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 2;

export const week2Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Box model',
    path: `/lessons/box-model`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Box model" />
        <SlidesDeck slidesDeckPath={getLessonPath('03-box-model')} />
      </>
    ),
  },
  lesson2: {
    name: 'CSS Selectors, Specificity & Floats',
    path: `/lessons/css-selectors-specificity-float`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="CSS Selectors, Specificity & Floats"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('04-css-selectors-specificity-float')}
        />
      </>
    ),
  },
  homework: {
    name: 'Relaxr',
    path: `/lessons/css-selectors-specificity-float#22`,
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
    [
      'Read through opening the Box Model',
      'https://learn.shayhowe.com/html-css/opening-the-box-model/',
    ],
  ],
};

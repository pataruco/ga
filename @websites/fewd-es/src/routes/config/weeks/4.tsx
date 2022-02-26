import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 4;

export const week4Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Selectores, especificidad & floats',
    path: `/lessons/css-selectors-specificity-float`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Selectores, especificidad & floats"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath(
            '07-css-selectors-specificity-float.md',
          )}
        />
      </>
    ),
  },
  lesson2: {
    name: 'Flexbox',
    path: `/lessons/flexbox`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Flexbox" />
        <SlidesDeck slidesDeckPath={getLessonPath('08-flexbox')} />
      </>
    ),
  },
  workshops: {
    name: 'Relaxr 2',
    path: `/lessons/flexbox#25`,
  },
  homework: {
    name: 'Relaxr 2',
    path: `/lessons/flexbox#26`,
  },
  resources: [
    [
      'CSS Tricks: Complete Guide to Flexbox',
      'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    ],
    [
      'Scotch: Visual Guide to CSS3 Flexbox',
      'https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties',
    ],
    [
      'Interneting is Hard: Flexbox',
      'https://internetingishard.com/html-and-css/flexbox/',
    ],
    [
      'MDN: Flexbox',
      'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    ],
    ['Flexbox Froggy 🐸', 'http://flexboxfroggy.com/'],
    [
      'Detailed CSS positioning',
      'http://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/',
    ],
    [
      'A List Apart: CSS positioning 101',
      'http://alistapart.com/article/css-positioning-101',
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
};

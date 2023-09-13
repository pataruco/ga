import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 3;

export const week3Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Flexbox',
    path: `/lessons/flexbox`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Flexbox" />
        <SlidesDeck slidesDeckPath={getLessonPath('05-flexbox')} />
      </>
    ),
  },
  lesson2: {
    name: 'Positioning',
    path: `/lessons/positioning`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Positioning" />
        <SlidesDeck slidesDeckPath={getLessonPath('06-positioning')} />
      </>
    ),
  },
  homework: {
    name: 'Relaxr (multi column layout)',
    path: `/lessons/positioning#27`,
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
      'https://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/',
    ],
    [
      'A List Apart: CSS positioning 101',
      'https://alistapart.com/article/css-positioning-101',
    ],
    [
      "Complete Code Academy's Learn Git course",
      'https://www.codecademy.com/learn/learn-git',
    ],
  ],
};

import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 7;

export const week7Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Animations, transitions, effects',
    path: `/lessons/animations`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Animations, transitions, effects"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('13-animations')} />
      </>
    ),
  },
  lesson2: {
    name: 'JavaScript plugins',
    path: `/lessons/plugins`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="JavaScript plugins"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('14-plugins')} />
      </>
    ),
  },
  resources: [
    [
      'MDN: transform',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
    ],
    [
      'CSS Tricks: transform',
      'https://css-tricks.com/almanac/properties/t/transform/',
    ],
    [
      'MDN: Using CSS transitions',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions',
    ],
    [
      'CSS3 = Awesome: Transitions',
      'https://css3.bradshawenterprises.com/transitions/',
    ],
    [
      'CSS Animations Guide: CSS animations guide',
      'https://www.smashingmagazine.com/2011/09/the-guide-to-css-animation-principles-and-examples/',
    ],
    [
      'CSS Tricks: Perspective',
      'https://css-tricks.com/almanac/properties/p/perspective/',
    ],

    [
      'MDN: Using CSS animations',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
    ],
    [
      "Read Shay Howe's CSS Transforms",
      'https://learn.shayhowe.com/advanced-html-css/css-transforms/',
    ],
    [
      "Read Shay Howe's transitions and animations",
      'https://learn.shayhowe.com/advanced-html-css/transitions-animations/',
    ],
  ],
};

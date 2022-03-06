import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 8;

export const week8Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Intro to JavaScript',
    path: `/lessons/intro-to-js`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Intro to JavaScript"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('15-intro-to-js')} />
      </>
    ),
  },
  lesson2: {
    name: 'Control de flujo',
    path: `/lessons/control-flow`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Control de flujo"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('16-control-flow')} />
      </>
    ),
  },
  // workshops: {
  //   name: 'Bike Wheels 🚴🏻‍♀️, Animations with Sass 💅🏻',
  //   path: `/lessons/sass-svg/#42`,
  // },
  // homework: {
  //   name: 'Clipboard 📋',
  //   path: `/lessons/forms#43`,
  // },
  // resources: [
  //   ['Animation', 'https://css-tricks.com/almanac/properties/a/animation/'],
  //   [
  //     'CSS Animation for Beginners',
  //     'https://robots.thoughtbot.com/css-animation-for-beginners',
  //   ],
  //   [
  //     '15 Inspiring Examples of CSS Animation on CodePen',
  //     'https://webdesign.tutsplus.com/articles/15-inspiring-examples-of-css-animation-on-codepen--cms-23937',
  //   ],
  //   [
  //     'Transitions Docs',
  //     'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions',
  //   ],
  //   [
  //     'Transition vs. Animation',
  //     'https://cssanimation.rocks/transition-vs-animation/',
  //   ],
  //   [
  //     'CSS Animation Support - caniuse.com',
  //     'https://caniuse.com/#search=animation',
  //   ],
  //   ['SASS Basics', 'http://sass-lang.com/guide'],
  //   [
  //     'An Absolute Beginners Guide To SASS',
  //     'http://blog.teamtreehouse.com/the-absolute-beginners-guide-to-sass',
  //   ],
  //   [
  //     'Getting Started With SASS (with Interactive Examples)',
  //     'https://scotch.io/tutorials/getting-started-with-sass',
  //   ],
  //   ['Advanced SCSS', 'https://gist.github.com/jareware/4738651'],
  //   ['SASS Style Guide', 'https://css-tricks.com/sass-style-guide/'],
  // ],
};

import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 7;

export const week7Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Animaciones, transiciones y transformaciones',
    path: `/lessons/animations`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Animaciones, transiciones y transformaciones"
        />
        <SlidesDeck slidesDeckPath={getLessonPath('13-animations')} />
      </>
    ),
  },
  lesson2: {
    name: 'Sass y SVG',
    path: `/lessons/sass-svg`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Sass y SVG" />
        <SlidesDeck slidesDeckPath={getLessonPath('14-sass-svg')} />
      </>
    ),
  },
  // workshops: {
  //   name: 'Forms y Huddle',
  //   path: `/lessons/forms#16`,
  // },
  // homework: {
  //   name: 'Huddle',
  //   path: `/lessons/forms#17`,
  // },
  resources: [
    ['Animation', 'https://css-tricks.com/almanac/properties/a/animation/'],
    [
      'CSS Animation for Beginners',
      'https://robots.thoughtbot.com/css-animation-for-beginners',
    ],
    [
      '15 Inspiring Examples of CSS Animation on CodePen',
      'https://webdesign.tutsplus.com/articles/15-inspiring-examples-of-css-animation-on-codepen--cms-23937',
    ],
    [
      'Transitions Docs',
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions',
    ],
    [
      'Transition vs. Animation',
      'https://cssanimation.rocks/transition-vs-animation/',
    ],
    [
      'CSS Animation Support - caniuse.com',
      'https://caniuse.com/#search=animation',
    ],
    ['SASS Basics', 'http://sass-lang.com/guide'],
    [
      'An Absolute Beginners Guide To SASS',
      'http://blog.teamtreehouse.com/the-absolute-beginners-guide-to-sass',
    ],
    [
      'Getting Started With SASS (with Interactive Examples)',
      'https://scotch.io/tutorials/getting-started-with-sass',
    ],
    ['Advanced SCSS', 'https://gist.github.com/jareware/4738651'],
    ['SASS Style Guide', 'https://css-tricks.com/sass-style-guide/'],
  ],
  // bonuses: [
  //   [
  //     "Read through Shay Howe's Responsive Web Design",
  //     'http://learn.shayhowe.com/advanced-html-css/responsive-web-design',
  //   ],
  //   [
  //     'Watch Part 1 Mobile Design Essentials',
  //     'https://www.youtube.com/watch?v=ZhnN1CdwvTs',
  //   ],
  //   [
  //     'Watch Part 2 Mobile Design Essentials',
  //     'https://www.youtube.com/watch?v=br_szl80J1M',
  //   ],
  //   [
  //     "Read Shay Howe's Building Forms",
  //     'http://learn.shayhowe.com/html-css/building-forms/',
  //   ],
  //   [
  //     "Read MDN's Your First HTML Form article",
  //     'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form',
  //   ],
  //   [
  //     'Read through Writing your best code',
  //     'http://learn.shayhowe.com/html-css/writing-your-best-code/',
  //   ],
  //   [
  //     "Complete Code Academy's  Make a website course",
  //     'https://www.codecademy.com/learn/make-a-website',
  //   ],
  // ],
};

import { SlidesDeck, Title } from '@shared/components';
import { RoutesByWeek } from '../../../@types/routes';
import { COURSE_NAME, getLessonPath } from '../../../lib/get-lesson-path';

const weekNumber = 6;

export const week6Route: RoutesByWeek = {
  weekNumber,
  lesson1: {
    name: 'Desarrollo Web responsivo',
    path: `/week-${weekNumber}/responsive-web-development`,
    element: () => (
      <>
        <Title
          courseName={COURSE_NAME}
          week={weekNumber}
          title="Responsive Web development"
        />
        <SlidesDeck
          slidesDeckPath={getLessonPath('11-responsive-web-development')}
        />
      </>
    ),
  },
  lesson2: {
    name: 'Formularios',
    path: `/week-${weekNumber}/forms`,
    element: () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} title="Forms" />
        <SlidesDeck slidesDeckPath={getLessonPath('12-forms')} />
      </>
    ),
  },
  workshops: {
    name: 'Forms y Huddle',
    path: `/week-${weekNumber}/forms#16`,
  },
  homework: {
    name: 'Huddle',
    path: `/week-${weekNumber}/forms#17`,
  },
  resources: [
    [
      'CSS Tricks: Font Size Idea: px at the Root, rem for Components, em for Text Elements ',
      'https://css-tricks.com/rems-ems/',
    ],
    ['REM vs EM – The Great Debate', 'https://zellwk.com/blog/rem-vs-em/'],

    [
      'Treehouse: Beginners guide to responsive web design',
      'http://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design',
    ],
    [
      'Smashing Magazine: Fixed vs Fluid layout (old article)',
      'https://www.smashingmagazine.com/2009/06/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/',
    ],
    [
      'A list apart: Responsive Web Design',
      'https://alistapart.com/article/responsive-web-design',
    ],
    [
      'A list apart: How to size text in CSS',
      'http://alistapart.com/articles/howtosizetextincss',
    ],
    ['W3C: Media queries', 'https://www.w3.org/TR/css3-mediaqueries/'],
    [
      'Smashing Magazine: Responsive tools and techniques',
      'https://www.smashingmagazine.com/2011/07/responsive-web-design-techniques-tools-and-design-strategies/',
    ],
    [
      "Blast: 3 Reasons You Shouldn't Build a Mobile Website",
      'http://www.blastam.com/blog/3-reasons-you-shouldnt-build-mobile-website',
    ],
    [
      'Mobile friendly images',
      'https://www.thesitewizard.com/css/responsive-images-for-mobile-friendly-website.shtml',
    ],
    [
      'CSS Tricks: Retina Media Query',
      'https://css-tricks.com/snippets/css/retina-display-media-query/',
    ],
    [
      'CSS Tricks: Responsive Meta Tag',
      'https://css-tricks.com/snippets/html/responsive-meta-tag/',
    ],
    [
      'MDN: Input',
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
    ],
    [
      'HTML5 Doctor: Input Types',
      'http://html5doctor.com/html5-forms-input-types/',
    ],
    ['Input Types', 'https://robertnyman.com/html5/forms/input-types.html'],
    [
      'MDN: Textarea',
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea',
    ],
    [
      'CSS Tricks: Creating great web forms',
      'https://css-tricks.com/tips-for-creating-great-web-forms/',
    ],
    [
      'MDN: Sending form data',
      'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data',
    ],
    [
      'HTML Goodies: So you want to build a form?',
      'http://www.htmlgoodies.com/tutorials/forms/article.php/3479121',
    ],
  ],

  bonuses: [
    [
      "Read through Shay Howe's Responsive Web Design",
      'http://learn.shayhowe.com/advanced-html-css/responsive-web-design',
    ],
    [
      'Watch Part 1 Mobile Design Essentials',
      'https://www.youtube.com/watch?v=ZhnN1CdwvTs',
    ],
    [
      'Watch Part 2 Mobile Design Essentials',
      'https://www.youtube.com/watch?v=br_szl80J1M',
    ],
    [
      "Read Shay Howe's Building Forms",
      'http://learn.shayhowe.com/html-css/building-forms/',
    ],
    [
      "Read MDN's Your First HTML Form article",
      'https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form',
    ],
    [
      'Read through Writing your best code',
      'http://learn.shayhowe.com/html-css/writing-your-best-code/',
    ],
    [
      "Complete Code Academy's  Make a website course",
      'https://www.codecademy.com/learn/make-a-website',
    ],
  ],
};

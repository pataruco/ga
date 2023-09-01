import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 7;

export const week7: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content: 'MDN: transform',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
    },
    {
      content: 'CSS Tricks: transform',
      link: 'https://css-tricks.com/almanac/properties/t/transform/',
    },
    {
      content: 'MDN: Using CSS transitions',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions',
    },
    {
      content: 'CSS3 = Awesome: Transitions',
      link: 'https://css3.bradshawenterprises.com/transitions/',
    },
    {
      content: 'CSS Animations Guide: CSS animations guide',
      link: 'https://www.smashingmagazine.com/2011/09/the-guide-to-css-animation-principles-and-examples/',
    },
    {
      content: 'CSS Tricks: Perspective',
      link: 'https://css-tricks.com/almanac/properties/p/perspective/',
    },

    {
      content: 'MDN: Using CSS animations',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
    },
    {
      content: "Read Shay Howe's CSS Transforms",
      link: 'https://learn.shayhowe.com/advanced-html-css/css-transforms/',
    },
    {
      content: "Read Shay Howe's transitions and animations",
      link: 'https://learn.shayhowe.com/advanced-html-css/transitions-animations/',
    },
  ],
};

export default week7;

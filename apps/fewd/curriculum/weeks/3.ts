import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 3;

export const week3: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content: 'CSS Tricks: Complete Guide to Flexbox',
      link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    },
    {
      content: 'Scotch: Visual Guide to CSS3 Flexbox',
      link: 'https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties',
    },
    {
      content: 'Interneting is Hard: Flexbox',
      link: 'https://internetingishard.com/html-and-css/flexbox/',
    },
    {
      content: 'MDN: Flexbox',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox',
    },
    { content: 'Flexbox Froggy 🐸', link: 'http://flexboxfroggy.com/' },
    {
      content: 'Detailed CSS positioning',
      link: 'https://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/',
    },
    {
      content: 'A List Apart: CSS positioning 101',
      link: 'https://alistapart.com/article/css-positioning-101',
    },
    {
      content: 'Learn CSS positioning',
      link: 'https://ishadeed.com/article/learn-css-positioning/#demo',
    },
  ],
};

export default week3;

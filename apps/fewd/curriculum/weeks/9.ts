import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 9;

export const week9: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    { content: 'Sass website', link: 'http://sass-lang.com/' },
    { content: 'Less website', link: 'http://lesscss.org/' },
    { content: 'Stylus website', link: 'http://stylus-lang.com/' },
    {
      content: 'Creative Bloq: Which is the best CSS preprocessor?',
      link: 'https://www.creativebloq.com/features/best-css-preprocessor',
    },
    {
      content: 'Sitepoint: 6 Current Options for CSS Preprocessors',
      link: 'https://www.sitepoint.com/6-current-options-css-preprocessors/',
    },
    { content: 'BEM', link: 'http://getbem.com/' },

    { content: 'SVG on the web', link: 'https://svgontheweb.com/' },
    {
      content: 'MDN: SVG and CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/SVG_and_CSS',
    },
    {
      content: 'CSS Tricks: Using SVG',
      link: 'https://css-tricks.com/using-svg/',
    },
    {
      content: 'MDN: Accessibility',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility',
    },
    {
      content: 'WebAIM:  Web accessibility resources',
      link: 'https://webaim.org/resources/',
    },
    {
      content: 'Deque University: Accessibility Resources and Code Examples',
      link: 'https://dequeuniversity.com/resources/',
    },
    {
      content: 'Watch Intro to GitHub video',
      link: 'https://www.youtube.com/watch?v=vDv5K5PbvO8',
    },
    {
      content: "Complete Code Academy's Learn Git course",
      link: 'https://www.codecademy.com/learn/learn-git',
    },
    {
      content:
        'Complete Egghead course: Start Building Accessible Web Applications Today',
      link: 'https://egghead.io/courses/start-building-accessible-web-applications-today',
    },
  ],
};

export default week9;

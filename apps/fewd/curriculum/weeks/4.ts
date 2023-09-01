import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 4;

export const week4: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content:
        'CSS Tricks: Font Size Idea: px at the Root, rem for Components, em for Text Elements ',
      link: 'https://css-tricks.com/rems-ems/',
    },
    {
      content: 'REM vs EM - The Great Debate',
      link: 'https://zellwk.com/blog/rem-vs-em/',
    },

    {
      content: 'Treehouse: Beginners guide to responsive web design',
      link: 'https://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design',
    },
    {
      content: 'Smashing Magazine: Fixed vs Fluid layout (old article)',
      link: 'https://www.smashingmagazine.com/2009/06/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/',
    },
    {
      content: 'A list apart: Responsive Web Design',
      link: 'https://alistapart.com/article/responsive-web-design',
    },
    {
      content: 'A list apart: How to size text in CSS',
      link: 'https://alistapart.com/articles/howtosizetextincss',
    },
    {
      content: 'W3C: Media queries',
      link: 'https://www.w3.org/TR/css3-mediaqueries/',
    },
    {
      content: 'Smashing Magazine: Responsive tools and techniques',
      link: 'https://www.smashingmagazine.com/2011/07/responsive-web-design-techniques-tools-and-design-strategies/',
    },
    {
      content: "Blast: 3 Reasons You Shouldn't Build a Mobile Website",
      link: 'https://www.blastam.com/blog/3-reasons-you-shouldnt-build-mobile-website',
    },
    {
      content: 'Mobile friendly images',
      link: 'https://www.thesitewizard.com/css/responsive-images-for-mobile-friendly-website.shtml',
    },
    {
      content: 'CSS Tricks: Retina Media Query',
      link: 'https://css-tricks.com/snippets/css/retina-display-media-query/',
    },
    {
      content: 'CSS Tricks: Responsive Meta Tag',
      link: 'https://css-tricks.com/snippets/html/responsive-meta-tag/',
    },
    {
      content: "Read through Shay Howe's Responsive Web Design",
      link: 'https://learn.shayhowe.com/advanced-html-css/responsive-web-design',
    },
    {
      content: 'Watch Part 1 Mobile Design Essentials',
      link: 'https://www.youtube.com/watch?v=ZhnN1CdwvTs',
    },
    {
      content: 'Watch Part 2 Mobile Design Essentials',
      link: 'https://www.youtube.com/watch?v=br_szl80J1M',
    },
  ],
};

export default week4;

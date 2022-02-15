import Week from '../../components/week';

const resources = [
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
];

const bonuses = [
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
];

const weekConfig = {
  resources,
  weekNumber: 4,
  firstLessonTitle: 'Responsive Web development',
  secondLessonTitle: 'Responsive Web development lab 🧪',
  homeworkPath: '/week-4/lesson-8#3',
  bonuses,
};

const Week4 = () => <Week {...weekConfig} />;

export default Week4;

import Week from '../../components/week';

const resources = [
  [
    'Creating a GitHub Pages site',
    'https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site',
  ],
];

const bonuses = [
  ['Watch What is GitHub pages', 'https://youtu.be/2MsN8gpT6jY'],
];

const weekConfig = {
  bonuses,
  firstLessonTitle: 'Deploy your app',
  secondLessonTitle: 'Student choice',
  weekNumber: 9,
  resources,
};

const Week9 = () => <Week {...weekConfig} />;

export default Week9;

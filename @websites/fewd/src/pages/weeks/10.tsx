import Week from '../../components/week';

const resources = [
  ['Bootstrap', 'https://getbootstrap.com/'],
  ['Foundation', 'https://foundation.zurb.com/'],
  ['Bulma', 'https://bulma.io/'],
  ['Tailwind CSS', 'https://tailwindcss.com/'],
  [
    'State of CSS 2020: Ranking of CSS frameworks',
    'https://2020.stateofcss.com/en-US/technologies/css-frameworks/',
  ],
];

const weekConfig = {
  firstLessonTitle: 'User interface libraries and final presentations lab 🧪',
  resources,
  secondLessonTitle: 'Final presentations 🚀',
  weekNumber: 10,
};

const Week10 = () => <Week {...weekConfig} />;

export default Week10;

import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 10;

export const week10: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    { content: 'Bootstrap', link: 'https://getbootstrap.com/' },
    { content: 'Foundation', link: 'https://foundation.zurb.com/' },
    { content: 'Bulma', link: 'https://bulma.io/' },
    { content: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
    {
      content: 'State of CSS 2020: Ranking of CSS frameworks',
      link: 'https://2020.stateofcss.com/en-US/technologies/css-frameworks/',
    },
  ],
};

export default week10;

import { getLessonsHomeworksLinks } from '../../libs/get-lessons-homeworks-links';

const weekNumber = 2;

export const week2: Week = {
  weekNumber,
  ...getLessonsHomeworksLinks(weekNumber),
  resources: [
    {
      content: 'CSS Tricks: The CSS Box Model',
      link: 'https://css-tricks.com/the-css-box-model/',
    },
    {
      content: 'MDN: Introduction to the Box model',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model',
    },
    {
      content: 'MDN: Box sizing',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
    },
    {
      content: 'MDN: Margin collapse',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing',
    },
    {
      content: 'The revenge of the IE Box model',
      link: 'https://www.jefftk.com/p/the-revenge-of-the-ie-box-model',
    },
    {
      content: 'CSS Tricks:  What you should know about collapsing margins',
      link: 'https://css-tricks.com/what-you-should-know-about-collapsing-margins/',
    },
    {
      content: 'Sitepoint: Collapsing margins',
      link: 'https://www.sitepoint.com/collapsing-margins/',
    },
    {
      content: 'MDN: Pseudo elements',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements',
    },
    {
      content: 'MDN: Pseudo classes',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes',
    },
    {
      content: 'CSS Tricks: :nth-child recipes',
      link: 'https://css-tricks.com/useful-nth-child-recipies/',
    },
    {
      content: 'CSS Tricks: Child and Sibling Selectors',
      link: 'https://css-tricks.com/child-and-sibling-selectors/',
    },
    {
      content: 'MDN: CSS Specificity',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
    },
    {
      content: 'MDN: CSS Selectors',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors',
    },
    {
      content: 'Read through opening the Box Model',
      link: 'https://learn.shayhowe.com/html-css/opening-the-box-model/',
    },
  ],
};

export default week2;

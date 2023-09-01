'use client';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';
import Link from 'next/link';
import 'normalize.css';
SiteStyles;

import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;
  min-height: 100vh;
  position: relative;

  main {
    flex: 1 auto;
  }
`;

const lessons = [
  {
    content: 'Orientation and introduction to HTML',
    link: '01-html-basics',
  },
  {
    content: 'Advanced HTML & Intro to CSS',
    link: '02-advanced-html-intro-to-css',
  },
  { content: 'Box model', link: '03-box-model' },
  {
    content: 'CSS Selectors, Specificity & Floats',
    link: '04-css-selectors-specificity-float',
  },
  { content: 'Flexbox', link: '05-flexbox' },
  { content: 'Positioning', link: '06-positioning' },
  { content: 'Responsive Web development', link: '07-responsive' },
  {
    content: 'Responsive Web development lab 🧪',
    link: '08-responsive-lab',
  },
  { content: 'Intro to JavaScript', link: '09-intro-to-js' },
  {
    content: 'Document Object Model (DOM)',
    link: '10-document-object-model',
  },
  { content: 'Conditional statements', link: '11-conditional-statements' },
  { content: 'Arrays and loops', link: '12-arrays-loops' },
  { content: 'Animations, transitions, effects', link: '13-animations' },
  { content: 'JavaScript plugins', link: '14-plugins' },
  { content: 'Forms', link: '15-forms' },
  { content: 'API Requests and Responses', link: '16-api' },
  { content: 'Git & Sass', link: '17-git-sass' },
  { content: 'SVG and Accessibility', link: '18-a11y-svg' },
  {
    content: 'User interface libraries and final presentations lab 🧪',
    link: '19-bootstrap',
  },
  { content: 'Final presentations 🚀', link: '20-final-presentations' },
];

export default async function Index() {
  return (
    <StyledPage>
      <header>header</header>
      <main>
        <h1>Lessons</h1>
        <ol>
          {lessons.map(({ link, content }) => (
            <li>
              <Link href={`/lessons/${link}`}>{content}</Link>
            </li>
          ))}
        </ol>
      </main>

      <Footer />
    </StyledPage>
  );
}

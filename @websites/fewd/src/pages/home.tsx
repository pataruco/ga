import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import styled from 'styled-components';
import Page from '../components/page';
import { Title, Footer } from '@shared/components';

const Weeks = [
  'HTML & CSS Basics',
  'Box Model, CSS Selectors, Specificity & Floats',
  'Flexbox & Positioning',
  'Responsive Web development',
  'Intro to JavaScript & Document Object Model (DOM)',
  'Conditional statements, arrays & loops',
  'CSS animations & JavaScript plugins',
  `Forms & API Requests and Responses`,
  'Git, Sass, Accessibility and SVG',
  'UI libraries & Final Presentations',
];

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Home: React.FC = () => (
  <Page>
    <Title courseName="FEWD" title="Home" />
    <Header />
    <StyledMain>
      <h1>Welcome to FEWD London 🇬🇧 </h1>
      <nav>
        <ul>
          {Weeks.map((week, i) => (
            <li key={i}>
              Week {i + 1}:{' '}
              <Link key={i} to={`week-${i + 1}`}>
                {week}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledMain>
    <Footer />
  </Page>
);

export default Home;

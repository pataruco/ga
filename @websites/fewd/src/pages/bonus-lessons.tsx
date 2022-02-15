import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Page from '../components/page';
import { Link } from 'react-router-dom';
import { bonusLessons } from '../components/header';
import { Title, Footer } from '@shared/components';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }
`;

const Lessons = bonusLessons.map(([name, path], key) => (
  <li key={key}>
    <Link to={path}>{name}</Link>
  </li>
));

const About: React.FC = () => (
  <Page>
    <Title courseName="FEWD" title="About" />
    <Header />
    <StyledMain>
      <h1>Bonus Lessons</h1>
      <ul>{Lessons}</ul>
    </StyledMain>
    <Footer />
  </Page>
);

export default About;

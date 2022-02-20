import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import { Footer, Title } from '@shared/components';
import Page from '../components/page';
import { Link } from 'react-router-dom';
import { bonusLessonRoutes } from '../routes/config/bonus-lessons';
import { COURSE_NAME } from '../lib/get-lesson-path';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }
`;

const Lessons = bonusLessonRoutes.map(({ name, path }, key) => (
  <li key={key}>
    <Link to={path}>{name}</Link>
  </li>
));

const About: React.FC = () => (
  <Page>
    <Title courseName={COURSE_NAME} title="Lecciones adicionales" />
    <Header />
    <StyledMain>
      <h1>Lecciones adicionales</h1>
      <ul>{Lessons}</ul>
    </StyledMain>
    <Footer />
  </Page>
);

export default About;

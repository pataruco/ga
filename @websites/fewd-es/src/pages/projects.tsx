import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import { Footer, Title } from '@shared/components';
import Page from '../components/page';
import { Link } from 'react-router-dom';
import { projectRoutes } from '../routes/config/projects';
import { COURSE_NAME } from '../lib/get-lesson-path';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }
`;

const Projects = projectRoutes.map(({ name, path }, key) => (
  <li key={key}>
    <Link to={path}>{name}</Link>
  </li>
));

const About: React.FC = () => (
  <Page>
    <Title courseName={COURSE_NAME} title="Proyectos" />
    <Header />
    <StyledMain>
      <h1>Proyectos</h1>
      <ul>{Projects}</ul>
    </StyledMain>
    <Footer />
  </Page>
);

export default About;

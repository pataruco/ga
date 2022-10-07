import { Footer, Title } from '@shared/components';
import React from 'react';
import { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/header';
import Page from '../components/page';
import { COURSE_NAME } from '../lib/get-lesson-path';
import { routesByWeek } from '../routes/config';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }
`;

const Lessons = routesByWeek.map(
  (
    {
      lesson1: { name: name1, path: path1 },
      lesson2: { name: name2, path: path2 },
    },
    key,
  ) => (
    <Fragment key={key}>
      <li>
        <Link to={path1}>{name1}</Link>
      </li>
      <li>
        <Link to={path2}>{name2}</Link>
      </li>
    </Fragment>
  ),
);

const LessonsPage: React.FC = () => {
  return (
    <Page>
      <Title courseName={COURSE_NAME} title="Lecciones" />
      <Header />
      <StyledMain>
        <h1>Lessons</h1>
        <ol>{Lessons}</ol>
      </StyledMain>
      <Footer />
    </Page>
  );
};

export default memo(LessonsPage);

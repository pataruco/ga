import React, { memo } from 'react';
import { Footer, Title } from '@shared/components';

import Header from '../components/header';
import styled from 'styled-components';
import Page from '../components/page';
import ResourcesPerWeekTableRow from '../components/resources-per-week-table-row';
import { routesByWeek } from '../routes/config';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const tableHeaders = ['Semana', 'Lección', 'Lección', 'Taller', 'Tarea'];

const TableHeaders = tableHeaders.map((header, i) => (
  <th key={`${header}` + i}>{header}</th>
));

const Home: React.FC = () => (
  <Page>
    <Title courseName="FEWD ES" title="Home" />
    <Header />
    <StyledMain>
      <h1>FEWD en español </h1>
      <table>
        <thead>
          <tr>{TableHeaders}</tr>
        </thead>
        <tbody>
          {routesByWeek.map((routeByWeek, i) => (
            <ResourcesPerWeekTableRow {...routeByWeek} key={i} />
          ))}
        </tbody>
      </table>
    </StyledMain>
    <Footer />
  </Page>
);

export default memo(Home);

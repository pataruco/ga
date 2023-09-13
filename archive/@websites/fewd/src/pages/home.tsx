import React, { memo } from 'react';
import { Footer, Title } from '@shared/components';

import Header from '../components/header';
import styled from 'styled-components';
import Page from '../components/page';
import ResourcesPerWeekTableRow from '../components/resources-per-week-table-row';
import ResourcesPerWeekDatails from '../components/resources-per-week-details';
import { routesByWeek } from '../routes/config';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }

  table tbody {
    tr {
      &:nth-of-type(even):hover {
        background-color: var(--inline-code-grey);
      }

      & td:first-of-type {
        text-align: center;
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 800px) {
    table {
      display: none;
    }
  }
`;

const tableHeaders = ['Week', 'Lesson', 'Lesson', 'Homework'];

const TableHeaders = tableHeaders.map((header, i) => (
  <th key={`${header}` + i}>{header}</th>
));

const Home: React.FC = () => (
  <Page>
    <Title courseName="FEWD ES" title="Home" />
    <Header />
    <StyledMain>
      <h1>Welcome to FEWD London 🇬🇧 </h1>
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
      {routesByWeek.map((routeByWeek, i) => (
        <ResourcesPerWeekDatails {...routeByWeek} key={i} />
      ))}
    </StyledMain>
    <Footer />
  </Page>
);

export default memo(Home);

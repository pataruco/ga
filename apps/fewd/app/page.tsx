'use client';

import 'normalize.css';
import styled from 'styled-components';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';
import Header from '../components/header';

SiteStyles;

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;
  min-height: 100vh;
  position: relative;

  main {
    flex: 1 auto;
    padding: 1.25rem;
  }
`;

const TableHeaders = ['Week', 'Lesson', 'Lesson', 'Homework'].map(
  (header, i) => <th key={`${header}` + i}>{header}</th>
);

export default async function Index() {
  return (
    <StyledPage>
      <Header />
      <main>
        <h1>Welcome to FEWD London 🇬🇧 </h1>
      </main>
      <table>
        <thead>
          <tr>{TableHeaders}</tr>
        </thead>
        <tbody>
          {/* {routesByWeek.map((routeByWeek, i) => (
            <ResourcesPerWeekTableRow {...routeByWeek} key={i} />
          ))} */}
        </tbody>
      </table>

      <Footer />
    </StyledPage>
  );
}

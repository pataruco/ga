'use client';

import 'normalize.css';
import styled from 'styled-components';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';

import Header from '../components/header';

import ResourcesPerWeekTableRow from '../components/resources-per-week-table-row';
import week1 from '../curriculum/weeks/1';
import week10 from '../curriculum/weeks/10';
import week2 from '../curriculum/weeks/2';
import week3 from '../curriculum/weeks/3';
import week4 from '../curriculum/weeks/4';
import week5 from '../curriculum/weeks/5';
import week6 from '../curriculum/weeks/6';
import week7 from '../curriculum/weeks/7';
import week8 from '../curriculum/weeks/8';
import week9 from '../curriculum/weeks/9';

const routesByWeek = [
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
  week7,
  week8,
  week9,
  week10,
];

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
          {routesByWeek.map((routeByWeek, i) => (
            <ResourcesPerWeekTableRow {...routeByWeek} key={i} />
          ))}
        </tbody>
      </table>

      <Footer />
    </StyledPage>
  );
}

'use client';

import 'normalize.css';
import '../styles/site/index.scss';

import { Footer } from '@ga/components';
import Link from 'next/link';
import styled from 'styled-components';

import { memo } from 'react';
import { Course, WithContext } from 'schema-dts';
import Header from '../components/header';
import MobileMenu from '../components/mobile-menu';
import { routesByWeek } from '../curriculum/weeks';
import { about, author } from '../utils/metadata';

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

const ResourcesPerWeekTableRow: React.FC<Week> = ({
  weekNumber,
  lesson1,
  lesson2,
  homework,
}) => {
  return (
    <tr>
      <td>
        <Link href={`week/${weekNumber}`}>{weekNumber}</Link>
      </td>
      <td>
        <Link href={`/lessons/${lesson1.link}`}>{lesson1.content}</Link>
      </td>
      <td>
        <Link href={`/lessons/${lesson2.link}`}>{lesson2.content}</Link>
      </td>
      <td>
        {homework ? <Link href={homework.link}>{homework.content}</Link> : ''}
      </td>
    </tr>
  );
};

function Index() {
  const jsonLd: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Front End Web Development',
    about,
    author,
    courseCode: 'FEWD',
    maintainer: author,
    creator: {
      '@type': 'Organization',
      name: 'General Assembly',
    },
  };

  return (
    <StyledPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <h1>Welcome to FEWD London 🇬🇧 </h1>
        <table>
          <thead>
            <tr>{TableHeaders}</tr>
          </thead>
          <tbody>
            {routesByWeek.map((routeByWeek) => (
              <ResourcesPerWeekTableRow
                {...routeByWeek}
                key={routeByWeek.lesson1.link}
              />
            ))}
          </tbody>
        </table>
      </main>
      <MobileMenu />
      <Footer />
    </StyledPage>
  );
}
export default memo(Index);

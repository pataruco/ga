'use client';
import 'normalize.css';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';
import Link from 'next/link';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import Header from '../components/header';
import MobileMenu from '../components/mobile-menu';
import { routesByWeek } from '../curriculum/weeks';

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

export default async function Index() {
  const [mobileMenuIsOpen, setMobileMenuIsopen] = useState(false);

  useEffect(() => {
    setMobileMenuIsopen(document.body.classList.contains('menu-open'));
  }, [mobileMenuIsOpen]);

  console.log({ mobileMenuIsOpen });

  return (
    <StyledPage>
      <Header />
      <main>
        <h1>Welcome to FEWD London 🇬🇧 </h1>
        <table>
          <thead>
            <tr>{TableHeaders}</tr>
          </thead>
          <tbody>
            {routesByWeek.map((routeByWeek) => (
              <ResourcesPerWeekTableRow {...routeByWeek} key={Math.random()} />
            ))}
          </tbody>
        </table>
      </main>
      {mobileMenuIsOpen ? <MobileMenu /> : null}
      <Footer />
    </StyledPage>
  );
}

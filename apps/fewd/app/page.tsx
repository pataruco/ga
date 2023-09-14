'use client';

import 'normalize.css';
import '../styles/site/index.scss';

import Link from 'next/link';

import { memo } from 'react';
import { Course, WithContext } from 'schema-dts';

import MainLayout from '../components/main-layout';
import { routesByWeek } from '../curriculum/weeks';
import { about, author } from '../utils/metadata';

const TableHeaders = ['Week', 'Lesson', 'Lesson', 'Homework'].map(
  (header, i) => <th key={`${header}` + i}>{header}</th>,
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
    <MainLayout>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: To parse JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
    </MainLayout>
  );
}
export default memo(Index);

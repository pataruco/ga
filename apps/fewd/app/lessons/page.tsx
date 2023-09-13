'use client';

import 'normalize.css';
import '../../styles/site/index.scss';

import { Footer } from '@ga/components';
import Link from 'next/link';
import styled from 'styled-components';

import { about, author } from 'apps/fewd/utils/metadata';
import { memo } from 'react';
import { Course, WithContext } from 'schema-dts';
import Header from '../../components/header';
import { lessons } from '../../curriculum/lessons';

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

  li {
    margin-bottom: 0.75rem;
  }
`;

async function Index() {
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
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Parse jsonLd
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <h1>Lessons</h1>
        <ol>
          {lessons.map(({ link, content }, i) => (
            <li key={link + i}>
              <Link href={`/lessons/${link}`}>{content}</Link>
            </li>
          ))}
        </ol>
      </main>

      <Footer />
    </StyledPage>
  );
}

export default memo(Index);

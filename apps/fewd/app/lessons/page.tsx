'use client';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';
import { lessons } from '../../curriculum/lessons';

import Link from 'next/link';
import 'normalize.css';
SiteStyles;

import styled from 'styled-components';

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

export default async function Index() {
  return (
    <StyledPage>
      <header>header</header>
      <main>
        <h1>Lessons</h1>
        <ol>
          {lessons.map(({ link, content }, i) => (
            <li>
              <Link href={`/lessons/${link}`} key={i}>
                {content}
              </Link>
            </li>
          ))}
        </ol>
      </main>

      <Footer />
    </StyledPage>
  );
}

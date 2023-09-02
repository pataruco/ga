'use client';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';
import Link from 'next/link';
import 'normalize.css';

import Header from '../../components/header';
import { bonusLessons } from '../../curriculum/bonus-lessons';

import styled from 'styled-components';

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

  li {
    margin-bottom: 0.75rem;
  }
`;

export default async function Index() {
  return (
    <StyledPage>
      <Header />
      <main>
        <h1>Bonus Lessons</h1>
        <ol>
          {bonusLessons.map(({ link, content }, i) => (
            <li>
              <Link href={`/bonus-lessons/${link}`} key={link + i}>
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

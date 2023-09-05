'use client';

import 'normalize.css';
import '../../styles/site/index.scss';

import { Footer } from '@ga/components';
import Link from 'next/link';
import { memo } from 'react';
import styled from 'styled-components';

import Header from '../../components/header';
import MobileMenu from '../../components/mobile-menu';
import { bonusLessons } from '../../curriculum/bonus-lessons';

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
  return (
    <StyledPage>
      <Header />
      <main>
        <h1>Bonus Lessons</h1>
        <ol>
          {bonusLessons.map(({ link, content }, i) => (
            <li key={link + i}>
              <Link href={`/bonus-lessons/${link}`}>{content}</Link>
            </li>
          ))}
        </ol>
      </main>
      <MobileMenu />
      <Footer />
    </StyledPage>
  );
}

export default memo(Index);

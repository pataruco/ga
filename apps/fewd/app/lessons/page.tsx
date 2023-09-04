'use client';

import 'normalize.css';
import '../../styles/site/index.scss';

import { Footer } from '@ga/components';
import Link from 'next/link';
import styled from 'styled-components';

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

export default async function Index() {
  return (
    <StyledPage>
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

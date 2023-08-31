'use client';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';
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
  }
`;

export default async function Index() {
  return (
    <StyledPage>
      <header>header</header>
      <main>
        <h1>Lessons</h1>
        <ol>
          <li>
            <Link href="/lessons/html-basics">
              Orientation and introduction to HTML
            </Link>
          </li>
        </ol>
      </main>

      <Footer />
    </StyledPage>
  );
}

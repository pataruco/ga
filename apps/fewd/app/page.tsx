'use client';

import { Footer } from '@ga/components';
import { SiteStyles } from '@ga/styles';
import 'normalize.css';
SiteStyles;

import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <header>header</header>
      <main>
        <h1>FEWD</h1>
      </main>

      <footer>footer</footer>
      <Footer />
    </StyledPage>
  );
}

import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import { Footer, Title } from '@shared/components';

import Page from '../components/page';

const StyledMain = styled.main`
  padding: 1.25rem;

  h1 span {
    animation: rotate 0.5s linear inifinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC = () => (
  <Page>
    <Title courseName="JSD" title="Cargando..." />
    <Header />
    <StyledMain>
      <h1>
        Cargando ...{' '}
        <span role="img" aria-labelledby="sandwatch">
          ⌛️
        </span>
      </h1>
    </StyledMain>
    <Footer />
  </Page>
);

export default Loading;

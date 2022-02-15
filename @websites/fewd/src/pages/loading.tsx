import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Page from '../components/page';

import { Title, Footer } from '@shared/components';

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
    <Title courseName="FEWD" title="Loading..." />
    <Header />
    <StyledMain>
      <h1>
        Loading{' '}
        <span role="img" aria-labelledby="sandwatch">
          ⌛️
        </span>
      </h1>
    </StyledMain>
    <Footer />
  </Page>
);

export default Loading;

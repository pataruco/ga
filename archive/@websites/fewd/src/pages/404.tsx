import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Page from '../components/page';
import { Title, Footer } from '@shared/components';

const StyledMain = styled.main`
  padding: 1.25rem;
`;

const ErrorPage: React.FC = () => (
  <Page>
    <Title courseName="FEWD" title="404" />
    <Header />
    <StyledMain>
      <h1>Page not found &#128542;</h1>
    </StyledMain>
    <Footer />
  </Page>
);

export default ErrorPage;

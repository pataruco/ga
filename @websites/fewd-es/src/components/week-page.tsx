import React from 'react';
import styled from 'styled-components';
import Header from './header';
import { Footer } from '@shared/components';
import Page from './page';

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.75rem;
  }

  summary > h2 {
    display: inline-block;
  }

  details ul {
    margin: 0;
  }

  .notes {
    li,
    p {
      margin-bottom: 0.75em;
      line-height: 1.1;
    }

    kbd {
      display: inline-block;
      padding: 3px 5px;
      font: 11px monospace;
      line-height: normal;
      line-height: 10px;
      color: #444d56;
      vertical-align: middle;
      background-color: #fafbfc;
      border-bottom-color: #d1d5da;
      border: 1px solid #d1d5da;
      border-radius: 6px;
      box-shadow: inset 0 -1px 0 #d1d5da;
    }
  }

  .homework {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.06rem;
  }
`;

const WeekPage: React.FC = ({ children }) => (
  <Page>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </Page>
);

export default WeekPage;

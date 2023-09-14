'use client';

import styled from 'styled-components';

import MainLayout from './main-layout';

const StyledSpan = styled.span`
  animation: spin 2s linear infinite;
  font-size: 2rem;
  margin: 0 0.625rem;
  transform-origin: center;
  display: inline-block;
  width: 1em;
  height: 1em;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const WaitingAnimation = () => <StyledSpan>⏳</StyledSpan>;

export default function Loading() {
  return (
    <MainLayout>
      <h1>
        Loading <WaitingAnimation />
      </h1>
    </MainLayout>
  );
}

'use client';

import Footer from 'components/src/footer';
import { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './header';
import MobileMenu from './mobile-menu';

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
`;

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledPage>
      <Header />
      <main>{children}</main>
      <MobileMenu />
      <Footer />
    </StyledPage>
  );
};

export default MainLayout;

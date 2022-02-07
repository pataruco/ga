import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectNavigationMenu } from '../redux/navigation-menu';
import MobileMenu from './mobile-menu';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;
  min-height: 100vh;
  position: relative;

  picture {
    display: block;
  }

  img,
  svg {
    display: block;
    height: auto;
    max-width: 100%;
  }

  main {
    flex: 1 auto;
  }
`;

const Page: React.FC = ({ children }) => {
  const { mobileMenuIsOpen } = useSelector(selectNavigationMenu);

  return (
    <StyledDiv>
      {children}
      {mobileMenuIsOpen ? <MobileMenu /> : null}
    </StyledDiv>
  );
};

export default Page;

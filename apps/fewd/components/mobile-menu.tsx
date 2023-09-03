import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import { bonusLessons } from '../curriculum/bonus-lessons';
import { routesByWeek } from '../curriculum/weeks';

const width = '250px';

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: var(--black);
  color: var(--white);
  padding: 1.25rem;
  width: ${width};
  right: -${width};
  transition: 0.3s all;

  &.mobile-menu-open {
    transform: translateX(-${width});
  }

  button {
    appearance: none;
    background-color: transparent;
    border: none;
    color: var(--white);
    margin-bottom: 0.75rem;
    padding: 0;
    text-decoration: underline 2px var(--ga-red);
    text-underline-offset: 2px;

    &:hover {
      color: rgba(255, 255, 255, 0.75);
      text-decoration: underline 2px var(--ga-red);
    }

    &:focus,
    &:active {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: underline 2px rgba(255, 0, 0, 0.5);
    }
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
    &:first-of-type {
      margin-top: 0.5rem;
    }
  }

  a {
    color: var(--white);
    text-decoration: none;
    &:hover {
      text-decoration: underline 2px var(--ga-red);
    }
  }

  @media screen and (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

const CloseLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    document.body.classList.remove('menu-open');
  };

  return (
    <Link href={href} onClick={handleOnClick}>
      {children}
    </Link>
  );
};

const Weeks: React.FC = () => (
  <ul>
    {routesByWeek.map(({ weekNumber }, i) => (
      <li key={Math.random() * i}>
        <CloseLink href={`/week/${weekNumber}`}>
          <span>Week {weekNumber}</span>
        </CloseLink>
      </li>
    ))}
  </ul>
);

const BonusLessons: React.FC = () => (
  <ul>
    {bonusLessons.map(({ content, link }, i) => {
      return (
        <li key={Math.random() * i}>
          <CloseLink href={link}>{content}</CloseLink>
        </li>
      );
    })}
  </ul>
);

const MobileMenu: React.FC = () => {
  const [mobileMenuIsOpen, setMobileMenuIsopen] = useState(false);

  useEffect(() => {
    setMobileMenuIsopen(document.body.classList.contains('menu-open'));
  }, [mobileMenuIsOpen]);

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    document.body.classList.remove('menu-open');
    setMobileMenuIsopen(false);
  };

  return (
    <StyledNav className={mobileMenuIsOpen ? 'mobile-menu-open' : ''}>
      <button onClick={handleOnClick}>Close</button>
      <ul>
        <li>
          <details>
            <summary>Weeks</summary>
            <Weeks />
          </details>
        </li>
        <li>
          <details>
            <summary>Bonus lessons</summary>
            <BonusLessons />
          </details>
        </li>
        <li>
          <CloseLink href="/final-project">Final projects</CloseLink>
        </li>
        <li>
          <CloseLink href="/about">About</CloseLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default MobileMenu;

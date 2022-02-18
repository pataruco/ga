import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNavigationMenu,
  closeMobileMenu,
} from '../redux/navigation-menu';
import { bonusLessons } from './header';
import { routesByWeek } from '../routes/config';

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

  @media screen and (min-width: 600px) {
    & {
      display: none;
    }
  }
`;

const CloseLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  const dispatch = useDispatch();

  const handleOnClick = (event: React.MouseEvent) => {
    dispatch(closeMobileMenu());
  };

  return (
    <Link to={to} onClick={handleOnClick}>
      {children}
    </Link>
  );
};

const Weeks: React.FC = () => (
  <ul>
    {routesByWeek.map(({ weekNumber }, i) => (
      <li key={i}>
        <CloseLink to={`week-${weekNumber}`} key={i}>
          <span>Semana {i + 1}</span>
        </CloseLink>
      </li>
    ))}
  </ul>
);

const BonusLessons: React.FC = () => (
  <ul>
    {bonusLessons.map((lesson, i) => {
      const [name, path] = lesson;
      return (
        <li key={i}>
          <CloseLink to={path} key={i}>
            {name}
          </CloseLink>
        </li>
      );
    })}
  </ul>
);

const MobileMenu: React.FC = () => {
  const { mobileMenuIsOpen } = useSelector(selectNavigationMenu);
  const dispatch = useDispatch();

  const handleOnClick = (event: React.MouseEvent) => {
    dispatch(closeMobileMenu());
  };

  return (
    <StyledNav className={mobileMenuIsOpen ? 'mobile-menu-open' : ''}>
      <button onClick={handleOnClick}>Close</button>
      <ul>
        <li>
          <details>
            <summary>Semanas</summary>
            <Weeks />
          </details>
        </li>
        {/* <li>
          <details>
            <summary>Lecciones extras</summary>
            <BonusLessons />
          </details>
        </li>
        <li>
          <CloseLink to="/final-project-brief">Proyecto final</CloseLink>
        </li> */}
        <li>
          <CloseLink to="/about">About</CloseLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default MobileMenu;

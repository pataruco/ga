import { GALogoTextWhite } from '@ga/components';
import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import {
  defaulState,
  navigationMenuState,
} from '../app/recoil-context-provider';
import { bonusLessons } from '../curriculum/bonus-lessons';
import { routesByWeek } from '../curriculum/weeks';

const StyledHeader = styled.header`
  padding: 1.25rem;
  background-color: var(--black);

  display: flex;
  justify-content: space-between;
  align-items: center;

  picture {
    max-width: 12.5%;
    min-width: 100px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  nav > ul {
    display: flex;
    position: relative;
  }

  ul a {
    color: var(--white);
    text-decoration: none;
    border-bottom: none;
    &:hover {
      border-bottom: 2px solid red;
    }
  }

  button {
    appearance: none;
    background-color: var(--black);
    border: none;
    color: var(--white);
    margin-bottom: 0.75rem;
    padding: 0 0.5rem;
  }

  nav > ul > li {
    margin-left: 1.25rem;
    &:first-of-type > ul > li,
    &:nth-of-type(2) > ul > li,
    &:nth-of-type(3) > ul > li {
      background-color: var(--black);
      padding: 0.75rem 0.5rem;
    }
  }

  nav > ul li ul {
    position: absolute;
    display: none;
  }

  nav > ul li ul.menu-open {
    display: block;
  }

  & > button {
    display: none;
    text-decoration: underline 2px var(--ga-red);
    text-underline-offset: 2px;

    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }

    &:focus,
    &:active {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: underline 2px rgba(255, 0, 0, 0.5);
    }
  }

  @media screen and (max-width: 800px) {
    & > button {
      display: block;
    }

    nav {
      display: none;
    }
  }
`;

export const Weeks: React.FC = () => {
  const [{ weekIsOpen }, setNavigationMenuState] =
    useRecoilState(navigationMenuState);

  const close = (event: React.MouseEvent) => {
    event.preventDefault();
    setNavigationMenuState(defaulState);
  };

  return (
    <ul className={weekIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {routesByWeek.map(({ weekNumber }) => (
        <li key={`/week/${weekNumber}`}>
          <Link href={`/week/${weekNumber}`}>
            <span onClick={close}>Week {weekNumber}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const BonusLessons: React.FC = () => {
  const [{ bonusLessonsIsOpen }, setNavigationMenuState] =
    useRecoilState(navigationMenuState);

  const close = (event: React.MouseEvent) => {
    event.preventDefault();
    setNavigationMenuState(defaulState);
  };

  return (
    <ul className={bonusLessonsIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {bonusLessons.map(({ content, link }) => {
        return (
          <li key={link}>
            <Link href={`/bonus-lessons/${link}`}>
              <span onClick={close}>{content}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Header: React.FC = () => {
  const [
    { bonusLessonsIsOpen, mobileMenuIsOpen, projectsMenuIsOpen, weekIsOpen },
    setNavigationMenuState,
  ] = useRecoilState(navigationMenuState);

  const close = () => {
    setNavigationMenuState(defaulState);
  };

  const handleWeeksOnMouseEnter = () => {
    close();
    setNavigationMenuState({ ...defaulState, weekIsOpen: true });
  };

  const handleOnBonusLessonsMouseEnter = () => {
    close();
    setNavigationMenuState({ ...defaulState, bonusLessonsIsOpen: true });
  };

  return (
    <StyledHeader>
      <picture>
        <Link href="/">
          <GALogoTextWhite />
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <button onMouseEnter={handleWeeksOnMouseEnter}>Weeks</button>
            <Weeks />
          </li>
          <li>
            <button onMouseEnter={handleOnBonusLessonsMouseEnter}>
              Bonus lessons
            </button>
            <BonusLessons />
          </li>
          <li>
            <Link href="/final-project">Final project</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* <nav onMouseLeave={close}>
        <ul>
          <li>
            <button onMouseEnter={handleWeeksOnMouseEnter}>Weeks</button>
            <Weeks />
          </li>
          <li>
            <button onMouseEnter={handleOnBonusLessonsMouseEnter}>
              Bonus lessons
            </button>
            <BonusLessons />
          </li>
          <li>
            <Link to={FinalProjectRoute.path}>Final project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleOnOpenMobileMenuClick}>Menu</button> */}
    </StyledHeader>
  );
};

export default Header;

import { GALogoTextWhite } from '@ga/components';
import Link from 'next/link';
import React, { memo } from 'react';
import styled from 'styled-components';

import { bonusLessons } from '../curriculum/bonus-lessons';
import { routesByWeek } from '../curriculum/weeks';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  closeBonusLessonMenu,
  closeWeekMenu,
  openBonusLessonMenu,
  openMobileMenu,
  openWeekMenu,
  selectNavigationMenu,
} from '../redux/navigation-menu';

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
  const { weekIsOpen } = useAppSelector(selectNavigationMenu);
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
  };

  return (
    <ul className={weekIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {routesByWeek.map(({ weekNumber }) => (
        <li key={`/week/${weekNumber}`}>
          <Link href={`/week/${weekNumber}`}>
            <span onClick={close} onKeyUp={close}>
              Week {weekNumber}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const BonusLessons: React.FC = () => {
  const { bonusLessonsIsOpen } = useAppSelector(selectNavigationMenu);
  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
  };

  return (
    <ul className={bonusLessonsIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {bonusLessons.map(({ content, link }) => {
        return (
          <li key={link}>
            <Link href={`/bonus-lessons/${link}`}>
              <span onClick={close} onKeyUp={close}>
                {content}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

function Header() {
  const dispatch = useAppDispatch();

  const dispatchClose = () => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
  };

  const close = (event: React.MouseEvent) => {
    dispatchClose();
  };

  const handleWeeksOnMouseEnter = (event: React.MouseEvent) => {
    dispatchClose();
    dispatch(openWeekMenu());
  };

  const handleOnBonusLessonsMouseEnter = (event: React.MouseEvent) => {
    dispatchClose();
    dispatch(openBonusLessonMenu());
  };

  const handleOnOpenMobileMenuClick = () => {
    dispatch(openMobileMenu());
  };

  return (
    <StyledHeader>
      <picture>
        <Link href="/">
          <GALogoTextWhite />
        </Link>
      </picture>
      <nav onMouseLeave={close}>
        <ul>
          <li>
            <button onMouseEnter={handleWeeksOnMouseEnter} type="button">
              Weeks
            </button>
            <Weeks />
          </li>
          <li>
            <button onMouseEnter={handleOnBonusLessonsMouseEnter} type="button">
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
      <button
        onClick={handleOnOpenMobileMenuClick}
        onKeyUp={handleOnOpenMobileMenuClick}
        type="button"
      >
        Menu
      </button>
    </StyledHeader>
  );
}

export default memo(Header);

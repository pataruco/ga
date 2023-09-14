import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeBonusLessonMenu,
  closeWeekMenu,
  openBonusLessonMenu,
  openWeekMenu,
  selectNavigationMenu,
  openMobileMenu,
  closeProjectMenu,
} from '../../redux/navigation-menu';
import { GALogoTextWhite } from '@shared/components';
import { routesByWeek, FinalProjectRoute } from '../../routes/config';
import { bonusLessonRoutes } from '../../routes/config/bonus-lessons';

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
  const { weekIsOpen } = useSelector(selectNavigationMenu);
  const dispatch = useDispatch();

  const close = (event: React.MouseEvent) => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
    dispatch(closeProjectMenu());
  };

  return (
    <ul className={weekIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {routesByWeek.map(({ weekNumber }, i) => (
        <li key={i}>
          <Link to={`/week-${weekNumber}`} key={i}>
            <span onClick={close}>Semana {i + 1}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const BonusLessons: React.FC = () => {
  const { bonusLessonsIsOpen } = useSelector(selectNavigationMenu);
  const dispatch = useDispatch();

  const close = (event: React.MouseEvent) => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
    dispatch(closeProjectMenu());
  };

  return (
    <ul className={bonusLessonsIsOpen ? 'menu-open' : ''} onMouseLeave={close}>
      {bonusLessonRoutes.map(({ name, path }, i) => {
        return (
          <li key={i}>
            <Link to={path} key={i}>
              <span onClick={close}>{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const dispatchClose = () => {
    dispatch(closeWeekMenu());
    dispatch(closeBonusLessonMenu());
    dispatch(closeProjectMenu());
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

  const handleOnOpenMobileMenuClick = (event: React.MouseEvent) => {
    dispatch(openMobileMenu());
  };

  return (
    <StyledHeader>
      <picture>
        <Link to="/">
          <GALogoTextWhite />
        </Link>
      </picture>
      <nav onMouseLeave={close}>
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
      <button onClick={handleOnOpenMobileMenuClick}>Menu</button>
    </StyledHeader>
  );
};

export default Header;

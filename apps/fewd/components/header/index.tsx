import './style.scss';

import { GALogoTextWhite } from '@ga/components';
import Link from 'next/link';
import React, { memo } from 'react';

import { bonusLessons } from '../../curriculum/bonus-lessons';
import { routesByWeek } from '../../curriculum/weeks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  closeBonusLessonMenu,
  closeWeekMenu,
  openBonusLessonMenu,
  openMobileMenu,
  openWeekMenu,
  selectNavigationMenu,
} from '../../redux/navigation-menu';

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
    <header>
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
    </header>
  );
}

export default memo(Header);

'use client';

import './style.scss';

import Link from 'next/link';
import React, { memo } from 'react';

import { bonusLessons } from '../../curriculum/bonus-lessons';
import { routesByWeek } from '../../curriculum/weeks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  closeMobileMenu,
  selectNavigationMenu,
} from '../../redux/navigation-menu';

const CloseLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const dispatch = useAppDispatch();

  const handleOnClick = (event: React.MouseEvent) => {
    dispatch(closeMobileMenu());
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
      <li key={`routesByWeek-${i}`}>
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
        <li key={link}>
          <CloseLink href={`/bonus-lessons/${link}`}>{content}</CloseLink>
        </li>
      );
    })}
  </ul>
);

const MobileMenu: React.FC = () => {
  const { mobileMenuIsOpen } = useAppSelector(selectNavigationMenu);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <nav
      className={
        mobileMenuIsOpen ? 'mobile-menu-open mobile-menu' : 'mobile-menu'
      }
    >
      <button onClick={handleOnClick} onKeyUp={handleOnClick} type="button">
        Close
      </button>
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
    </nav>
  );
};

export default memo(MobileMenu);

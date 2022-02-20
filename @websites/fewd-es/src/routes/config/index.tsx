import { lazy, Suspense } from 'react';
import { Title } from '@shared/components';
import Loading from '../../pages/loading';

import { RoutesByWeek } from '../../@types/routes';

import { week1Route } from './weeks/1';

// Final project
// Path: /final-project-brief
export const FinalProjectRoute = {
  path: '/final-project-brief',
  element: () => {
    const Content = lazy(() => import('../../pages/final-project-brief'));
    return (
      <>
        <Title courseName="JSD" title="Final project brief" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

// Bonus lessons pags
// Path: //bonus-lessons
export const BonusLessonsRoute = {
  path: '/bonus-lessons',
  element: () => {
    const Content = lazy(() => import('../../pages/bonus-lessons'));
    return (
      <>
        <Title courseName="JSD" title="Bonus Lessons" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

// Instructional resources by week
export const routesByWeek: RoutesByWeek[] = [week1Route];

import { lazy, Suspense } from 'react';
import { Title } from '@shared/components';
import Loading from '../../pages/loading';
import { RoutesByWeek } from '../../@types/routes';
import { week1Route } from './weeks/1';
import { week2Route } from './weeks/2';
import { week3Route } from './weeks/3';
import { week4Route } from './weeks/4';
import { COURSE_NAME } from '../../lib/get-lesson-path';
import { Route } from 'react-router-dom';
import { bonusLessonRoutes } from './bonus-lessons';

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

// Instructional resources by week
export const routesByWeek: RoutesByWeek[] = [
  week1Route,
  week2Route,
  week3Route,
  week4Route,
];

export const WeekRouteComponents = routesByWeek.map(
  (
    { weekNumber, resources, bonuses, lesson1, lesson2, homework, workshops },
    key,
  ) => {
    const Week = lazy(() => import('../../components/week'));

    const props = {
      bonuses,
      firstLessonPath: lesson1.path,
      firstLessonTitle: lesson1.name,
      homeworkPath: homework?.path,
      resources,
      secondLessonPath: lesson2.path,
      secondLessonTitle: lesson2.name,
      weekNumber,
      workshopPath: workshops?.path,
    };

    const Component = () => (
      <>
        <Title courseName={COURSE_NAME} week={weekNumber} />
        <Suspense fallback={<Loading />}>
          <Week {...props} />
        </Suspense>
      </>
    );

    return (
      <Route path={`week-${weekNumber}`} element={<Component />} key={key} />
    );
  },
);

export const LessonRouteComponents = routesByWeek
  .map(
    (
      {
        lesson1: { path: path1, element: Element1 },
        lesson2: { path: path2, element: Element2 },
      },
      key,
    ) => [
      <Route path={path1} element={<Element1 />} key={key} />,
      <Route path={path2} element={<Element2 />} key={Math.random()} />,
    ],
  )
  .flat();

export const BonusLessonsRouteComponents = bonusLessonRoutes.map(
  ({ path, element: Element }, key) => (
    <Route path={path} element={<Element />} key={key} />
  ),
);

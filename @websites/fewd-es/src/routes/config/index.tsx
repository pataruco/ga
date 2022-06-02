import { lazy, Suspense } from 'react';
import { Title } from '@shared/components';
import Loading from '../../pages/loading';
import { RoutesByWeek } from '../../@types/routes';
import { week1Route } from './weeks/1';
import { week2Route } from './weeks/2';
import { week3Route } from './weeks/3';
import { week4Route } from './weeks/4';
import { week5Route } from './weeks/5';
import { week6Route } from './weeks/6';
import { week7Route } from './weeks/7';
import { week8Route } from './weeks/8';
import { week9Route } from './weeks/9';
import { week10Route } from './weeks/10';
import { week11Route } from './weeks/11';
import { week12Route } from './weeks/12';
import { week13Route } from './weeks/13';
import { COURSE_NAME } from '../../lib/get-lesson-path';
import { Route } from 'react-router-dom';
import { bonusLessonRoutes } from './bonus-lessons';
import { projectRoutes } from './projects';

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
  week5Route,
  week6Route,
  week7Route,
  week8Route,
  week9Route,
  week10Route,
  week11Route,
  week12Route,
  week13Route,
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

export const ProjectRouteComponents = projectRoutes.map(
  ({ path, element: Element }, key) => (
    <Route path={path} element={<Element />} key={key} />
  ),
);

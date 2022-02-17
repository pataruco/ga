import { lazy, Suspense } from 'react';
import { SlidesDeck, Title } from '@shared/components';
import Loading from '../pages/loading';

import { jsd } from '@shared/lessons';
import type { JSDLesson } from '@shared/lessons';

const getLessonPath = (lessonName: JSDLesson) => jsd[lessonName].default;

const COURSE_NAME = 'FEWD ES';

// Final project
// Path: /final-project-brief
export const FinalProjectRoute = {
  path: '/final-project-brief',
  element: () => {
    const Content = lazy(() => import('../pages/final-project-brief'));
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
    const Content = lazy(() => import('../pages/bonus-lessons'));
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

interface LessonRoute {
  name: string;
  path: string;
  element: () => JSX.Element;
}

export interface RoutesByWeek {
  weekNumber: number;
  lesson1: LessonRoute;
  lesson2: LessonRoute;
  workshops?: {
    name: string;
    path: string;
  };
  homework?: {
    name: string;
    path: string;
  };
}

// Instructional resources by week
export const routesByWeek: RoutesByWeek[] = [
  {
    weekNumber: 1,
    lesson1: {
      name: 'Bienvenida e Intro a HTML',
      path: '/week-1/lesson-1',
      element: () => (
        <>
          <Title courseName={COURSE_NAME} week={1} lesson={1} />
          <SlidesDeck slidesDeckPath={getLessonPath('00-installfest')} />
        </>
      ),
    },
    lesson2: {
      name: 'HTML avanzado e Into a CSS',
      path: '/week-1/lesson-2',
      element: () => (
        <>
          <Title courseName={COURSE_NAME} week={1} lesson={1} />
          <SlidesDeck slidesDeckPath={getLessonPath('00-installfest')} />
        </>
      ),
    },
    workshops: {
      name: 'Receta de galletas',
      path: '',
    },
    homework: {
      name: 'Curriculum vitae',
      path: '',
    },
  },
];

import { lazy, Suspense } from 'react';
import { SlidesDeck, Title } from '@shared/components';
import Loading from '../pages/loading';

import { jsd } from '@shared/lessons';
import type { JSDLesson } from '@shared/lessons';

const getLessonPath = (lessonName: JSDLesson) => jsd[lessonName].default;

const COURSE_NAME = 'FEWD ES';

// Lessons
// Path: week-n/lesson-n
export const lessonRoutes = [
  {
    path: '/week-1/lesson-0',
    element: () => (
      <>
        <Title courseName="JSD" week={1} lesson={0} />
        <SlidesDeck slidesDeckPath={getLessonPath('00-installfest')} />
      </>
    ),
  },
  {
    path: '/week-1/lesson-1',
    element: () => (
      <>
        <Title courseName="JSD" week={1} lesson={1} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('01-the-command-line-data-types')}
        />
      </>
    ),
  },
  {
    path: '/week-2/lesson-2',
    element: () => (
      <>
        <Title courseName="JSD" week={2} lesson={2} />
        <SlidesDeck slidesDeckPath={getLessonPath('02-arrays-loops')} />
      </>
    ),
  },
  {
    path: '/week-2/lesson-3',
    element: () => (
      <>
        <Title courseName="JSD" week={2} lesson={3} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('03-conditionals-functions')}
        />
      </>
    ),
  },
  {
    path: '/week-3/lesson-4',
    element: () => (
      <>
        <Title courseName="JSD" week={3} lesson={4} />
        <SlidesDeck slidesDeckPath={getLessonPath('04-objects-json')} />
      </>
    ),
  },
  {
    path: '/week-3/lesson-5',
    element: () => (
      <>
        <Title courseName="JSD" week={3} lesson={5} />
        <SlidesDeck slidesDeckPath={getLessonPath('05-slackbot-lab')} />
      </>
    ),
  },
  {
    path: '/week-4/lesson-6',
    element: () => (
      <>
        <Title courseName="JSD" week={4} lesson={6} />
        <SlidesDeck slidesDeckPath={getLessonPath('06-the-dom')} />
      </>
    ),
  },
  {
    path: '/week-4/lesson-7',
    element: () => (
      <>
        <Title courseName="JSD" week={4} lesson={7} />
        <SlidesDeck slidesDeckPath={getLessonPath('07-dom-events')} />
      </>
    ),
  },
  {
    path: '/week-5/lesson-8',
    element: () => (
      <>
        <Title courseName="JSD" week={5} lesson={8} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('08-asynchronous-javascript')}
        />
      </>
    ),
  },
  {
    path: '/week-5/lesson-9',
    element: () => (
      <>
        <Title courseName="JSD" week={5} lesson={9} />
        <SlidesDeck slidesDeckPath={getLessonPath('09-advanced-apis')} />
      </>
    ),
  },
  {
    path: '/week-6/lesson-10',
    element: () => (
      <>
        <Title courseName="JSD" week={6} lesson={10} />
        <SlidesDeck slidesDeckPath={getLessonPath('10-templating-lab')} />
      </>
    ),
  },
  {
    path: '/week-6/lesson-11',
    element: () => (
      <>
        <Title courseName="JSD" week={6} lesson={11} />
        <SlidesDeck slidesDeckPath={getLessonPath('11-feedr-lab')} />
      </>
    ),
  },
  {
    path: '/week-7/lesson-12',
    element: () => (
      <>
        <Title courseName="JSD" week={7} lesson={12} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('12-intro-to-firebase-and-crud')}
        />
      </>
    ),
  },
  {
    path: '/week-7/lesson-13',
    element: () => (
      <>
        <Title courseName="JSD" week={7} lesson={13} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('13-intro-to-firebase-and-crud')}
        />
      </>
    ),
  },
  {
    path: '/week-8/lesson-14',
    element: () => (
      <>
        <Title courseName="JSD" week={8} lesson={14} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('14-prototypal-inheritance')}
        />
      </>
    ),
  },
  {
    path: '/week-8/lesson-15',
    element: () => (
      <>
        <Title courseName="JSD" week={8} lesson={15} />
        <SlidesDeck slidesDeckPath={getLessonPath('15-closures-this')} />
      </>
    ),
  },
  {
    path: '/week-9/lesson-16',
    element: () => (
      <>
        <Title courseName="JSD" week={9} lesson={16} />
        <SlidesDeck slidesDeckPath={getLessonPath('16-deploying-your-app')} />
      </>
    ),
  },
  {
    path: '/week-9/lesson-17',
    element: () => (
      <>
        <Title courseName="JSD" week={9} lesson={17} />
        <SlidesDeck slidesDeckPath={getLessonPath('17-student-choice')} />
      </>
    ),
  },
  {
    path: '/week-10/lesson-18',
    element: () => (
      <>
        <Title courseName="JSD" week={10} lesson={18} />
        <SlidesDeck slidesDeckPath={getLessonPath('18-final-project-lab')} />
      </>
    ),
  },
  {
    path: '/week-10/lesson-19',
    element: () => (
      <>
        <Title courseName="JSD" week={10} lesson={19} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('19-final-project-presentations')}
        />
      </>
    ),
  },
];

// Weeks
// Path: week-n
export const weeks = new Array(10) // Set number of weeks
  .fill(1)
  .map((item, i) => item + i);

export const weekRoutes = weeks.map((weekNumber) => ({
  path: `/week-${weekNumber}`,
  element: () => {
    const Content = lazy(() => import(`../pages/weeks/${weekNumber}`));
    return (
      <>
        <Title courseName="JSD" week={weekNumber} />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
}));

// Bonus lessons
// Path: /bonus-lessons/n
export const bonusLessonRoutes = [
  {
    path: '/bonus-lessons/installfest-macos',
    element: () => (
      <>
        <Title courseName="JSD" title="Bonus Lesson | Installfest macOS" />
        <SlidesDeck
          slidesDeckPath={getLessonPath('bonus-lesson-installfest-macos')}
        />
      </>
    ),
  },
  {
    path: '/bonus-lessons/installfest-windows',
    element: () => (
      <>
        <Title courseName="JSD" title="Bonus Lesson | Installfest Windows" />
        <SlidesDeck
          slidesDeckPath={getLessonPath('bonus-lesson-installfest-windows')}
        />
      </>
    ),
  },
  {
    path: '/bonus-lessons/jquery',
    element: () => (
      <>
        <Title courseName="JSD" title="Bonus Lesson | jQuery" />
        <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-jquery')} />
      </>
    ),
  },
  {
    path: '/bonus-lessons/react',
    element: () => (
      <>
        <Title courseName="JSD" title="Bonus Lesson | React" />
        <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-react')} />
      </>
    ),
  },
];

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

import { lazy, Suspense } from 'react';
import { SlidesDeck, Title } from '@shared/components';
import Loading from '../pages/loading';

import { fewd } from '@shared/lessons';
import type { FEWDLesson } from '@shared/lessons';

const getLessonPath = (lessonName: FEWDLesson) => fewd[lessonName].default;

// Lessons
// Path: week-n/lesson-n

export const lessonRoutes = [
  {
    path: '/week-1/lesson-1',
    component: () => (
      <>
        <Title courseName="FEWD" week={1} lesson={1} />
        <SlidesDeck slidesDeckPath={getLessonPath('01-html-basics')} />
      </>
    ),
  },
  {
    path: '/week-1/lesson-2',
    component: () => (
      <>
        <Title courseName="FEWD" week={1} lesson={2} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('02-advanced-html-intro-to-css')}
        />
      </>
    ),
  },
  {
    path: '/week-2/lesson-3',
    component: () => (
      <>
        <Title courseName="FEWD" week={2} lesson={3} />
        <SlidesDeck slidesDeckPath={getLessonPath('03-box-model')} />
      </>
    ),
  },
  {
    path: '/week-2/lesson-4',
    component: () => (
      <>
        <Title courseName="FEWD" week={2} lesson={4} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('04-css-selectors-specificity-float')}
        />
      </>
    ),
  },
  {
    path: '/week-3/lesson-5',
    component: () => (
      <>
        <Title courseName="FEWD" week={3} lesson={5} />
        <SlidesDeck slidesDeckPath={getLessonPath('05-flexbox')} />
      </>
    ),
  },
  {
    path: '/week-3/lesson-6',
    component: () => (
      <>
        <Title courseName="FEWD" week={3} lesson={6} />
        <SlidesDeck slidesDeckPath={getLessonPath('06-positioning')} />
      </>
    ),
  },
  {
    path: '/week-4/lesson-7',
    component: () => (
      <>
        <Title courseName="FEWD" week={4} lesson={7} />
        <SlidesDeck slidesDeckPath={getLessonPath('07-responsive')} />
      </>
    ),
  },
  {
    path: '/week-4/lesson-8',
    component: () => (
      <>
        <Title courseName="FEWD" week={4} lesson={8} />
        <SlidesDeck slidesDeckPath={getLessonPath('08-responsive-lab')} />
      </>
    ),
  },
  {
    path: '/week-5/lesson-9',
    component: () => (
      <>
        <Title courseName="FEWD" week={5} lesson={9} />
        <SlidesDeck slidesDeckPath={getLessonPath('09-intro-to-js')} />
      </>
    ),
  },
  {
    path: '/week-5/lesson-10',
    component: () => (
      <>
        <Title courseName="FEWD" week={5} lesson={10} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('10-document-object-model')}
        />
      </>
    ),
  },
  {
    path: '/week-6/lesson-11',
    component: () => (
      <>
        <Title courseName="FEWD" week={6} lesson={11} />
        <SlidesDeck
          slidesDeckPath={getLessonPath('11-conditional-statements')}
        />
      </>
    ),
  },
  {
    path: '/week-6/lesson-12',
    component: () => (
      <>
        <Title courseName="FEWD" week={6} lesson={12} />
        <SlidesDeck slidesDeckPath={getLessonPath('12-arrays-loops')} />
      </>
    ),
  },
  {
    path: '/week-7/lesson-13',
    component: () => (
      <>
        <Title courseName="FEWD" week={7} lesson={13} />
        <SlidesDeck slidesDeckPath={getLessonPath('13-animations')} />
      </>
    ),
  },
  {
    path: '/week-7/lesson-14',
    component: () => (
      <>
        <Title courseName="FEWD" week={7} lesson={14} />
        <SlidesDeck slidesDeckPath={getLessonPath('14-plugins')} />
      </>
    ),
  },
  {
    path: '/week-8/lesson-15',
    component: () => (
      <>
        <Title courseName="FEWD" week={8} lesson={15} />
        <SlidesDeck slidesDeckPath={getLessonPath('15-forms')} />
      </>
    ),
  },
  {
    path: '/week-8/lesson-16',
    component: () => (
      <>
        <Title courseName="FEWD" week={8} lesson={16} />
        <SlidesDeck slidesDeckPath={getLessonPath('16-api')} />
      </>
    ),
  },
  {
    path: '/week-9/lesson-17',
    component: () => (
      <>
        <Title courseName="FEWD" week={9} lesson={17} />
        <SlidesDeck slidesDeckPath={getLessonPath('17-git-sass')} />
      </>
    ),
  },
  {
    path: '/week-9/lesson-18',
    component: () => (
      <>
        <Title courseName="FEWD" week={9} lesson={18} />
        <SlidesDeck slidesDeckPath={getLessonPath('18-a11y-svg')} />
      </>
    ),
  },
  {
    path: '/week-10/lesson-19',
    component: () => (
      <>
        <Title courseName="FEWD" week={10} lesson={19} />
        <SlidesDeck slidesDeckPath={getLessonPath('19-bootstrap')} />
      </>
    ),
  },
  {
    path: '/week-10/lesson-20',
    component: () => (
      <>
        <Title courseName="FEWD" week={10} lesson={20} />
        <SlidesDeck slidesDeckPath={getLessonPath('20-final-presentations')} />
      </>
    ),
  },
];

// Weeks
// Path: week-n
export const weekRoutes = [
  {
    path: '/week-1',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/1'));
      return (
        <>
          <Title courseName="FEWD" week={1} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-2',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/2'));
      return (
        <>
          <Title courseName="FEWD" week={2} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-3',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/3'));
      return (
        <>
          <Title courseName="FEWD" week={3} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-4',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/4'));
      return (
        <>
          <Title courseName="FEWD" week={4} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-5',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/5'));
      return (
        <>
          <Title courseName="FEWD" week={5} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-6',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/6'));
      return (
        <>
          <Title courseName="FEWD" week={6} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-7',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/7'));
      return (
        <>
          <Title courseName="FEWD" week={7} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-8',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/8'));
      return (
        <>
          <Title courseName="FEWD" week={8} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-9',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/9'));
      return (
        <>
          <Title courseName="FEWD" week={9} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
  {
    path: '/week-10',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/10'));
      return (
        <>
          <Title courseName="FEWD" week={10} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
];

// Bonus lessons
// Path: /bonus-lessons/n
export const bonusLessonRoutes = [
  {
    path: '/bonus-lessons/grids',
    component: () => (
      <>
        <Title courseName="FEWD" title="Bonus Lesson | Grids" />
        <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-grids')} />
      </>
    ),
  },
  {
    path: '/bonus-lessons/tables',
    component: () => (
      <>
        <Title courseName="FEWD" title="Bonus Lesson | Tables" />
        <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-tables')} />
      </>
    ),
  },
  {
    path: '/bonus-lessons/javascript-history',
    component: () => (
      <>
        <Title courseName="FEWD" title="Bonus Lesson | JavaScript history" />
        <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-js-history')} />
      </>
    ),
  },
];

// Final project
// Path: /final-project-brief

export const FinalProjectRoute = {
  path: '/final-project-brief',
  component: () => {
    const Content = lazy(() => import('../pages/final-project-brief'));
    return (
      <>
        <Title courseName="FEWD" title="Final project brief" />
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
  component: () => {
    const Content = lazy(() => import('../pages/bonus-lessons'));
    return (
      <>
        <Title courseName="FEWD" title="Bonus Lessons" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

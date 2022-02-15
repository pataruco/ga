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
    element: () => (
      <>
        <Title courseName="FEWD" week={1} lesson={1} />
        <SlidesDeck slidesDeckPath={getLessonPath('01-html-basics')} />
      </>
    ),
  },
  {
    path: '/week-1/lesson-2',
    element: () => (
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
    element: () => (
      <>
        <Title courseName="FEWD" week={2} lesson={3} />
        <SlidesDeck slidesDeckPath={getLessonPath('03-box-model')} />
      </>
    ),
  },
  {
    path: '/week-2/lesson-4',
    element: () => (
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
    element: () => (
      <>
        <Title courseName="FEWD" week={3} lesson={5} />
        <SlidesDeck slidesDeckPath={getLessonPath('05-flexbox')} />
      </>
    ),
  },
  {
    path: '/week-3/lesson-6',
    element: () => (
      <>
        <Title courseName="FEWD" week={3} lesson={6} />
        <SlidesDeck slidesDeckPath={getLessonPath('06-positioning')} />
      </>
    ),
  },
  {
    path: '/week-4/lesson-7',
    element: () => (
      <>
        <Title courseName="FEWD" week={4} lesson={7} />
        <SlidesDeck slidesDeckPath={getLessonPath('07-responsive')} />
      </>
    ),
  },
  {
    path: '/week-4/lesson-8',
    element: () => (
      <>
        <Title courseName="FEWD" week={4} lesson={8} />
        <SlidesDeck slidesDeckPath={getLessonPath('08-responsive-lab')} />
      </>
    ),
  },
  {
    path: '/week-5/lesson-9',
    element: () => (
      <>
        <Title courseName="FEWD" week={5} lesson={9} />
        <SlidesDeck slidesDeckPath={getLessonPath('09-intro-to-js')} />
      </>
    ),
  },
  {
    path: '/week-5/lesson-10',
    element: () => (
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
    element: () => (
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
    element: () => (
      <>
        <Title courseName="FEWD" week={6} lesson={12} />
        <SlidesDeck slidesDeckPath={getLessonPath('12-arrays-loops')} />
      </>
    ),
  },
  {
    path: '/week-7/lesson-13',
    element: () => (
      <>
        <Title courseName="FEWD" week={7} lesson={13} />
        <SlidesDeck slidesDeckPath={getLessonPath('13-animations')} />
      </>
    ),
  },
  {
    path: '/week-7/lesson-14',
    element: () => (
      <>
        <Title courseName="FEWD" week={7} lesson={14} />
        <SlidesDeck slidesDeckPath={getLessonPath('14-plugins')} />
      </>
    ),
  },
  {
    path: '/week-8/lesson-15',
    element: () => (
      <>
        <Title courseName="FEWD" week={8} lesson={15} />
        <SlidesDeck slidesDeckPath={getLessonPath('15-forms')} />
      </>
    ),
  },
  {
    path: '/week-8/lesson-16',
    element: () => (
      <>
        <Title courseName="FEWD" week={8} lesson={16} />
        <SlidesDeck slidesDeckPath={getLessonPath('16-api')} />
      </>
    ),
  },
  {
    path: '/week-9/lesson-17',
    element: () => (
      <>
        <Title courseName="FEWD" week={9} lesson={17} />
        <SlidesDeck slidesDeckPath={getLessonPath('17-git-sass')} />
      </>
    ),
  },
  {
    path: '/week-9/lesson-18',
    element: () => (
      <>
        <Title courseName="FEWD" week={9} lesson={18} />
        <SlidesDeck slidesDeckPath={getLessonPath('18-a11y-svg')} />
      </>
    ),
  },
  {
    path: '/week-10/lesson-19',
    element: () => (
      <>
        <Title courseName="FEWD" week={10} lesson={19} />
        <SlidesDeck slidesDeckPath={getLessonPath('19-bootstrap')} />
      </>
    ),
  },
  {
    path: '/week-10/lesson-20',
    element: () => (
      <>
        <Title courseName="FEWD" week={10} lesson={20} />
        <SlidesDeck slidesDeckPath={getLessonPath('20-final-presentations')} />
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
    path: '/bonus-lessons/grids',
    element: () => (
      <>
        <Title courseName="FEWD" title="Bonus Lesson | Grids" />
        <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-grids')} />
      </>
    ),
  },
  {
    path: '/bonus-lessons/tables',
    element: () => (
      <>
        <Title courseName="FEWD" title="Bonus Lesson | Tables" />
        <SlidesDeck slidesDeckPath={getLessonPath('bonus-lesson-tables')} />
      </>
    ),
  },
  {
    path: '/bonus-lessons/javascript-history',
    element: () => (
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
  element: () => {
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
  element: () => {
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

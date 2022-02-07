import { lazy, Suspense } from 'react';
import SlidesDeck from '../components/slides-deck';
import Title from '../components/title';
import Loading from '../pages/loading';

// Lessons
// Path: week-n/lesson-n
export const lessonRoutes = [
  {
    path: '/week-1/lesson-0',
    element: () => (
      <>
        <Title week={1} lesson={0} />
        <SlidesDeck slidesDeckName="00-installfest" />
      </>
    ),
  },
  {
    path: '/week-1/lesson-1',
    element: () => (
      <>
        <Title week={1} lesson={1} />
        <SlidesDeck slidesDeckName="01-the-command-line-data-types" />
      </>
    ),
  },
  {
    path: '/week-2/lesson-2',
    element: () => (
      <>
        <Title week={2} lesson={2} />
        <SlidesDeck slidesDeckName="02-arrays-loops" />
      </>
    ),
  },
  {
    path: '/week-2/lesson-3',
    element: () => (
      <>
        <Title week={2} lesson={3} />
        <SlidesDeck slidesDeckName="03-conditionals-functions" />
      </>
    ),
  },
  {
    path: '/week-3/lesson-4',
    element: () => (
      <>
        <Title week={3} lesson={4} />
        <SlidesDeck slidesDeckName="04-objects-json" />
      </>
    ),
  },
  {
    path: '/week-3/lesson-5',
    element: () => (
      <>
        <Title week={3} lesson={5} />
        <SlidesDeck slidesDeckName="05-slackbot-lab" />
      </>
    ),
  },
  {
    path: '/week-4/lesson-6',
    element: () => (
      <>
        <Title week={4} lesson={6} />
        <SlidesDeck slidesDeckName="06-the-dom" />
      </>
    ),
  },
  {
    path: '/week-4/lesson-7',
    element: () => (
      <>
        <Title week={4} lesson={7} />
        <SlidesDeck slidesDeckName="07-dom-events" />
      </>
    ),
  },
  {
    path: '/week-5/lesson-8',
    element: () => (
      <>
        <Title week={5} lesson={8} />
        <SlidesDeck slidesDeckName="08-asynchronous-javascript" />
      </>
    ),
  },
  {
    path: '/week-5/lesson-9',
    element: () => (
      <>
        <Title week={5} lesson={9} />
        <SlidesDeck slidesDeckName="09-advanced-apis" />
      </>
    ),
  },
  {
    path: '/week-6/lesson-10',
    element: () => (
      <>
        <Title week={6} lesson={10} />
        <SlidesDeck slidesDeckName="10-templating-lab" />
      </>
    ),
  },
  {
    path: '/week-6/lesson-11',
    element: () => (
      <>
        <Title week={6} lesson={11} />
        <SlidesDeck slidesDeckName="11-feedr-lab" />
      </>
    ),
  },
  {
    path: '/week-7/lesson-12',
    element: () => (
      <>
        <Title week={7} lesson={12} />
        <SlidesDeck slidesDeckName="12-intro-to-firebase-and-crud" />
      </>
    ),
  },
  {
    path: '/week-7/lesson-13',
    element: () => (
      <>
        <Title week={7} lesson={13} />
        <SlidesDeck slidesDeckName="13-intro-to-firebase-and-crud" />
      </>
    ),
  },
  {
    path: '/week-8/lesson-14',
    element: () => (
      <>
        <Title week={8} lesson={14} />
        <SlidesDeck slidesDeckName="14-prototypal-inheritance" />
      </>
    ),
  },
  {
    path: '/week-8/lesson-15',
    element: () => (
      <>
        <Title week={8} lesson={15} />
        <SlidesDeck slidesDeckName="15-closures-this" />
      </>
    ),
  },
  {
    path: '/week-9/lesson-16',
    element: () => (
      <>
        <Title week={9} lesson={16} />
        <SlidesDeck slidesDeckName="16-deploying-your-app" />
      </>
    ),
  },
  {
    path: '/week-9/lesson-17',
    element: () => (
      <>
        <Title week={9} lesson={17} />
        <SlidesDeck slidesDeckName="17-student-choice" />
      </>
    ),
  },
  {
    path: '/week-10/lesson-18',
    element: () => (
      <>
        <Title week={10} lesson={18} />
        <SlidesDeck slidesDeckName="18-final-project-lab" />
      </>
    ),
  },
  {
    path: '/week-10/lesson-19',
    element: () => (
      <>
        <Title week={10} lesson={19} />
        <SlidesDeck slidesDeckName="19-final-project-presentations" />
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
        <Title week={weekNumber} />
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
        <Title title="Bonus Lesson | Installfest macOS" />
        <SlidesDeck slidesDeckName="bonus-lesson-installfest-macos" />
      </>
    ),
  },
  {
    path: '/bonus-lessons/installfest-windows',
    element: () => (
      <>
        <Title title="Bonus Lesson | Installfest Windows" />
        <SlidesDeck slidesDeckName="bonus-lesson-installfest-windows" />
      </>
    ),
  },
  {
    path: '/bonus-lessons/jquery',
    element: () => (
      <>
        <Title title="Bonus Lesson | jQuery" />
        <SlidesDeck slidesDeckName="bonus-lesson-jquery" />
      </>
    ),
  },
  {
    path: '/bonus-lessons/react',
    element: () => (
      <>
        <Title title="Bonus Lesson | React" />
        <SlidesDeck slidesDeckName="bonus-lesson-react" />
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
        <Title title="Final project brief" />
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
        <Title title="Bonus Lessons" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

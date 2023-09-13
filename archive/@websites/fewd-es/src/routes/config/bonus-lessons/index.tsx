import { SlidesDeck, Title } from '@shared/components';
import { lazy, Suspense } from 'react';
import type { LessonRoute } from '../../../@types/routes';
import { getLessonPath, COURSE_NAME } from '../../../lib/get-lesson-path';
import Loading from '../../../pages/loading';

// Bonus lessons pags
// Path: //bonus-lessons
export const BonusLessonsRoute = {
  path: '/bonus-lessons',
  element: () => {
    const Content = lazy(() => import('../../../pages/bonus-lessons'));
    return (
      <>
        <Title courseName={COURSE_NAME} title="Bonus Lessons" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

export const bonusLessonRoutes: LessonRoute[] = [
  {
    name: 'macOS Installfest',
    path: '/bonus-lessons/installfest-macos',
    element() {
      return (
        <>
          <Title courseName={COURSE_NAME} title="macOS Installfest" />
          <SlidesDeck
            slidesDeckPath={getLessonPath('bonus-installfest-macos')}
          />
        </>
      );
    },
  },
  {
    name: 'Windows Installfest',
    path: '/bonus-lessons/installfest-windows',
    element() {
      return (
        <>
          <Title
            courseName={COURSE_NAME}
            title="Bonus Lesson | Windows Installfest"
          />
          <SlidesDeck
            slidesDeckPath={getLessonPath('bonus-installfest-windows')}
          />
        </>
      );
    },
  },
  {
    name: 'HTML Table',
    path: '/bonus-lessons/tables',
    element() {
      return (
        <>
          <Title courseName={COURSE_NAME} title="Bonus Lesson | HTML Table" />
          <SlidesDeck slidesDeckPath={getLessonPath('bonus-tables')} />
        </>
      );
    },
  },
  {
    name: 'EcmaScript 6',
    path: '/bonus-lessons/ecmascript',
    element() {
      return (
        <>
          <Title courseName={COURSE_NAME} title="Bonus Lesson | EcmaScript 6" />
          <SlidesDeck slidesDeckPath={getLessonPath('bonus-ecmascrip')} />
        </>
      );
    },
  },
  {
    name: 'Accesibility',
    path: '/bonus-lessons/a11y',
    element() {
      return (
        <>
          <Title courseName={COURSE_NAME} title="Bonus Lesson | Accesibility" />
          <SlidesDeck slidesDeckPath={getLessonPath('bonus-a11y')} />
        </>
      );
    },
  },
];

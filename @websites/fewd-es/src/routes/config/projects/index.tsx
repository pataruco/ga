import { Title } from '@shared/components';
import { lazy, Suspense } from 'react';
import type { LessonRoute } from '../../../@types/routes';
import { COURSE_NAME } from '../../../lib/get-lesson-path';
import Loading from '../../../pages/loading';

// Bonus lessons pags
// Path: //bonus-lessons
export const ProjectsRoute = {
  path: '/projects',
  element: () => {
    const Content = lazy(() => import('../../../pages/projects'));
    return (
      <>
        <Title courseName={COURSE_NAME} title="Proyectos" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

export const projectRoutes: LessonRoute[] = [
  {
    name: 'Mitad de curso',
    path: '/projects/mid-course',
    element() {
      const Content = lazy(() => import('../../../pages/mid-course-project'));
      return (
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      );
    },
  },
  // {
  //   name: 'Final de curso',
  //   path: '/projects/final-course',
  //   element() {
  //     const Content = lazy(() => import('../../../pages/final-project'));
  //     return (
  //       <Suspense fallback={<Loading />}>
  //         <Content />
  //       </Suspense>
  //     );
  //   },
  // },
];

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/404';
import About from '../pages/about';
import { lazy, Suspense } from 'react';

import { routesByWeek } from './config';
import { Title } from '@shared/components';
import { COURSE_NAME } from '../lib/get-lesson-path';
import Loading from '../pages/loading';

const WeekRouteComponents = routesByWeek.map(
  ({ weekNumber, resources, bonuses, lesson1, lesson2, homework }, key) => {
    const Week = lazy(() => import('../components/week'));

    const props = {
      bonuses,
      firstLessonPath: lesson1.path,
      firstLessonTitle: lesson1.name,
      homeworkPath: homework?.path,
      resources,
      secondLessonPath: lesson2.path,
      secondLessonTitle: lesson2.name,
      weekNumber,
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

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {WeekRouteComponents}
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

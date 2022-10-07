import '@shared/styles/dist/site';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import LessonsPage from '../pages/lessons';
import {
  WeekRouteComponents,
  LessonRouteComponents,
  BonusLessonsRouteComponents,
  // ProjectRouteComponents,
} from './config';
import ErrorPage from '../pages/404';
import About from '../pages/about';

import { BonusLessonsRoute } from './config/bonus-lessons';

// import { BonusLessonsRoute } from './config/bonus-lessons';
// import { ProjectsRoute } from './config/projects';

const { path: bonusLessonsRoute, element: BonusLessons } = BonusLessonsRoute;
// const { path: projectsRoute, element: Projects } = ProjectsRoute;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lessons" element={<LessonsPage />} />
      <Route path={bonusLessonsRoute} element={<BonusLessons />} />
      {WeekRouteComponents}
      {BonusLessonsRouteComponents}
      {LessonRouteComponents}
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

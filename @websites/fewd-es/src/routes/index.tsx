import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/404';
import About from '../pages/about';
import LessonsPage from '../pages/lessons';
import {
  WeekRouteComponents,
  LessonRouteComponents,
  BonusLessonsRouteComponents,
  ProjectRouteComponents,
} from './config';

import { BonusLessonsRoute } from './config/bonus-lessons';
import { ProjectsRoute } from './config/projects';

const { path: bonusLessonsRoute, element: BonusLessons } = BonusLessonsRoute;
const { path: projectsRoute, element: Projects } = ProjectsRoute;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path={bonusLessonsRoute} element={<BonusLessons />} />
        <Route path={projectsRoute} element={<Projects />} />
        {WeekRouteComponents}
        {LessonRouteComponents}
        {BonusLessonsRouteComponents}
        {ProjectRouteComponents}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

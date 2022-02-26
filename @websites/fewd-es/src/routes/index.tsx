import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/404';
import About from '../pages/about';
import LessonsPage from '../pages/lessons';
import {
  WeekRouteComponents,
  LessonRouteComponents,
  BonusLessonsRouteComponents,
} from './config';

import { BonusLessonsRoute } from './config/bonus-lessons';

const { path: bonusLessonsRoute, element: BonusLessons } = BonusLessonsRoute;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lessons" element={<LessonsPage />} />
      <Route path={bonusLessonsRoute} element={<BonusLessons />} />
      {WeekRouteComponents}
      {LessonRouteComponents}
      {BonusLessonsRouteComponents}
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

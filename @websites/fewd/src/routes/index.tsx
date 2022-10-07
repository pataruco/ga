import '@shared/styles/dist/site';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import LessonsPage from '../pages/lessons';
import {
  WeekRouteComponents,
  LessonRouteComponents,
  BonusLessonsRouteComponents,
  FinalProjectRoute,
} from './config';
import { BonusLessonsRoute } from './config/bonus-lessons';
import About from '../pages/about';
import ErrorPage from '../pages/404';

const { path: bonusLessonsRoute, element: BonusLessons } = BonusLessonsRoute;
const { path: finalProjectRoute, element: FinalProject } = FinalProjectRoute;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path={finalProjectRoute} element={<FinalProject />} />
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

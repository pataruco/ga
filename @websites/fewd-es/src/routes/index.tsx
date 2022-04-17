import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
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
import { useEffect } from 'react';

const { path: bonusLessonsRoute, element: BonusLessons } = BonusLessonsRoute;

export const GA_TRACK_ID = 'G-48TLZ9CMME';

const Router = () => {
  useEffect(() => {
    ReactGA.initialize(GA_TRACK_ID);
  });

  return (
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
};

export default Router;

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import {
  lessonRoutes,
  weekRoutes,
  FinalProjectRoute,
  BonusLessonsRoute,
  bonusLessonRoutes,
} from './config';
import ErrorPage from '../pages/404';
import '../styles/site-index.scss';
import About from '../pages/about';

const LessonsRouteComponents = lessonRoutes.map(
  ({ path, element: Component }, key) => (
    <Route path={path} element={<Component />} key={key} />
  ),
);

const WeekRouteComponents = weekRoutes.map(
  ({ path, element: Component }, key) => (
    <Route path={path} element={<Component />} key={key} />
  ),
);

const BonusLessonsComponents = bonusLessonRoutes.map(
  ({ path, element: Component }, key) => (
    <Route path={path} element={<Component />} key={key} />
  ),
);

const { path: finalProjectRoute, element: FinalProject } = FinalProjectRoute;
const { path: bonusLessonsRoute, element: BonusLessons } = BonusLessonsRoute;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path={finalProjectRoute} element={<FinalProject />} />
      <Route path={bonusLessonsRoute} element={<BonusLessons />} />
      {WeekRouteComponents}
      {BonusLessonsComponents}
      {LessonsRouteComponents}
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

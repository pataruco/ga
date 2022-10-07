import '@shared/styles/dist/site';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import {
  WeekRouteComponents,
  // LessonRouteComponents,
  // BonusLessonsRouteComponents,
  // ProjectRouteComponents,
} from './config';
import ErrorPage from '../pages/404';
import About from '../pages/about';

// import { BonusLessonsRoute } from './config/bonus-lessons';
// import { ProjectsRoute } from './config/projects';

// const { path: bonusLessonsRoute, element: BonusLessons } = BonusLessonsRoute;
// const { path: projectsRoute, element: Projects } = ProjectsRoute;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path={finalProjectRoute} element={<FinalProject />} /> */}
      {/* <Route path={bonusLessonsRoute} element={<BonusLessons />} /> */}
      {WeekRouteComponents}
      {/* {BonusLessonsComponents} */}
      {/* {LessonsRouteComponents} */}
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

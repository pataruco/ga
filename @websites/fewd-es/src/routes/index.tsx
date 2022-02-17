import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import ErrorPage from '../pages/404';
import About from '../pages/about';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

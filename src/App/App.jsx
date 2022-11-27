import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Views } from 'pages/Views';
import { NavMenu } from '../components/header/Header';
import { NoFoundPage } from 'pages/noFoundPage/NoFoundPage';
import { DetailsMovie } from 'pages/detailsMovie/DetailsMovie';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavMenu />}>
          <Route index element={<Home />} />
          <Route path="views" element={<Views />} />
          <Route path="views/:id" element={<DetailsMovie />} />

          <Route path="*" element={<NoFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

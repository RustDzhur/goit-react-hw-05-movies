import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/home/Home';
import { Views } from 'pages/view/Views';
import { NavMenu } from '../components/header/Header';
import { NoFoundPage } from 'pages/noFoundPage/NoFoundPage';
import { DetailsMovie } from 'pages/detailsMovie/DetailsMovie';
import { Cast } from 'pages/cast/Cast';
import { Reviews } from 'pages/reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavMenu />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Views />} />
          <Route path="movies/:id" element={<DetailsMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NoFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

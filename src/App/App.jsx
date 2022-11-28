import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/home/Home';
import { NavMenu } from '../components/header/Header';
import { lazy } from 'react';

const Views = lazy(() => import('../pages/view/Views'));
const NoFoundPage = lazy(() => import('../pages/noFoundPage/NoFoundPage'));
const DetailsMovie = lazy(() => import('../pages/detailsMovie/DetailsMovie'));
const Cast = lazy(() => import('../pages/cast/Cast'));
const Reviews = lazy(() => import('../pages/reviews/Reviews'));

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

import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Views } from 'pages/Views';
import { NavLinks } from '../components/Links';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavLinks />}>
          <Route index element={<Home />} />
          <Route path="views" element={<Views />} />
          <Route path="*" element={<div>Page 404</div>} />
        </Route>
      </Routes>
    </div>
  );
};

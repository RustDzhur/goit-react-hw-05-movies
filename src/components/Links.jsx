import { Link, Outlet } from 'react-router-dom';
export const NavLinks = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="views">Views</Link>
      </div>
      <Outlet />
    </div>
  );
};

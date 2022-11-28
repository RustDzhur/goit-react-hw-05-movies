import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavItem } from './Header.styled';
export const NavMenu = () => {
  return (
    <div>
      <Header>
        <NavItem to="/">Home</NavItem>
        <NavItem to="movies">Views</NavItem>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

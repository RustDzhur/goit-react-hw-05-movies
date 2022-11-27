import { Outlet } from 'react-router-dom';
import { Header, NavItem } from './Header.styled';
export const NavMenu = () => {
  return (
    <div>
      <Header>
        <NavItem to="/">Home</NavItem>
        <NavItem to="movies">Views</NavItem>
      </Header>
      <Outlet />
    </div>
  );
};

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;
  height: 70px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;

export const NavItem = styled(NavLink)`
  width: 70px;
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsBox = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding-bottom: 30px;
  border-bottom: 2px solid grey;
  margin-bottom: 15px;
`;

export const Genres = styled.div`
  display: flex;
`;
export const GenreName = styled.p`
  font-weight: 500;
  margin-right: 10px;
`;

export const ImgPreview = styled.img`
  margin-right: 15px;
`;

export const AddInfo = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  margin-bottom: 25px;
`;

export const InfoBox = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const NavItem = styled(NavLink)`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: orange;
  margin-right: 15px;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 18px;
  color: black;
  &.active {
    background-color: lightgreen;
  }
`;

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getTrendMovie } from '../../Api/Api';
import { ContainerBox } from './Home.styled';

export const Home = () => {
  const [trendsMovie, setTrendsMovie] = useState(null);
  useEffect(() => {
    getTrendMovie().then(res => setTrendsMovie(res.data.results));
  }, []);

  if (!trendsMovie) {
    return null;
  }

  return (
    <ContainerBox>
      <ul>
        {trendsMovie.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </ContainerBox>
  );
};

Home.propTypes = {
  trendsMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })
}
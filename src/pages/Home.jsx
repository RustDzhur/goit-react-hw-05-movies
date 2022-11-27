import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink,  } from 'react-router-dom';
import { getTrendMovie } from '../Api/Api';

export const Home = () => {
  const [trendsMovie, setTrendsMovie] = useState(null);
  useEffect(() => {
    getTrendMovie().then(res => setTrendsMovie(res.data.results))
  }, []);

  if(!trendsMovie) {
    return null
  }

  return (
    <div>
        <ul>
          {trendsMovie.map(({id, title}) => (
            <li key={id}>
              <NavLink to={`/views/${id}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
        
    </div>
  );
};

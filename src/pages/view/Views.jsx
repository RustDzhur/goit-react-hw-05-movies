import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { searchQueryMovie } from 'Api/Api';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { SeachListMovie } from './Views.styled';

const Views = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    searchQueryMovie(query).then(res => setSearchQuery(res.data.results));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.searchMovie.value });
  };

  if (!searchQuery) {
    return;
  }

  return (
    <SeachListMovie>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchMovie"
            placeholder="type name o movie"
            defaultValue={query}
          />
          <button type="submit">Search Movie</button>
        </form>
      </div>
      <div>
        <ul>
          {searchQuery.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </SeachListMovie>
  );
};

export default Views;

Views.propTypes = {
  searchQuery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

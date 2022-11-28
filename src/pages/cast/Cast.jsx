import PropTypes from 'prop-types';
import { getMovieActors } from 'Api/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, List, ListItem } from './Cast.styled';
import notFoundImg from '../../images/notFoundImg.png';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieActors(id).then(res => setActors(res.data.cast));
  }, [id]);

  if (!actors) {
    return null;
  }

  return (
    <List>
      {actors.map(({ id, name, character, popularity, profile_path }) => (
        <ListItem key={id}>
          {profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              loading="lazy"
            />
          ) : (
            <Image src={notFoundImg} alt={name} loading="lazy" />
          )}
          <h3>Name: {name}</h3>
          <p>Charecter: {character}</p>
          <p>Popularity: {popularity}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default Cast;

Cast.propTypes = {
  actors: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    profile_path: PropTypes.number.isRequired,
  }),
};

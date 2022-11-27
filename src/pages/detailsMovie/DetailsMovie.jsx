import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsOfMovie } from '../../Api/Api';
import {
  Genres,
  GenreName,
  DetailsBox,
  ImgPreview,
} from './DetailsMovie.styled';

export const DetailsMovie = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getDetailsOfMovie(Number(id)).then(res => setMovieDetails(res.data));
  }, [id]);

  if (!movieDetails) {
    return null;
  }

  const {
    title,
    overview,
    genres,
    backdrop_path,
    original_title,
    vote_average,
  } = movieDetails;

  console.log(movieDetails);
  return (
    <DetailsBox>
      <ImgPreview
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={original_title}
      />
      <div>
        <h1>{title}</h1>
        <p>
          <b>Popularity: {vote_average}</b>
        </p>
        <p>{overview}</p>
        <div>
          <h2>Genres:</h2>
          <Genres>
            {genres.map(({ id, name }) => (
              <GenreName key={id}>{name}</GenreName>
            ))}
          </Genres>
        </div>
      </div>
    </DetailsBox>
  );
};

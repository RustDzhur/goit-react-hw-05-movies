import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetailsOfMovie } from '../../Api/Api';
import {
  Genres,
  GenreName,
  DetailsBox,
  ImgPreview,
  AddInfo,
  NavItem,
  InfoBox,
} from './DetailsMovie.styled';


export const DetailsMovie = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
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

  const goBack = () => navigate('/');
  return (
    <>
      <DetailsBox>
        <ImgPreview
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={original_title}
        />
        <div>
          <button onClick={goBack}>Go Back</button>
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

      <InfoBox>
        <AddInfo>
          <b>Additional Information:</b>
        </AddInfo>
        <NavItem to="cast">Cast</NavItem>
        <NavItem to="reviews">Reviews</NavItem>
        <Outlet/>
      </InfoBox>
      
    </>
  );
};

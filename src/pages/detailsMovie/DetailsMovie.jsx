import PropTypes from 'prop-types';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
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
import notFoundImg from '../../images/notFoundImg.png';
import NoFoundPage from 'pages/noFoundPage/NoFoundPage';

const DetailsMovie = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  const backLink = location.state?.from ?? '/';

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

  return (
    <>
      {movieDetails ? <DetailsBox>
        {backdrop_path ? (
          <ImgPreview
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={original_title}
          />
        ) : (
          <ImgPreview src={notFoundImg} alt={original_title} />
        )}
        <div>
          <Link to={backLink}>Go Back</Link>
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
      </DetailsBox> : <NoFoundPage/>}

      <InfoBox>
        <AddInfo>
          <b>Additional Information:</b>
        </AddInfo>
        <NavItem to="cast">Cast</NavItem>
        <NavItem to="reviews">Reviews</NavItem>
        <Outlet />
      </InfoBox>
    </>
  );
};

export default DetailsMovie;

DetailsMovie.propTypes ={
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.object.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  })
}
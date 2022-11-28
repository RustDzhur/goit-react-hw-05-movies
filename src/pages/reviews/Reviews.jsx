import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieReview } from 'Api/Api';
import { useParams } from 'react-router-dom';
import { Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieReview(id).then(res => setReviews(res.data.results));
  }, [id]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Text>There are no CONTENT, SORRY</Text>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};

import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieReview } from 'Api/Api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieReview(id).then(res => setReviews(res.data.results));
  }, [id]);

  return (
    <>
      <ul>
        {reviews.map(({ id, content, author }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            {reviews.length > 0 ? (
              <p>{content}</p>
            ) : (
              <p>There are no CONTENT, SORRY</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

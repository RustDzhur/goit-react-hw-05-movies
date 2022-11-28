import axios from 'axios';

const options = {
  api_key: '7efd03a8687aec97c05a5aff37256024',
};

//Трендовые фильмы
export const getTrendMovie = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${options.api_key}&page=1&language=en-US`
  );
};

//Поиск фильмоы по ключевому слову
export  const  searchQueryMovie =  searchQuery => {
  return  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${options.api_key}&query=${searchQuery}`
  );
};

//Получить детали фильма
export const getDetailsOfMovie = movieId => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${options.api_key}&language=en-US`
  );
};

//Получить список актеров
export const getMovieActors = movieId => {
  return axios.get(`
  https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${options.api_key}&language=en-US`);
};

//Ревью фильма
export const getMovieReview = movieId => {
  return axios.get(`
  https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${options.api_key}&language=en-US&page=1`);
};

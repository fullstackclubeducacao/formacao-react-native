// const axios = require('axios');
import axios from 'axios';

const paths = {
  nowPlaying:
    '/discover/movie?include_adult=false&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}',
  popularMovies:
    '/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200',
  genres: '/genre/movie/list?language=pt-BR',
};

const makeRequest = ({ path, method }) => {
  const baseUrl = 'https://api.themoviedb.org/3';

  const config = {
    method,
    url: `${baseUrl}${path}`,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjY2OWMzZjQyYTgwNmYzNTdkZWE5N2E1MGM3ZDFlNiIsIm5iZiI6MTUwMTA2ODExNi45MDEsInN1YiI6IjU5Nzg3YjUyYzNhMzY4NjA5ODAwZDQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lh0rATWPl_XXdxCp6ouMSQzLgAqHz4NCgGFTOuxxPrA',
      accept: 'application/json',
    },
  };

  return axios.request(config);
};

const getNowPlaying = async () => {
  try {
    const response = await makeRequest({
      path: paths.nowPlaying,
      method: 'get',
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to get now playing');
  }
};

const getPopularMovies = async () => {
  try {
    const response = await makeRequest({
      path: paths.popularMovies,
      method: 'get',
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to get now playing');
  }
};

const getGenres = async () => {
  try {
    const response = await makeRequest({
      path: paths.genres,
      method: 'get',
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to get now playing');
  }
};

const tmdbDataSource = {
  getNowPlaying,
  getPopularMovies,
  getGenres,
};

export default tmdbDataSource;

// const axios = require('axios');
import axios from 'axios';

let config = {
  method: 'get',
  url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjY2OWMzZjQyYTgwNmYzNTdkZWE5N2E1MGM3ZDFlNiIsIm5iZiI6MTUwMTA2ODExNi45MDEsInN1YiI6IjU5Nzg3YjUyYzNhMzY4NjA5ODAwZDQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lh0rATWPl_XXdxCp6ouMSQzLgAqHz4NCgGFTOuxxPrA',
    accept: 'application/json',
  },
};

const getNowPlaying = async () => {
  console.log('getNowPlaying axios');

  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get now playing');
  }
};

const tmdbDataSource = {
  getNowPlaying,
};

export default tmdbDataSource;

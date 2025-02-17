import { atom } from 'jotai';

const nowPlayingMovies = atom([]);
const popularMovies = atom([]);
const movieGenres = atom([]);

const atoms = {
  nowPlayingMovies,
  popularMovies,
  movieGenres
};

export default atoms;

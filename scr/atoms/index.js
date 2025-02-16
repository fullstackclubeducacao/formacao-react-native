import { atom } from 'jotai';

const nowPlayingMovies = atom([]);
const popularMovies = atom([]);

const atoms = {
  nowPlayingMovies,
  popularMovies,
};

export default atoms;

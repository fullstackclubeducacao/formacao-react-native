import { atom } from 'jotai';

const items = atom([]);

const completedItems = atom([]);

const nowPlayingMovies = atom([])

const atoms = {
  items,
  completedItems,
  nowPlayingMovies
};

export default atoms;

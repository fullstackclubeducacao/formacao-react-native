import { useAtom } from 'jotai';
import atoms from '../../atoms';
import tmdbDataSource from '../../dataSources/tmdb';
import { useState } from 'react';

const useTmdb = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useAtom(atoms.nowPlayingMovies);
  const [popularMovies, setPopularMovies] = useAtom(atoms.popularMovies);

  const [sectionedMovies, setSectionedMovies] = useState([]);

  const updateSectionedMovies = (section) => {
    setSectionedMovies((s) => [...s, section]);
  };

  const getNowPlaying = async () => {
    const response = await tmdbDataSource.getNowPlaying();

    const { results } = response;

    updateSectionedMovies({
      title: 'Now Showing',
      data: results,
      orientation: 'horizontal',
    });

    setNowPlayingMovies(results);
  };

  const getPopularMovies = async () => {
    const response = await tmdbDataSource.getPopularMovies();

    const { results } = response;

    setPopularMovies(results);

    setTimeout(() => {
      updateSectionedMovies({
        title: 'Popular Movies',
        data: results,
        orientation: 'vertical',
      });
    }, 500);
  };

  return {
    nowPlayingMovies,
    getNowPlaying,
    popularMovies,
    getPopularMovies,
    sectionedMovies,
  };
};

export default useTmdb;

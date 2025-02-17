import { useAtom } from 'jotai';
import atoms from '../../atoms';
import tmdbDataSource from '../../dataSources/tmdb';
import { useState } from 'react';

const useTmdb = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useAtom(atoms.nowPlayingMovies);
  const [popularMovies, setPopularMovies] = useAtom(atoms.popularMovies);

  const [sectionedMovies, setSectionedMovies] = useState([]);
  const [genres, setGenres] = useAtom(atoms.movieGenres);

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

  const getGenres = async () => {
    const response = await tmdbDataSource.getGenres();

    console.log("response: ", response)

    setGenres(response.genres);
  };

  const getPopularMovies = async () => {
    getGenres();

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
    genres,
  };
};

export default useTmdb;

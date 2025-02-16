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

    updateSectionedMovies({
      title: 'Now Showing',
      data: response.results,
      orientation: 'horizontal',
    });

    setNowPlayingMovies(response.results);
  };

  const getPopularMovies = async () => {
    const mock = [
      {
        title: 'movie 1',
      },
      {
        title: 'movie 2',
      },
      {
        title: 'movie 3',
      },
      {
        title: 'movie 4',
      },
      {
        title: 'movie 5',
      },
      {
        title: 'movie 6',
      },
      {
        title: 'movie 4',
      },
      {
        title: 'movie 5',
      },
      {
        title: 'movie 6',
      },
      {
        title: 'movie 4',
      },
      {
        title: 'movie 5',
      },
      {
        title: 'movie 6',
      },
      {
        title: 'movie 4',
      },
      {
        title: 'movie 5',
      },
      {
        title: 'movie 6',
      },
      {
        title: 'movie 4',
      },
      {
        title: 'movie 5',
      },
      {
        title: 'movie 6',
      },
      {
        title: 'movie 4',
      },
      {
        title: 'movie 5',
      },
      {
        title: 'movie 6',
      },
      {
        title: 'movie 4',
      },
      {
        title: 'movie 5',
      },
      {
        title: 'movie 6',
      },
    ];

    setPopularMovies(mock);

    setTimeout(() => {
      updateSectionedMovies({
        title: 'Popular Movies',
        data: mock,
        orientation: 'vertical',
      });
    }, 500)
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

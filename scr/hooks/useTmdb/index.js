import { useAtom } from 'jotai';
import atoms from '../../atoms';
import tmdbDataSource from '../../dataSources/tmdb';

const useTmdb = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useAtom(atoms.nowPlayingMovies);

  const getNowPlaying = async () => {
    const response = await tmdbDataSource.getNowPlaying();

    setNowPlayingMovies(response.results);
  };

  return {
    nowPlayingMovies,
    getNowPlaying,
  };
};

export default useTmdb;

import tmdbDataSource from '../../dataSources/tmdb';

const useTmdb = () => {
  getNowPlaying = async () => {
    console.log('getNowPlaying');

    return tmdbDataSource.getNowPlaying();
  };

  return {
    getNowPlaying,
  };
};

export default useTmdb;

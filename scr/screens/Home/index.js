import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import useTmdb from '../../hooks/useTmdb';

import MoviesList from './components/MoviesList';

function Home() {
  const { nowPlayingMovies, getNowPlaying } = useTmdb();

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MoviesList nowPlayingMovies={nowPlayingMovies} />
    </SafeAreaView>
  );
}

export default Home;

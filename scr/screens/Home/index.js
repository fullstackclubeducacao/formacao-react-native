import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Button, SafeAreaView, Image } from 'react-native';

import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';
import { useAtom } from 'jotai';
import atoms from '../../atoms';
import useToDoList from '../../hooks/useToDoList';
import useTmdb from '../../hooks/useTmdb';
import Text, { Paragraph, Title } from '../../components/text';

import starIcon from '../../assets/icons/Star.png';
import MoviesList from './components/MoviesList';

function Home({ navigation }) {
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

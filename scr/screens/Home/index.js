import React, { useEffect } from 'react';
import { SafeAreaView, SectionList, View } from 'react-native';

import styles from './styles';
import useTmdb from '../../hooks/useTmdb';

import MoviesList from './components/MoviesList';
import PopularMoviesList from './components/PopularMoviesList';
import { Paragraph, Title } from '../../components/text';
import HeaderSection from './components/HeaderSection';

function Home() {
  const { nowPlayingMovies, getNowPlaying, popularMovies, getPopularMovies, sectionedMovies } =
    useTmdb();

  useEffect(() => {
    Promise.all([getNowPlaying(), getPopularMovies()]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionedMovies}
        stickySectionHeadersEnabled={false}
        renderItem={({ section, index }) => {
          if (section.orientation === 'horizontal' && index === 0) {
            return <MoviesList nowPlayingMovies={section.data} />;
          }

          if (section.orientation === 'horizontal' && index > 0) {
            return null;
          }

          if (section.orientation === 'vertical' && index === 0) {
            return <PopularMoviesList popularMoviesData={section.data} />;
          }

          if (section.orientation === 'vertical' && index > 0) {
            return null;
          }

          return null;
        }}
        renderSectionHeader={({ section }) => {
          console.log('section: ', section.orientation);

          // return <Title style={{}}>{title}</Title>
          return <HeaderSection title={section.title} />;
        }}
      />
    </SafeAreaView>
  );
}

export default Home;

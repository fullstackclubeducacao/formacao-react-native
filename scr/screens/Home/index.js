import React, { useEffect } from 'react';
import { SafeAreaView, SectionList } from 'react-native';

import styles from './styles';
import useTmdb from '../../hooks/useTmdb';

import HorizontalMoviesList from './components/HorizontalMoviesList';
import VerticalMoviesList from './components/VerticalMoviesList';

import HeaderSection from './components/HeaderSection';

function Home() {
  const { getNowPlaying, getPopularMovies, sectionedMovies } = useTmdb();

  useEffect(() => {
    Promise.all([getNowPlaying(), getPopularMovies()]);
  }, []);

  const renderItem = ({ section, index }) => {
    if (section.orientation === 'horizontal' && index === 0) {
      return <HorizontalMoviesList nowPlayingMovies={section.data} />;
    }

    if (section.orientation === 'vertical' && index === 0) {
      return <VerticalMoviesList popularMoviesData={section.data} />;
    }

    return null;
  };

  const renderSectionHeader = ({ section }) => <HeaderSection title={section.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionedMovies}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </SafeAreaView>
  );
}

export default Home;

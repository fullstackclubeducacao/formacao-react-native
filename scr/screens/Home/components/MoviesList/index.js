import React from 'react';

import { FlatList, Image, View } from 'react-native';
import { Paragraph, Title, TitleSecondary } from '../../../../components/text';
import styles from './styles';
import EmptyList from '../EmptyList';
import MovieItem from '../MovieItem';
import Separator from '../../../../components/separator';

function MoviesList({ nowPlayingMovies }) {
  
  const renderItem = ({ item, index }) => {
    return <MovieItem item={item} index={index} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TitleSecondary>Now Showing</TitleSecondary>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListContent}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={Separator({ size: 21, direction: 'horizontal' })}
        ListFooterComponent={Separator({ size: 21, direction: 'vertical' })}
        ListHeaderComponent={Separator({ size: 21, direction: 'horizontal' })}
        data={nowPlayingMovies}
        renderItem={renderItem}
      />
    </View>
  );
}

export default MoviesList;

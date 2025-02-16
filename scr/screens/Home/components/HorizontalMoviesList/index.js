import React from 'react';

import { FlatList, View } from 'react-native';
import { TitleSecondary } from '../../../../components/text';
import styles from './styles';
import EmptyList from '../EmptyList';
import MovieItem from '../MovieItem';
import Separator from '../../../../components/separator';

function HorizontalMoviesList({ nowPlayingMovies }) {
  const renderItem = ({ item, index }) => {
    return <MovieItem item={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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

export default HorizontalMoviesList;

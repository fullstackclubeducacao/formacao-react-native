import React from 'react';
import { FlatList, View } from 'react-native';
import PopularMovieItem from '../PopularMovieItem';
import Separator from '../../../../components/separator';

function VerticalMoviesList({ popularMoviesData }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={popularMoviesData}
        ItemSeparatorComponent={Separator({ size: 16, direction: 'vertical' })}
        renderItem={({ item }) => <PopularMovieItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default VerticalMoviesList;

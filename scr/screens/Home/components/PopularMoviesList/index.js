import React from 'react';
import { FlatList, View } from 'react-native';
import PopularMovieItem from '../PopularMovieItem';
import Separator from '../../../../components/separator';

function PopularMoviesList({ popularMoviesData }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={popularMoviesData}
        ItemSeparatorComponent={Separator({ size: 21, direction: 'vertical' })}
        renderItem={({ item }) => <PopularMovieItem movie={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default PopularMoviesList;

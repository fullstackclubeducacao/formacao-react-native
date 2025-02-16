import React from 'react';

import { View } from 'react-native';

import { Title } from '../../../../components/text';

function PopularMovieItem({ movie }) {
  return (
    <View style={{height: 120, backgroundColor: 'red', marginHorizontal: 20}}>
      <Title>{movie.title}</Title>
    </View>
  );
}

export default PopularMovieItem;

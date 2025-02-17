import React from 'react';

import { View } from 'react-native';
import { Title } from '../../components/text';

function MovieDetail({ route }) {
  const { params } = route;
  const { item } = params;

  return (
    <View>
      <Title>{item.title}</Title>
      <Title>{item.id}</Title>
    </View>
  );
}

export default MovieDetail;

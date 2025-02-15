import React from 'react';

import { View, Text } from 'react-native';

function Edit({ route }) {
  const { params } = route;

  const { item } = params;

  console.log('item: ', item);

  return (
    <View>
      <Text>Edit</Text>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

export default Edit;

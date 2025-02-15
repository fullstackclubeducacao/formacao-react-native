import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import style from './styles';

function ItemList({ item }) {
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description || 'Sem descrição'}</Text>
      </View>
    </View>
  );
}

export default ItemList;

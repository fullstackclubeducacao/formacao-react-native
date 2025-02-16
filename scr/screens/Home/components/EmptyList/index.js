import React from 'react';
import { Text, View } from 'react-native';

function EmptyList() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nenhum filme encontrado!!!</Text>
    </View>
  );
}

export default EmptyList;

import React from 'react';
import { Button, Text, View } from 'react-native';

function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Details;

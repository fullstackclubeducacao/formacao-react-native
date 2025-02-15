import React from 'react';
import { Button, Text, View } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Detalhes')} />
    </View>
  );
}

export default Home;

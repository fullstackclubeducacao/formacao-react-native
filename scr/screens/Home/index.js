import React, { useState } from 'react';
import { View, FlatList, Text, Button, SafeAreaView } from 'react-native';

import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';

function Home({ navigation }) {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((s) => {
      const newItem = {
        name: 'Item ' + (s.length + 1),
        description: 'Description ' + (s.length + 1),
        done: false,
      };

      const oldState = [...s];

      oldState.push(newItem);

      return oldState;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatListContent}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={items}
        renderItem={({item}) => {return <ItemList item={item} />}}
      />

      <Button title="Adicionar" onPress={addItem} />
    </SafeAreaView>
  );
}

export default Home;

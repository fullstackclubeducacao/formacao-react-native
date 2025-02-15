import React, { useState } from 'react';
import { View, FlatList, Text, Button, SafeAreaView } from 'react-native';

import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';

function Home({ navigation }) {
  const [items, setItems] = useState([]);

  const [completedItems, setCompletedItems] = useState([]);

  const [showCompletedItems, setShowCompletedItems] = useState(false);

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!showCompletedItems);
  };

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

  const completeItem = ({ item, index }) => {
    if (item.done) {
      setItems((s) => {
        const oldState = [...s];

        const itemToAdd = {
          ...item,
          done: false,
        };

        oldState.push(itemToAdd);

        return oldState;
      });

      setCompletedItems((s) => {
        const oldState = [...s];

        oldState.splice(index, 1);

        return oldState;
      });

      return;
    }

    setItems((s) => {
      const oldState = [...s];

      oldState.splice(index, 1);

      return oldState;
    });

    setCompletedItems((s) => {
      const oldState = [...s];

      const itemToAdd = {
        ...item,
        done: true,
      };

      oldState.push(itemToAdd);

      return oldState;
    });
  };
  const removeItem = ({ index }) => {
    setItems((s) => {
      const oldState = [...s];

      oldState.splice(index, 1);

      return oldState;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatListContent}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={showCompletedItems ? completedItems : items}
        renderItem={({ item, index }) => {
          return (
            <ItemList
              index={index}
              removeItemPress={removeItem}
              completeItemPress={completeItem}
              item={item}
            />
          );
        }}
      />

      <Button
        title={showCompletedItems ? 'Mostrar todos' : 'Mostrar apenas concluidos'}
        onPress={handleShowCompletedItems}
      />
      <Button title="Adicionar" onPress={addItem} />
    </SafeAreaView>
  );
}

export default Home;

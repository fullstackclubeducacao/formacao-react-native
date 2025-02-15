import React, { useRef, useState } from 'react';
import { View, FlatList, Text, Button, SafeAreaView } from 'react-native';

import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';

function Home({ navigation }) {
  const flatListRef = useRef(null);

  const [items, setItems] = useState([]);

  const [completedItems, setCompletedItems] = useState([]);

  const [showCompletedItems, setShowCompletedItems] = useState(false);

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!showCompletedItems);
  };

  const scrollToIndex = ({ index }) => {
    setTimeout(() => {
      flatListRef.current.scrollToEnd({ animated: true });
    }, 100);
  };

  const addItem = () => {
    let index = 0;

    setItems((s) => {
      const newItem = {
        name: 'Item ' + (s.length + 1),
        description: 'Description ' + (s.length + 1),
        done: false,
      };

      const oldState = [...s];

      oldState.push(newItem);

      index = oldState.length - 1;

      scrollToIndex({ index });

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
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        style={styles.flatListContent}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <View style={{ height: 21 }} />}
        ListFooterComponent={() => <View style={{ height: 21 }} />}
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

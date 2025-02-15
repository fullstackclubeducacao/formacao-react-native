import React, { useRef, useState } from 'react';
import { View, FlatList, Text, Button, SafeAreaView } from 'react-native';

import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';
import { useAtom } from 'jotai';
import atoms from '../../atoms';
import useToDoList from '../../hooks/useToDoList';

function Home({ navigation }) {
  const flatListRef = useRef(null);

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!showCompletedItems);
  };

  const scrollToIndex = ({ index }) => {
    setTimeout(() => {
      flatListRef.current.scrollToEnd({ animated: true });
    }, 100);
  };

  const { completedItems, items, addItem, completeItem, removeItem } = useToDoList({
    scrollToIndex,
  });

  const [showCompletedItems, setShowCompletedItems] = useState(false);

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

import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Text, Button, SafeAreaView } from 'react-native';

import ItemList from './components/ItemList';
import EmptyList from './components/EmptyList';
import styles from './styles';
import { useAtom } from 'jotai';
import atoms from '../../atoms';
import useToDoList from '../../hooks/useToDoList';
import useTmdb from '../../hooks/useTmdb';

function Home({ navigation }) {
  const flatListRef = useRef(null);

  const { getNowPlaying } = useTmdb();

  const handleShowCompletedItems = () => {
    setShowCompletedItems(!showCompletedItems);
  };

  const handleAdd = () => {
    navigation.navigate('Adicionar');
  };

  const scrollToIndex = ({ index }) => {
    setTimeout(() => {
      flatListRef.current.scrollToEnd({ animated: true });
    }, 100);
  };

  const { completedItems, items, completeItem, removeItem } = useToDoList({
    scrollToIndex,
  });

  const [showCompletedItems, setShowCompletedItems] = useState(false);

  useEffect(() => {
    getNowPlaying();
  }, []);

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

      <View style={styles.buttonsContainer}>
        <Button
          title={showCompletedItems ? 'Mostrar todos' : 'Mostrar apenas concluidos'}
          onPress={handleShowCompletedItems}
        />
        {!showCompletedItems ? <Button title="Adicionar" onPress={handleAdd} /> : null}
      </View>
    </SafeAreaView>
  );
}

export default Home;

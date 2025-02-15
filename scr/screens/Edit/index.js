import React from 'react';

import { View, Text, Button } from 'react-native';

import { useAtomValue } from 'jotai';
import atoms from '../../atoms';
import useToDoList from '../../hooks/useToDoList';

function Edit({ navigation, route }) {
  const itemsToComplete = useAtomValue(atoms.items);

  const { params } = route;

  const { item, index } = params;

  const { editItem } = useToDoList({});

  const handleEdit = () => {
    editItem({
      index: index,
      newContent: {
        name: item.name,
        description: `${new Date().toISOString()} - ${item.description}`,
      },
    });

    navigation.goBack();
  };

  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>

      <Button title="Atualizar" onPress={handleEdit} />
      <Button title="Cancelar" onPress={navigation.goBack} />
    </View>
  );
}

export default Edit;

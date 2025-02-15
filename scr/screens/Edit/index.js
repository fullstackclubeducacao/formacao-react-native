import React from 'react';

import { View, Text } from 'react-native';

import { useAtomValue } from 'jotai';
import atoms from '../../atoms';

function Edit({ route }) {
  const itemsToComplete = useAtomValue(atoms.items);

  const { params } = route;

  const { item } = params;

  console.log('item: ', item);

  return (
    <View>
      <Text>Edit</Text>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>

      <Text>{`Items para completar: ${itemsToComplete.length}`}</Text>
    </View>
  );
}

export default Edit;

import React, { useState } from 'react';

import { View, Text, Button, TextInput } from 'react-native';

import { useAtomValue } from 'jotai';
import atoms from '../../atoms';
import useToDoList from '../../hooks/useToDoList';
import styles from './styles';

function Edit({ navigation, route }) {
  const { params } = route;

  const { item, index } = params;

  const { editItem } = useToDoList({});

  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleEdit = () => {
    editItem({
      index: index,
      newContent: {
        name: name,
        description: description,
      },
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nome" />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Atualizar" onPress={handleEdit} />
        <Button title="Cancelar" onPress={navigation.goBack} />
      </View>
    </View>
  );
}

export default Edit;

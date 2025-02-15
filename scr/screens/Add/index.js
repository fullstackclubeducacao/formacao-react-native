import React, { useState } from 'react';

import { View, Text, Button, TextInput, Alert } from 'react-native';

import { useAtomValue } from 'jotai';
import atoms from '../../atoms';
import useToDoList from '../../hooks/useToDoList';
import styles from './styles';

function Add({ navigation, route }) {
  const { addItem } = useToDoList({});

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleEdit = () => {
    if (!name || !description) {
      Alert.alert('Erro', 'Preencha todos os campos');

      return;
    }

    addItem({
      name: name,
      description: description,
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
        <Button title="Salvar" onPress={handleEdit} />
        <Button title="Cancelar" onPress={navigation.goBack} />
      </View>
    </View>
  );
}

export default Add;

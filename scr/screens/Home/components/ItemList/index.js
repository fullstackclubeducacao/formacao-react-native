import React, { useEffect } from 'react';
import { Text, View, Pressable, Alert, Image } from 'react-native';
import style from './styles';
import { useNavigation } from '@react-navigation/native';

const iconEdit = require('../../../../assets/icons/Pencil.png');
const iconRemove = require('../../../../assets/icons/Trash.png');
const iconComplete = require('../../../../assets/icons/CheckCircle.png');

function ActionButton({ onPress, source }) {
  return (
    <Pressable onPress={onPress}>
      <Image source={source} style={{ width: 24, height: 24 }} resizeMode='contain' />
    </Pressable>
  );
}

function ItemList({ item, index, completeItemPress, removeItemPress }) {
  const navigation = useNavigation();

  const handleClickEdit = () => {
    navigation.navigate('Editar', { item });
  };

  const handleClickRemove = () => {
    removeItemPress({ index });
  };

  const handleClickComplete = () => {
    completeItemPress({ item, index });
  };

  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description || 'Sem descrição'}</Text>
      </View>

      <View style={style.actionsContainer}>
        <ActionButton source={iconEdit} title={'Editar'} onPress={handleClickEdit} />
        {!item.done ? (
          <ActionButton source={iconRemove} title={'Excluir'} onPress={handleClickRemove} />
        ) : null}
        <ActionButton source={iconComplete} title={'Concluir'} onPress={handleClickComplete} />
      </View>
    </View>
  );
}

export default ItemList;

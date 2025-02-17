import React from 'react';

import starIcon from '../../../../assets/icons/Star.png';
import { Image, Pressable, View } from 'react-native';
import { Paragraph, Title } from '../../../../components/text';
import { useNavigation } from '@react-navigation/native';

function MovieItem({ item, index }) {
  const { navigate } = useNavigation();

  const goToDetail = () => {
    navigate('MovieDetail', { item: item });
  };
  
  return (
    <Pressable onPress={goToDetail} style={{ width: 143, height: 283 }}>
      <View
        style={{
          borderRadius: 5,
          shadowColor: '#000',
          shadowOffset: {
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        }}
      >
        <Image
          style={{
            width: 143,
            height: 212,
            borderRadius: 5,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
          resizeMode="cover"
        />
      </View>

      <View style={{ marginTop: 12 }}>
        <Title>{item.original_title}</Title>

        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Image source={starIcon} style={{ width: 16, height: 16, marginRight: 4 }} />
          <Paragraph>{`${Number(item.vote_average).toFixed(1)}/10 IMDb`}</Paragraph>
        </View>
      </View>
    </Pressable>
  );
}

export default MovieItem;

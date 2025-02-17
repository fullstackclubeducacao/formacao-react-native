import React from 'react';

import starIcon from '../../../../assets/icons/Star.png';
import { FlatList, Image, Pressable, View } from 'react-native';
import { Paragraph, Title } from '../../../../components/text';
import useTmdb from '../../../../hooks/useTmdb';
import Separator from '../../../../components/separator';
import { useNavigation } from '@react-navigation/native';

function PopularMovieItem({ item, index }) {
  const { genres } = useTmdb();

  const { navigate } = useNavigation();

  const goToDetail = () => {
    navigate('MovieDetail', { item: item });
  };

  return (
    <Pressable
      onPress={goToDetail}
      style={{
        height: 128,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 5,
        marginBottom: 16,
        marginHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: 'row', overflow: 'hidden' }}>
        <View
          style={{
            borderRadius: 5,
            marginRight: 16,
          }}
        >
          <Image
            style={{
              width: 85,
              height: 128,
              borderRadius: 5,
            }}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            }}
            resizeMode="cover"
          />
        </View>

        <View style={{ marginTop: 12, gap: 8, overflow: 'hidden' }}>
          <Title numberOfLines={2}>{item.original_title}</Title>

          <View style={{ flexDirection: 'row' }}>
            <Image source={starIcon} style={{ width: 16, height: 16, marginRight: 4 }} />
            <Paragraph>{`${Number(item.vote_average).toFixed(1)}/10 IMDb`}</Paragraph>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <FlatList
              horizontal={true}
              data={item.genre_ids}
              renderItem={({ item: genre_id }) => {
                const genreDetail = genres.find((genre) => {
                  return genre.id === genre_id;
                });

                if (!genreDetail) {
                  return null;
                }

                return (
                  <View
                    key={genre_id}
                    style={{
                      marginRight: 8,
                      backgroundColor: '#DBE3FF',
                      padding: 4,
                      paddingHorizontal: 12,
                      borderRadius: 100,
                      // height: 18
                    }}
                  >
                    <Paragraph style={{ color: '#88A4E8' }}>{genreDetail.name}</Paragraph>
                  </View>
                );
              }}
              showsHorizontalScrollIndicator={false}
              ListFooterComponent={Separator({ size: 118, direction: 'horizontal' })}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default PopularMovieItem;

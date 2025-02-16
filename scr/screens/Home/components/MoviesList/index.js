import React from 'react';

import { FlatList, Image, View } from 'react-native';
import { Paragraph, Title, TitleSecondary } from '../../../../components/text';
import styles from './styles';
import EmptyList from '../EmptyList';

import starIcon from '../../../../assets/icons/Star.png';

function MovieItem({ item, index }) {
  return (
    <View style={{ width: 143, height: 283 }}>
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
    </View>
  );
}

function MoviesList({ nowPlayingMovies }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'transparent',
          marginVertical: 16,
          paddingHorizontal: 24,
        }}
      >
        <TitleSecondary>Now Showing</TitleSecondary>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListContent}
        ListEmptyComponent={EmptyList}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        ListFooterComponent={() => <View style={{ height: 21 }} />}
        ListHeaderComponent={() => <View style={{ width: 20 }} />}
        data={nowPlayingMovies}
        renderItem={({ item, index }) => {
          return <MovieItem item={item} index={index} />;
        }}
      />
    </View>
  );
}

export default MoviesList;

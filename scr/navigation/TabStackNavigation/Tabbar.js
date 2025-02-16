import React from 'react';

import { Image, Pressable, View } from 'react-native';
import { Paragraph } from '../../components/text';

const FavoriteIcon = require('../../assets/icons/Favorites.png');
const MoviesIcon = require('../../assets/icons/Movies.png');
const TicketsIcon = require('../../assets/icons/Tickets.png');

const FavoriteDisabledIcon = require('../../assets/icons/FavoritesDisabled.png');
const MoviesDisabledIcon = require('../../assets/icons/MoviesDisabled.png');
const TicketsDisabledIcon = require('../../assets/icons/TicketsDisabled.png');

const icons = {
  HomeStack: MoviesIcon,
  Favorites: FavoriteIcon,
  Tickets: TicketsIcon,
};
const iconsDisabled = {
  HomeStack: MoviesDisabledIcon,
  Favorites: FavoriteDisabledIcon,
  Tickets: TicketsDisabledIcon,
};

function Tabbar({ insets, state, navigation }) {
  const handleClick = (route) => navigation.navigate(route.name);
  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: '#FFF',
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const Icon = isFocused ? icons[route.name] : iconsDisabled[route.name];

        return (
          <Pressable
            onPress={() => handleClick(route)}
            key={route.name}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
            }}
          >
            <Image source={Icon} style={{ width: 24, height: 24 }} resizeMode="contain" />

            {/* <Paragraph style={{ color: state.index === index ? 'green' : 'blue' }}>
              {route.name}
            </Paragraph> */}
          </Pressable>
        );
      })}
    </View>
  );
}

export default Tabbar;

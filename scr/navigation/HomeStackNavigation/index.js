import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/Home';
import MovieDetail from '../../screens/MovieDetail';

const HomeStack = createNativeStackNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="Inicio">
      <HomeStack.Screen name="Inicio" component={Home} />
      <HomeStack.Screen name="Movie Detail" component={MovieDetail} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigation;

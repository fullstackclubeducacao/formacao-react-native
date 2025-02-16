import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Tickets from '../screens/Tickets';
import Favorites from '../screens/Favorites';
import MovieDetail from '../screens/MovieDetail';

const HomeStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="Inicio">
      <HomeStack.Screen name="Inicio" component={Home} />
      <HomeStack.Screen name="Movie Detail" component={MovieDetail} />
    </HomeStack.Navigator>
  );
}

function TabStackNavigation() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{ headerShown: false }}
      />
      <TabStack.Screen name="Tickets" component={Tickets} />
      <TabStack.Screen name="Favorites" component={Favorites} />
    </TabStack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <TabStackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;

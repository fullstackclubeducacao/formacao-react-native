import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Edit from '../screens/Edit';
import Add from '../screens/Add';

const HomeStack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator initialRouteName="Inicio">
      <HomeStack.Screen name="Inicio" component={Home} />
      <HomeStack.Screen name="Editar" component={Edit} />
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
      <TabStack.Screen name="Adicionar" component={Add} />
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

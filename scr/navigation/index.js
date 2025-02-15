import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Edit from '../screens/Edit';
import Add from '../screens/Add';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Editar" component={Edit} />
        <Stack.Screen name="Adicionar" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

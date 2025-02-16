import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigation from '../HomeStackNavigation';

import Tickets from '../../screens/Tickets';
import Favorites from '../../screens/Favorites';

const TabStack = createBottomTabNavigator();
function TabStackNavigation() {
  return (
    <TabStack.Navigator >
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

export default TabStackNavigation;

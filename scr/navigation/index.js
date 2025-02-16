import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import TabStackNavigation from './TabStackNavigation';

function Navigation() {
  return (
    <NavigationContainer>
      <TabStackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;

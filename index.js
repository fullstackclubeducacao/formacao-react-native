/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './scr/App';

if (__DEV__) {
  require('./ReactotronConfig');
}

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

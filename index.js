/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import BottonNav from './pages/BottomNav'
import StackNav from './pages/StackNav'

AppRegistry.registerComponent(appName, () => StackNav);

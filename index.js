/**
 * @format
 */
import './shim.js';
import * as encoding from 'text-encoding';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import '@walletconnect/react-native-compat';
AppRegistry.registerComponent(appName, () => App);

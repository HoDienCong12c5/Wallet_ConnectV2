/**
 * @format
 */
import './shim.js';
import * as encoding from 'text-encoding';
import {AppRegistry, PermissionsAndroid} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import '@walletconnect/react-native-compat';

const granted = PermissionsAndroid.check(
  PermissionsAndroid.PERMISSIONS.CAMERA,
  PermissionsAndroid.RECORD_AUDIO,
);
PermissionsAndroid.check(
  PermissionsAndroid.PERMISSIONS.CAMERA,
  PermissionsAndroid.RECORD_AUDIO,
);
granted
  .then(data => {
    if (!data) {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ];
      PermissionsAndroid.requestMultiple(permissions);
    }
  })
  .catch(err => {
    console.log(err.toString());
  });
AppRegistry.registerComponent(appName, () => App);

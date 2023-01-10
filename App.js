import {
  StyleSheet, Text, View, Button,
  PermissionsAndroid
} from 'react-native';
import React, { useState, useEffect } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import Web3Service from './modals/web3'
import WCV2 from './modals/walletConnectV2'

const App = () => {
  const [resultQR, setResultQR] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [walletV2, setWalletV2] = useState(null);
  useEffect(() => {
    const granted = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.RECORD_AUDIO
    );
    PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.RECORD_AUDIO
    );
    granted.then((data) => {
      if (!data) {
        const permissions = [PermissionsAndroid.PERMISSIONS.V, PermissionsAndroid.PERMISSIONS.CAMERA];
        PermissionsAndroid.requestMultiple(permissions);
      }
    }).catch((err) => {
      console.log(err.toString());
    });
    const newWallet = async () => {
      const signV2 = await WCV2.init();
      setWalletV2(signV2);
    };
    !walletV2 && newWallet();
  }, [walletV2]);
  const connectV2 = async () => {
    const signV2 = await WCV2.connect(walletV2);
    console.log({ signV2 });
  };
  const handleScan = (data) => {};
  return (
    <View>
      <Text>App</Text>
      <Button
        onPress={connectV2}
        title="Connect V2"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {/* <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="green"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      {/* {setShowQR && <QRCodeScanner onRead={handleScan} />} */}
      {/* <QRCodeScanner onRead={handleScan} /> */}
      {/* <QRCodeScanner
        onRead={handleScan}
        flashMode={RNCamera.Constants.FlashMode.torch}      /> */}
      <Text>{resultQR}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

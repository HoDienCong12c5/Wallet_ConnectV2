import {StyleSheet, Text, View, Button, PermissionsAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import Web3Service from './modals/web3';

import WCV2 from './modals/walletConnectV2';
const App = () => {
  const [resultQR, setResultQR] = useState(null);
  const [showQR, setShowQR] = useState(false);

  const connectV2 = async () => {
    const signV2 = await WCV2.connect();
    console.log({signV2});
  };
  const handleScan = data => {};
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
      <Text>{resultQR}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {ethers, Wallet} from 'ethers';
import crypto from 'crypto';
const App = () => {
  const onPressLearnMore = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://data-seed-prebsc-2-s3.binance.org:8545',
    );
    // const wallet = new Wallet(provider.getSigner())
    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = '0x' + id;
    console.log({privateKey});
    var wallet = new ethers.Wallet(privateKey);
    console.log({wallet});
    console.log('ok');
  };
  return (
    <View>
      <Text>App</Text>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

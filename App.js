import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {ethers, Wallet} from 'ethers';
import crypto from 'crypto';
import Web3 from 'web3';
const rpc = 'https://rpc.testnet.tomochain.com';
const App = () => {
  const createPrKey = () => {
    const id = crypto.randomBytes(32).toString('hex');
    return '0x' + id;
  };
  const prkey =
    '0x9e07e78b0cc403fc5779b38288c191d9cf15dc7281e5c83a914f4cebb9e6c68d';
  const pkey = '0x2fb6cF57d2B795b2b5838FcB641deaBeD265Ad13';

  const onPressLearnMore = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider(rpc));

    // var wallet = new ethers.Wallet(prkey);
    // provider.getBalance(pkey).then(balance => {
    //   const balanceInEth = ethers.utils.formatEther(balance);
    //   console.log(`balance: ${balanceInEth} ETH`);
    // });
    console.log(web3);
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

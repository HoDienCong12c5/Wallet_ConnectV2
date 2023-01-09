import SignClient from '@walletconnect/sign-client';
import {WalletV2} from '../common/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {parseUri} from '@walletconnect/utils';
const pKey = '0x2fb6cF57d2B795b2b5838FcB641deaBeD265Ad13';

const WCV2 = {
  init: async () => {
    const signClient = await SignClient.init({
      projectId: '8a8cb77a5b6a89081dcb08883089660b',
      // relayUrl:
      //   'https://relay.walletconnect.com/?projectId=22cc85fcef110347e1b15c9f7075acd3',
      metadata: {
        name: 'WalletConnectV2_Example',
        description: 'WalletConnectV2_Example',
        url: 'https://walletconnect.com/',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
      },
    });
    return signClient;
  },
  connect: async uri => {
    const signClient = await WCV2.init();
    uri = WalletV2.url;
    const {version} = parseUri(uri);
    console.log({version});

    const s = await signClient.core.pairing.pair({uri: uri});
    // const s = await signClient.pair({uri});
    console.log({s});
    // const {acknowledged} = await signClient.update({
    //   topic: '3440cfdda5c5164cf04d7e3cb195368ac993620604cf9d2a4ddbfd1c9a1316e1',
    //   namespaces: WalletV2.namespaces,
    // });

    signClient.on('session_proposal', async event => {
      console.log('====================================');
      console.log('start submit');
      console.log({event});

      console.log('====================================');
      // await signClient.reject({
      //   id: event.params.id,
      //   reason: {
      //     code: 1,
      //     message: 'rejected',
      //   },
      // });
      const [acknowledged] = await signClient.approve({
        id: event.params.id,
        namespaces: WalletV2.namespaces,
      });
      // const {acknowledged} = await signClient.update({
      //   topic:
      //     '9a1f4d802a8fb5d5329d0d91db762561230a55edf403d4476000d112f2519b45',
      //   namespaces: WalletV2.namespaces,
      // });
      // const session = await acknowledged();
      // console.log({session});
    });
    // console.log({topic});
    // signClient.on('session_request', event => {});

    return 'result';
  },
};
export default WCV2;

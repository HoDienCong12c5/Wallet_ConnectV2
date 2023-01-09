import Web3 from 'web3';
import bigdecimal from 'bigdecimal';
const rpc = 'https://rpc-mumbai.matic.today/';
const prkey =
  '0x9e07e78b0cc403fc5779b38288c191d9cf15dc7281e5c83a914f4cebb9e6c68d';
const pkey = '0x2fb6cF57d2B795b2b5838FcB641deaBeD265Ad13';
let web3Main = null;
const Web3Service = {
  create: () => {
    web3Main = new Web3(new Web3.providers.HttpProvider(rpc));
    return web3Main;
  },
  getGasPrice: address => {
    const web3 = Web3Service.create();
    return new Promise((resolve, reject) => {
      const gasPrice = web3.eth.getGasPrice();
      console.log('get gasPrice in web3 ', gasPrice);
      resolve(gasPrice);
    });
  },
  getBalance: address => {
    const web3 = Web3Service.create();
    return new Promise(async (resolve, reject) => {
      const balance = await web3.eth.getBalance(pkey);
      const final = balance / Math.pow(10, 18);
      const temp = final.toFixed(4);
      resolve(temp);
    });
  },
  estimateGasTxs: rawTransaction => {
    const web3 = Web3Service.create();
    return new Promise((resolve, reject) => {
      web3.eth
        .estimateGas(rawTransaction)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log('Gas estimate error: ' + err);
          reject(err);
        });
    });
  },
  inItAddress: async () => {
    const web3 = Web3Service.create();
    const address = await web3.eth.accounts.create();
    return address;
  },
  convertBalanceToWei: (strValue, iDecimal = 18) => {
    const multiplyNum = new bigdecimal.BigDecimal(Math.pow(10, iDecimal));
    const convertValue = new bigdecimal.BigDecimal(String(strValue));
    return multiplyNum.multiply(convertValue).toString().split('.')[0];
  },
  sendTransaction: async (from, to, value) => {
    const web3 = Web3Service.create();

    value = web3.utils.numberToHex(Web3Service.convertBalanceToWei(value));
    const gasPrice = web3.utils.numberToHex(await this.getGasPrice());
    console.log({gasPrice});
    let nonce = await web3.eth.getTransactionCount(from);
    nonce = web3.utils.numberToHex(await nonce);
    const data = {
      from,
      to,
      value,
      gasPrice,
      nonce,
    };
    console.log({data});
    const gasLimit = await this.estimateGasTxs(data);
    data.gasLimit = await web3.utils.numberToHex(gasLimit);
    delete data.from;

    return new Promise(async (resolve, reject) => {
      const rawTs = await web3.eth.accounts.signTransaction(data, prkey);
      web3.eth.sendSignedTransaction(rawTs.rawTransaction, (error, result) => {
        if (error) {
          console.log('error', error);
          reject(error);
        } else {
          console.log('result', result);
          resolve(result);
        }
      });
    });
  },
};
export default Web3Service;

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan renew place horn grace opinion obscure gas'; 
let testAccounts = [
"0xf6b3ac2b1f3a26be1c2fa2a3390a28486e8c02a6677295dcef6a3510572ac327",
"0xffa90e3d21765ae301466e25468705b7376dc21c1a176f6f59429d0df5b97d77",
"0x4c9d1fd5a4a005e9f4831cacf1845693b5c890110113256949146c6b47e1fb56",
"0x6876982b8a67047eb94c5892c4521ac5af090c11e48db82d5a6ce23f5360cf0b",
"0x7370e9c4798c6c3ae8a4f309e690c71939f14b6b7cbdb9db68913d2f9977391f",
"0x9d6e0df1769820b6952a5c976c6041ec601b5f64e3003796d375c5409fe55a16",
"0x3f827fee0205d8386af2e7bd1debf88545b137c8188995c090a3c1af1cef6960",
"0x708703814d5597b28456a3431a0f15633ddc254538ab0dbf675d3ce33eaf7d68",
"0x85712410ee91a6a348c0c2449cae675b8794d33409ab677c8a6f69ed61fe8693",
"0x267d13f1a6656e4b95e885a6650ccea6ac200615f6f55407b1aa6d66b5511b47"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



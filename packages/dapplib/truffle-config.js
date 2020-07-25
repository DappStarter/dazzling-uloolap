require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind pulse hunt kiwi blue theory'; 
let testAccounts = [
"0x7755f8a19168c83dfd95af0a6be6e30102d5967e0d411001b1119d07a30283d2",
"0xdbff5a61cfb432abc2317a893e50cd9c3fb64c13712d8c81f3976efd51aefcd3",
"0xd6d5ae6112fea90814df61c6fdefeacc7f4d827a1dd308c6ad63877c6a45ac34",
"0x03f52288975f2f45cd035089a66b72e609a81edc49274f24f8e637a11c769c33",
"0x776d716adfe76341aa15a5f3279dfc5cc723855f7ba2d4d09bfbe696696c0a86",
"0x067f0970bd15a1f396c972149df70eb3b1e0c8429949d3953e9f3b73b7698d4d",
"0xa7e1cd6c82ec89bf0e152c4e8fe1056e342b3cd09479064387c404ff0fdc0e19",
"0x9c2326781b03c4dcde81a5b619131c525b72cc0aa7293b035a6f459aee616652",
"0xcfcd1e083856f758231d90afbe8f9d097b04fc5a971b7e0c1aae73ac19173277",
"0x9790896c91cd749d3ad97dc65b90e2c6c614a054b3fe9330a7a23e2992e1855a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

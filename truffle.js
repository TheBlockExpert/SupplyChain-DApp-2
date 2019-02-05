// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,
//       network_id: "*" // Match any network id
//     }
//   }
// };


var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development: {
          host: "127.0.0.1",
          port: 9545,
          network_id: "*" // Match any network id
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/6f2c947290ef48cfa985ee2436620b68")
            },
            network_id: "4", // Rinkeby ID 4
            gas: 4500000,
            gasPrice: 10000000000,
        }
    }
    
};
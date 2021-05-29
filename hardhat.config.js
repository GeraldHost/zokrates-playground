require("hardhat-gas-reporter");
require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-truffle5");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.6.1",
	settings: {
		optimizer: {
			enabled: true,
			runs: 1000
		}
	},
	contractSizer: {
		alphaSort: true,
		runOnCompile: true,
		disambiguatePaths: true,
	},
	gasReporter: {
		currency: "GBP",
		coinmarketcap: "4026ff1b-9b45-44e4-bd64-c734f65de978",
		gasPrice: 100,
	},
};

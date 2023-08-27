/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config(); // Load environment variables from .env file

require("@nomiclabs/hardhat-waffle");
const GOERLI_API_KEY = process.env.GOERLI_API_KEY;
const PVT_KEY = process.env.PVT_KEY;
const GOERLI_HTTPS = `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`;
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_HTTPS,
      accounts: [`0x${PVT_KEY}`],
    },
  },
};
/**
 *  Soon, will be added
 *
 * */

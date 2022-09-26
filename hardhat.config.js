/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
const GOERLI_API_KEY = "_1AZv8ynIzDmSuSS2P0GTOXoJy5iyGq9";
const GOERLI_PVT_API_KEY =
  "8afb0a413215c882358fa599f2c1bc6a055b45d8435305758eccc98eae5151d4";

const GOERLI_HTTPS = `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`;
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_HTTPS,
      accounts: [`0x${GOERLI_PVT_API_KEY}`],
    },
  },
};

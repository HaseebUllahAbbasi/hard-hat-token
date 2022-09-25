/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
const GOERLI_HTTPS =
  "https://eth-goerli.g.alchemy.com/v2/Z62cFUE0R-m7keWssHy7NE4aCV-J7iuu";

const GOERLI_API_KEY = "Z62cFUE0R-m7keWssHy7NE4aCV-J7iuu";
const GOERLI_PVT_API_KEY =
  "8afb0a413215c882358fa599f2c1bc6a055b45d8435305758eccc98eae5151d4";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`,
      accounts: [`0x${GOERLI_PVT_API_KEY}`],
    },
  },
};

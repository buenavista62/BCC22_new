require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.NEXT_PUBLIC_MUMBAI_RPC_URL,
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.NEXT_PUBLIC_MUMBAI_KEY ,
  },
};

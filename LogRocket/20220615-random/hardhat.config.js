require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/OeBAnSLMn9lVseJxyLbLCd9yCw7KAh6m",
       accounts: ["eb07b3fdf1f196fe42d5df61fb8e04df34db297a0d26683a1641ce316d536b9b"]
    }
  }

};

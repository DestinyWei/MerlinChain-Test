require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    paths: {
        artifacts: "./src",
    },
    networks: {
        merlinTestnet: {
            url: `https://testnet-rpc.merlinchain.io`,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            allowUnlimitedContractSize: true
        },
    },
};
const hre = require("hardhat");

async function main() {
    const deployedContract = await hre.ethers.deployContract("Eureka");
    await deployedContract.waitForDeployment();
    console.log(
        `Counter contract deployed to https://testnet-scan.merlinchain.io/address/${deployedContract.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
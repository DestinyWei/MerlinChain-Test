const hre = require("hardhat");

async function main() {
    // Deploy YamToken contract
    const YamToken = await ethers.getContractFactory("YamToken")
    const yamToken = await YamToken.deploy()
    await yamToken.waitForDeployment();

    const yamTokenAddress = await yamToken.getAddress();
    console.log(`Deployed YamToken Contract at: ${yamTokenAddress}\n`)

    // Deploy Launchpad contract
    const LaunchPad = await ethers.getContractFactory("Launchpad")
    const launchpad = await LaunchPad.deploy()
    await launchpad.waitForDeployment();

    const launchpadAddress = await launchpad.getAddress();
    console.log(`Deployed Launchpad Contract at: ${launchpadAddress}\n`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
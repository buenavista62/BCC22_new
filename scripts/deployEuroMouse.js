const hre = require("hardhat");

async function main() {


  // We get the contract to deploy
  const EuroMouse = await hre.ethers.getContractFactory("EuroMouse");
  const euromouse = await EuroMouse.deploy("https://ipfs.io/ipfs/QmVDk6AH85uETgjip2tH4kCko76u2sHGhwGpbof8eWGgtg/");

  await euromouse.deployed();

  console.log("Euromouse deployed to:", euromouse.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

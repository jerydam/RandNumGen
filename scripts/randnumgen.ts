import { ethers } from "hardhat";

async function main() {

  const owner = await ethers.getSigners();
  const Random = await ethers.getContractFactory("VRFv2Consumer");
  const random = await Random.deploy();
  await random.deployed();

  const address = random.address;
  console.log(`contract deployed at ${address}`);

  const randwords = await random.requestRandomWords();
  console.log(randwords);

  const randstatus = await random.getRequestStatus(0);
  console.log(randstatus);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
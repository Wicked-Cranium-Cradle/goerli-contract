async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const WickedCraniums = await ethers.getContractFactory("WickedCraniums");
  const wickedCraniums = await WickedCraniums.deploy();

  console.log("Token address:", wickedCraniums.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

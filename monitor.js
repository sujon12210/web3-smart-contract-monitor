const { ethers } = require("ethers");
const config = require("./config");

async function start() {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);

  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    provider
  );

  console.log("Listening for events...");

  contract.on("*", (event) => {
    console.log("New event:", event);
  });
}

start();

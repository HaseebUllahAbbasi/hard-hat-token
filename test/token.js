const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  isCall,
} = require("hardhat/internal/hardhat-network/stack-traces/opcodes");

describe("Token Contract ", function () {
  it("Deployment should assign the total supply of the owner ", async function () {
    const [owner] = await ethers.getSigners(); // get all the signer

    // console.log("signer object ", owner);

    const Token = await ethers.getContractFactory("Token"); // instance contract
    const hardhatToken = await Token.deploy(); // deploy contract
    const ownerBalance = await hardhatToken.balanceOf(owner.address); // owner balance is checked

    // console.log("Owner Address ", owner.address);

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance); // should be 10000 (Checking the balance of the owner as 10000)
  });
  it("Should Transfer tokens between accounts ", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners(); // get all the signer
    const Token = await ethers.getContractFactory("Token"); // instance contract
    const hardhatToken = await Token.deploy(); // deploy contract

    // Transfering 10 tokens from owner to Provided Address
    await hardhatToken.transfer(addr1.address, 10); // transfering  is performed by the owner
    // await hardhatToken.transfer(addr1,addr2,10);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);

    await hardhatToken.connect(addr1).transfer(addr2.address, 5); // transfering  is performed by the address 1 to address 2
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(5);
  });
});

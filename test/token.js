const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Token Contract ", function () {
  let Token;
  let hardhatToken;
  let owner;
  let addr1;

  let addr2;
  let addrs;
  beforeEach(async function () {
    Token = await ethers.getContractFactory("Token");
    [owner, addr1, addr2, addrs] = await ethers.getSigners();
    hardhatToken = await Token.deploy();
  });
  describe("Deployment test ", async function () {
    it("Should set the right  owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });
    it("Should assign the total supplt of the tokens to the owner ", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transaction", async function () {
    it("Should transfer token betwewn accounts", async function () {
      await hardhatToken.transfer(addr1.address, 5);
      const addr1Balance = await hardhatToken.balanceOf(addr1.address);

      expect(addr1Balance).to.equal(5);

      await hardhatToken.connect(addr1).transfer(addr2.address, 5);
      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(5);
    });

    it("Shoud fail if sender does not have enough money", async function () {
      const initValance = await hardhatToken.balanceOf(owner.address);
      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("Not Enough Amount"); // should be same from the contract and string
      expect(await hardhatToken.balanceOf(owner.address)).to.equal(initValance);
    });
  });
});

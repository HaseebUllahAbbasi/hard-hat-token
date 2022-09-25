//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

import "hardhat/console.sol";

contract Token {
    string public name = "Dot Token";
    string public symbol = "DOT";
    uint256 public totalSupply = 10000;

    address public owner;
    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        console.log("***Sender Balance is %s Tokens ***", balances[msg.sender]);
        console.log(
            "***Sender is sending %s Tokens to %s address ***",
            amount,
            to
        );
        require(balances[msg.sender] >= amount, "Not Enough Amount");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}

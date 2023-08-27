# hard-hat-token

soon, will be added

```cmd
    npm init -y
    npm i --save-dev hardhat 
    npx hardhat

    npm i --save-dev @nomiclabs/hardhat-ethers
    npm i --save-dev ethers
    npm i --save-dev chai
    npm i --save-dev @nomiclabs/hardhat-waffle
    npm i --save-dev ethereum-waffle
```

    Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code.

Write Contract

```sol
//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

import "hardhat/console.sol";

contract Token {
    string public name = "Dot Token";
    string public symbol = "DOT";
    uint256 public totalSupply = 10000000;

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

```

# Compile

        npx hardhat compile 

# Write TestCases

        npx hardhat test 

Use Mocha to reduce the test code

Apply Debugging by adding libs

    import "hardhat/console.sol";

Create Testnet Account export pvt key and use https link to deploy on testnet

Deploy

        npx hardhat run ./scripts/deploy.js --network goerli 

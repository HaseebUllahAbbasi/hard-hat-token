# hard-hat-token
soon, will be added 



    npm init -y
    npm i --save-dev hardhat 
    npx hardhat

    npm i --save-dev @nomiclabs/hardhat-ethers
    npm i --save-dev ethers
    npm i --save-dev chai
    npm i --save-dev @nomiclabs/hardhat-waffle
    npm i --save-dev ethereum-waffle
    
    Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code.

Write Contract 

Compile 

        npx hardhat compile 

Write TestCases

    
        npx hardhat test 

Use Mocha to reduce the test code 

Apply Debugging by adding libs 

    import "hardhat/console.sol";


Create Testnet Account export pvt key and use https link to deploy on testnet 
    
Deploy

        npx hardhat run .\scripts\deploy.js --network goerli 
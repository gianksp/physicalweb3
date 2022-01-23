// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.0;

contract EmergencyInfo {
    
    string internal myInfo;
    address public owner;
  
    modifier onlyOwner {
        require(msg.sender == owner, "You are not the owner of this contract");
        _;
    }

    constructor() { 
        owner = msg.sender;
    }

    function setInfo(string calldata message) public onlyOwner {
        myInfo = message;
    }

    function getMyInfo() public view returns(string memory data) {
        return myInfo;
    }
}
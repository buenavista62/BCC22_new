// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract EuroMouse is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    uint256 public tokenId;
    uint256 public maxSupply = 101;
    bool public isMintEnabled; //default is false
    string private baseTokenURI;
    
    constructor(string memory baseURI) ERC721('BCC EuroMouse - Halloween Edition', 'EUMOUSE') {   
        setBaseURI(baseURI);     
    }

    function _baseURI() internal view virtual override returns (string memory) {
     return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
     baseTokenURI = _baseTokenURI;
     
    }  

    function toggleIsMintEnabled() external onlyOwner {
        isMintEnabled = !isMintEnabled;
    }

    function setMaxSupply(uint256 maxSupply_) external onlyOwner {
        maxSupply = maxSupply_;
    }

    function mint(address _receiver, uint256 tID) public onlyOwner {
        require(isMintEnabled, 'minting not enabled');
        require(tokenId <= maxSupply, 'out of range');
        _safeMint(_receiver, tID);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EuroMouse is ERC721, Ownable {
    uint256 public tokenId;
    uint256 public maxSupply = 101;
    bool public isMintEnabled; //default is false
    string private baseTokenURI;

    constructor(string memory baseURI)
        ERC721(
            "Blockchain Challenge 22 - EuroMouse Halloween Edition",
            "EUMOUSE"
        )
    {
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
        require(isMintEnabled, "minting not enabled");
        require(tokenId <= maxSupply, "out of range");
        _safeMint(_receiver, tID);
    }
}

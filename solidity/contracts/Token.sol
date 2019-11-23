pragma solidity 0.5.11;

import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract Token is Initializable, ERC721Full {

    uint256 public tokenId;
    mapping (uint256 => uint256) public royaltyStorage;

    function initialize(string memory name, string memory symbol) initializer public {

        ERC721.initialize();
        ERC721Enumerable.initialize();
        ERC721Metadata.initialize(name, symbol);

    }

    function mint(string memory _url, uint256 _royalty) public {

        super._mint(msg.sender, tokenId);
        super._setTokenURI(tokenId, _url);
        setRoyalty(tokenId, _royalty);
        tokenId += 1;

    }

    function setRoyalty(uint256 _tokenId, uint256 _royalty) internal {
        // Todo maximum royalty
        royaltyStorage[_tokenId] = _royalty;
    }

}

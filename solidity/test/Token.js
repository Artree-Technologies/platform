const Web3 = require("web3")
const ganache_cli_url = "http://ganache:8545"
var web3 = new Web3(new Web3.providers.HttpProvider(ganache_cli_url))
web3.eth.getAccounts(function(error, result) {
    sender = result[0]
})

const Token = artifacts.require("Token")

// variable using mint function
const URL = "https://t-block.com/image.png"
const TOKEN_ID = 0
const ROYALTY = 5

contract("Deploy & Test", () => {
    let token;

    before( async () => {

        token = await Token.new()

    });

    describe('Mint Function Test', () => {

        it('Check token URL', async () => {
            await token.mint(URL, ROYALTY, {from: sender})
            let url = await token.tokenURI(TOKEN_ID)
            assert.equal(URL, url, "url should be same as an argument")
        })

        it('Check token ownership', async () => {
            let owner = await token.ownerOf(TOKEN_ID)
            assert.equal(owner, sender, "onwer should be same as a sender")
        })

        it('Check token royalty', async () => {
            let royalty = await token.royaltyStorage(TOKEN_ID)
            assert.equal(ROYALTY, royalty, "royalty should be same as an argument")
        })

    });
})

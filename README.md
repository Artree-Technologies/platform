# Directory structure
`/ganache` -> Ganache test container dockerfile  
`/go` -> Backend api server  
`/react` -> Frontend ui  
`/solidity`  
    |--/contract -> ERC721 token minting contract  

# Project tools
`CI Tool` -> Travis⚖️  
`Task Runner` -> Make🚀  
`Blockchain` -> Ethereum❄️  
`API Framework` -> Go, [Rest](https://github.com/ant0ine/go-json-rest)🗿  
`Blockchain SDK` -> Truffle, Open Zeppelin, Ganache🧁  
`Frontend Framework` -> React, TypeScript, (Redux)🚷  

# Node version
`v12.11.1`
# Setup
`/react` -> `$ npm i && yarn start`  
`/go` -> `$ go run go/main.go`  
`/solidity` -> `$ ganache-cli -l 80000000 & truffle compile && oz create`  

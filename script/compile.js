const fs = require('fs');
const contract = JSON.parse(fs.readFileSync('./solidity/build/contracts/Token.json', 'utf8'));
fs.writeFileSync( "Token.abi" , JSON.stringify(contract.abi))
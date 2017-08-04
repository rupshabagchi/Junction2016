const Web3 = require('web3');
const web3 = new Web3();

const contractAbi = [
  {
    type:     'function',
    name:     'setReadyToShip',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [],
    constant: false,
    payable:  false
  },
  {
    type:     'function',
    name:     'newOrder',
    inputs:   [],
    outputs:  [{ name: 'orderId', type: 'uint256' }],
    constant: false,
    payable:  false
  },
  {
    type:     'function',
    name:     'setOrdered',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [],
    constant: false,
    payable:  false
  },
  {
    type:     'function',
    name:     'setForProd',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [],
    constant: false,
    payable:  false
  },
  {
    type:     'function',
    name:     'getOrdered',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [{ name: '',         type: 'bool' }],
    constant: true,
    payable:  false
  },
  {
    type:     'function',
    name:     'getReadyToShip',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [{ name: '',         type: 'bool' }],
    constant: true,
    payable:  false
  },
  {
    type:     'function',
    name:     'getBlockTime',
    inputs:   [],
    outputs:  [{ name: '_ts', type: 'uint256' }],
    constant: false,
    payable:  false
  },
  {
    type:     'function',
    name:     'getForProd',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [{ name: "",         type: 'bool' }],
    constant: true,
    payable:  false
  },
  {
    type:     'function',
    name:     'setProd',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [],
    constant: false,
    payable:  false,
  },
  {
    type:     'function',
    name:     'setShipped',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [],
    constant: false,
    payable:  false,
  },
  {
    type:     'function',
    name:     'getShipped',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [{ name: "",         type: 'bool' }],
    constant: true,
    payable:  false
  },
  {
    type:     'function',
    name:     'getProd',
    inputs:   [{ name: '_orderId', type: 'uint256' }],
    outputs:  [{ name: "",         type: 'bool' }],
    constant: true,
    payable:  false,
  }
];
const rpcAddress = '';
const contractAddress = '';
const accountAddress = '';

web3.setProvider(new web3.providers.HttpProvider(rpcAddress));
web3.eth.defaultAccount = accountAddress;

const contract = web3.eth.contract(contractAbi);
const contractInstance = contract.at(contractAddress);

module.exports = contractInstance;

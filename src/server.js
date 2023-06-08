const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()
const CreateHbarAddress = require('./create_wallet/createHbar')
const TransferStatus = require('./usdc2hedera/transferStatus')
const SendHBar= require('./usdc2hedera/send2HederaUser')
const apiKey = process.env.API_KEY

const url = ''
const idempotencyKey = uuidv4()


const address = '0xABCDEF123456';
const amount = 10;

SendHBar(address, amount);
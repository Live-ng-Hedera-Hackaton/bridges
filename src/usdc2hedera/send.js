const fetch = require('node-fetch')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

const apiKey = process.env.API_KEY
const url = process.env.TRANSFER
const idempotencyKey = uuidv4();

const SendHBar = () => {

    const data = {
      idempotencyKey: idempotencyKey,
      source: { type: 'wallet', id: process.env.WALLET_ID },
      destination: { type: 'blockchain', address: 'BL27TI3CYMFX5URLYNBJJZGV4ABRYJJHBMLRR5OYSVPUVDIUAF66IR4COA', chain: 'ALGO' },
      amount: { amount: '1.00', currency: 'USD' }
    };
    
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    };
    
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('error:', error));
    
}

module.exports = SendHBar

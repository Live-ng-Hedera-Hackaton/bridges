const fetch = require('node-fetch');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const apiKey = process.env.API_KEY;
const url = process.env.TRANSFER;
const idempotencyKey = uuidv4();

const SendHBar = async (address, amt) => {
 var result={}
  const data = {
    idempotencyKey: idempotencyKey.toString(),
    source: { type: 'wallet', id: process.env.WALLET_ID },
    destination: {
      type: 'blockchain',
      address: address,
      chain: 'HBAR',
    },
    amount: { amount: amt, currency: 'USD' },
  };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('An error occurred during the transfer.');
    }

  result = await response.json();
    return result;
  } catch (error) {
    console.error('error:', error);
    result = await error.json();
    return result;
  }
};

module.exports = SendHBar;


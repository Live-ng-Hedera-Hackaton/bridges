const fetch = require('node-fetch');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const apiKey = process.env.API_KEY;
const url = process.env.TRANSFER;
const idempotencyKey = uuidv4();

const SendHBar = async (address, amt) => {
  const data = {
    idempotencyKey: idempotencyKey,
    source: { type: 'wallet', id: process.env.WALLET_ID },
    destination: { type: 'blockchain', address: address, chain: 'HBAR' },
    amount: { amount: amt, currency: 'USD' }
  };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('error:', error);
    throw error;
  }
};

module.exports = SendHBar;


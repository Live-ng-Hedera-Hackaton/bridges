const fetch = require('node-fetch');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const apiKey = process.env.API_KEY;
const url = process.env.TRANSFER;
const idempotencyKey = uuidv4();

/**
 * Sends HBar transfer request to the specified address.
 * @param {string} address - The destination address for the transfer.
 * @param {number} amt - The amount to transfer in USD.
 * @returns {Promise<object>} - Promise that resolves to the result of the transfer.
 */
const SendHBar = async (address, amt) => {
  var result = {};
  const data = {
    idempotencyKey: idempotencyKey.toString(), // Set the idempotency key for the transfer
    source: { type: 'wallet', id: process.env.WALLET_ID }, // Set the source wallet details
    destination: {
      type: 'blockchain',
      address: address, // Set the destination address for the transfer
      chain: 'HBAR', // Specify the blockchain chain
    },
    amount: { amount: amt, currency: 'USD' }, // Set the amount and currency for the transfer
  };

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`, // Set the authorization header with the API key
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

    // Parse the response JSON
    result = await response.json();
    return result;
  } catch (error) {
    console.error('error:', error);
    result = await error.json();
    return result;
  }
};

module.exports = SendHBar;

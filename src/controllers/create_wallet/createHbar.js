const fetch = require('node-fetch');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const apiKey = process.env.API_KEY;
const url = process.env.CREATE_ADDRESS;

/**
 * Creates a new HBar address.
 * @returns {object} - The created HBar address.
 */
const CreateHbarAddress = () => {
  var data = {};
  const idempotencyKey = uuidv4();

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`, // Set the authorization header with the API key
    },
    body: JSON.stringify({
      currency: 'USD',
      chain: 'HBAR',
      idempotencyKey: `${idempotencyKey.toString()}`, // Set the idempotency key for the request
    }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      data = json;
    })
    .catch((err) => console.error('error:' + idempotencyKey));

  return data;
};

module.exports = CreateHbarAddress;

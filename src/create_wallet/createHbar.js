const fetch = require('node-fetch')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

const apiKey = process.env.API_KEY
const url = process.env.CREATE_ADDRESS


const CreateHbarAddress = () => {
    const idempotencyKey = uuidv4();
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      currency: 'USD',
      chain: 'XLM',
      idempotencyKey: `${idempotencyKey.toString()}`,
    }),
  }

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error('error:' + idempotencyKey))
}

module.exports = CreateHbarAddress

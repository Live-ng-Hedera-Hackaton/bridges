const fetch = require('node-fetch')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

const apiKey = process.env.API_KEY
const url = process.env.TRANSFER

const TransferStatus = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
  }

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error('error:' + err))
}

module.exports = TransferStatus

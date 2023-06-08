const fetch = require('node-fetch')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

const apiKey = process.env.API_KEY
const url = process.env.TRANSFER

const TransferStatus = async () => {
  var result = {}
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
  }
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('An error occurred during the transfer.')
    }

    result = await response.json()
    return result
  } catch (error) {
    console.error('error:', error)
    result = await error.json()
    return result
  }
}

module.exports = TransferStatus

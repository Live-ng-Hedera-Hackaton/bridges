const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()

const apiKey = process.env.API_KEY

const url = process.env.CREATE_MASTER_URL
const idempotencyKey = uuidv4()

const createMasterWallet = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${apiKey}`
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  }
  
  module.exports = createMasterWallet;
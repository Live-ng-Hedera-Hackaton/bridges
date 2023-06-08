

const express = require('express');
const router = express.Router();
const TransferStatus = require('../usdc2hedera/transferStatus')
const SendHBar= require('../usdc2hedera/send2HederaUser')

router.get('/', (req, res) => {
  res.send('This is the LoanLink Bridge API');
});


// Define your API routes
router.post('/send_hbar', (req, res) => {


    const address = req.body.address;
    const amount = req.body.amount;
    
  let success=  SendHBar(address, amount);
    res.send(success);
  });

// Export the router
module.exports = router;

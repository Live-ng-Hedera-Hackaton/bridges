const express = require('express');
const router = express.Router();
const TransferStatus = require('../controllers/status/index');
const SendHBar = require('../controllers/circlehedera2usdch/index');

// Route for getting the transfer status
router.get('/status', async (req, res) => {
  // Get the address and amount from the request body
  const address = req.body.address;
  const amount = req.body.amount;

  try {
    // Call the TransferStatus function to get the status
    const success = await TransferStatus();
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});

// Route for performing the transfer
router.post('/transfer', async (req, res) => {
  // Get the address and amount from the request body
  const address = req.body.address;
  const amount = req.body.amount;

  try {
    // Call the SendHBar function to perform the transfer
    const success = await SendHBar(address, amount);
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});

module.exports = router;

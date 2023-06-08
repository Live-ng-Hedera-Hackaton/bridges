const express = require('express');
const router = express.Router();
const TransferStatus = require('../controllers/status/index');
const SendHBar = require('../controllers/circlehedera2usdch/index');

router.get('/status', async (req, res) => {
  const address = req.body.address;
  const amount = req.body.amount;

  try {
    const success = await TransferStatus();
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});


router.post('/transfer', async (req, res) => {
  const address = req.body.address;
  const amount = req.body.amount;

  try {
    const success = await SendHBar(address, amount);
    console.log(success);
    res.send(success);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during the transfer.');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { handleConsultationRequest } = require('../utils/consultation-request');

router.post('/consultation-request', handleConsultationRequest);

module.exports = router;

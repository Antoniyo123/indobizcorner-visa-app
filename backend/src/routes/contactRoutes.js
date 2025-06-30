const express = require('express');
const router = express.Router();
const sendContactEmail = require('../utils/sendContactEmail');

router.post('/contact-message', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing fields' });
    }

    await sendContactEmail({ name, email, message });

    res.json({ success: true });
  } catch (err) {
    console.error('Failed to send contact message:', err);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
});

module.exports = router;

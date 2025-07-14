const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { sendCSEmail } = require('../utils/mailer');
// const { sendUserPromoConfirmation } = require('../utils/mailer');
const { createUserPromoConfirmation } = require('../utils/emailTemplates');

const { sendUserPromoConfirmation } = require('../utils/mailer');

const CLAIMS_FILE = path.join(__dirname, '../../data/promoClaims.json');



const MAX_CLAIMS = 77;
// Auto-create promoClaims.json if not exists
const ensureClaimsFile = () => {
  const dir = path.dirname(CLAIMS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(CLAIMS_FILE)) {
    fs.writeFileSync(CLAIMS_FILE, '[]');
  }
};
ensureClaimsFile(); // ✅ panggil saat awal file


// Baca data klaim
const readClaims = () => {
  try {
    const data = fs.existsSync(CLAIMS_FILE)
      ? fs.readFileSync(CLAIMS_FILE, 'utf8')
      : '[]';
    return JSON.parse(data);
  } catch (err) {
    console.error('Read error:', err);
    return [];
  }
};

// Simpan klaim baru
const saveClaims = (claims) => {
  try {
    fs.writeFileSync(CLAIMS_FILE, JSON.stringify(claims, null, 2));
    console.log('✅ Claims saved to:', CLAIMS_FILE);
  } catch (err) {
    console.error('❌ Write error:', err);
  }
};


// ✅ Endpoint: POST klaim promo
// ✅ Endpoint: POST klaim promo
router.post('/promo-claim', async (req, res) => {
  try {
    const { name, email, phone, promo } = req.body;

    if (!name || !email || !phone || !promo) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const claims = readClaims();
    if (claims.length >= MAX_CLAIMS) {
      return res.status(400).json({ success: false, message: 'All 77 claims have been taken.' });
    }

    const newClaim = {
      id: Date.now(),
      name,
      email,
      phone,
      promo,
      claimNumber: claims.length + 1,
      createdAt: new Date().toISOString()
    };

    claims.push(newClaim);
    saveClaims(claims);

    // ✅ Kirim email ke CS
    try {
      await sendCSEmail({
        to: process.env.CS_EMAIL || process.env.EMAIL_USER,
        subject: `🎁 Promo Claim #${claims.length} - ${promo}`,
        html: `
          <h3>New Promo Claim</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Promo:</strong> ${promo}</p>
          <p><strong>Claim Number:</strong> ${claims.length}</p>
        `
      });
    } catch (emailErr) {
      console.error('❌ Gagal kirim email ke CS:', emailErr.message);
    }

    // ✅ Kirim email ke user
    try {
      await sendUserPromoConfirmation({
        to: email,
        subject: `🎉 Promo Claim Confirmation - ${promo}`,
        html: createUserPromoConfirmation({
          name,
          promo,
          claimNumber: newClaim.claimNumber
        })
      });
    } catch (userEmailErr) {
      console.error('❌ Gagal kirim email ke user:', userEmailErr.message);
    }

    res.json({
      success: true,
      message: 'Claim successful',
      claimNumber: newClaim.claimNumber
    });

  } catch (err) {
    console.error('❌ Error saat submit promo claim:', err.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


router.get('/promo-claim/test-email', async (req, res) => {
  try {
    await sendCSEmail({
      to: process.env.CS_EMAIL || process.env.EMAIL_USER,
      subject: '📨 Test Email Promo Claim',
      html: `<p>This is a test email from promo claim route</p>`
    });
    res.json({ success: true, message: 'Test email sent successfully' });
  } catch (err) {
    console.error('❌ Test email failed:', err.message);
    res.status(500).json({ success: false, message: 'Failed to send test email' });
  }
});




// ✅ Endpoint: RESET klaim (admin only)
router.post('/promo-claim/reset', (req, res) => {
  
  try {
    const { secret } = req.body;
    const adminSecret = process.env.ADMIN_SECRET || 'admin123';

    if (secret !== adminSecret) {
      return res.status(403).json({ success: false, message: 'Unauthorized access' });
    }

    saveClaims([]);
    res.status(200).json({ success: true, message: 'All claims have been reset' });
  } catch (err) {
    console.error('Reset error:', err);
    res.status(500).json({ success: false, message: 'Failed to reset claims' });
  }
});

module.exports = router;

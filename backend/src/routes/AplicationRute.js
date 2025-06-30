const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { sendCSEmail, sendUserConfirmation } = require('../services/emailService');
const { createCSEmailTemplate, createUserConfirmationTemplate } = require('../utils/emailTemplates');
const generateSubmissionId = require('../utils/generateId');

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + unique + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const types = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = types.test(path.extname(file.originalname).toLowerCase());
    const mimetype = types.test(file.mimetype);
    if (extname && mimetype) cb(null, true);
    else cb(new Error('File type not supported'));
  }
});

router.post('/submit-application', upload.array('documents', 10), async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files || [];
    const service = JSON.parse(formData.service);
    const submissionId = generateSubmissionId();

    const attachments = files.map(f => ({
      filename: f.originalname,
      path: f.path
    }));

    // Kirim ke CS
    await sendCSEmail({
      to: process.env.CS_EMAIL,
      subject: `🎯 Aplikasi Visa Baru - ${service.title} - ${submissionId}`,
      html: createCSEmailTemplate(formData, service, submissionId, files),
      attachments
    });

    // Kirim ke User
    await sendUserConfirmation({
      to: formData.email,
      subject: `✅ Konfirmasi Aplikasi Visa - ${submissionId}`,
      html: createUserConfirmationTemplate(formData.fullName, service, submissionId)
    });

    res.json({ success: true, submissionId });
  } catch (err) {
    console.error('Submit error:', err);
    req.files?.forEach(f => fs.unlink(f.path, () => {}));
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;

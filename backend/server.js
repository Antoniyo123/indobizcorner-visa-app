const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
// 👉 Import email handler & templates
const { sendCSEmail, sendUserConfirmation } = require('./src/utils/mailer');
const { createCSEmailTemplate, createUserConfirmationTemplate } = require('./src/utils/emailTemplates');

// CORS setup
app.use(helmet());
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup (upload file ke /uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const contactRoutes = require('./src/routes/contactRoutes');
app.use('/api', contactRoutes);
const consultationRoutes = require('./src/routes/consultationRoute');
app.use('/api', consultationRoutes);

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|pdf|doc|docx/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) cb(null, true);
    else cb(new Error('Only images, PDFs, and documents are allowed'));
  }
});


// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Util: Generate submission ID
const generateSubmissionId = () => {
  return `VSA-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
};


// Test routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!', status: 'success' });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API endpoint working!' });
});

app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
  });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email, createdAt: new Date().toISOString() };
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

// Submit application route
app.post('/api/submit-application', upload.array('documents', 10), async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files || [];
    const submissionId = generateSubmissionId();
    const service = JSON.parse(formData.service);

    const attachments = files.map(file => ({
      filename: file.originalname,
      path: file.path
    }));

    await sendCSEmail({
      to: process.env.CS_EMAIL || process.env.EMAIL_USER,
      subject: `🎯 Aplikasi Visa Baru - ${service.title} - ${submissionId}`,
      html: createCSEmailTemplate(formData, service, submissionId, files),
      attachments
    });
    
    await sendUserConfirmation({
      to: formData.email,
      subject: `✅ Konfirmasi Aplikasi Visa - ${submissionId}`,
      html: createUserConfirmationTemplate(formData.fullName, service, submissionId)
    });

    res.json({
      success: true,
      submissionId,
      message: 'Aplikasi berhasil dikirim!'
    });
  } catch (error) {
    console.error('Error:', error.message);
    req.files?.forEach(file => fs.unlink(file.path, () => {}));
    res.status(500).json({ success: false, error: error.message || 'Terjadi kesalahan' });
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📱 Ready for React frontend on http://localhost:3000`);
});

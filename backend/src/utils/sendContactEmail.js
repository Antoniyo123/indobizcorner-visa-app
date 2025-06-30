const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendContactEmail = async ({ name, email, message }) => {
  const submissionTime = new Date().toLocaleString();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>📨 Pesan Baru dari Form Kontak</h2>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Pesan:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
      <hr/>
      <p style="font-size: 12px; color: gray;">Dikirim pada ${submissionTime}</p>
    </div>
  `;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.CS_EMAIL || process.env.EMAIL_USER,
    subject: `📥 Kontak Baru dari ${name}`,
    html: htmlContent
  });
};

module.exports = sendContactEmail;

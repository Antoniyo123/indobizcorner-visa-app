const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
const sendConsultationEmailToCS = async (formData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CS_EMAIL || process.env.EMAIL_USER,
    subject: `📞 Konsultasi Baru dari ${formData.firstName} ${formData.lastName}`,
    html: `
      <h3>📋 Konsultasi Baru Masuk</h3>
      <p><strong>Nama:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telepon:</strong> ${formData.phone}</p>
      <p><strong>Perusahaan:</strong> ${formData.company}</p>
      <p><strong>Jabatan:</strong> ${formData.jobTitle}</p>
      <p><strong>Negara:</strong> ${formData.country}</p>
      <p><strong>Pesan:</strong> ${formData.message}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendConsultationEmailToCS
};
const sendCSEmail = (options) =>
  transporter.sendMail({ from: process.env.EMAIL_USER, ...options });

const sendUserConfirmation = (options) =>
  transporter.sendMail({ from: process.env.EMAIL_USER, ...options });

module.exports = { sendCSEmail, sendUserConfirmation };

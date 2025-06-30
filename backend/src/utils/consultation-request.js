const { sendCSEmail } = require('./mailer');

const handleConsultationRequest = async (req, res) => {
  try {
    const formData = req.body;

    await sendCSEmail({
      to: process.env.CS_EMAIL || process.env.EMAIL_USER,
      subject: `📞 Permintaan Konsultasi dari ${formData.firstName} ${formData.lastName}`,
      html: `
        <h3>📋 Permintaan Konsultasi Baru</h3>
        <p><strong>Nama:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telepon:</strong> ${formData.phone}</p>
        <p><strong>Perusahaan:</strong> ${formData.company}</p>
        <p><strong>Jabatan:</strong> ${formData.jobTitle}</p>
        <p><strong>Negara:</strong> ${formData.country}</p>
        <p><strong>Pesan:</strong> ${formData.message}</p>
      `
    });

    res.status(200).json({ success: true, message: 'Consultation request sent successfully' });
  } catch (error) {
    console.error('Consultation request error:', error);
    res.status(500).json({ success: false, error: 'Gagal mengirim konsultasi' });
  }
};

module.exports = {
  handleConsultationRequest
};

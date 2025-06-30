const createCSEmailTemplate = (formData, service, submissionId, attachments) => {
  const attachmentList = attachments.map(file => file.originalname).join(', ');
  
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>📥 Aplikasi Visa Baru Telah Diterima</h2>
      <p>Yth. Tim Customer Service,</p>
      <p>Telah masuk sebuah aplikasi visa baru dengan detail sebagai berikut:</p>

      <ul>
        <li><strong>Submission ID:</strong> ${submissionId}</li>
        <li><strong>Nama Lengkap:</strong> ${formData.fullName}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Nomor Telepon:</strong> ${formData.phone}</li>
        <li><strong>Jenis Layanan:</strong> ${service.title}</li>
        <li><strong>Harga Layanan:</strong> ${service.price}</li>
        <li><strong>Jenis Sponsor:</strong> ${formData.sponsorType === 'cipta' ? 'Under Cipta' : 'Sponsor Perusahaan Sendiri'}</li>
        ${formData.workType ? `<li><strong>Jenis Pekerjaan:</strong> ${formData.workType}</li>` : ''}
      </ul>

      <p><strong>Dokumen yang dilampirkan:</strong> ${attachmentList || 'Tidak ada dokumen'}</p>

      <p>Mohon untuk segera ditinjau dan ditindaklanjuti sesuai prosedur.</p>

      <p>Terima kasih,<br/>Sistem Aplikasi Visa Cipta</p>
    </div>
  `;
};

  
  const createUserConfirmationTemplate = (fullName, service, submissionId) => {
    return `<h2>Halo ${fullName},</h2>
      <p>Terima kasih telah mengajukan aplikasi visa untuk layanan <strong>${service.title}</strong>.</p>
      
      <p>
        Kami telah menerima aplikasi Anda dengan nomor referensi <strong>${submissionId}</strong>. Saat ini, aplikasi Anda sedang kami tinjau.
      </p>
      
      <p>
        Tim kami akan segera menghubungi Anda untuk langkah selanjutnya. Harap pastikan nomor telepon dan email Anda aktif.
      </p>

      <p>Jika ada pertanyaan, jangan ragu untuk menghubungi kami melalui WhatsApp atau email.</p>

      <p>🙏 Terima kasih telah mempercayakan layanan visa Anda kepada kami.</p>

      <br/>
      <p>Salam hangat,</p>
      <p><strong>Tim Cipta Visa</strong></p>
    </div>
`;
  };
  
  module.exports = { createCSEmailTemplate, createUserConfirmationTemplate };
  
export const sendApplicationToCS = async (formData, service) => {
  const endpoint = 'http://localhost:5000/api/submit-application';

  const data = new FormData();
  data.append('fullName', formData.fullName);
  data.append('email', formData.email);
  data.append('phone', formData.phone);
  data.append('sponsorType', formData.sponsorType);
  data.append('workType', formData.workType);
  data.append('service', JSON.stringify(service));

  formData.documents.forEach(file => {
    data.append('documents', file);
  });

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: data
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.error('Gagal kirim ke backend:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Tidak perlu kirim ulang konfirmasi via frontend jika backend sudah mengirim email konfirmasi
export const sendConfirmationToUser = async () => {
  return Promise.resolve();
};

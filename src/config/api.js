const API_URL = import.meta.env.PROD 
  ? 'https://kopikenangan-tawny.vercel.app/api'  // Sesuaikan dengan URL Vercel Anda
  : '/api';

export default API_URL;
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const fetchTortas = async () => {
  try {
    const response = await axios.get(`${baseUrl}/tortas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las tortas:', error);
    return [];
  }
};


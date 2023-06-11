import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const fetchListaPrecios = async () => {
  try {
    const response = await axios.get(`${baseUrl}/lista_precios`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de precios:', error);
    return [];
  }
};

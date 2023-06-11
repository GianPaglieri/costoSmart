import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const fetchIngredientes = async () => {
  try {
    const response = await axios.get(`${baseUrl}/ingredientes`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los ingredientes:', error);
    return [];
  }
};

export const agregarIngrediente = async (ingredientData) => {
  try {
    const response = await axios.post(`${baseUrl}/ingredientes`, ingredientData);
    console.log('Ingrediente agregado:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al agregar el ingrediente:', error);
    throw error;
  }
};


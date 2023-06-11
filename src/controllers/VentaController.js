import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const registrarVenta = async (idTorta) => {
  try {
    const response = await axios.post(`${baseUrl}/ventas`, { id_torta: idTorta });
    return response.data;
  } catch (error) {
    console.error('Error al registrar la venta:', error);
    throw error;
  }
};


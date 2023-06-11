import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { fetchIngredientes } from '../controllers/IngredientController';
import styles from '../styles/styles';

const IngredientListScreen = () => {
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    obtenerIngredientes();
  }, []);

  const obtenerIngredientes = async () => {
    try {
      const ingredientesData = await fetchIngredientes();
      setIngredientes(ingredientesData);
    } catch (error) {
      console.error('Error al obtener los ingredientes:', error);
    }
  };

  const renderizarItem = ({ item }) => (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.unidad_Medida}</Text>
      <Text style={styles.cell}>{item.tamano_Paquete}</Text>
      <Text style={styles.cell}>{item.costo}</Text>
      <Text style={styles.cell}>{item.CantidadStock}</Text>

    </TouchableOpacity>
  );

  const renderizarEncabezado = () => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.encabezado]}>Nombre</Text>
      <Text style={[styles.cell, styles.encabezado]}>Unidad de Medida</Text>
      <Text style={[styles.cell, styles.encabezado]}>Tamaño de Paquete</Text>
      <Text style={[styles.cell, styles.encabezado]}>Costo</Text>
      <Text style={[styles.cell, styles.encabezado]}>Stock</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Ingredientes</Text>
      {renderizarEncabezado()}
      <FlatList
        data={ingredientes}
        renderItem={renderizarItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default IngredientListScreen;








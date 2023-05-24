import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const IngredientListScreen = ({ navigation }) => {
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    fetchIngredientes();
  }, []);

  const fetchIngredientes = async () => {
    try {
      console.log('Fetching ingredientes...');
      const response = await axios.get('http://localhost:3000/ingredientes');
      console.log('Ingredientes recibidos:', response.data);
      setIngredientes(response.data);
    } catch (error) {
      console.error('Error al obtener los ingredientes:', error);
    }
  };
  

  const renderIngrediente = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.header]}>{item.Nombre}</Text>
      <Text style={styles.cell}>Unidad de medida: {item.Unidad_Medida}</Text>
      <Text style={styles.cell}>Tamaño del paquete: {item.Tamano_Paquete}</Text>
      <Text style={styles.cell}>Costo: ${item.Costo}</Text>
    </View>
  );
  

  console.log('Ingredientes en el estado:', ingredientes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Ingredientes</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>Nombre</Text>
          <Text style={[styles.cell, styles.header]}>Unidad de medida</Text>
          <Text style={[styles.cell, styles.header]}>Tamaño del paquete</Text>
          <Text style={[styles.cell, styles.header]}>Costo</Text>
        </View>
        <FlatList
          data={ingredientes}
          renderItem={renderIngrediente}
          keyExtractor={(item) => item.ID.toString()}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('IngredientForm')}
      >
        <Text style={styles.addButtonText}>Agregar Ingrediente</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('TortasScreen')}
      >
        <Text style={styles.addButtonText}>Agregar Torta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IngredientListScreen;





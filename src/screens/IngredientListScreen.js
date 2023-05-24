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
      if (ingredientes.length > 0) {
        console.log('Ingredientes ya existen en el estado:', ingredientes);
        return; // No es necesario realizar la llamada a la API
      }
  
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
      <Text style={[styles.cell, styles.header]}>{item.nombre_ingrediente}</Text>
      <Text style={styles.cell}>Unidad de medida: {item.unidad_medida}</Text>
      <Text style={styles.cell}>Tamaño del paquete: {item.tamano_paquete}</Text>
      <Text style={styles.cell}>Costo: ${item.costo}</Text>
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
          keyExtractor={(item) => item.id.toString()}
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





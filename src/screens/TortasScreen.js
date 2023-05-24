import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const TortasScreen = ({ navigation }) => {
  const [tortas, setTortas] = useState([]);

  useEffect(() => {
    fetchTortas();
  }, []);

  const fetchTortas = async () => {
    try {
      console.log('Fetching tortas...');
      const response = await axios.get('http://localhost:3000/tortas');
      console.log('Tortas recibidas:', response.data);
      setTortas(response.data);
    } catch (error) {
      console.error('Error al obtener las tortas:', error);
    }
  };

  const renderTorta = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.header]}>{item.ID_TORTA}</Text>
      <Text style={styles.cell}>{item.NOMBRE_TORTA}</Text>
      <Text style={styles.cell}> {item.CANTIDAD_INGREDIENTE}</Text>
      <Text style={styles.cell}> {item.UNIDAD_MEDIDA}</Text>
    </View>
  );

  console.log('Tortas en el estado:', tortas);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tortas</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={[styles.cell, styles.header]}>ID</Text>
          <Text style={[styles.cell, styles.header]}>Nombre</Text>
          <Text style={[styles.cell, styles.header]}>Cantidad</Text>
          <Text style={[styles.cell, styles.header]}>Unidad de Medida</Text>
        </View>
        <FlatList
          data={tortas}
          renderItem={renderTorta}
          keyExtractor={(item) => item.ID_TORTA.toString()}
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

export default TortasScreen;




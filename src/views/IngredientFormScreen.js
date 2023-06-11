import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { agregarIngrediente } from '../controllers/IngredientController';
import styles from '../styles/styles';

const IngredientFormScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [tamanoPaquete, setTamanoPaquete] = useState('');
  const [costo, setCosto] = useState('');

  const agregarIngredienteData = async () => {
    try {
      const ingredientData = {
        nombre,
        unidad_Medida: unidadMedida,
        tamano_Paquete: tamanoPaquete,
        costo
      };
      await agregarIngrediente(ingredientData);
      navigation.navigate('IngredientList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Ingrediente</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNombre(text)}
          value={nombre}
        />
        <Text style={styles.label}>Unidad de medida:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUnidadMedida(text)}
          value={unidadMedida}
        />
        <Text style={styles.label}>Tamaño del paquete:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTamanoPaquete(text)}
          value={tamanoPaquete}
        />
        <Text style={styles.label}>Costo:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCosto(text)}
          value={costo}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={agregarIngredienteData}
        >
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IngredientFormScreen;






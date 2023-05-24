import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const IngredientFormScreen = () => {
  const [nombre, setNombre] = useState('');
  const [unidadMedida, setUnidadMedida] = useState('');
  const [tamanoPaquete, setTamanoPaquete] = useState('');
  const [costo, setCosto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const guardarIngrediente = async () => {
    try {
      const nuevoIngrediente = {
        nombre,
        unidadMedida,
        tamanoPaquete,
        costo,
      };

      const response = await axios.post('http://localhost:3000/ingrediente', nuevoIngrediente);
      console.log('Ingrediente guardado:', response.data);

      if (response.status === 200) {
        setMensaje('Ingrediente guardado correctamente');
        setNombre('');
        setUnidadMedida('');
        setTamanoPaquete('');
        setCosto('');
      } else {
        setMensaje('Error al guardar el ingrediente');
      }
    } catch (error) {
      console.error('Error al guardar el ingrediente:', error);
      setMensaje('Error al guardar el ingrediente: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABM de Ingredientes</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Ingrediente:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        <Text style={styles.label}>Unidad de Medida:</Text>
        <TextInput
          style={styles.input}
          value={unidadMedida}
          onChangeText={setUnidadMedida}
        />
        <Text style={styles.label}>Tamaño del Paquete:</Text>
        <TextInput
          style={styles.input}
          value={tamanoPaquete}
          onChangeText={setTamanoPaquete}
        />
        <Text style={styles.label}>Costo:</Text>
        <TextInput
          style={styles.input}
          value={costo}
          onChangeText={setCosto}
          keyboardType="numeric"
        />
        <Button title="Guardar" onPress={guardarIngrediente} />
        {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
      </View>
    </View>
  );
};

export default IngredientFormScreen;




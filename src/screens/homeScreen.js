import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('IngredientList')}
      >
        <Text style={styles.buttonText}>Ver Ingredientes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TortasScreen')}
      >
        <Text style={styles.buttonText}>Ver Tortas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

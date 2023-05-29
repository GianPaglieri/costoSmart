import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from '../styles';

const HomeScreen = ({ navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOption = (screenName) => {
    setMenuOpen(false);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={toggleMenu}>
          <Entypo name={menuOpen ? 'cross' : 'menu'} size={24} color="white" style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.menuText}>Menú</Text>
      </View>
      {menuOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.menuOption} onPress={() => handleMenuOption('IngredientList')}>
            <Text style={styles.menuOptionText}>Ver Ingredientes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption} onPress={() => handleMenuOption('TortasScreen')}>
            <Text style={styles.menuOptionText}>Ver Tortas</Text>
          </TouchableOpacity>
        </View>
      )}
        
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://www.accessatlanta.com/resizer/v3Dx3eAvkJIMx1E2jafsfc0j-a4=/1024x576/smart/cloudfront-us-east-1.images.arcpublishing.com/ajc/67CJDJRFP5EQ3HA6U4DKHZZHFA.jpg' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
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






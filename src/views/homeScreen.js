import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Picker } from 'react-native';
import { fetchListaPrecios } from '../controllers/ListaPreciosController';
import styles from '../styles/styles';
import { registrarVenta } from '../controllers/VentaController';

const HomeScreen = () => {
  const [listaPrecios, setListaPrecios] = useState([]);
  const [selectedTorta, setSelectedTorta] = useState(null);
  const [selectedTortaNombre, setSelectedTortaNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    obtenerListaPrecios();
  }, []);

  const obtenerListaPrecios = async () => {
    try {
      const listaPreciosData = await fetchListaPrecios();
      setListaPrecios(listaPreciosData);
    } catch (error) {
      console.error('Error al obtener la lista de precios:', error);
    }
  };

  const renderizarItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombre_torta}</Text>
      <Text style={styles.cell}>{item.costo_total}</Text>
    </View>
  );

  const renderizarEncabezado = () => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.encabezado]}>Nombre Torta</Text>
      <Text style={[styles.cell, styles.encabezado]}>Costo Total</Text>
    </View>
  );

  const handleConfirmarVenta = async () => {
    if (selectedTorta) {
      try {
        await registrarVenta(selectedTorta);
        console.log('Venta registrada');
        setMensaje('Venta registrada exitosamente');
      } catch (error) {
        console.error('Error al registrar la venta:', error);
        setMensaje('Error al registrar la venta');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRECIOS</Text>
      
      {renderizarEncabezado()}
      <FlatList
        data={listaPrecios}
        renderItem={renderizarItem}
        keyExtractor={(item) => item.id_torta.toString()}
      />
      {mensaje ? <Text>{mensaje}</Text> : null}
      <Picker
        selectedValue={selectedTorta}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedTorta(itemValue);
          setSelectedTortaNombre(listaPrecios[itemIndex].nombre_torta);
        }}
      >
        <Picker.Item label="Seleccionar torta" value={null} />
        {listaPrecios.map((torta) => (
          <Picker.Item key={torta.id_torta} label={torta.nombre_torta} value={torta.id_torta} />
        ))}
      </Picker>
      <Button title="Confirmar Venta" onPress={handleConfirmarVenta} disabled={!selectedTorta} />
    </View>
  );
};

export default HomeScreen;


















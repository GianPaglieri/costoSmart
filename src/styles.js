// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilos existentes
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  mensaje: {
    marginTop: 10,
    color: 'green',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  header: {
    backgroundColor: '#86C997',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  // Nuevos estilos para HomeScreen
  button: {
    backgroundColor: '#86C997',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  // Nuevos estilos para el menú
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#86C997',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;





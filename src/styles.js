import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    flex: 1,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default styles;

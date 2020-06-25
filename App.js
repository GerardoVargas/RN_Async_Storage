
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';


const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <TextInput style={styles.input} placeholder='Escribe tu nombre'/>
        <Button 
          title='Guardar'
          color="#333"
        />

        <TouchableHighlight style={styles.btnEliminar}>
          <Text style={styles.txtEliminar}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: "#666",
    borderBottomWidth: 1,
    width: 300,
    height: 40
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10
  },
  txtEliminar: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300
  }
});

export default App;

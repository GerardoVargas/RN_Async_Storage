
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

const App = () => {

  const [inputTexto, guardarInputTexto] = useState('')

  const guardarDatos = async () => {
    try{
      await AsyncStorage.setItem('nombre')
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <View style={styles.contenedor}>
        <TextInput 
          style={styles.input} 
          placeholder='Escribe tu nombre'
          onChangeText={texto => guardarInputTexto(texto)}
        />

        <Button 
          title='Guardar'
          color="#333"
          onPress={ () => guardarDatos()}
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

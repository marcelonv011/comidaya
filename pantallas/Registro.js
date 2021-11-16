import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function Registro ({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.registerletra}> Registrarse </Text>
    <Text> Rellené los campos para continuar </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131634',
  },

  registerletra: {
    color: "#FFFFFF",
    fontSize: 20
  },
  
});

export default Registro;
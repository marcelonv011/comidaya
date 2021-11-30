import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import imagebotonatras from "../assets/atras.png"

function Registro ({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
       <StatusBar hidden={true} /> 
    
    <Text style={styles.registerletra}> Registrarse </Text>
    <Text style={styles.campoletra}> Rellené los campos para continuar </Text>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131634',
  },

  registerletra: {
    color: "#FFFFFF",
    fontSize: 60,
    bottom: -30,
    textAlign: 'center',
  },
  campoletra: {
    color: "#FFFFFF",
    fontSize: 28,
    bottom: -50,
    left: 40,
  },
  botonatras: {
    height: 50,
    width: 50
  }
});

export default Registro;
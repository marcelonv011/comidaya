import React from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import passwordicon from "../assets/passwordicon.png";

function Registro ({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
       <StatusBar hidden={true} /> 
    
    <Text style={styles.campoletra}> Rellené los campos para continuar </Text>

      <View style={styles.entradatexto}> 
          <Image 
            source={passwordicon}
            style={{ width: 40, height: 40 }}
            fadeDuration={0}
          />
    <SafeAreaView>
        <TextInput
          style={styles.estiloinputtelefono}
          autoCorrect={false}
          placeholder="NUMERO DE TELÉFONO"
          placeholderTextColor='white'
          returnKeyType = {"next"}
          blurOnSubmit={false}
        />
    </SafeAreaView>
      </View>

    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131634',
  },
  
  entradatexto: {
    flexDirection: 'row',
    backgroundColor: "#1D3557",
    borderColor: "#05F7FF",
    width: 300,
    margin: 10,
    alignSelf: 'center',
    borderWidth: 1,
    bottom: -80,
    left: 15
  },
  
  estiloinputtelefono:{
    color: "white",
    borderColor: "#05F7FF",
    padding: 15,
  },
  
  campoletra: {
    color: "#05F7FF",
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
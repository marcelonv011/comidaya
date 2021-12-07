import React from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView, TextInput, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import telefono from "../assets/telefono.png";
import contrasena from "../assets/contrasena.png";
import iconoemail from "../assets/emailicon.png";
import usuario from "../assets/usuario.png";
import calendario from "../assets/calendario.png";

function Registro ({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
       <StatusBar hidden={true} />
        
       <Text style={styles.campoletra}> Rellené los campos para continuar </Text>
    <Text style={styles.textotelefono}>NOMBRE COMPLETO</Text>   
      <View style={styles.entradatexto}> 
          <Image 
            source={usuario}
            style={{ width: 30, height: 30, bottom: -7, left: 5 }}
            fadeDuration={0}
          />  
    <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          placeholder="INSERTE SU NOMBRE AQUÍ"
          placeholderTextColor='white'
          returnKeyType = {"next"}
          blurOnSubmit={false}
        />
    </SafeAreaView>
      </View>

      <Text style={styles.textotelefono}>FECHA DE NACIMIENTO</Text>   
      <View style={styles.entradatexto}> 
          <Image 
            source={calendario}
            style={{ width: 30, height: 30, bottom: -7, left: 5 }}
            fadeDuration={0}
          />  
    <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          placeholder="INSERTE SU FECHA DE NACIMIENTO AQUÍ"
          date={true}
          placeholderTextColor='white'
          returnKeyType = {"next"}
          blurOnSubmit={false}
        />
    </SafeAreaView>
      </View>  

      <Text style={styles.textotelefono}>TELÉFONO</Text>   
      <View style={styles.entradatexto}> 
          <Image 
            source={telefono}
            style={{ width: 30, height: 30, bottom: -7, left: 5 }}
            fadeDuration={0}
          />  
    <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          placeholder="INSERTE SU FECHA DE NACIMIENTO AQUÍ"
          date={true}
          placeholderTextColor='white'
          returnKeyType = {"next"}
          blurOnSubmit={false}
        />
    </SafeAreaView>
      </View>  

    <Text style={styles.textotelefono}>EMAIL / CORREO ELECTRONICO</Text>   
      <View style={styles.entradatexto}> 
          <Image 
            source={iconoemail}
            style={{ width: 30, height: 30, bottom: -10, left: 5 }}
            fadeDuration={0}
          />  
    <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          placeholder="INSERTE SU E-MAIL AQUÍ"
          placeholderTextColor='white'
          returnKeyType = {"next"}
          blurOnSubmit={false}
        />
    </SafeAreaView>
      </View>
      <Text style={styles.textotelefono}>CONTRASEÑA</Text>  
      <View style={styles.entradatexto}> 
          <Image 
            source={contrasena}
            style={{ width: 30, height: 30, bottom: -7, left: 5 }}
            fadeDuration={0}
          />  
    <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          secureTextEntry={true}
          password={true}
          placeholder="INSERTE SU CONTRASEÑA AQUÍ"
          placeholderTextColor='white'
          returnKeyType = {"next"}
          blurOnSubmit={false}
        />
    </SafeAreaView>
      </View>
      <Text style={styles.textotelefono}>CONFIRMAR CONTRASEÑA</Text>  
      <View style={styles.entradatexto}> 
          <Image 
            source={contrasena}
            style={{ width: 30, height: 30, bottom: -7, left: 5 }}
            fadeDuration={0}
          />  
    <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          secureTextEntry={true}
          password={true}
          placeholder="CONFIRME SU CONTRASEÑA AQUÍ"
          placeholderTextColor='white'
          blurOnSubmit={false}
        />
    </SafeAreaView>
      </View>     
     
      <View style={styles.botoningreso}>
        <TouchableOpacity 
         onPress = { () => navigation.navigate('Menuprincipal')}
         style={styles.botonmenu1}
        >
        <Text style={styles.botontexto}> Registarme </Text>
        </TouchableOpacity>
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
  textotelefono: {
    color: "#ffffff",
    bottom: -85,
    left: 75,
    fontWeight: "bold",
  },

  estiloinput:{
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
 
  botoningreso: {
    bottom: -70,
    alignContent: "center"
  },

  botonmenu1: {
    backgroundColor: "#05F7FF",
    padding: 9,
    marginTop: 25,
    height: 40,
    width: 115,
    alignSelf: 'center',
  },
  
  botontexto: {
    color: "#000000",
    fontSize: 20,
    textAlign: 'center', /*texto alineado*/
  },

});

export default Registro;
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, StatusBar, SafeAreaView} from 'react-native';
import Loader from '../components/Loader'; /* agregar loader despues */
import iconoemail from "../assets/emailicon.png";
import passwordicon from "../assets/passwordicon.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
/* mirar con expo como esta todo */
/* css input arreglar*/
/* fijarme icons*/


function Login({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <StatusBar hidden={true} /> 
      <View style={styles.loadcontainer}>  
       <Loader/>
      </View>        
      <View style={styles.textocontainer}>
        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.abajotitu}>por favor logueate para continuar</Text>
      </View>

        <View style={styles.entradatexto}>
        <Image 
          source={iconoemail}
          style={{ width: 40, height: 40 }}
          fadeDuration={0}
        />
        <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          placeholder="Email"
          autoCorrect={false}
          placeholderTextColor='white'
          returnKeyType = {"next"}
          blurOnSubmit={false}
        />
        </SafeAreaView>
       </View>

      
        <View style={styles.entradatexto2}>
        <Image 
          source={passwordicon}
          style={{ width: 40, height: 40 }}
          fadeDuration={0}
        />
        <SafeAreaView>
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          secureTextEntry={true}
          password={true}
          placeholder="Password"
          placeholderTextColor='white'
          blurOnSubmit={false}
          /*value={this.state.password}
          onChangeText={this.onPasswordEntry}*/
        />
        </SafeAreaView>
        </View>

      <View style={styles.botoningreso}>
        <TouchableOpacity 
         onPress = { () => navigation.navigate('Menuprincipal')}
         style={styles.botonmenu1}
        >
        <Text style={styles.botontexto}> Ingresar </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerforgotpass}>
        <Text 
        style={styles.olvidopassword}
        onPress={() => navigation.navigate('Recovery')}
        > 
      ¿Olvido su contraseña?
      </Text>
      </View>
      <View style={styles.containerforgotpass}>
        <Text style={styles.noaccount}> 
          ¿Todavía no tienes cuenta?
        </Text>
        <Text 
        style={styles.registrostyle}
        onPress={() => navigation.navigate('Registro')}
        > 
      Registrarme
      </Text>
      
      </View>  
   </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131634',
    flexDirection: 'column',
    padding: 20,
  },
  loadcontainer: {
    flex: 10,
  },
  textocontainer: {
    flex: 5,
    bottom: -200,
  },
   titulo:{
    color: "#ffffff",
    fontSize: 81,  
    textAlign: 'center', 
    margin: 10,
  },
  abajotitu:{
    color: "#05F7FF",
    fontSize: 20,
    textAlign: 'center',
  },
  botonmenu1: {
    backgroundColor: "#05F7FF",
    padding: 9,
    marginTop: 25,
    height: 40,
    width: 105,
    alignSelf: 'center',
  },
  botontexto: {
    color: "#000000",
    fontSize: 20,
    textAlign: 'center', /*texto alineado*/
  },
  entradatexto: {
    flexDirection: 'row',
    borderWidth: 2,
    backgroundColor: "#1D3557",
    borderColor: "#05F7FF",
    width: 300,
    margin: 10,
    alignSelf: 'center',
    bottom: -220
  },
  
  estiloinput: {
    color: "white",
    borderColor: "#05F7FF",
    padding: 15,
  },
  entradatexto2: {
    flexDirection: 'row',
    borderWidth: 2,
    backgroundColor: "#1D3557",
    borderColor: "#05F7FF",
    width: 300,
    alignSelf: 'center',
    bottom: -240
  },
  botoningreso: {
    flex: 3,
    bottom: -240,
  },
  olvidopassword: {
    color: "#05F7FF",
    fontSize: 18,
    alignSelf: "center",
    bottom: -260,
  },
  containerforgotpass: {
    flex: 5,
  },
  registrostyle: {
    color: "#05F7FF",
    left: 250,
    fontSize: 20,
    bottom: -280,
  },
  noaccount: {
    color: "#FFFFFF",
    left: 50,
    position: 'absolute',
    fontSize: 20,
    bottom: -280,
  },
});

export default Login;
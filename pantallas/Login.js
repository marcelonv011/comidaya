import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Loader from '../components/Loader'; /* agregar loader despues */
import iconoemail from "../assets/emailicon.png";
import passwordicon from "../assets/passwordicon.png"
/* mirar con expo como esta todo */
/* css input arreglar*/
/* fijarme icons*/


function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loadcontainer}>  
        <Loader/>
      </View>        
      <View style={styles.textocontainer}>
        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.abajotitu}>por favor logueate para continuar</Text>
      </View>
      <View style={styles.containinput1}>
        <View style={styles.entradatexto}>
        <Image 
          source={iconoemail}
          style={{ width: 40, height: 40 }}
          fadeDuration={0}
        />
        <TextInput
          style={styles.estiloinput}
          placeholder="Email"
          autoCorrect={false}
          placeholderTextColor='white'
        />
       </View>
      </View>
      <View style={styles.containinput2}> 
        <View style={styles.entradatexto2}>
        <Image 
          source={passwordicon}
          style={{ width: 40, height: 40 }}
          fadeDuration={0}
        />
        <TextInput
          style={styles.estiloinput}
          autoCorrect={false}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor='white'
          /*value={this.state.password}
          onChangeText={this.onPasswordEntry}*/
        />
        </View>
      </View>
      <View style={styles.botoningreso}>
        <TouchableOpacity 
         onPress = { () => navigation.navigate('Registro')}
         style={styles.botonmenu1}
        >
        <Text style={styles.botontexto}> Ingresar </Text>
        </TouchableOpacity>
      </View>
        
    </View>
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
  },
   titulo:{
    color: "#ffffff",
    fontSize: 81,  
    textAlign: 'center', 
    margin: 20,
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
    borderBottomWidth: 1,
    backgroundColor: "rgb(35, 61, 77)",
    borderColor: "#05F7FF",
    width: 300,
    margin: 20,
    alignSelf: 'center'
  },
  containinput1: {
    flex: 5,
  },
  containinput2: {
    flex: 5,
  },
  estiloinput: {
    color: "white",
    borderColor: "#05F7FF",
    padding: 15,
  },
  entradatexto2: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: "rgb(35, 61, 77)",
    borderColor: "#05F7FF",
    width: 300,
    alignSelf: 'center'
  },
  botoningreso: {
    flex: 10,
  },
});

export default Login;
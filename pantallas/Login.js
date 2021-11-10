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
      <View>
        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.abajotitu}>por favor logueate para continuar</Text>
      </View>
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
      <View style={styles.entradatexto}>
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
      <View>
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
  },
   titulo:{
    color: "#ffffff",
    fontSize: 61,  
    margin: 50,
    textAlign: 'center',
  },
  abajotitu:{
    color: "#05F7FF",
    fontSize: 20,
    margin: 10, 
  },
  botonmenu1: {
    backgroundColor: "#05F7FF",
    padding: 9,
    marginTop: 25,
    height: 40,
    width: 105,
    margin: 145,
  },
  botontexto: {
    color: "#000000",
    fontSize: 20,
    textAlign: 'center', /*texto alineado*/
  },
  entradatexto: {
    flexDirection: 'row',
    borderBottomWidth: 1,
   /* paddingBottom: 10, */
    backgroundColor: "rgb(35, 61, 77)",
    focusColor: "#05F7FF",
    borderColor: "#05F7FF"
  },
  estiloinput: {
    flex: 1,
    color: "white",
    focusColor: "#05F7FF",
    borderColor: "#05F7FF"
  },
  
});

export default Login;
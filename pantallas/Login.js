import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Loader from '../components/Loader';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Loader/>
        <View>
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.abajotitu}>por favor logueate para continar</Text>
        </View>
        <View>
      <TouchableOpacity 
      onPress = { () => navigation.navigate('Registro')}
      style={styles.botonmenu1}
      >
        <Text style={styles.textomenu}> Ingresar </Text>
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

  },
  abajotitu:{
    color: "#05F7FF",
    fontSize: 20,
    margin: 0, 
  },
  botonmenu1: {
    backgroundColor: "#05F7FF",
    padding: 9,
    marginTop: 10,
    height: 40,
    width: 105,
  },
  textomenu: {
    color: "#000000",
    fontSize: 20,
    textAlign: 'center', /*texto alineado*/
  },
});

export default Login;
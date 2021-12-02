import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pantallas/Login';
import Registro from "../pantallas/Registro"


const Stack = createNativeStackNavigator()

const MainStack = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen 
          name='Login' 
          component={Login}
          options={{
          title: '',
          headerShown: false
          }}
           />

          <Stack.Screen 
          name='Registro' 
          component={Registro} 
          options= {{ 
          title:  'REGISTRARSE',
          headerTintColor: "#ffffff",
          headerBackTitle: "",
          headerStyle: {
            backgroundColor: '#131634',
          },
          
          }}
          />
  
  
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  

  export default MainStack;
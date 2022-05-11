import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider,extendTheme} from 'native-base';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import  Inicio  from './screens/Inicio';
import  Home  from './screens/Home';
import  Footer  from './screens/Footer';
import Buscar from './screens/Buscar';
import Guardados from './screens/Guardados';
import ConfigPaG from './screens/ConfigPaG';
import Sugerencias from './screens/Sugerencias';
import Perfil from './screens/Perfil';
import CambioDeContraseña from './screens/CambioDeContraseña';
import Ayuda from './screens/Ayuda';
import CCÑ from './screens/CCÑ';
import Reproductor from './screens/Reproductor';
import Reproduciendo from './screens/Reproduciendo';

export{Inicio,Home,Footer};
const  Stack = createNativeStackNavigator();
  export default function App() {
    const theme = extendTheme ({
    colors :{
    primary:{
    70:'#1f0d00',
    150:'#e68600',
    200:'#ffd4ae',
    }
    }
    })
  return (
    <NavigationContainer>
      <NativeBaseProvider theme ={theme}>
        <Stack.Navigator 
         screenOptions ={{
           headerShown:false,
           presentation: 'transparentModal'
         }}
         >
        <Stack.Screen name ="Inicio" component={Inicio}/>
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name ="Footer" component={Footer}/>
        <Stack.Screen name ="Buscar" component={Buscar}/>
        <Stack.Screen name ="Guardados" component={Guardados}/>
        <Stack.Screen name ="ConfigPaG" component={ConfigPaG}/>
        <Stack.Screen name ="Sugerencias" component={Sugerencias}/>
        <Stack.Screen name ="Perfil" component={Perfil}/>
        <Stack.Screen name ="CambioDeContraseña" component={CambioDeContraseña}/>
        <Stack.Screen name ="Ayuda" component={Ayuda}/>
        <Stack.Screen name ="CCÑ" component={CCÑ}/>
        <Stack.Screen name ="Reproductor" component={Reproductor}/>
        <Stack.Screen name ="Reproduciendo" component={Reproduciendo}/>
        
      </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
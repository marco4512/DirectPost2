import React, {useEffect, useState} from 'react';
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,ScrollView, Box,Pressable,VStack,Divider,Icon,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
const Ayuda=({navigation,route})=>{ 
  const {FotoUsuario} = route.params
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEiali7WU-43F4nIBs-TF-c1Xq1nFGk_4VdrMbzKW1f3sg0U5Z6oYyGJuhCTuxv4ka4QbEezEIajB9VW73TnCkvFZUwobGQhe8Lb81kSitd8yvbq-Lcqc3ZgpB1ebzhuOdvaSZ08TG8ca98a5qF0T7UT-kbfTNmQ_9owgzOus10PBy3AUcep-KrahDgo=w436-h654" };
  const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    image: {
      flex: 1,
      justifyContent: "center",
      
      backgroundColor:"black"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    Input:{
        textAlign: "center",
        backgroundColor: "#000000c0",
        color:"white",
        width: "100%"
    },
   
  });
  return (
   
    <NativeBaseProvider >
       
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <HStack space={3} paddingTop={5} justifyContent="flex-start">
      <Center w={"20%"}>
      <Icon mb="1"onPress={() =>{ 
      navigation.navigate('Perfil',{
        Imgen:FotoUsuario,
        NombreUsuario:"NombreUsuario"
      })
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center w={"50%"} >
      <Text color="white" fontSize="23">Ayuda</Text>
      </Center>
      </HStack>
      <Divider my="2" />
      <ScrollView maxHeight={550} >
      <Center paddingRight={1} paddingBottom={4} >
      <Text color="white" fontSize="25">Preguntas Frecuentes</Text>
      </Center>
      <Center paddingRight={1} paddingBottom={4}>
      <Text color="white"  fontSize="17">¿Cómo puedo editar mi perfil?</Text>
      </Center>
      <Center justifyContent="flex-start" paddingBottom={4}  >
      <Text color="white"  fontSize="17"> Se encuentra dentro de la pestaña mi cuenta, donde pordras editar los rubros</Text>
      <Text color="white"  fontSize="17"> Accedes seleccionado el menú, se encuentra dentro de este la opción "Mi cuenta"</Text>
      </Center>
      <Divider my="2" />
      <Center paddingRight={1} paddingBottom={4}>
      <Text color="white"  fontSize="17">¿Cómo cambio mi contraseña?</Text>
      </Center>
      <Center justifyContent="flex-start" paddingBottom={4}  >
      <Text color="white"  fontSize="17"> Se encuentra dentro de la pestaña cambiar mi contraseña, esta dentro de la opcion mi cuenta</Text>
      <Text color="white"  fontSize="17"> Accedes seleccioando el menú, se encuentra dentro de este la opcion "mi cuenta"</Text>
      </Center>
      <Divider my="2" />
      <Center paddingRight={1} paddingBottom={4}>
      <Text color="white"  fontSize="17">¿Cómo funciona "Mis Guardados"?</Text>
      </Center>
      <Center justifyContent="flex-start" paddingBottom={4}  >
      <Text color="white"  fontSize="17"> Mis desgargas se basa en almacenar los episodios preferidos en una lista.el almacenamiento funciona en base a la nube, po lo que no tomara espacio de tu dispositivo</Text>
      </Center>
      <Divider my="2" />
      <Center paddingRight={1} paddingBottom={10}>
      <Text color="white"  fontSize="17">¿No resolvimos tus dudas?</Text>
      </Center>
      <Center justifyContent="flex-start" paddingBottom={4}  >
      <Text color="white"  fontSize="17"> Consulta tus dudas en (4492837608)</Text>
      </Center>
      <Divider my="2" />
        </ScrollView>

      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Ayuda;
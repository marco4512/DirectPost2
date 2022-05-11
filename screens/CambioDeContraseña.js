import React from "react";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';

import { NativeBaseProvider, Divider,Box,VStack,Icon,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
const CambioDeContraseña=({navigation,route})=>{ 
    const {FotoUsuario} = route.params
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEi_ItwqJOcvOHD-Ee3c1A5bzwQiltmQGXvu9RPBl_ejZlxsUvixGskTlEd3DAWklaJabDt3wB0UbGo7xar871vkiHxjtzLzj-OXohuwxvSrcod31g-tmidzop0O12jx7_xLkTzWytcSULUoKwGRyFIVF531uWmcQlVo2zrHFKlHWKskcLfki7q4gAyt=w478-h718" };
  const Sumit =()=>{
   navigation.navigate('Home')
   console.log("Home")
  }
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
      <HStack space={2} paddingTop={0} justifyContent="flex-start">
      <Center>

      <Icon mb="1"onPress={() =>{ 
      navigation.navigate('Perfil',{
        Imgen:FotoUsuario,
        NombreUsuario:"NombreUsuario"
      })
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />

      </Center>
      <Center paddingLeft={"25%"}>
      <Text color="white" fontSize="30">Cambiar Contraseña</Text>
      </Center>
       </HStack>
      <Divider my="2" />
     <Center w="100%"> 
        <Box safeArea p="2" py="8" w="90%" maxW="290"  >
          <VStack space={3} mt="5">
          <FormControl  style={{color:"white", fontSize:20}} >
              <FormControl.Label><Text style={{color:"white", fontSize:20}}>
                Contraseña Actual
              </Text></FormControl.Label>
              <Input type="password" color={"white"} fontSize={20} bgColor={"#BF3939"} opacity={.8} > 
              </Input>
            </FormControl>
            <FormControl  style={{color:"white", fontSize:20}} >
              <FormControl.Label><Text style={{color:"white", fontSize:20}}>
                Nueva Contraseña
              </Text></FormControl.Label>
              <Input type="password" color={"white"} fontSize={20} bgColor={"#BF3939"} opacity={.8} > 
              </Input>
            </FormControl>
            <FormControl  style={{color:"white", fontSize:20}} >
              <FormControl.Label><Text style={{color:"white", fontSize:20}}>
                Confirmar Contraseña
              </Text></FormControl.Label>
              <Input type="password" color={"white"} fontSize={20} bgColor={"#BF3939"} opacity={.8} > 
              </Input>
            </FormControl>
            <Button mt="2" colorScheme="red" onPress={Sumit} >
              Confirmar
            </Button>
          </VStack>
        </Box>
      </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
export default CambioDeContraseña;

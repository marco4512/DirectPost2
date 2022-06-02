import React from "react";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,FlatList, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
const CCÑ=({navigation,route})=>{ 
    const {FotoUsuario} = route.params
  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEiali7WU-43F4nIBs-TF-c1Xq1nFGk_4VdrMbzKW1f3sg0U5Z6oYyGJuhCTuxv4ka4QbEezEIajB9VW73TnCkvFZUwobGQhe8Lb81kSitd8yvbq-Lcqc3ZgpB1ebzhuOdvaSZ08TG8ca98a5qF0T7UT-kbfTNmQ_9owgzOus10PBy3AUcep-KrahDgo=w436-h654" };
  const [password,setPassword]= useState('')
  

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
      
      <HStack space={3} paddingTop={10} justifyContent="flex-start">
      <Center w={"30%"}>
      <Icon mb="1"onPress={() =>{ 
      navigation.navigate('Perfil',{
        Imgen:FotoUsuario,
        NombreUsuario:"NombreUsuario"
      })
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center w={"40%"}>
       
      <Text color="white" fontSize="23">Configuración</Text>
      
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Divider my="2" />
      <Center>
      <Text color="white" fontSize="30">Cambiar contraseña </Text>
      </Center>
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
              <Input onChangeText={
                 text => setPassword(text)
               } type="password" color={"white"} fontSize={20} bgColor={"#BF3939"} opacity={.8} > 
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
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default CCÑ;
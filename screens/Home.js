import React from "react";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Divider,Icon, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
import { useNavigation } from '@react-navigation/native';
import { Height } from "@mui/icons-material";
export{Footer,Config};
const Home=({navigation,route})=>{ 

  const image = { uri: "https://blogger.googleusercontent.com/img/a/AVvXsEi_ItwqJOcvOHD-Ee3c1A5bzwQiltmQGXvu9RPBl_ejZlxsUvixGskTlEd3DAWklaJabDt3wB0UbGo7xar871vkiHxjtzLzj-OXohuwxvSrcod31g-tmidzop0O12jx7_xLkTzWytcSULUoKwGRyFIVF531uWmcQlVo2zrHFKlHWKskcLfki7q4gAyt=w478-h718" };
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
    Image2:{
      width: "100%",
      height:"100%"
    },

   
  });
 
  return (
   
    <NativeBaseProvider >
       
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <HStack space={3} paddingTop={10} justifyContent="flex-start">
      <Center w={"30%"}>
      </Center>
      <Center w={"40%"}>
      <Text color="white" fontSize="25">Topícos</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Divider my="2" />
     <Center w="100%"> 
     <Text color="white" fontSize="27" >¿Què te gustarìa escuchar?</Text>
     <Text color="white" fontSize="30"></Text>
      </Center>
      
      <HStack space={2} paddingTop={5} justifyContent="center">
      <Center>
      
      <Button variant="unstyled" h="150" w="180" onPress={() => navigation.navigate('Sugerencias',{
        Suge:"Educacion"
      })}><Image borderRadius={10} source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEhajnl7c1AaMTKVH2STAYcqao423P_pmpPLnYlMpxt8GbzSXI9_gwEqp18lX6u0AIGNTTnkWgeQLqbuTO9w6XEDQJsc4p7LUfJwErZCRHGLtOEQbfMN42LQhBOHZc6WFZPT3zGtwI2qZiwUXnVHURWXBjPvwpab5qAvilhKl0fhYzW-9mTlvAjFPV-x"
    }} alt="Alternate Text" size={150}/></Button>
      
      </Center>
      <Center>
      <Button variant="unstyled" h="150" w="180" onPress={() => navigation.navigate('Sugerencias',{Suge:"Deporte"})}><Image borderRadius={10} resizeMode="cover"  source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEgU1m0FWkCETWyyQaqAAV6j48ZI_3xY3l-IL2n9whbQcshaOoVCUYAOdykJ6acprKqYVYoamcip2ROHyQ-WmAwhZdVqPtMcj_Z4ZoDVvtin_xcLCfHIjhhqt6v7hQI_Tg47WSGkXBjlSg-qRLtF2c4ROV95r_inrGluHsIPjo7iVzjRkCegcFdF2D3Y"
      }} alt="Alternate Text" width={"170"}  height={"150"} /></Button>
      </Center>
      </HStack>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <HStack space={2} justifyContent="center">
      <Center>
      <Button variant="unstyled" h="150" w="180" onPress={() => navigation.navigate('Sugerencias',{Suge:"Entretenimiento"})}><Image borderRadius={10} source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEigAp4iT8vcrnwaiRRlFXzKceuc-SniqHjoY3x8kxa4Yy6mbEdpKLJy5aDCAC0Hp0d9g4sXm5jy_vW_obqx9MUXsGucHH5LuEGcr6RsXwSeVnQswL3UlqYxN1kz9TSAtY9nn6f5SCATOw6uafwe1o23SqQP2DCYmRpGtdKa9bKs9qC51rfECDkvpRDQ"
      }} alt="Alternate Text" width={"170"}  height={"150"}/></Button>
      </Center>
      <Center>
      <Button variant="unstyled" h="150" w="180"  onPress={() => navigation.navigate('Sugerencias',{Suge:"Tecnologia"})}><Image borderRadius={10}  source={{
      uri: "https://blogger.googleusercontent.com/img/a/AVvXsEjnYOPGlLy8Fy_GnsOizig8GrBFZfbjYMxgwRkjUA2NRiMHt7PMjg8atCN4iNFF1POFnPP7h4E5oq8ZBnQ28oE183rgCugTaoQ6LX_JZwJBr7qgFfSDwviBsa54FkeywknBRnEewjiByxvOdsrtG8f28hzw6wqNVwECNkpg65qv36yd9MZM1giVAojG"
      }} alt="Alternate Text" size={150}/></Button>
      </Center>
      </HStack>
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Home;
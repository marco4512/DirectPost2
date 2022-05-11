import React from "react";
import {MaterialCommunityIcons,MaterialIcons}from 'react-native-vector-icons';
import { NativeBaseProvider,Icon,ScrollView,AspectRatio,Divider,Stack,Pressable, Box,VStack,FormControl,Input,Center,Heading,Link,Button,HStack,Text,Image } from "native-base";
import { ImageBackground,FlatList, StyleSheet, View } from "react-native";
import Footer from './Footer';
import Config from './Configuraciones';
export{Footer,Config};
const Guardados=({navigation})=>{ 
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
      
      <HStack space={3} paddingTop={10} justifyContent="flex-start">
      <Center w={"30%"}>
      <Icon mb="1"onPress={() =>{ 
      navigation.navigate('Home')
      }} as={<MaterialIcons name="chevron-left" />} color="white" size="sm" />
      </Center>
      <Center w={"40%"}>
      <Text color="white" fontSize="25">Guardados</Text>
      </Center>
      <Center w={"30%"}>
      <Icon mb="1" onPress={() =>{ 
      navigation.navigate('ConfigPaG')
      }}as={<MaterialIcons name="settings" />} color="white" size="sm" />
      </Center>
      </HStack>
      <Divider my="2" />
     <FlatList margin={0}  refreshing data={[
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEjnYOPGlLy8Fy_GnsOizig8GrBFZfbjYMxgwRkjUA2NRiMHt7PMjg8atCN4iNFF1POFnPP7h4E5oq8ZBnQ28oE183rgCugTaoQ6LX_JZwJBr7qgFfSDwviBsa54FkeywknBRnEewjiByxvOdsrtG8f28hzw6wqNVwECNkpg65qv36yd9MZM1giVAojG',Nombre:'JulioProfe',Categoria:'Matematicas',Duracion:'53:30'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEigAp4iT8vcrnwaiRRlFXzKceuc-SniqHjoY3x8kxa4Yy6mbEdpKLJy5aDCAC0Hp0d9g4sXm5jy_vW_obqx9MUXsGucHH5LuEGcr6RsXwSeVnQswL3UlqYxN1kz9TSAtY9nn6f5SCATOw6uafwe1o23SqQP2DCYmRpGtdKa9bKs9qC51rfECDkvpRDQ',Nombre:'CaminoAIng',Categoria:'Matematicas',Duracion:'60:30'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEgU1m0FWkCETWyyQaqAAV6j48ZI_3xY3l-IL2n9whbQcshaOoVCUYAOdykJ6acprKqYVYoamcip2ROHyQ-WmAwhZdVqPtMcj_Z4ZoDVvtin_xcLCfHIjhhqt6v7hQI_Tg47WSGkXBjlSg-qRLtF2c4ROV95r_inrGluHsIPjo7iVzjRkCegcFdF2D3Y',Nombre:'MateFacil',Categoria:'Matematicas',Duracion:'70:50'},
        {key:'https://blogger.googleusercontent.com/img/a/AVvXsEhajnl7c1AaMTKVH2STAYcqao423P_pmpPLnYlMpxt8GbzSXI9_gwEqp18lX6u0AIGNTTnkWgeQLqbuTO9w6XEDQJsc4p7LUfJwErZCRHGLtOEQbfMN42LQhBOHZc6WFZPT3zGtwI2qZiwUXnVHURWXBjPvwpab5qAvilhKl0fhYzW-9mTlvAjFPV-x',Nombre:'CodigoFacilito',Categoria:'Matematicas',Duracion:'20:60'},
      ]}
      
      renderItem={({item})=>
      <ScrollView maxHeight={550} >
      <Pressable onPress={() => console.log(item.Nombre)}>
       <HStack space={3} justifyContent="flex-start" >
       <Center w={"30%"}>
       <Image size={75} resizeMode={"contain"} borderRadius={10} source={{
         uri:item.key
       }} alt="Alternate Text" />
       </Center>
       <Center w={"40%"}>
       <Text paddingLeft={5} color="white" fontSize="16" paddingTop={3}>{item.Nombre}</Text>
       </Center>
       <Center w={"30%"}>
       <Text paddingLeft={5} color="white" fontSize="12" paddingTop={3}>{item.Duracion}</Text>
       </Center>
       </HStack>
      <Divider my="2" />
      </Pressable>
          </ScrollView>
      }
        >
      </FlatList>
      
      <Footer></Footer>
      </ImageBackground>
      

    
    </NativeBaseProvider>
  );
}
export default Guardados;